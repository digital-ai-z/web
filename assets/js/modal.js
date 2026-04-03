// Modal logic
const modal = document.getElementById('impressum-modal');
const modalContent = document.getElementById('modal-body-content');
const openImpressum = document.getElementById('impressum-link');
const openDatenschutz = document.getElementById('datenschutz-link');
const closeModal = document.getElementById('close-modal');

if (modal && modalContent && closeModal) {
  const loadContent = async (type) => {
    const lang = document.documentElement.lang || 'de';
    const isRoot = !window.location.pathname.includes('/en/');
    const prefix = isRoot ? '' : '../';
    const filePath = `${prefix}${lang}/${type}.html`;
    
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
      modalContent.className = doc.body.className;
      modalContent.dataset.lang = lang;
      modalContent.dataset.type = type;
    } catch (err) {
      modalContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
      console.error(err);
    }
  };

  const handleOpen = async (e, type) => {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Reset scroll position when opening new content
    const scrollArea = document.getElementById('modal-scroll-area');
    if (scrollArea) scrollArea.scrollTop = 0;
    
    const currentLang = document.documentElement.lang || 'de';
    if (modalContent.dataset.lang !== currentLang || modalContent.dataset.type !== type) {
       await loadContent(type);
    }
  };

  if (openImpressum) {
    openImpressum.addEventListener('click', (e) => handleOpen(e, 'impressum'));
  }

  if (openDatenschutz) {
    openDatenschutz.addEventListener('click', (e) => handleOpen(e, 'datenschutz'));
  }

  const close = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  closeModal.addEventListener('click', close);
  modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) close();
  });
}
