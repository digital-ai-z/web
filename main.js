// Navigation scroll effect
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

// Scroll-reveal animations
const reveals = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Language switching logic
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    const isDe = document.documentElement.classList.contains('lang-de');
    if (isDe) {
      document.documentElement.classList.remove('lang-de');
      document.documentElement.classList.add('lang-en');
      document.documentElement.lang = 'en';
      langToggle.textContent = 'DE';
    } else {
      document.documentElement.classList.remove('lang-en');
      document.documentElement.classList.add('lang-de');
      document.documentElement.lang = 'de';
      langToggle.textContent = 'EN';
    }
  });
}
