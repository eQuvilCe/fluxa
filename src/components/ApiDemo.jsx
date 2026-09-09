import { useState } from 'react';
import { api } from '../lib/api.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { CONTACT_URL } from '../data/site.js';

const COPY = {
  en: {
    kicker: 'Live demo API',
    title: 'Hit a real backend endpoint',
    body: 'Serverless API routes power this demo — create a checkout session or ping status. Works on Vercel.',
    statusBtn: 'GET /api/status',
    payBtn: 'POST /api/checkout',
    contactBtn: 'POST /api/contact',
    loading: 'Calling API…',
    success: 'Success',
    error: 'Error',
  },
  ru: {
    kicker: 'Live demo API',
    title: 'Ударь по реальному backend',
    body: 'Serverless API для демо — создай checkout-сессию или пни status. На Vercel работает из коробки.',
    statusBtn: 'GET /api/status',
    payBtn: 'POST /api/checkout',
    contactBtn: 'POST /api/contact',
    loading: 'Запрос…',
    success: 'Успех',
    error: 'Ошибка',
  },
  uz: {
    kicker: 'Live demo API',
    title: 'Haqiqiy backend endpoint',
    body: 'Serverless API demo — checkout sessiyasi yoki status. Vercelda ishlaydi.',
    statusBtn: 'GET /api/status',
    payBtn: 'POST /api/checkout',
    contactBtn: 'POST /api/contact',
    loading: 'So‘rov…',
    success: 'OK',
    error: 'Xato',
  },
};

export default function ApiDemo() {
  const { lang } = useLanguage();
  const c = COPY[lang] || COPY.en;
  const [loading, setLoading] = useState(null);
  const [result, setResult] = useState(null);
  const [err, setErr] = useState(null);

  const run = async (key, fn) => {
    setLoading(key);
    setErr(null);
    setResult(null);
    try {
      const data = await fn();
      setResult({ key, data });
    } catch (e) {
      setErr(e.message || 'Failed');
    } finally {
      setLoading(null);
    }
  };

  return (
    <section className="api-demo reveal">
      <div className="wrap api-demo-grid">
        <div>
          <div className="kicker">{c.kicker}</div>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
          <div className="api-demo-actions">
            <button
              type="button"
              className="btn btn-blue api-fire"
              disabled={!!loading}
              onClick={() => run('status', () => api.status())}
            >
              {loading === 'status' ? c.loading : c.statusBtn}
            </button>
            <button
              type="button"
              className="btn btn-dark api-fire"
              disabled={!!loading}
              onClick={() =>
                run('checkout', () =>
                  api.createCheckout({ amount: 12800, currency: 'usd', email: 'demo@fluxa.dev' })
                )
              }
            >
              {loading === 'checkout' ? c.loading : c.payBtn}
            </button>
            <button
              type="button"
              className="btn btn-ghost api-fire"
              disabled={!!loading}
              onClick={() =>
                run('contact', () =>
                  api.contact({
                    name: 'Portfolio visitor',
                    email: 'hi@example.com',
                    message: 'Hello from Fluxa landing demo',
                  })
                )
              }
            >
              {loading === 'contact' ? c.loading : c.contactBtn}
            </button>
          </div>
          <p className="api-demo-note">
            Contact live:{' '}
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              @eQuvilCe
            </a>
          </p>
        </div>

        <div className={`api-terminal${result || err ? ' hot' : ''}`}>
          <div className="api-terminal-top">
            <i /><i /><i />
            <span>fluxa-api · response</span>
          </div>
          <pre>
            {loading && `// ${c.loading}\n`}
            {err && `// ${c.error}\n${JSON.stringify({ error: err }, null, 2)}`}
            {result && `// ${c.success} · ${result.key}\n${JSON.stringify(result.data, null, 2)}`}
            {!loading && !err && !result && `// waiting for request…\n// try POST /api/checkout`}
          </pre>
        </div>
      </div>
    </section>
  );
}
