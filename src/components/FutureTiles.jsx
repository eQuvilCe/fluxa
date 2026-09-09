import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';
import StripeExpandModal from './StripeExpandModal.jsx';

const ExpandIcon = () => (
  <div className="tile-expand">
    <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
      <path d="M8 4H4v4M12 16h4v-4M4 12v4h4M16 8V4h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const MODALS = {
  en: [
    {
      title: 'Monetize through agentic commerce',
      body: 'Let AI agents discover, recommend and complete checkout on your storefront — with fraud checks and one-click pay.',
      checks: [
        'Agent-ready checkout sessions',
        'Product feeds for LLM tools',
        'Built-in Radar risk scoring',
        'Instant settlement reporting',
      ],
      visual: 'chat',
      tone: 'pink',
      href: '/menu/products/payments',
    },
    {
      title: 'Create a card issuing program',
      body: 'Offer commercial or consumer cards to create new revenue streams. Fluxa handles compliance scaffolding in this concept demo.',
      checks: [
        'Launch commercial or consumer cards',
        'Streamline card compliance workflows',
        'Generate revenue from interchange',
        'Build a comprehensive financial hub',
      ],
      visual: 'card',
      tone: 'purple',
      href: '/menu/products/issuing',
    },
    {
      title: 'Borderless money with stablecoins',
      body: 'Move payouts across borders and settle in stablecoins — lower friction for global platforms and marketplaces.',
      checks: [
        'Cross-border payout rails',
        'Stablecoin settlement options',
        'FX transparency',
        'Treasury-friendly reporting',
      ],
      visual: 'globe',
      tone: 'cyan',
      href: '/menu/products/treasury',
    },
  ],
  ru: [
    {
      title: 'Монетизация через AI-агентов',
      body: 'AI-агенты находят товары и завершают checkout — с проверкой фрода и быстрой оплатой.',
      checks: [
        'Checkout для агентов',
        'Каталоги для LLM-инструментов',
        'Radar scoring',
        'Отчёты по settlement',
      ],
      visual: 'chat',
      tone: 'pink',
      href: '/menu/products/payments',
    },
    {
      title: 'Запуск карточной программы',
      body: 'Коммерческие и consumer-карты как новый revenue. В демо — концепт issuing с compliance-скелетом.',
      checks: [
        'Commercial и consumer карты',
        'Compliance-воркфлоу',
        'Interchange revenue',
        'Единый financial hub',
      ],
      visual: 'card',
      tone: 'purple',
      href: '/menu/products/issuing',
    },
    {
      title: 'Трансграничные выплаты и стейблкоины',
      body: 'Выплаты через границы и settlement в стейблкоинах — меньше трения для глобальных платформ.',
      checks: [
        'Cross-border payouts',
        'Stablecoin settlement',
        'Прозрачный FX',
        'Treasury-отчёты',
      ],
      visual: 'globe',
      tone: 'cyan',
      href: '/menu/products/treasury',
    },
  ],
  uz: [
    {
      title: 'AI agentlar orqali monetizatsiya',
      body: 'AI agentlar mahsulot topadi va checkoutni yakunlaydi.',
      checks: ['Agent checkout', 'LLM kataloglar', 'Radar scoring', 'Settlement hisobot'],
      visual: 'chat',
      tone: 'pink',
      href: '/menu/products/payments',
    },
    {
      title: 'Karta dasturini ishga tushirish',
      body: 'Commercial va consumer kartalar — yangi daromad oqimi.',
      checks: ['Kartalar chiqarish', 'Compliance', 'Interchange', 'Financial hub'],
      visual: 'card',
      tone: 'purple',
      href: '/menu/products/issuing',
    },
    {
      title: 'Chegaralararo to‘lov va steyblkoin',
      body: 'Global platformalar uchun past ishqalanishli payout.',
      checks: ['Cross-border', 'Stablecoin', 'FX', 'Treasury'],
      visual: 'globe',
      tone: 'cyan',
      href: '/menu/products/treasury',
    },
  ],
};

export default function FutureTiles() {
  const { lang } = useLanguage();
  const { future: f } = usePageCopy(lang);
  const modals = MODALS[lang] || MODALS.en;
  const [active, setActive] = useState(null);

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">{f.kicker}</div>
          <h2>{f.title}</h2>
          <p>{f.body}</p>
        </div>
        <div className="tile-grid">
          <article className="tile tile-1 reveal" onClick={() => setActive(0)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setActive(0)}>
            <ExpandIcon />
            <h3>{f.t1}</h3>
            <div className="tile-art">
              <div className="arc" aria-hidden="true"></div>
              <div className="chat-stack">
                <div className="chat-bubble">{f.t1a}</div>
                <div className="chat-bubble you">{f.t1b}</div>
              </div>
              <div className="swatch-row"><span className="swatch a"></span><span className="swatch b"></span></div>
            </div>
          </article>
          <article className="tile tile-2 reveal" onClick={() => setActive(1)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setActive(1)}>
            <ExpandIcon />
            <h3>{f.t2}</h3>
            <div className="tile-art">
              <div className="card-chip">
                <span className="chip-sq"></span>
                <svg className="wave" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9a8 8 0 0 1 0 6M2 12a12 12 0 0 1 0 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M9.5 7a11 11 0 0 1 0 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </article>
          <article className="tile tile-3 reveal" onClick={() => setActive(2)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setActive(2)}>
            <ExpandIcon />
            <h3>{f.t3}</h3>
            <div className="tile-art">
              <div className="dotfield" aria-hidden="true"></div>
              <span className="route-dot" style={{ left: '20%', top: '62%' }}></span>
              <span className="route-dot" style={{ left: '74%', top: '22%' }}></span>
              <span className="route-line" style={{ left: '20%', top: '62%', width: '58%', '--rot': '-32deg' }}></span>
            </div>
          </article>
        </div>
      </div>

      <StripeExpandModal
        open={active !== null}
        onClose={() => setActive(null)}
        data={active !== null ? modals[active] : null}
        lang={lang}
      />
    </section>
  );
}
