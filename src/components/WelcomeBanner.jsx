import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';

export default function WelcomeBanner() {
  const { isLoggedIn, user, logout } = useAuth();
  const { lang } = useLanguage();
  const { welcome: w } = usePageCopy(lang);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isLoggedIn || !user) {
      setVisible(false);
      setShow(false);
      return;
    }
    setVisible(true);
    const t = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(t);
  }, [isLoggedIn, user]);

  if (!visible || !user) return null;

  return (
    <div className={`welcome-banner${show ? ' show' : ''}`} role="status">
      <div className="welcome-banner-inner wrap">
        <div className="welcome-banner-text">
          <span className="welcome-dot" aria-hidden="true" />
          <div>
            <strong>{w.back} {user.nick}</strong>
            <span>{w.signed} {user.email}</span>
          </div>
        </div>
        <div className="welcome-banner-actions">
          <button type="button" className="welcome-dismiss" onClick={() => setShow(false)}>
            {w.gotIt}
          </button>
          <button type="button" className="welcome-logout" onClick={logout}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
