import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import { NAV_LINKS } from '../data/navLinks.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { getFeatureCopy, UI_STRINGS } from '../data/featureCopy.js';
import ScrollProgress from '../components/ScrollProgress.jsx';
import CursorGlow from '../components/CursorGlow.jsx';
import { CONTACT_URL } from '../data/site.js';
import StartLink from '../components/StartLink.jsx';

function findItem(categorySlug, itemSlug) {
  const category = NAV_LINKS.find((n) => n.key === categorySlug);
  if (!category || !category.columns) {
    // still allow orphan slugs (e.g. issuing from homepage tiles)
    if (itemSlug) {
      return {
        category: { key: categorySlug || 'products' },
        item: { titleKey: itemSlug, descKey: itemSlug, slug: itemSlug, icon: 'box' },
        headingKey: null,
        accent: 'blue',
      };
    }
    return { category: null, item: null };
  }

  for (const col of category.columns) {
    const item = col.items.find((i) => i.slug === itemSlug);
    if (item) return { category, item, headingKey: col.headingKey, accent: col.accent };
  }
  // slug not in nav — still render a synthetic page from featureCopy
  if (itemSlug) {
    return {
      category,
      item: { titleKey: itemSlug, descKey: itemSlug, slug: itemSlug, icon: 'box' },
      headingKey: null,
      accent: 'blue',
    };
  }
  return { category, item: null };
}

export default function FeaturePage() {
  const { category: categorySlug, item: itemSlug } = useParams();
  const { category, item, headingKey, accent = 'blue' } = findItem(categorySlug, itemSlug);
  const { lang, t } = useLanguage();
  const ui = UI_STRINGS[lang] || UI_STRINGS.en;
  const humanize = (key) =>
    String(key || '')
      .replace(/([A-Z])/g, ' $1')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
      .trim();
  const label = (key) => t.nav[key] || humanize(key);

  useEffect(() => {
    const els = document.querySelectorAll('.fp-reveal');
    els.forEach((el) => el.classList.remove('in'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.12 }
    );
    // trigger hero immediately
    requestAnimationFrame(() => {
      document.querySelectorAll('.fp-hero .fp-reveal').forEach((el) => el.classList.add('in'));
    });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [itemSlug, lang]);

  if (!item) {
    return (
      <div className="feature-page">
        <ScrollProgress />
      <CursorGlow />
        <Nav />
        <section className="section">
          <div className="wrap">
            <div className="section-head fp-reveal in">
              <div className="kicker">{ui.notFoundKicker}</div>
              <h2>{ui.notFoundTitle}</h2>
              <p>{ui.notFoundBody}</p>
              <Link className="btn btn-dark" to="/" style={{ marginTop: 24, display: 'inline-flex' }}>
                {ui.back}
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const title = label(item.titleKey);
  const desc = label(item.descKey);
  const catLabel = label(category.key);
  const headLabel = headingKey ? label(headingKey) : '';
  const slug = item.slug;
  const copy = getFeatureCopy(item.slug, lang);
  const headline = copy.headline || title;
  const lead = copy.lead || desc;
  const layout = copy.layout || 'split';
  const anim = copy.anim || 'bars';

  return (
    <div className={`feature-page layout-${layout} anim-${anim}`}>
      <ScrollProgress />
      <Nav />

      <section className="section fp-hero">
        <div className={`wrap fp-hero-grid layout-${layout}`}>
          <div className="section-head fp-reveal">
            <div className="kicker">
              {catLabel}
              {headLabel ? ` · ${headLabel}` : ''}
            </div>
            <h2>{headline}</h2>
            <p>{lead}</p>
            <div className="fp-hero-actions">
              <StartLink className="btn btn-dark" loggedInTo="/pricing">
                {ui.startNow}
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </StartLink>
              <Link className="btn btn-ghost" to="/">
                {ui.back}
              </Link>
            </div>
          </div>

          <div className={`feature-visual accent-${accent} anim-${anim}`} aria-label={`${title} illustration`}>
            <div className="feature-visual-glow"></div>
            <div className="feature-orbit orbit-a"></div>
            <div className="feature-orbit orbit-b"></div>

            {anim === 'shield' && (
              <div className="fp-shield-ring" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
            )}
            {anim === 'pulse' && <div className="fp-pulse-ring" aria-hidden="true"></div>}

            <div className="feature-card-main">
              <div className="feature-card-top">
                <span className="feature-mini-dot"></span>
                <span className="feature-mini-dot"></span>
                <span className="feature-mini-dot"></span>
                <span className="feature-live">{ui.live}</span>
              </div>
              <div className="feature-card-icon">✦</div>
              <small>Fluxa · {headLabel || title}</small>
              <strong>{title}</strong>
              <div className="feature-bars">
                <i></i><i></i><i></i><i></i><i></i><i></i>
              </div>
              <div className="feature-card-footer">
                <span>{ui.performance}</span>
                <b>+24.8%</b>
              </div>
            </div>
            <div className="feature-float-chip chip-one">
              <span>✓</span> {ui.connected}
            </div>
            <div className="feature-float-chip chip-two">
              <span>↗</span> {ui.growing}
            </div>
          </div>
        </div>
      </section>

      <section className="fp-stats">
        <div className="wrap fp-stats-grid">
          {ui.stats.map((s, i) => (
            <div className="fp-stat fp-reveal" style={{ '--i': i }} key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <div className="section-head fp-reveal">
            <div className="kicker">{title}</div>
            <h2>{ui.benefitsTitle}</h2>
          </div>
          <div className={`fp-benefits layout-${layout}`}>
            {copy.benefits.map((b, i) => (
              <article className="fp-benefit fp-reveal" style={{ '--i': i }} key={b.title}>
                <div className={`fp-benefit-num accent-${accent}`}>{String(i + 1).padStart(2, '0')}</div>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head fp-reveal">
            <div className="kicker">{title}</div>
            <h2>{ui.stepsTitle}</h2>
          </div>
          <div className={`fp-steps layout-${layout}`}>
            {copy.steps.map((s, i) => (
              <div className="fp-step fp-reveal" style={{ '--i': i }} key={s.n}>
                <div className={`fp-step-n accent-${accent}`}>{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                {layout === 'timeline' && i < copy.steps.length - 1 && (
                  <div className="fp-step-line" aria-hidden="true"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="section fp-deep">
        <div className="wrap fp-deep-grid">
          <div className="fp-deep-copy fp-reveal">
            <div className="kicker">{title}</div>
            <h2>{lang === 'ru' ? 'Всё, что нужно для запуска' : lang === 'uz' ? 'Ishga tushirish uchun kerakli' : 'Everything you need to ship'}</h2>
            <p>{lead}</p>
            <ul className="fp-deep-list">
              {(copy.benefits || []).slice(0, 3).map((b) => (
                <li key={b.title}><strong>{b.title}</strong> — {b.body}</li>
              ))}
            </ul>
          </div>
          <div className="fp-deep-panel fp-reveal" aria-hidden="true">
            <div className="fp-deep-panel-top"><i /><i /><i /><span>fluxa · {item.slug}</span></div>
            <pre>{JSON.stringify({ product: item.slug, status: 'ready', region: 'global', docs: '/menu/developers/documentation' }, null, 2)}</pre>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap cta-inner">
          <div className="fp-reveal">
            <div className="kicker">{title}</div>
            <h2>{ui.ctaTitle}</h2>
            <p>{ui.ctaBody}</p>
          </div>
          <div className="cta-actions fp-reveal">
            <StartLink className="btn btn-blue" loggedInTo="/pricing">
              {ui.startNow}
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </StartLink>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {ui.contactSales}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
