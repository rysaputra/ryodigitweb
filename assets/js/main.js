/**
 * Ryo Digital - Main Entry Point
 * ES Module that bootstraps all functionality
 */
import { initNav } from './nav.js';
import { initReveal } from './reveal.js';
import { initCounter } from './counter.js';

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initCounter();
  initSpotlight();
  initBackToTop();
  initSmoothScroll();
});

/**
 * Spotlight effect: gradient follows cursor on service cards
 */
function initSpotlight() {
  const cards = document.querySelectorAll('[data-spotlight]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) return;
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
      card.style.setProperty('--spotlight-opacity', '1');
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--spotlight-opacity', '0');
    });
    
    card.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      const rect = card.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      card.style.setProperty('--spotlight-x', `${x}px`);
      card.style.setProperty('--spotlight-y', `${y}px`);
      card.style.setProperty('--spotlight-opacity', '1');
    });
    
    card.addEventListener('touchend', () => {
      card.style.setProperty('--spotlight-opacity', '0');
    });
  });
}

/**
 * Back to top button
 */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  };
  
  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Smooth scroll for anchor links (fallback for older browsers)
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#' || !targetId) return;
      
      const target = document.querySelector(targetId);
      if (!target) return;
      
      e.preventDefault();
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
      
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth'
      });
      
      // Update URL without jump
      history.pushState(null, '', targetId);
    });
  });
}