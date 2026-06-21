/**
 * Conexus & Cia — Portfolio Lightbox
 */
(function () {
  'use strict';

  const cards = document.querySelectorAll('[data-lightbox]');
  if (!cards.length) return;

  let currentIndex = 0;
  const items = Array.from(cards).map((card) => ({
    src: card.dataset.lightbox,
    caption: card.dataset.caption || '',
  }));

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Galeria de imagens');
  lightbox.innerHTML = `
    <div class="lightbox__content">
      <button class="lightbox__close" aria-label="Fechar galeria"><i class="bi bi-x-lg"></i></button>
      <button class="lightbox__nav lightbox__nav--prev" aria-label="Imagem anterior"><i class="bi bi-chevron-left"></i></button>
      <img class="lightbox__image" src="" alt="">
      <button class="lightbox__nav lightbox__nav--next" aria-label="Próxima imagem"><i class="bi bi-chevron-right"></i></button>
      <p class="lightbox__caption"></p>
    </div>
  `;
  document.body.appendChild(lightbox);

  const img = lightbox.querySelector('.lightbox__image');
  const caption = lightbox.querySelector('.lightbox__caption');
  const closeBtn = lightbox.querySelector('.lightbox__close');
  const prevBtn = lightbox.querySelector('.lightbox__nav--prev');
  const nextBtn = lightbox.querySelector('.lightbox__nav--next');

  function show(index) {
    currentIndex = (index + items.length) % items.length;
    img.src = items[currentIndex].src;
    img.alt = items[currentIndex].caption;
    caption.textContent = items[currentIndex].caption;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function hide() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function prev() { show(currentIndex - 1); }
  function next() { show(currentIndex + 1); }

  cards.forEach((card, index) => {
    card.addEventListener('click', () => show(index));
  });

  closeBtn.addEventListener('click', hide);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) hide();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();
