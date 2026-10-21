/**
 * Ryo Digital - Counter Animation
 * Animated number counters using IntersectionObserver
 */
export function initCounter() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.counter, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();
    
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      
      el.textContent = `${prefix}${current}${suffix}`;
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${prefix}${target}${suffix}`;
      }
    };
    
    requestAnimationFrame(step);
  };
  
  // If reduced motion, show final values immediately
  if (prefersReducedMotion) {
    counters.forEach(el => {
      const target = parseInt(el.dataset.counter, 10);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      el.textContent = `${prefix}${target}${suffix}`;
    });
    return;
  }
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}