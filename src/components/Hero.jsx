import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { CONTACT_URL } from '../data/site.js';
import StartLink from './StartLink.jsx';

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="notice reveal"><span>{h.noticeNew}</span> {h.notice}</div>
          <h1 className="reveal">{h.title}</h1>
          <p className="reveal">{h.body}</p>
          <div className="hero-actions reveal">
            <StartLink className="btn btn-dark" loggedInTo="/pricing">
              {h.startNow}
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </StartLink>
            <a className="link-arrow" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
              {h.contactSales}
              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>

        <div className="device-stage" aria-label="Payment dashboard preview">
          <div className="phone reveal">
            <div className="phone-screen">
              <div className="checkout-head">
                <small>Checkout</small>
                <strong>$128.00</strong>
              </div>
              <div className="pay-row"><b>Card</b><span>•••• 4242</span></div>
              <div className="pay-row"><b>Link</b><span>1-tap ready</span></div>
              <div className="card-line"></div>
              <div className="card-line short"></div>
              <div className="apple-pay">Pay now</div>
            </div>
          </div>

          <div className="dashboard reveal">
            <div className="dash-top"><i className="dot"></i><i className="dot"></i><i className="dot"></i></div>
            <div className="dash-body">
              <div className="dash-side">
                <div className="side-line active"></div>
                <div className="side-line"></div>
                <div className="side-line"></div>
                <div className="side-line"></div>
                <div className="side-line"></div>
              </div>
              <div className="dash-main">
                <small>Gross volume</small>
                <h3>$482,914</h3>
                <div className="chart" aria-hidden="true">
                  <span className="bar"></span><span className="bar"></span><span className="bar"></span><span className="bar"></span><span className="bar"></span><span className="bar"></span><span className="bar"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="float-card reveal">
            <small>Recovered revenue</small>
            <strong>+$38.2k</strong>
            <div className="spark" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
