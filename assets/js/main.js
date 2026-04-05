// Preserve anchor hash when switching language
const langToggle = document.getElementById('lang-toggle');
const mobileLang = document.querySelector('.mobile-lang');

const applyHashToLangLinks = () => {
  const hash = window.location.hash;
  [langToggle, mobileLang].forEach(el => {
    if (!el) return;
    const base = el.getAttribute('href').split('#')[0];
    el.setAttribute('href', hash ? base + hash : base);
  });
};

applyHashToLangLinks();
window.addEventListener('hashchange', applyHashToLangLinks);

const nav = document.getElementById('main-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  const openMenu = () => {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    hamburger.classList.contains('open') ? closeMenu() : openMenu();
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
  });
}

const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealElement = (el) => {
  el.classList.add('visible');
};

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const minVisibleRatio = entry.target.classList.contains('step') ? 0.2 : 0.28;
      if (entry.isIntersecting && entry.intersectionRatio >= minVisibleRatio) {
        revealElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: [0, 0.2, 0.28, 0.4],
    rootMargin: '0px 0px -8% 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));
} else {
  const revealOnScroll = () => {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.78) {
        revealElement(el);
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();
}
