import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';

export default function IntegrationBand() {
  const { lang } = useLanguage();
  const { integration: i } = usePageCopy(lang);

  return (
    <section className="integration-band">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="kicker">{i.kicker}</div>
          <h2>{i.title}</h2>
          <p>{i.body}</p>
        </div>
        <div className="int-grid">
          <div className="int-card reveal">
            <div className="int-visual">
              <div className="int-chat">
                <div className="chat-bubble">{i.c1a}</div>
                <div className="chat-bubble you">{i.c1b}</div>
              </div>
              <div className="int-pay">
                <small>Glow Day Cream</small>
                <strong>$19.99</strong>
                <div className="qr" aria-hidden="true"></div>
              </div>
            </div>
            <p>{i.c1}</p>
          </div>
          <div className="int-card reveal">
            <div className="int-visual">
              <div className="int-logos" aria-hidden="true">
                <div className="int-logo">Shop</div><div className="int-logo">Cart</div><div className="int-logo">Site</div><div className="int-logo">CRM</div>
                <div className="int-logo">Flow</div><div className="int-logo">Book</div><div className="int-logo">Mail</div><div className="int-logo">Pay</div>
              </div>
            </div>
            <p>{i.c2}</p>
          </div>
          <div className="int-card reveal">
            <div className="int-visual">
              <div className="int-code">
                <span className="c-muted2">// Build your own</span><br />
                <span className="c-pink2">const</span> fluxa = require(<span className="c-cyan">'fluxa'</span>)(<span className="c-cyan">'sk_test_•••'</span>);<br />
                <span className="c-pink2">await</span> fluxa.accounts.create();<br />
                <span className="c-pink2">await</span> fluxa.transfers.create();<span className="cursor"></span>
              </div>
            </div>
            <p>{i.c3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
