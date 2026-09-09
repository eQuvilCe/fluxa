import { store, uid } from './_store.js';

export default async function handler(req, res) {
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
  if (!body.email || !body.message) return res.status(400).json({ error: 'email and message required' });

  const ticket = {
    id: uid('tkt'),
    name: body.name || 'Anonymous',
    email: body.email,
    message: String(body.message).slice(0, 2000),
    status: 'queued',
    contact: 'https://t.me/eQuvilCe',
    createdAt: new Date().toISOString(),
  };
  store().tickets.push(ticket);
  return res.status(200).json({ ok: true, ticket, message: 'Ticket saved. @eQuvilCe' });
}
