import { useEffect } from 'react';

/** Pointer spotlight on .product-card elements (Stripe interactive card feel). */
export default function useCardSpotlight() {
  useEffect(() => {
    const cards = document.querySelectorAll('.product-card');
    if (!cards.length) return;

    const onMove = (e) => {
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };

    cards.forEach((c) => c.addEventListener('pointermove', onMove));
    return () => cards.forEach((c) => c.removeEventListener('pointermove', onMove));
  }, []);
}
