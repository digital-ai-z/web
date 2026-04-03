// Modal logic
const modal = document.getElementById('impressum-modal');
const modalContent = document.getElementById('modal-body-content');
const openModal = document.getElementById('impressum-link');
const closeModal = document.getElementById('close-modal');

if (openModal && modal && closeModal) {
  const loadImpressum = async () => {
    const lang = document.documentElement.lang || 'de';
    const filePath = `${lang}/impressum.html`;
    
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Failed to load');
      }
      
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const content = doc.querySelector('.container') || doc.body;
      
      modalContent.innerHTML = content.innerHTML;
      modalContent.dataset.lang = lang;
    } catch (err) {
      modalContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
      console.error(err);
    }
  };

  openModal.addEventListener('click', async (e) => {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    const currentLang = document.documentElement.lang || 'de';
    if (modalContent.dataset.lang !== currentLang) {
       await loadImpressum();
    }
  });

  const close = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeModal.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) close();
  });

  // Listen for language changes to update the modal content if it's open
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      if (modal.classList.contains('active')) {
        loadImpressum();
      }
    });
  }
}
