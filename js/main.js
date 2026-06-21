/**
 * Conexus & Cia — Main JavaScript
 * Navigation, scroll spy, mobile menu
 */
(function () {
  'use strict';

  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.site-header__toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay = document.querySelector('.mobile-nav__overlay');
  const navLinks = document.querySelectorAll('.site-nav__link, .mobile-nav__link');
  const sections = document.querySelectorAll('section[id]');

  function closeMobileNav() {
    mobileNav?.classList.remove('is-open');
    overlay?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openMobileNav() {
    mobileNav?.classList.add('is-open');
    overlay?.classList.add('is-open');
    toggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  toggle?.addEventListener('click', () => {
    if (mobileNav?.classList.contains('is-open')) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  overlay?.addEventListener('click', closeMobileNav);

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) closeMobileNav();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
  });

  function setActiveNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();
})();
