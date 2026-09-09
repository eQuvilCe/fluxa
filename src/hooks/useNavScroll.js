import { useEffect, useState } from 'react';

/**
 * Ported from the original inline <script>: toggles the nav's
 * "scrolled" state past 12px of scroll. Mobile menu open/close
 * state is handled locally in Nav.jsx instead of the DOM class
 * toggling the original script did, since that's now React state.
 */
export default function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateNav = () => setScrolled(window.scrollY > 12);
    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
    return () => window.removeEventListener('scroll', updateNav);
  }, []);

  return scrolled;
}
