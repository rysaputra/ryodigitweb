/**
 * Ryo Digital - Navigation
 * Mobile menu toggle, sticky navbar shrink, active link highlighting
 */
export function initNav() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.getElementById('navbar-toggle');
  const menu = document.getElementById('navbar-menu');
  
  if (!navbar || !toggle || !menu) return;
  
  // Sticky navbar shrink on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
  
  // Mobile menu toggle
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen.toString());
    toggle.setAttribute('aria-label', isOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  
  // Close menu when clicking a link
  menu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Buka menu navigasi');
        document.body.style.overflow = '';
      }
    });
  });
  
  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('is-open') && 
        !menu.contains(e.target) && 
        !toggle.contains(e.target)) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Buka menu navigasi');
      document.body.style.overflow = '';
    }
  });
  
  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Buka menu navigasi');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });
  
  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');
  
  const updateActiveLink = () => {
    const scrollY = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('is-active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('is-active');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}