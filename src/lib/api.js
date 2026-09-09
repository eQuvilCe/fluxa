const BASE = import.meta.env.VITE_API_URL || '/api';

function authHeaders() {
  const token = localStorage.getItem('fluxa-token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function request(path, options = {}) {
  let res;
  try {
    res = await fetch(`${BASE}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders(),
        ...(options.headers || {}),
      },
      ...options,
    });
  } catch {
    throw new Error('API offline — run: npm run api');
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || res.statusText || 'Request failed');
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const api = {
  status: () => request('/status'),
  stats: () => request('/users/stats'),
  createCheckout: (payload) =>
    request('/checkout', { method: 'POST', body: JSON.stringify(payload) }),
  contact: (payload) =>
    request('/contact', { method: 'POST', body: JSON.stringify(payload) }),
  register: (payload) =>
    request('/auth/register', { method: 'POST', body: JSON.stringify(payload) }),
  login: (payload) =>
    request('/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
  me: () => request('/auth/me'),
};
