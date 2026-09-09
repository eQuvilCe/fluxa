import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { CONTACT_URL, CONTACT_USER } from '../data/site.js';

const COPY = {
  en: {
    kicker: 'Fluxa AI',
    title: 'Ask about this website',
    body: 'Smarter demo copilot: site structure, pricing, auth, API, deploy and contact.',
    placeholder: 'Ask anything about Fluxa…',
    send: 'Ask',
  },
  ru: {
    kicker: 'Fluxa AI',
    title: 'Спроси про этот сайт',
    body: 'Умнее демо-копилот: структура сайта, тарифы, auth, API, деплой и контакт.',
    placeholder: 'Спроси что угодно про Fluxa…',
    send: 'Спросить',
  },
  uz: {
    kicker: 'Fluxa AI',
    title: 'Sayt haqida so‘rang',
    body: 'Pricing, auth, API, deploy va kontakt haqida demo-javoblar.',
    placeholder: 'Fluxa haqida so‘rang…',
    send: 'So‘rash',
  },
};

function answer(q, lang) {
  const s = (q || '').toLowerCase().trim();
  const ru = lang === 'ru';
  const uz = lang === 'uz';

  // what is this site / purpose
  if (/что это|what is this|что за сайт|для чего|зачем|purpose|about site|о сайте|nima bu|nima uchun|portfolio|портфолио/.test(s)) {
    return ru
      ? `Fluxa — концепт финансового SaaS в стиле Stripe: лендинг + продукты + pricing + auth + demo API. Это сильный portfolio-проект: показывает UI/UX, анимации, i18n (EN/RU/UZ), dark mode, backend (register/login/checkout/contact) и деплой на Vercel. Автор: @${CONTACT_USER}.`
      : uz
        ? `Fluxa — Stripe uslubidagi moliyaviy SaaS kontsepti. Portfolio loyiha: UI, animatsiya, i18n, dark mode, backend va Vercel. Muallif: @${CONTACT_USER}.`
        : `Fluxa is a Stripe-style financial SaaS concept: landing, products, pricing, auth and demo API. Built as a strong portfolio piece — UI/UX, motion, i18n (EN/RU/UZ), dark mode, backend (register/login/checkout/contact) and Vercel-ready. Author: @${CONTACT_USER}.`;
  }

  if (/цен|price|pricing|tarif|narx/.test(s)) {
    return ru
      ? 'Тарифы на /pricing: Starter 2.9%+30¢, Growth 2.5%+25¢ (Popular), Enterprise — Custom. Демо для портфолио, не боевой биллинг.'
      : uz
        ? '/pricing: Starter, Growth (Popular), Enterprise. Demo narxlar.'
        : '/pricing: Starter 2.9%+30¢, Growth 2.5%+25¢ (Popular), Enterprise Custom. Demo only.';
  }
  if (/contact|связ|telegram|автор|@equvil|боглан|как связаться/.test(s)) {
    return ru
      ? `Telegram автора: @${CONTACT_USER} → ${CONTACT_URL}. Кнопки «Связаться с отделом продаж» ведут туда же.`
      : uz
        ? `Telegram: @${CONTACT_USER}`
        : `Author Telegram: @${CONTACT_USER} → ${CONTACT_URL}`;
  }
  if (/login|regist|sign|аккаунт|регистр|hisob|войти|signup/.test(s)) {
    return ru
      ? 'Аккаунт: /signup (регистрация) и /login (вход). Пароли хэшируются (scrypt), токен сохраняется. После входа в навбаре: «Привет, {ник}» + Выйти. API: POST /api/auth/register, /api/auth/login, GET /api/auth/me.'
      : uz
        ? '/signup va /login. Backend: /api/auth/*'
        : 'Use /signup and /login. Passwords are scrypt-hashed. Nav shows Hi {nick}. API: /api/auth/register, /login, /me.';
  }
  if (/dark|темн|theme|mode|режим|светл/.test(s)) {
    return ru
      ? 'Тема: иконка в навбаре (sun/moon). Сохраняется в localStorage, ставится до first paint чтобы не мигало.'
      : uz
        ? 'Navbar tema tugmasi. localStorage.'
        : 'Navbar theme toggle. Saved in localStorage, applied before paint.';
  }
  if (/lang|язык|russian|english|uzbek|рус|o‘zb|uzb|перевод/.test(s)) {
    return ru
      ? 'Языки EN / RU / UZ — переключатель в навбаре. Переведены навбар, hero, pricing, feature pages, auth и AI.'
      : uz
        ? 'EN / RU / UZ — navbar switcher.'
        : 'EN / RU / UZ via navbar. Nav, hero, pricing, features, auth and AI are translated.';
  }
  if (/product|продукт|payment|billing|connect|платеж|биллинг|issuing|radar/.test(s)) {
    return ru
      ? 'Продукты: Payments, Billing, Connect, Radar, Terminal, Issuing, Treasury… Открываются из навбара. На главной плитки открывают Stripe-style модалки с деталями.'
      : uz
        ? 'Payments, Billing, Connect va boshqalar — navbar / plitkalar.'
        : 'Products: Payments, Billing, Connect, Radar, Terminal, Issuing… Navbar + homepage tiles open Stripe-style modals.';
  }
  if (/api|backend|endpoint|сервер|база|database/.test(s)) {
    return ru
      ? 'Backend: GET /api/status, POST /api/checkout, POST /api/contact, auth register/login/me. Локально JSON-БД (server/data/db.json). Запуск: npm run api (порт 3001) + npm run dev. На Vercel — serverless в /api.'
      : uz
        ? 'API: /api/status, /checkout, /contact, /auth/*. npm run api'
        : 'API: /api/status, /checkout, /contact, /auth/*. Local JSON DB. Run npm run api + npm run dev. Vercel uses /api serverless.';
  }
  if (/deploy|vercel|github|деплой|хост/.test(s)) {
    return ru
      ? 'Стек: React + Vite + Tailwind-стиль CSS. Деплой: GitHub → Vercel. vercel.json настроен под SPA. Не забудь отдельно прогнать API или использовать /api routes.'
      : uz
        ? 'React + Vite. GitHub → Vercel.'
        : 'React + Vite. Push to GitHub and deploy on Vercel. SPA rewrites in vercel.json.';
  }
  if (/anim|аним|motion|stripe|эффект/.test(s)) {
    return ru
      ? 'Анимации: navbar dropdown stagger, particle/aurora блоки, Future tiles модалки, pricing hover, logo marquee, hero RGB-текст, cursor glow, scroll progress.'
      : uz
        ? 'Navbar, particles, modal, pricing hover, RGB text.'
        : 'Animations: nav dropdowns, particles/aurora, tile modals, pricing hover, logo marquee, hero RGB text, cursor glow.';
  }
  if (/how start|как запус|npm|установ|install/.test(s)) {
    return ru
      ? 'npm install → npm run api (терминал 1) → npm run dev (терминал 2). Открой localhost:5173.'
      : uz
        ? 'npm install; npm run api; npm run dev'
        : 'npm install, then npm run api and npm run dev. Open localhost:5173.';
  }
  if (/ai|fluxa ai|копилот|assistent/.test(s)) {
    return ru
      ? 'Я Fluxa AI — демо-ассистент по этому сайту. Знаю структуру, тарифы, auth, API, деплой и контакт автора.'
      : uz
        ? 'Fluxa AI — sayt bo‘yicha demo-assistent.'
        : 'I’m Fluxa AI — demo assistant for this site’s structure, pricing, auth, API, deploy and contact.';
  }
  if (/кто|who|author|сделал|muallif/.test(s)) {
    return ru
      ? `Концепт в стиле Stripe. Автор: @${CONTACT_USER}.`
      : uz
        ? `Muallif: @${CONTACT_USER}.`
        : `Stripe-inspired concept. Author: @${CONTACT_USER}.`;
  }

  return ru
    ? `Могу рассказать: что это за сайт, pricing, продукты, login, dark mode, языки, API, анимации, деплой или контакт (@${CONTACT_USER}).`
    : uz
      ? `Pricing, product, login, API, deploy yoki @${CONTACT_USER} haqida so‘rang.`
      : `Ask about: what this site is, pricing, products, login, theme, languages, API, animations, deploy, or contact (@${CONTACT_USER}).`;
}

export default function FluxaAI() {
  const { lang } = useLanguage();
  const c = COPY[lang] || COPY.en;
  const [q, setQ] = useState('');
  const [log, setLog] = useState([]);

  const ask = (forced) => {
    const text = (forced ?? q).trim();
    if (!text) return;
    const reply = answer(text, lang);
    setLog((prev) => [...prev, { role: 'user', text }, { role: 'ai', text: reply }]);
    setQ('');
  };

  const hints = useMemo(() => {
    if (lang === 'ru') {
      return ['Что это за сайт?', 'Тарифы?', 'Как войти?', 'Как связаться?', 'Какой API?', 'Как задеплоить?'];
    }
    if (lang === 'uz') {
      return ['Bu nima?', 'Narxlar?', 'Login?', 'Kontakt?', 'API?', 'Deploy?'];
    }
    return ['What is this site?', 'Pricing?', 'How to login?', 'Contact?', 'API?', 'Deploy?'];
  }, [lang]);

  return (
    <section className="fluxa-ai reveal">
      <div className="wrap fluxa-ai-grid">
        <div>
          <div className="kicker">{c.kicker}</div>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
          <div className="fluxa-ai-hints">
            {hints.map((h) => (
              <button key={h} type="button" className="fluxa-ai-hint" onClick={() => ask(h)}>
                {h}
              </button>
            ))}
          </div>
          <div className="fluxa-ai-input">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={c.placeholder}
              onKeyDown={(e) => e.key === 'Enter' && ask()}
            />
            <button type="button" className="btn btn-blue" onClick={() => ask()}>{c.send}</button>
          </div>
          <a className="fluxa-ai-contact" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
            {lang === 'ru' ? 'Связаться' : 'Contact'} · @{CONTACT_USER}
          </a>
        </div>
        <div className="fluxa-ai-log">
          {log.length === 0 && <div className="fluxa-ai-empty">Fluxa AI</div>}
          {log.map((m, i) => (
            <div key={i} className={`fluxa-ai-msg ${m.role}`}>{m.text}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
