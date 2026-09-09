import { useEffect } from 'react';

/**
 * Soft gradient orb that follows the mouse — additive, desktop only.
 */
export default function CursorGlow() {
  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const motionOk = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || !motionOk) return;

    const orb = document.querySelector('.cursor-glow');
    const ring = document.querySelector('.cursor-ring');
    if (!orb || !ring) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let tx = x;
    let ty = y;
    let hovering = false;
    let raf = 0;

    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      orb.classList.add('on');
      ring.classList.add('on');
    };

    const onEnterInteractive = () => {
      hovering = true;
      ring.classList.add('hot');
      orb.classList.add('hot');
    };
    const onLeaveInteractive = () => {
      hovering = false;
      ring.classList.remove('hot');
      orb.classList.remove('hot');
    };

    const tick = () => {
      // lag for smooth trailing
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      x += (tx - x) * 0.28;
      y += (ty - y) * 0.28;

      orb.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)${hovering ? ' scale(1.55)' : ''}`;

      raf = requestAnimationFrame(tick);
    };

    const selectors = 'a, button, .btn, .product-card, .nav-link, .live-chip, .fp-benefit, .gn-node';
    document.querySelectorAll(selectors).forEach((el) => {
      el.addEventListener('pointerenter', onEnterInteractive);
      el.addEventListener('pointerleave', onLeaveInteractive);
    });

    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.querySelectorAll(selectors).forEach((el) => {
        el.removeEventListener('pointerenter', onEnterInteractive);
        el.removeEventListener('pointerleave', onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
    </>
  );
}
