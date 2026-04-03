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

// Calendly Integration
window.addEventListener('load', function() {
  if (window.Calendly) {
    const isEn = window.location.pathname.includes('/en/');
    Calendly.initBadgeWidget({
      url: 'https://calendly.com/digitalaiz-rauls',
      text: isEn ? 'Schedule a call' : 'Termin vereinbaren',
      color: '#2dd4bf',
      textColor: '#080808',
      branding: false
    });
  }
});
