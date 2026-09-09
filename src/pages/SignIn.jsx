import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';
import { LANGS } from '../data/translations.js';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isLoggedIn } = useAuth();
  const { lang, setLang } = useLanguage();
  const page = usePageCopy(lang);
  const a = page.auth || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/', { replace: true });
  }, [isLoggedIn, navigate]);

  const canSubmit = email.trim() !== '' && password.trim() !== '';

  const handleSignIn = async () => {
    if (!canSubmit || loading) return;
    setLoading(true);
    setError('');
    try {
      await login(email.trim(), password);
      navigate('/');
    } catch (e) {
      setError(e.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <Link to="/" className="auth-brand">
        <span className="brand-mark"></span>fluxa
      </Link>

      <div className="auth-card">
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, justifyContent: 'flex-end' }}>
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLang(l.code)}
              style={{
                border: lang === l.code ? '1px solid var(--blue)' : '1px solid var(--line)',
                background: lang === l.code ? 'var(--soft)' : 'transparent',
                borderRadius: 999,
                padding: '4px 10px',
                fontWeight: 700,
                fontSize: 12,
                cursor: 'pointer',
                color: 'var(--ink)',
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
        <h2>{a.title || 'Sign in'}</h2>

        <label className="field-label" htmlFor="email">{a.email || 'Email'}</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSignIn()}
        />

        <div className="row-between">
          <label className="field-label" htmlFor="password">{a.password || 'Password'}</label>
          <a className="link" href="#forgot">{a.forgot || 'Forgot?'}</a>
        </div>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSignIn()}
        />

        <label className="checkbox-row">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          {a.remember || 'Remember me'}
        </label>

        {error && (
          <p style={{ color: '#ff5a9e', fontSize: 13, fontWeight: 650, marginBottom: 12 }}>{error}</p>
        )}

        <button className="primary-btn" disabled={!canSubmit || loading} onClick={handleSignIn}>
          {loading ? '…' : a.submit || 'Sign in'}
        </button>

        <p className="footer-text">
          {a.new || 'New?'} <Link className="link" to="/signup">{a.create || 'Create account'}</Link>
        </p>
      </div>
    </div>
  );
}
