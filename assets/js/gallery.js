(function () {
  const track   = document.getElementById('gallery-track');
  const playBtn = document.getElementById('gallery-playpause');
  if (!track) return;

  const cards = Array.from(track.querySelectorAll('.gallery-card'));
  const dots  = Array.from(document.querySelectorAll('.gallery-dot'));
  const indexedLinks = Array.from(document.querySelectorAll('a[data-gallery-index][href="#services"]'));
  const total = cards.length;

  let current   = 0;
  let isPlaying = true;
  let timer     = null;
  let dragStartX = 0;
  let dragging   = false;
  let dragDeltaX = 0;

  /* ── Geometry ─────────────────────────────────────────────────── */
  function cardWidth() { return cards[0].offsetWidth; }
  function trackGap()  { return parseInt(getComputedStyle(track).gap) || 20; }
  function centerOffset() { return (window.innerWidth - cardWidth()) / 2; }

  /* ── Navigate to a card ───────────────────────────────────────── */
  function goTo(idx, animate) {
    current = ((idx % total) + total) % total;

    const tx = centerOffset() - current * (cardWidth() + trackGap());
    track.style.transition = animate === false
      ? 'none'
      : 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)';
    track.style.transform = `translateX(${tx}px)`;

    cards.forEach((c, i) => {
      const isActive = i === current;
      c.classList.toggle('active', isActive);
      if (isActive) {
        c.tabIndex = -1;
      } else {
        c.removeAttribute('tabindex');
      }
    });
    dots.forEach((d, i)  => d.classList.toggle('active', i === current));
  }

  function focusCurrentCard() {
    const activeCard = cards[current];
    if (activeCard) activeCard.focus({ preventScroll: true });
  }

  /* ── Auto-play ────────────────────────────────────────────────── */
  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1, true), 5000);
  }
  function stopAuto() { clearInterval(timer); }
  function resetAuto() { if (isPlaying) { stopAuto(); startAuto(); } }

  /* ── Dots ─────────────────────────────────────────────────────── */
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i, true); resetAuto(); });
  });

  indexedLinks.forEach(link => {
    link.addEventListener('click', () => {
      const index = Number.parseInt(link.dataset.galleryIndex || '', 10);
      if (Number.isNaN(index)) return;

      window.requestAnimationFrame(() => {
        goTo(index, true);
        resetAuto();
        window.setTimeout(focusCurrentCard, 250);
      });
    });
  });

  /* ── Play / Pause button ──────────────────────────────────────── */
  const iconPause = `<svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor" aria-hidden="true">
    <rect x="0" y="0" width="3.5" height="13" rx="1"/>
    <rect x="7.5" y="0" width="3.5" height="13" rx="1"/>
  </svg>`;
  const iconPlay = `<svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor" aria-hidden="true">
    <path d="M1 1.5L10 6.5L1 11.5V1.5Z" rx="1"/>
  </svg>`;

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      playBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Wiedergabe');
      playBtn.innerHTML = isPlaying ? iconPause : iconPlay;
      isPlaying ? startAuto() : stopAuto();
    });
  }

  /* ── Pointer drag / swipe ─────────────────────────────────────── */
  track.addEventListener('pointerdown', e => {
    dragging   = true;
    dragStartX = e.clientX;
    dragDeltaX = 0;
    track.setPointerCapture(e.pointerId);
    track.style.transition = 'none';
    stopAuto();
  });

  track.addEventListener('pointermove', e => {
    if (!dragging) return;
    dragDeltaX = e.clientX - dragStartX;
    const base = centerOffset() - current * (cardWidth() + trackGap());
    track.style.transform = `translateX(${base + dragDeltaX}px)`;
  });

  const finishDrag = (e) => {
    if (!dragging) return;
    dragging = false;
    const threshold = cardWidth() * 0.18;
    if (Math.abs(dragDeltaX) > threshold) {
      dragDeltaX < 0 ? goTo(current + 1, true) : goTo(current - 1, true);
    } else {
      goTo(current, true); // snap back
    }
    resetAuto();
  };
  track.addEventListener('pointerup',     finishDrag);
  track.addEventListener('pointercancel', finishDrag);

  /* Prevent stray clicks after a drag */
  track.addEventListener('click', e => {
    if (Math.abs(dragDeltaX) > 8) e.stopPropagation();
  });

  /* ── Keyboard ─────────────────────────────────────────────────── */
  document.addEventListener('keydown', e => {
    const section = document.getElementById('services');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return; // only when in view
    if (e.key === 'ArrowRight') { goTo(current + 1, true); resetAuto(); }
    if (e.key === 'ArrowLeft')  { goTo(current - 1, true); resetAuto(); }
  });

  /* ── Resize ───────────────────────────────────────────────────── */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => goTo(current, false), 80);
  });

  goTo(0, false);
  startAuto();
})();
