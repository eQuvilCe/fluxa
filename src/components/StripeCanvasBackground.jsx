import { useEffect, useRef } from 'react';

/**
 * This is the standalone canvas gradient effect that was pasted in the
 * middle of the original index.html (its own <style>/<canvas>/<script>,
 * complete with a second, unused <head>/<body>). Logic is untouched —
 * only `getElementById('stripe-canvas')` was swapped for a React ref so
 * it can mount safely inside the component tree.
 */
export default function StripeCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width, height;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let time = 0;
    let frameId;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function onMouseMove(e) {
      targetX = (e.clientX / width - 0.5) * 80;
      targetY = (e.clientY / height - 0.5) * 80;
    }

    function draw() {
      time += 0.008;

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(
        width * 0.2 + Math.sin(time) * 40, 0,
        width + mouseX, height + mouseY
      );

      gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
      gradient.addColorStop(0.25, 'rgba(99, 102, 241, 0.85)');
      gradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.85)');
      gradient.addColorStop(0.75, 'rgba(249, 115, 22, 0.9)');
      gradient.addColorStop(1, 'rgba(234, 179, 8, 0.9)');

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.moveTo(width * 0.35 + mouseX, 0);
      ctx.bezierCurveTo(
        width * 0.55 + Math.sin(time) * 60, height * 0.3,
        width * 0.75 + Math.cos(time) * 60, height * 0.65,
        width + 100, height * 0.95 + mouseY
      );
      ctx.lineTo(width + 200, 0);
      ctx.closePath();
      ctx.fill();

      frameId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    draw();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <canvas id="stripe-canvas" ref={canvasRef}></canvas>;
}
