import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';
/**
 * Final landing centerpiece — expanding energy rings + orbiting modules.
 */
const ORBIT_ITEMS = [
  { label: 'API', angle: 0 },
  { label: 'Checkout', angle: 51 },
  { label: 'Radar', angle: 102 },
  { label: 'Billing', angle: 153 },
  { label: 'Connect', angle: 204 },
  { label: 'Treasury', angle: 255 },
  { label: 'Issuing', angle: 306 },
];

export default function FinaleOrbit() {
  const { lang } = useLanguage();
  const { finale: f } = usePageCopy(lang);
  return (
    <section className="finale-orbit" aria-label="Platform orbit animation">
      <div className="finale-orbit-bg" aria-hidden="true">
        <span className="finale-flare flare-a" />
        <span className="finale-flare flare-b" />
      </div>

      <div className="wrap finale-orbit-layout">
        <div className="finale-orbit-copy reveal">
          <div className="kicker">{f.kicker}</div>
          <h2>
            {f.titleBefore}
            <span className="finale-gradient-text">{f.titleAccent}</span>
          </h2>
          <p>{f.body}</p>
          <div className="finale-orbit-stats">
            <div><strong>12ms</strong><span>{f.s1}</span></div>
            <div><strong>99.99%</strong><span>{f.s2}</span></div>
            <div><strong>135+</strong><span>{f.s3}</span></div>
          </div>
        </div>

        <div className="finale-orbit-stage" aria-hidden="true">
          <div className="finale-shockwave sw-1" />
          <div className="finale-shockwave sw-2" />
          <div className="finale-shockwave sw-3" />

          <div className="finale-core">
            <div className="finale-core-ring" />
            <div className="finale-core-dot" />
            <span>fluxa</span>
          </div>

          <div className="finale-rail rail-outer">
            {ORBIT_ITEMS.map((item) => (
              <div
                key={item.label}
                className="finale-planet"
                style={{ '--angle': `${item.angle}deg` }}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="finale-rail rail-inner">
            <span className="finale-spark s1" />
            <span className="finale-spark s2" />
            <span className="finale-spark s3" />
          </div>
        </div>
      </div>
    </section>
  );
}
