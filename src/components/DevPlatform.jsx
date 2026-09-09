import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';

export default function DevPlatform() {
  const { lang } = useLanguage();
  const { dev } = usePageCopy(lang);
  const Check = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="m4 10 4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
  );

  return (
    <section className="section">
      <div className="wrap dev-grid">
        <div className="code-window reveal">
          <div className="code-tabs"><i></i><i></i><i></i></div>
          <pre>
            <span className="c-muted">{dev.codeComment}</span>
            {'\n'}<span className="c-pink">const</span> session = <span className="c-pink">await</span> fluxa.checkout.create({'{'}
            {'\n'}  amount: <span className="c-green">12800</span>,
            {'\n'}  currency: <span className="c-green">'usd'</span>,
            {'\n'}  automatic_payment_methods: {'{'} enabled: <span className="c-green">true</span> {'}'},
            {'\n'}  success_url: <span className="c-green">'https://example.com/success'</span>
            {'\n'}{'}'});
            {'\n\n'}redirectToCheckout(session.url);
          </pre>
        </div>
        <div className="reveal">
          <div className="kicker">{dev.kicker}</div>
          <h2>{dev.title}</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.65 }}>{dev.body}</p>
          <ul className="check-list">
            {dev.items.map((item) => (
              <li key={item}><Check />{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
