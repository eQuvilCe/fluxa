import http from 'node:http';
import { readDb, writeDb, uid } from './lib/db.mjs';
import { hashPassword, verifyPassword, signToken, verifyToken } from './lib/auth.mjs';

const PORT = Number(process.env.API_PORT || 3001);

function send(res, status, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => {
      data += c;
      if (data.length > 1e6) req.destroy();
    });
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
  });
}

function publicUser(u) {
  return {
    id: u.id,
    name: u.name,
    email: u.email,
    nick: u.nick,
    createdAt: u.createdAt,
  };
}

function nickFromNameOrEmail(name, email) {
  const base = (name || email.split('@')[0] || 'User').trim();
  return base
    .replace(/[._+-]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ') || 'User';
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    });
    res.end();
    return;
  }

  const url = new URL(req.url || '/', `http://localhost:${PORT}`);
  const path = url.pathname.replace(/\/+$/, '') || '/';

  try {
    // Health
    if (path === '/api/status' && req.method === 'GET') {
      const db = readDb();
      return send(res, 200, {
        ok: true,
        service: 'fluxa-api',
        version: '2.0.0',
        time: new Date().toISOString(),
        users: db.users.length,
        checkouts: db.checkouts.length,
        tickets: db.tickets.length,
      });
    }

    // Register
    if (path === '/api/auth/register' && req.method === 'POST') {
      const body = await readBody(req);
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || '');
      const name = String(body.name || '').trim();

      if (!email || !email.includes('@')) return send(res, 400, { error: 'Valid email required' });
      if (password.length < 6) return send(res, 400, { error: 'Password min 6 characters' });

      const db = readDb();
      if (db.users.some((u) => u.email === email)) {
        return send(res, 409, { error: 'Email already registered' });
      }

      const { salt, hash } = hashPassword(password);
      const user = {
        id: uid('usr'),
        name: name || nickFromNameOrEmail('', email),
        nick: nickFromNameOrEmail(name, email),
        email,
        salt,
        passwordHash: hash,
        createdAt: new Date().toISOString(),
      };
      db.users.push(user);
      writeDb(db);

      const token = signToken({ sub: user.id, email: user.email });
      return send(res, 201, { user: publicUser(user), token });
    }

    // Login
    if (path === '/api/auth/login' && req.method === 'POST') {
      const body = await readBody(req);
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || '');

      const db = readDb();
      const user = db.users.find((u) => u.email === email);
      if (!user || !verifyPassword(password, user.salt, user.passwordHash)) {
        return send(res, 401, { error: 'Invalid email or password' });
      }

      const token = signToken({ sub: user.id, email: user.email });
      return send(res, 200, { user: publicUser(user), token });
    }

    // Me
    if (path === '/api/auth/me' && req.method === 'GET') {
      const auth = req.headers.authorization || '';
      const token = auth.startsWith('Bearer ') ? auth.slice(7) : '';
      const payload = verifyToken(token);
      if (!payload) return send(res, 401, { error: 'Unauthorized' });

      const db = readDb();
      const user = db.users.find((u) => u.id === payload.sub);
      if (!user) return send(res, 401, { error: 'Unauthorized' });
      return send(res, 200, { user: publicUser(user) });
    }

    // Checkout
    if (path === '/api/checkout' && req.method === 'POST') {
      const body = await readBody(req);
      await new Promise((r) => setTimeout(r, 350));

      const amount = Number(body.amount) || 12800;
      const currency = String(body.currency || 'usd').toLowerCase();
      const email = String(body.email || 'demo@fluxa.dev');

      if (amount < 50) return send(res, 400, { error: 'Amount too small' });

      const session = {
        id: uid('cs'),
        object: 'checkout.session',
        status: 'open',
        amount_total: amount,
        currency,
        customer_email: email,
        payment_status: 'unpaid',
        url: `https://checkout.fluxa.dev/pay/${uid('pay')}`,
        created: Math.floor(Date.now() / 1000),
        metadata: { source: 'fluxa-landing', demo: true },
      };

      const db = readDb();
      db.checkouts.push({ ...session, savedAt: new Date().toISOString() });
      writeDb(db);

      return send(res, 200, { session, message: 'Checkout session created' });
    }

    // Contact
    if (path === '/api/contact' && req.method === 'POST') {
      const body = await readBody(req);
      const email = String(body.email || '').trim();
      const message = String(body.message || '').trim();
      const name = String(body.name || '').trim();

      if (!email || !message) return send(res, 400, { error: 'email and message required' });

      const ticket = {
        id: uid('tkt'),
        name: name || 'Anonymous',
        email,
        message: message.slice(0, 2000),
        status: 'queued',
        contact: 'https://t.me/eQuvilCe',
        createdAt: new Date().toISOString(),
      };

      const db = readDb();
      db.tickets.push(ticket);
      writeDb(db);

      return send(res, 200, {
        ok: true,
        ticket,
        message: 'Ticket saved. Live chat: @eQuvilCe on Telegram.',
      });
    }

    // Users count public
    if (path === '/api/users/stats' && req.method === 'GET') {
      const db = readDb();
      return send(res, 200, {
        users: db.users.length,
        checkouts: db.checkouts.length,
        tickets: db.tickets.length,
      });
    }

    return send(res, 404, {
      error: 'Not found',
      routes: [
        'GET /api/status',
        'POST /api/auth/register',
        'POST /api/auth/login',
        'GET /api/auth/me',
        'POST /api/checkout',
        'POST /api/contact',
        'GET /api/users/stats',
      ],
    });
  } catch (err) {
    console.error('[fluxa-api]', err);
    return send(res, 500, { error: err.message || 'Internal Server Error' });
  }
});

server.listen(PORT, () => {
  console.log(`[fluxa-api] running on http://localhost:${PORT}`);
  console.log(`[fluxa-api] routes: /api/status /api/auth/register /api/auth/login /api/checkout /api/contact`);
});
