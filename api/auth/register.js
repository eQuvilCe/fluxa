import crypto from 'crypto';
import { store, uid } from '../_store.js';

const SECRET = process.env.FLUXA_SECRET || 'fluxa-portfolio-secret-change-me';

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { salt, hash };
}
function signToken(payload) {
  const body = { ...payload, exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7 };
  const data = Buffer.from(JSON.stringify(body)).toString('base64url');
  const sig = crypto.createHmac('sha256', SECRET).update(data).digest('base64url');
  return `${data}.${sig}`;
}

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};
  const email = String(body.email || '').trim().toLowerCase();
  const password = String(body.password || '');
  const name = String(body.name || '').trim();

  if (!email.includes('@')) return res.status(400).json({ error: 'Valid email required' });
  if (password.length < 6) return res.status(400).json({ error: 'Password min 6 characters' });

  const db = store();
  if (db.users.some((u) => u.email === email)) {
    return res.status(409).json({ error: 'Email already registered' });
  }

  const { salt, hash } = hashPassword(password);
  const nick = (name || email.split('@')[0])
    .replace(/[._+-]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ') || 'User';

  const user = {
    id: uid('usr'),
    name: name || nick,
    nick,
    email,
    salt,
    passwordHash: hash,
    createdAt: new Date().toISOString(),
  };
  db.users.push(user);
  const token = signToken({ sub: user.id, email });
  const pub = { id: user.id, name: user.name, email: user.email, nick: user.nick, createdAt: user.createdAt };
  return res.status(201).json({ user: pub, token });
}
