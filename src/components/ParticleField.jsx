import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { usePageCopy } from '../data/pageCopy.js';

/**
 * Interactive particle constellation — mouse attracts nodes, links draw nearby.
 * Large visual band for the landing page.
 */
export default function ParticleField() {
  const { lang } = useLanguage();
  const { particles: pf } = usePageCopy(lang);
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    const mouse = { x: -9999, y: -9999, active: false };
    const particles = [];

    const COUNT = reduced ? 40 : 90;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = Math.max(360, Math.min(520, rect.width * 0.42));
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: 1.2 + Math.random() * 2.2,
          hue: [255, 320, 190, 200][i % 4],
        });
      }
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      // soft vignette center glow
      const g = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.55);
      g.addColorStop(0, 'rgba(99,91,255,0.07)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (const p of particles) {
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 160) {
            const f = (1 - dist / 160) * 0.045;
            p.vx += dx * f * 0.08;
            p.vy += dy * f * 0.08;
          }
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.992;
        p.vy *= 0.992;

        // gentle wander
        p.vx += (Math.random() - 0.5) * 0.02;
        p.vy += (Math.random() - 0.5) * 0.02;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(160, 180, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
        // link to mouse
        if (mouse.active) {
          const a = particles[i];
          const dist = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 70%, 0.9)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, 0.12)`;
        ctx.fill();
      }

      // mouse core
      if (mouse.active) {
        const mg = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 40);
        mg.addColorStop(0, 'rgba(255,255,255,0.55)');
        mg.addColorStop(0.3, 'rgba(99,91,255,0.35)');
        mg.addColorStop(1, 'rgba(99,91,255,0)');
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
        ctx.fillStyle = mg;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    spawn();
    tick();

    window.addEventListener('resize', () => {
      resize();
      spawn();
    });
    canvas.addEventListener('pointermove', onMove, { passive: true });
    canvas.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section className="particle-field reveal">
      <div className="wrap">
        <div className="particle-field-head">
          <div className="kicker">{pf.kicker}</div>
          <h2>{pf.title}</h2>
          <p>{pf.body}</p>
        </div>
        <div className="particle-field-frame" ref={wrapRef}>
          <canvas ref={canvasRef} className="particle-field-canvas" />
          <div className="particle-field-hint">{pf.hint}</div>
        </div>
      </div>
    </section>
  );
}
