import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';

/**
 * Holographic payment card with 3D tilt + shine — additive landing section.
 */
export default function HoloCard() {
  const { lang } = useLanguage();
  const { holo: h } = usePageCopy(lang);
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const shine = shineRef.current;
    const wrap = wrapRef.current;
    if (!card || !wrap) return;

    const fine = window.matchMedia('(pointer: fine)').matches;
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || !motionOk) return;

    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (0.5 - py) * 22;
      const ry = (px - 0.5) * 28;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      if (shine) {
        shine.style.background = `linear-gradient(${105 + ry * 2}deg,
          transparent 30%,
          rgba(255,255,255,.0) 38%,
          rgba(255,255,255,.45) 50%,
          rgba(255,255,255,.0) 62%,
          transparent 70%)`;
        shine.style.opacity = '1';
      }
    };

    const onLeave = () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      if (shine) shine.style.opacity = '0';
    };

    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);
    return () => {
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section className="holo-section reveal">
      <div className="wrap holo-grid">
        <div className="holo-copy">
          <div className="kicker">{h.kicker}</div>
          <h2>{h.title}</h2>
          <p>{h.body}</p>
          <ul className="holo-list">
            {h.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>

        <div className="holo-stage" ref={wrapRef}>
          <div className="holo-ambient" aria-hidden="true" />
          <div className="holo-card" ref={cardRef}>
            <div className="holo-shine" ref={shineRef} aria-hidden="true" />
            <div className="holo-card-top">
              <span className="holo-brand">fluxa</span>
              <span className="holo-chip" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="holo-number">•••• •••• •••• 4242</div>
            <div className="holo-card-bottom">
              <div>
                <small>{h.holder}</small>
                <strong>ALEX KIM</strong>
              </div>
              <div>
                <small>{h.exp}</small>
                <strong>09/29</strong>
              </div>
              <div className="holo-contact" aria-hidden="true" />
            </div>
            <div className="holo-wave" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
