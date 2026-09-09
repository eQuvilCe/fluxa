import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import StartLink from '../components/StartLink.jsx';
import CursorGlow from '../components/CursorGlow.jsx';
import ScrollProgress from '../components/ScrollProgress.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { CONTACT_URL, CONTACT_USER } from '../data/site.js';
import { useAuth } from '../context/AuthContext.jsx';
import useRevealOnScroll from '../hooks/useRevealOnScroll.js';

const COPY = {
  en: {
    kicker: 'Pricing',
    title: 'Simple, transparent pricing',
    body: 'No setup fees. No monthly minimums. Pay only for what you use — demo tiers for the Fluxa concept.',
    monthly: 'Per successful charge',
    plans: [
      {
        name: 'Starter',
        price: '2.9%',
        plus: '+ 30¢',
        desc: 'For new businesses accepting cards online.',
        features: ['Online payments', 'Checkout + Payment Links', 'Basic fraud tools', 'Email support'],
        cta: 'Start now',
        highlight: false,
      },
      {
        name: 'Growth',
        price: '2.5%',
        plus: '+ 25¢',
        desc: 'For scaling teams that need more control.',
        features: ['Everything in Starter', 'Subscriptions & billing', 'Radar fraud suite', 'Priority support'],
        cta: 'Choose Growth',
        highlight: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        plus: '',
        desc: 'Volume discounts, IC++ and dedicated support.',
        features: ['Custom rates', 'Connect platforms', 'Treasury & issuing', 'SLA + account manager'],
        cta: 'Contact sales',
        highlight: false,
      },
    ],
    note: 'Demo pricing for portfolio — not live billing.',
    contact: 'Contact us',
  },
  ru: {
    kicker: 'Цены',
    title: 'Простые и прозрачные тарифы',
    body: 'Без setup-платежей и месячных минимумов. Платите только за использование — демо-тарифы Fluxa.',
    monthly: 'За успешный платёж',
    plans: [
      {
        name: 'Starter',
        price: '2.9%',
        plus: '+ 30¢',
        desc: 'Для нового бизнеса с приёмом карт онлайн.',
        features: ['Онлайн-платежи', 'Checkout + Payment Links', 'Базовый антифрод', 'Email-поддержка'],
        cta: 'Начать',
        highlight: false,
      },
      {
        name: 'Growth',
        price: '2.5%',
        plus: '+ 25¢',
        desc: 'Для растущих команд с большим контролем.',
        features: ['Всё из Starter', 'Подписки и биллинг', 'Radar антифрод', 'Приоритетная поддержка'],
        cta: 'Выбрать Growth',
        highlight: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        plus: '',
        desc: 'Скидки за объём, IC++ и выделенная поддержка.',
        features: ['Индивидуальные ставки', 'Connect-платформы', 'Treasury и issuing', 'SLA + менеджер'],
        cta: 'Связаться с отделом продаж',
        highlight: false,
      },
    ],
    note: 'Демо-цены для портфолио — не боевой биллинг.',
    contact: 'Связаться с нами',
  },
  uz: {
    kicker: 'Narxlar',
    title: 'Oddiy va shaffof tariflar',
    body: 'Setup to‘lovi yo‘q. Faqat foydalanish uchun — Fluxa demo tariflari.',
    monthly: 'Muvaffaqiyatli to‘lov uchun',
    plans: [
      {
        name: 'Starter',
        price: '2.9%',
        plus: '+ 30¢',
        desc: 'Onlayn kartalarni qabul qiluvchi yangi biznes uchun.',
        features: ['Onlayn to‘lovlar', 'Checkout + Payment Links', 'Asosiy antifrod', 'Email yordam'],
        cta: 'Boshlash',
        highlight: false,
      },
      {
        name: 'Growth',
        price: '2.5%',
        plus: '+ 25¢',
        desc: 'Ko‘proq nazorat kerak bo‘lgan jamoalar uchun.',
        features: ['Starter dagi hammasi', 'Obuna va billing', 'Radar antifrod', 'Ustuvor yordam'],
        cta: 'Growth tanlash',
        highlight: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        plus: '',
        desc: 'Hajm chegirmalari va maxsus yordam.',
        features: ['Maxsus stavkalar', 'Connect platformalar', 'Treasury va issuing', 'SLA + menejer'],
        cta: 'Sotuv bilan bog‘lanish',
        highlight: false,
      },
    ],
    note: 'Portfolio uchun demo narxlar.',
    contact: 'Biz bilan bog‘laning',
  },
};

export default function PricingPage() {
  useRevealOnScroll();
  const { lang } = useLanguage();
  const c = COPY[lang] || COPY.en;
  const { isLoggedIn } = useAuth();

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <section className="section pricing-page">
        <div className="wrap">
          <div className="section-head reveal" style={{ maxWidth: 640 }}>
            <div className="kicker">{c.kicker}</div>
            <h2>{c.title}</h2>
            <p>{c.body}</p>
          </div>

          <div className="pricing-grid">
            {c.plans.map((plan) => (
              <article
                key={plan.name}
                className={`pricing-card reveal${plan.highlight ? ' pricing-card-hot' : ''}`}
              >
                <div className="pricing-card-top">
                  <h3>{plan.name}</h3>
                  {plan.highlight && <span className="pricing-badge">Popular</span>}
                </div>
                <div className="pricing-price">
                  <strong>{plan.price}</strong>
                  {plan.plus && <span>{plan.plus}</span>}
                </div>
                <p className="pricing-meta">{c.monthly}</p>
                <p className="pricing-desc">{plan.desc}</p>
                <ul className="pricing-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                {plan.name === 'Enterprise' ? (
                  <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    {plan.cta}
                  </a>
                ) : (
                  <StartLink className={plan.highlight ? 'btn btn-blue' : 'btn btn-dark'} loggedInTo="/">
                    {isLoggedIn
                      ? lang === 'ru'
                        ? 'В кабинет'
                        : lang === 'uz'
                          ? 'Kabinet'
                          : 'Go to app'
                      : plan.cta}
                  </StartLink>
                )}
              </article>
            ))}
          </div>

          <div className="pricing-footer-contact reveal">
            <p className="pricing-note">{c.note}</p>
            <a className="pricing-contact-btn" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              {c.contact} · @{CONTACT_USER}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
