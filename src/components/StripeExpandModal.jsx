import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_URL, CONTACT_USER } from '../data/site.js';
import StartLink from './StartLink.jsx';

export default function StripeExpandModal({ open, onClose, data, lang = 'en' }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open || !data) return null;

  const labels = {
    en: { explore: 'Explore', pricing: 'See pricing', contact: 'Contact us', close: 'Close' },
    ru: { explore: 'Смотреть', pricing: 'Тарифы', contact: 'Связаться', close: 'Закрыть' },
    uz: { explore: 'Ko‘rish', pricing: 'Narxlar', contact: 'Bog‘lanish', close: 'Yopish' },
  }[lang] || {
    en: { explore: 'Explore', pricing: 'See pricing', contact: 'Contact us', close: 'Close' },
  };

  return (
    <div className="sx-overlay" onClick={onClose} role="presentation">
      <div
        className="sx-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={data.title}
      >
        <button type="button" className="sx-close" onClick={onClose} aria-label={labels.close}>
          ×
        </button>

        <div className="sx-grid">
          <div className="sx-copy">
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <ul className="sx-checks">
              {data.checks.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <div className="sx-actions">
              <StartLink className="btn btn-blue" loggedInTo={data.href || '/pricing'}>
                {labels.explore} →
              </StartLink>
              <Link className="btn btn-ghost" to="/pricing" onClick={onClose}>
                {labels.pricing}
              </Link>
            </div>
          </div>

          <div className={`sx-visual tone-${data.tone || 'purple'}`}>
            {data.visual === 'card' && (
              <div className="sx-card-art">
                <div className="sx-plastic">
                  <span className="sx-chip" />
                  <strong>fluxa</strong>
                  <small>•••• 4242</small>
                </div>
                <div className="sx-mini-panel">
                  <b>$820.56</b>
                  <span>Available balance</span>
                </div>
              </div>
            )}
            {data.visual === 'chat' && (
              <div className="sx-chat-art">
                <div className="sx-bubble">Find me a jacket under $120</div>
                <div className="sx-bubble you">3 options — completing checkout.</div>
                <div className="sx-shop">
                  <div><b>Deluxe Shirt</b><span>$56</span></div>
                  <div><b>Essential Hoodie</b><span>$48</span></div>
                </div>
              </div>
            )}
            {data.visual === 'globe' && (
              <div className="sx-globe-art">
                <div className="sx-globe-core" />
                <span className="sx-dot d1" />
                <span className="sx-dot d2" />
                <span className="sx-dot d3" />
                <div className="sx-pill">$892 USDC</div>
              </div>
            )}
            {!['card', 'chat', 'globe'].includes(data.visual) && (
              <div className="sx-card-art">
                <div className="sx-plastic">
                  <span className="sx-chip" />
                  <strong>fluxa</strong>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="sx-footer">
          <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
            {labels.contact} · @{CONTACT_USER}
          </a>
        </div>
      </div>
    </div>
  );
}
