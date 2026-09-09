import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import StripeExpandModal from './StripeExpandModal.jsx';

const PRODUCT_ICONS = [
  <path key="p" d="M4 7h16v10H4zM4 10h16" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />,
  <path key="b" d="M7 4h10v16H7zM9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
  <path key="c" d="M12 3v18M5 8h14M5 16h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
];

const EXTRA = {
  en: [
    {
      href: '/menu/products/payments',
      title: 'Payments',
      body: 'Accept cards, wallets and local methods with one integration.',
      checks: ['Global card acceptance', 'Wallets & local methods', 'Smart routing', 'Instant payouts'],
      visual: 'chat',
      tone: 'pink',
      points: ['135+ payment methods', '3-D Secure & SCA', 'Smart retries'],
      detail: 'Accept cards, wallets and local methods with one integration.',
    },
    {
      href: '/menu/products/billing',
      title: 'Billing',
      body: 'Recurring revenue with proration, trials, tax and dunning.',
      checks: ['Subscriptions & trials', 'Usage-based billing', 'Smart dunning', 'Tax automation'],
      visual: 'card',
      tone: 'purple',
      points: ['Subscriptions', 'Usage-based', 'Invoicing'],
      detail: 'Recurring revenue without building billing from scratch.',
    },
    {
      href: '/menu/products/connect',
      title: 'Connect',
      body: 'Embed payments into your platform and pay sellers automatically.',
      checks: ['Marketplace payouts', 'KYC onboarding', 'Split payments', 'Platform dashboard'],
      visual: 'globe',
      tone: 'cyan',
      points: ['Onboarding', 'Payouts', 'Split payments'],
      detail: 'Platform payments and automatic seller payouts.',
    },
  ],
  ru: [
    {
      href: '/menu/products/payments',
      title: 'Платежи',
      body: 'Карты, кошельки и локальные методы в одной интеграции.',
      checks: ['Приём карт по миру', 'Кошельки и локальные методы', 'Умный роутинг', 'Мгновенные выплаты'],
      visual: 'chat',
      tone: 'pink',
      points: ['135+ методов', '3-D Secure', 'Ретраи'],
      detail: 'Один стек для глобального приёма платежей.',
    },
    {
      href: '/menu/products/billing',
      title: 'Биллинг',
      body: 'Рекуррент с proration, trial, налогами и dunning.',
      checks: ['Подписки и trial', 'Usage-based', 'Умный dunning', 'Автоналоги'],
      visual: 'card',
      tone: 'purple',
      points: ['Подписки', 'Usage-based', 'Инвойсы'],
      detail: 'Биллинг без самописной логики.',
    },
    {
      href: '/menu/products/connect',
      title: 'Connect',
      body: 'Платежи внутри платформы и выплаты селлерам.',
      checks: ['Marketplace payouts', 'KYC', 'Split-платежи', 'Дашборд'],
      visual: 'globe',
      tone: 'cyan',
      points: ['Онбординг', 'Выплаты', 'Split'],
      detail: 'Платёжный слой для маркетплейсов.',
    },
  ],
  uz: [
    {
      href: '/menu/products/payments',
      title: 'To‘lovlar',
      body: 'Karta, hamyon va mahalliy usullar.',
      checks: ['Global kartalar', 'Hamyonlar', 'Routing', 'Payout'],
      visual: 'chat',
      tone: 'pink',
      points: ['135+ usul', '3-D Secure', 'Retry'],
      detail: 'Bitta integratsiya bilan global to‘lovlar.',
    },
    {
      href: '/menu/products/billing',
      title: 'Billing',
      body: 'Obuna va usage-based billing.',
      checks: ['Obunalar', 'Usage', 'Dunning', 'Soliq'],
      visual: 'card',
      tone: 'purple',
      points: ['Obuna', 'Usage', 'Invoys'],
      detail: 'Takroriy daromad tizimi.',
    },
    {
      href: '/menu/products/connect',
      title: 'Connect',
      body: 'Marketplace to‘lovlari.',
      checks: ['Payout', 'KYC', 'Split', 'Dashboard'],
      visual: 'globe',
      tone: 'cyan',
      points: ['Onboarding', 'Payout', 'Split'],
      detail: 'Platforma uchun to‘lov qatlami.',
    },
  ],
};

export default function Products() {
  const { t, lang } = useLanguage();
  const p = t.products;
  const extra = (EXTRA[lang] || EXTRA.en);
  const [active, setActive] = useState(null);

  const products = [
    { icon: PRODUCT_ICONS[0], title: p.paymentsTitle, body: p.paymentsBody, ...extra[0] },
    { icon: PRODUCT_ICONS[1], title: p.billingTitle, body: p.billingBody, ...extra[1] },
    { icon: PRODUCT_ICONS[2], title: p.connectTitle, body: p.connectBody, ...extra[2] },
  ];

  return (
    <section className="section soft">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">{p.kicker}</div>
          <h2>{p.title}</h2>
          <p>{p.body}</p>
        </div>
        <div className="product-grid">
          {products.map((prod, i) => (
            <article
              className={`product-card product-card-interactive reveal${active === i ? ' is-open' : ''}`}
              key={prod.title}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
            >
              <div className="icon">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">{prod.icon}</svg>
              </div>
              <h3>{prod.title}</h3>
              <p>{prod.body}</p>
              <div className="mini-ui" aria-hidden="true"></div>
            </article>
          ))}
        </div>
      </div>
      <StripeExpandModal
        open={active !== null}
        onClose={() => setActive(null)}
        data={
          active !== null
            ? {
                title: products[active].title,
                body: products[active].detail || products[active].body,
                checks: products[active].checks || products[active].points || [],
                visual: products[active].visual,
                tone: products[active].tone,
                href: products[active].href,
              }
            : null
        }
        lang={lang}
      />
    </section>
  );
}
