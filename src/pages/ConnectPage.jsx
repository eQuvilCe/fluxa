import { Link } from 'react-router-dom';
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';

export default function ConnectPage() {
  return (
    <div className="connect-page">
      <Nav />

      <main>
        <section className="connect-hero">
          <div className="connect-orb orb-one" aria-hidden="true"></div>
          <div className="connect-orb orb-two" aria-hidden="true"></div>

          <div className="wrap connect-hero-grid">
            <div className="connect-copy connect-reveal">
              <div className="kicker">Products · Money movement</div>
              <h1>Connect payments, people, and platforms.</h1>
              <p>
                Give every seller a simple way to get paid while Fluxa handles onboarding,
                payouts, and the hard parts of platform payments.
              </p>
              <div className="connect-actions">
                <Link className="btn btn-dark connect-main-btn" to="/signup">
                  Start building
                  <span aria-hidden="true">→</span>
                </Link>
                <Link className="connect-text-btn" to="/">
                  Explore Fluxa
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            <div className="connect-visual connect-reveal delay-one" aria-label="Animated platform payments illustration">
              <div className="connect-glow"></div>
              <div className="connect-window">
                <div className="connect-window-top">
                  <span></span><span></span><span></span>
                  <strong>Fluxa Connect</strong>
                </div>
                <div className="connect-window-body">
                  <div className="connect-sidebar">
                    <i className="active"></i><i></i><i></i><i></i>
                  </div>
                  <div className="connect-dashboard">
                    <small>Connected accounts</small>
                    <div className="connect-total">2,481</div>
                    <div className="connect-chart">
                      <b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b>
                    </div>
                    <div className="connect-status-row">
                      <span><i className="status-dot"></i> Payments active</span>
                      <strong>98.4%</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="connect-payment-card">
                <div className="payment-icon">↗</div>
                <div>
                  <small>New payout</small>
                  <strong>$8,420.00</strong>
                </div>
                <span className="payment-check">✓</span>
              </div>

              <div className="connect-node node-one"><span></span>Seller</div>
              <div className="connect-node node-two"><span></span>Platform</div>
              <div className="connect-line line-one"></div>
              <div className="connect-line line-two"></div>
            </div>
          </div>
        </section>

        <section className="connect-features section">
          <div className="wrap">
            <div className="section-head connect-reveal">
              <div className="kicker">Built for platforms</div>
              <h2>One connection. Endless possibilities.</h2>
              <p>Onboard sellers faster, route money automatically, and keep the experience completely inside your product.</p>
            </div>

            <div className="connect-feature-grid">
              <article className="connect-feature-card connect-reveal">
                <span className="feature-number">01</span>
                <h3>Instant onboarding</h3>
                <p>Bring new sellers onto your platform with a clean, guided flow that feels native to your brand.</p>
              </article>
              <article className="connect-feature-card connect-reveal delay-one">
                <span className="feature-number">02</span>
                <h3>Smart payouts</h3>
                <p>Move funds to connected accounts with flexible schedules, transparent status, and fewer manual steps.</p>
              </article>
              <article className="connect-feature-card connect-reveal delay-two">
                <span className="feature-number">03</span>
                <h3>Scale without friction</h3>
                <p>Use one platform to manage thousands of accounts while Fluxa takes care of the payment infrastructure.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
