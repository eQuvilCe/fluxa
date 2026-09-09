import { useEffect } from 'react';

/** Thin rainbow progress bar at the top of the viewport — Stripe-style. */
export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.querySelector('.stripe-scroll-progress');
    if (!bar) return;

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      bar.style.width = `${p}%`;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="stripe-scroll-progress" aria-hidden="true" />;
}
