import { store, uid } from './_store.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  await new Promise((r) => setTimeout(r, 300));
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};
  const amount = Number(body.amount) || 12800;
  const session = {
    id: uid('cs'),
    object: 'checkout.session',
    status: 'open',
    amount_total: amount,
    currency: (body.currency || 'usd').toLowerCase(),
    customer_email: body.email || 'demo@fluxa.dev',
    payment_status: 'unpaid',
    created: Math.floor(Date.now() / 1000),
  };
  store().checkouts.push(session);
  return res.status(200).json({ session, message: 'Checkout session created' });
}
