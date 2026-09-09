import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { CONTACT_URL } from '../data/site.js';
import StartLink from './StartLink.jsx';

export default function CTA() {
  const { t } = useLanguage();
  const c = t.cta;

  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <div className="reveal">
          <div className="kicker">{c.kicker}</div>
          <h2>{c.title}</h2>
          <p>{c.body}</p>
        </div>
        <div className="cta-actions reveal">
          <StartLink className="btn btn-blue" loggedInTo="/pricing">
            {c.startNow}
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </StartLink>
          <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">{c.contactSales}</a>
        </div>
      </div>
    </section>
  );
}
