import { useLanguage } from '../context/LanguageContext.jsx';

const COPY = {
  en: {
    kicker: 'Premium motion',
    title: 'Glass layers in deep space',
    body: 'Floating panels, neon rings and depth — the same vibe as the big pieces above, tuned for phone and desktop.',
  },
  ru: {
    kicker: 'Премиум-моушн',
    title: 'Стеклянные слои в космосе',
    body: 'Парящие панели, неон и глубина — в духе крупных блоков выше, и на телефоне тоже смотрится мощно.',
  },
  uz: {
    kicker: 'Premium motion',
    title: 'Kosmosdagi shisha qatlamlar',
    body: 'Suzuvchi panellar, neon va chuqurlik — yuqoridagi katta bloklar ruhida, telefonda ham kuchli.',
  },
};

/**
 * CSS-only neon portal — auto-animated, mobile-friendly (no hover required).
 */
export default function NeonPortal() {
  const { lang } = useLanguage();
  const c = COPY[lang] || COPY.en;

  return (
    <section className="neon-portal">
      <div className="neon-portal-bg" aria-hidden="true">
        <span className="np-orb np-a" />
        <span className="np-orb np-b" />
        <span className="np-orb np-c" />
      </div>

      <div className="wrap neon-portal-layout">
        <div className="neon-portal-copy reveal">
          <div className="kicker">{c.kicker}</div>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
        </div>

        <div className="neon-portal-stage" aria-hidden="true">
          <div className="np-ring r1" />
          <div className="np-ring r2" />
          <div className="np-ring r3" />

          <div className="np-stack">
            <div className="np-card np-card-back">
              <span className="np-lines" />
              <strong>+24.8%</strong>
              <small>Volume</small>
            </div>
            <div className="np-card np-card-mid">
              <span className="np-badge">LIVE</span>
              <div className="np-bars">
                <i /><i /><i /><i /><i /><i />
              </div>
              <strong>$482k</strong>
            </div>
            <div className="np-card np-card-front">
              <div className="np-front-top">
                <span className="np-dot" />
                <span>fluxa gateway</span>
              </div>
              <div className="np-amount">$12,840.00</div>
              <div className="np-front-row">
                <span>Succeeded</span>
                <span className="np-pill">3D Secure</span>
              </div>
            </div>
          </div>

          <span className="np-spark s1" />
          <span className="np-spark s2" />
          <span className="np-spark s3" />
          <span className="np-spark s4" />
        </div>
      </div>
    </section>
  );
}
