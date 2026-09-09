import { useEffect } from 'react';

/**
 * Ported 1:1 from the original inline <script>:
 * observes every .reveal element and adds .in when it scrolls into view,
 * staggering the transition-delay the same way the static page did.
 */
export default function useRevealOnScroll() {
  useEffect(() => {
    const reveal = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.15 }
    );

    reveal.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index * 0.035, 0.22)}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
