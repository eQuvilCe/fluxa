import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useNavScroll from '../hooks/useNavScroll.js';
import { useAuth } from '../context/AuthContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { NAV_LINKS } from '../data/navLinks.js';
import { LANGS } from '../data/translations.js';
import { usePageCopy } from '../data/pageCopy.js';
import NavIcon from './NavIcon.jsx';
import { CONTACT_URL } from '../data/site.js';

export default function Nav() {
  const scrolled = useNavScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  const [langOpen, setLangOpen] = useState(false);
  const linksRef = useRef(null);
  const { isLoggedIn, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const { welcome: w } = usePageCopy(lang);

  const closeMenu = () => setMenuOpen(false);

  const movePill = (el) => {
    if (!el || !linksRef.current) return;
    const parentBox = linksRef.current.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    setPill({ left: box.left - parentBox.left, width: box.width, opacity: 1 });
  };
  const hidePill = () => setPill((p) => ({ ...p, opacity: 0 }));

  const label = (key) => t.nav[key] || key;

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap nav-inner">
        <Link className="brand" to="/">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 32 24" width="28" height="22" fill="none">
              <rect x="1" y="1" width="30" height="22" rx="6" fill="url(#fxg)"/>
              <path d="M9 7h8.5c2.4 0 4 1.4 4 3.4 0 1.5-.8 2.7-2.1 3.2L22 17h-3.2l-2.3-3.1H12V17H9V7zm3 2.2v2.6h5c1.1 0 1.7-.5 1.7-1.3S18.1 9.2 17 9.2H12z" fill="#fff"/>
              <defs>
                <linearGradient id="fxg" x1="0" y1="0" x2="32" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#635BFF"/>
                  <stop offset=".55" stopColor="#00D4FF"/>
                  <stop offset="1" stopColor="#FF5A9E"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          fluxa
        </Link>
        <nav className="nav-links" aria-label="Primary navigation" ref={linksRef} onMouseLeave={hidePill}>
          <span
            className="nav-pill"
            style={{ transform: `translateX(${pill.left}px)`, width: pill.width, opacity: pill.opacity }}
            aria-hidden="true"
          />
          {NAV_LINKS.map((item) =>
            item.columns ? (
              <div
                className={`nav-item has-dropdown${openDropdown === item.key ? ' open' : ''}`}
                key={item.key}
                onMouseEnter={(e) => {
                  setOpenDropdown(item.key);
                  movePill(e.currentTarget);
                }}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="nav-link"
                  aria-expanded={openDropdown === item.key}
                  onClick={() => setOpenDropdown((cur) => (cur === item.key ? null : item.key))}
                >
                  <span>{label(item.key)}</span>
                  <svg className="nav-caret" width="10" height="10" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="nav-dropdown" role="menu">
                  <div className="nav-dropdown-inner">
                    {item.columns.map((col, colIdx) => (
                      <div
                        className="nav-dropdown-col"
                        key={col.headingKey}
                        style={{ '--col-i': colIdx }}
                      >
                        <div className="nav-dropdown-heading">{label(col.headingKey)}</div>
                        {col.items.map((sub, i) => (
                          <Link
                            className="nav-dropdown-item"
                            to={
                              sub.slug === 'connect'
                                ? '/menu/products/connect'
                                : `/menu/${item.key}/${sub.slug}`
                            }
                            key={sub.titleKey}
                            style={{ '--i': i }}
                            onMouseMove={(e) => {
                              const r = e.currentTarget.getBoundingClientRect();
                              e.currentTarget.style.setProperty('--ix', `${e.clientX - r.left}px`);
                              e.currentTarget.style.setProperty('--iy', `${e.clientY - r.top}px`);
                            }}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span className={`nav-dropdown-icon accent-${col.accent}`}>
                              <NavIcon name={sub.icon} />
                            </span>
                            <span className="nav-dropdown-item-text">
                              <span className="nav-dropdown-item-title">{label(sub.titleKey)}</span>
                              <span className="nav-dropdown-item-desc">{label(sub.descKey)}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="nav-item" key={item.key} onMouseEnter={(e) => movePill(e.currentTarget)}>
                <Link className="nav-link" to="/pricing">
                  <span>{label(item.key)}</span>
                </Link>
              </div>
            )
          )}
        </nav>
        <div className="nav-actions">
          <div className={`lang-switcher${langOpen ? ' open' : ''}`}>
            <button
              type="button"
              className="lang-btn"
              aria-label="Change language"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((v) => !v)}
            >
              {LANGS.find((l) => l.code === lang)?.label || 'EN'}
              <svg width="10" height="10" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="lang-menu" role="listbox">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  className={`lang-option${lang === l.code ? ' active' : ''}`}
                  role="option"
                  aria-selected={lang === l.code}
                  onClick={() => {
                    setLang(l.code);
                    setLangOpen(false);
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>

          {isLoggedIn && user ? (
            <div className="nav-user">
              <span className="nav-user-nick">{w.hi} {user.nick}</span>
              <button type="button" className="nav-user-logout" onClick={logout}>{w.logout}</button>
            </div>
          ) : (
            <Link className="signin" to="/login">
              {t.nav.signIn}
            </Link>
          )}
          <a className="btn btn-light" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
            {t.nav.contactSales}
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <button
          className={`menu-btn${menuOpen ? ' open' : ''}`}
          id="menuBtn"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path className="l1" d="M4 6h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path className="l2" d="M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path className="l3" d="M4 14h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobileMenu" aria-label="Mobile navigation">
        <div className="wrap mobile-menu-inner">
          {NAV_LINKS.map((item) =>
            item.columns ? (
              <details className="mobile-menu-group" key={item.key}>
                <summary>{label(item.key)}</summary>
                <div className="mobile-menu-sub">
                  {item.columns
                    .flatMap((col) => col.items.map((sub) => ({ ...sub, accent: col.accent })))
                    .map((sub) => (
                      <Link
                        to={
                          sub.slug === 'connect'
                            ? '/menu/products/connect'
                            : `/menu/${item.key}/${sub.slug}`
                        }
                        key={sub.titleKey}
                        onClick={closeMenu}
                      >
                        <span className={`nav-dropdown-icon accent-${sub.accent}`}>
                          <NavIcon name={sub.icon} />
                        </span>
                        {label(sub.titleKey)}
                      </Link>
                    ))}
                </div>
              </details>
            ) : (
              <Link to="/pricing" key={item.key} onClick={closeMenu}>
                {label(item.key)}
              </Link>
            )
          )}
          {isLoggedIn && user ? (
            <div className="mobile-user">
              <span>{w.hi} {user.nick}</span>
              <button type="button" onClick={() => { logout(); closeMenu(); }}>{w.logout}</button>
            </div>
          ) : (
            <Link to="/login" onClick={closeMenu}>
              {t.nav.signIn}
            </Link>
          )}
          <div className="mobile-controls">
            <div className="mobile-lang">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  className={`lang-option${lang === l.code ? ' active' : ''}`}
                  onClick={() => setLang(l.code)}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
