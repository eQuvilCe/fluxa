import crypto from 'crypto';
import { store } from '../_store.js';

const SECRET = process.env.FLUXA_SECRET || 'fluxa-portfolio-secret-change-me';

function verifyPassword(password, salt, hash) {
  const h = crypto.scryptSync(password, salt, 64).toString('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(h, 'hex'), Buffer.from(hash, 'hex'));
  } catch {
    return false;
  }
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
  const user = store().users.find((u) => u.email === email);
  if (!user || !verifyPassword(password, user.salt, user.passwordHash)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token = signToken({ sub: user.id, email: user.email });
  const pub = { id: user.id, name: user.name, email: user.email, nick: user.nick, createdAt: user.createdAt };
  return res.status(200).json({ user: pub, token });
}
