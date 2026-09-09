import { useLanguage } from '../context/LanguageContext.jsx';
import { CONTACT_URL, CONTACT_USER } from '../data/site.js';

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  const columns = [
    {
      title: f.products,
      links: [
        { label: 'Payments', href: '/menu/products/payments' },
        { label: 'Billing', href: '/menu/products/billing' },
        { label: 'Connect', href: '/menu/products/connect' },
        { label: 'Radar', href: '/menu/products/radar' },
      ],
    },
    {
      title: f.useCases,
      links: [
        { label: 'Ecommerce', href: '/menu/solutions/e-commerce' },
        { label: 'SaaS', href: '/menu/solutions/saas' },
        { label: 'Marketplaces', href: '/menu/solutions/marketplaces' },
        { label: 'Startups', href: '/menu/solutions/startups' },
      ],
    },
    {
      title: f.developers,
      links: [
        { label: 'Docs', href: '/menu/developers/documentation' },
        { label: 'API reference', href: '/menu/developers/api-reference' },
        { label: 'Status', href: '/menu/developers/api-status' },
        { label: 'Changelog', href: '/menu/developers/changelog' },
      ],
    },
    {
      title: f.company,
      links: [
        { label: 'About', href: '/' },
        { label: 'Customers', href: '/' },
        { label: 'Careers', href: '/' },
        { label: 'Contact', href: CONTACT_URL, external: true },
      ],
    },
  ];

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <a className="brand" style={{ color: 'var(--ink)', marginBottom: 12 }} href="/">
              <span className="brand-mark"></span>fluxa
            </a>
            <p>{f.tagline}</p>
            <div className="social-row">
              <a href={CONTACT_URL} className="social-icon" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 5 2 12.5l5.5 1.5L18 8l-8 8v3l3-2.5L19 19.5 21 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </a>
              <a href={`https://x.com/${CONTACT_USER}`} className="social-icon" aria-label="X" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </a>
              <a href={CONTACT_URL} className="social-icon" aria-label="Contact" target="_blank" rel="noopener noreferrer">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M3 12h3l2 5 4-14 2 9h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <a className="footer-contact-link" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              @{CONTACT_USER}
            </a>
          </div>
          {columns.map(({ title, links }) => (
            <div key={title}>
              <h4>{title}</h4>
              {links.map((link) =>
                link.external ? (
                  <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}
        </div>
        <p className="copyright">
          {f.copyright}
          {' · '}
          <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blue)', fontWeight: 650 }}>
            @{CONTACT_USER}
          </a>
        </p>
      </div>
    </footer>
  );
}
