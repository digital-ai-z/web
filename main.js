// 1. Nav background on scroll
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 32);
}, { passive: true });

// 2. Scroll-reveal
const observer = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 3. Language toggle
const html = document.documentElement;
const btn  = document.getElementById('lang-toggle');
btn.addEventListener('click', () => {
  const toEN = html.classList.contains('lang-de');
  html.classList.toggle('lang-de', !toEN);
  html.classList.toggle('lang-en',  toEN);
  html.lang  = toEN ? 'en' : 'de';
  btn.textContent = toEN ? 'DE' : 'EN';
});
