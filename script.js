/* =========================================
   LUCIDE ICONS
   ========================================= */
lucide.createIcons();

/* =========================================
   NAVBAR SCROLL
   ========================================= */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.97)';
  } else {
    navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.85)';
  }
}, { passive: true });

/* =========================================
   HERO REVEAL SEQUENCE
   image visible immediately → navbar fades in → text staggered
   ========================================= */
const heroImg = document.querySelector('.hero__img');
const heroRevealEls = document.querySelectorAll('.hero-reveal');

function triggerHeroReveal() {
  // navbar
  setTimeout(() => {
    navbar.classList.remove('navbar--hidden');
    navbar.classList.add('navbar--visible');
  }, 150);

  // text elements — each has its own CSS --delay var
  heroRevealEls.forEach(el => {
    el.classList.add('is-visible');
  });
}

if (heroImg) {
  if (heroImg.complete && heroImg.naturalWidth > 0) {
    triggerHeroReveal();
  } else {
    heroImg.addEventListener('load', triggerHeroReveal);
    heroImg.addEventListener('error', triggerHeroReveal);
    // fallback in case image takes too long
    setTimeout(triggerHeroReveal, 800);
  }
} else {
  triggerHeroReveal();
}

/* =========================================
   MOBILE MENU
   ========================================= */
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.getElementById('menuClose');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() {
  mobileMenu.classList.add('is-open');
  burgerBtn.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  burgerBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  burgerBtn.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  burgerBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

burgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('is-open');
  isOpen ? closeMenu() : openMenu();
});

menuClose.addEventListener('click', closeMenu);

mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

/* =========================================
   INTERSECTION OBSERVER — FADE UP
   ========================================= */
const animatedEls = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

animatedEls.forEach(el => observer.observe(el));

/* =========================================
   SMOOTH SCROLL — ACTIVE NAV LINK
   ========================================= */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar__links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--color-text)'
            : 'var(--color-text-secondary)';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => sectionObserver.observe(section));
