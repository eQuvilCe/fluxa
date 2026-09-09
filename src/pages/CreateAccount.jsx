import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { LANGS } from '../data/translations.js';

const COPY = {
  en: {
    title: 'Create your account',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    submit: 'Create account',
    have: 'Already have an account?',
    signin: 'Sign in',
  },
  ru: {
    title: 'Создать аккаунт',
    name: 'Имя',
    email: 'Email',
    password: 'Пароль',
    submit: 'Зарегистрироваться',
    have: 'Уже есть аккаунт?',
    signin: 'Войти',
  },
  uz: {
    title: 'Hisob yaratish',
    name: 'Ism',
    email: 'Email',
    password: 'Parol',
    submit: 'Ro‘yxatdan o‘tish',
    have: 'Allaqachon hisob bormi?',
    signin: 'Kirish',
  },
};

export default function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register, isLoggedIn } = useAuth();
  const { lang, setLang } = useLanguage();
  const c = COPY[lang] || COPY.en;
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/', { replace: true });
  }, [isLoggedIn, navigate]);

  const canSubmit = email.trim() && password.trim().length >= 6;

  const handle = async () => {
    if (!canSubmit || loading) return;
    setLoading(true);
    setError('');
    try {
      await register(name.trim(), email.trim(), password);
      navigate('/');
    } catch (e) {
      setError(e.message || 'Registration failed');
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
        <h2>{c.title}</h2>

        <label className="field-label" htmlFor="name">{c.name}</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Alex Kim" />

        <label className="field-label" htmlFor="email">{c.email}</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />

        <label className="field-label" htmlFor="password">{c.password}</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="min 6 characters"
          onKeyDown={(e) => e.key === 'Enter' && handle()}
        />

        {error && (
          <p style={{ color: '#ff5a9e', fontSize: 13, fontWeight: 650, margin: '8px 0 12px' }}>{error}</p>
        )}

        <button className="primary-btn" disabled={!canSubmit || loading} onClick={handle}>
          {loading ? '…' : c.submit}
        </button>

        <p className="footer-text">
          {c.have} <Link className="link" to="/login">{c.signin}</Link>
        </p>
      </div>
    </div>
  );
}
