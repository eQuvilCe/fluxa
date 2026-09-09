import { store } from './_store.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  const db = store();
  return res.status(200).json({
    ok: true,
    service: 'fluxa-api',
    version: '2.0.0',
    time: new Date().toISOString(),
    users: db.users.length,
    checkouts: db.checkouts.length,
    tickets: db.tickets.length,
  });
}
