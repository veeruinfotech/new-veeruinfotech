// Navigation toggle
function initNav() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (!mobileToggle || !navLinks) return;

  mobileToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  document.addEventListener('click', function (e) {
    if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
      navLinks.classList.remove('open');
      const icon = mobileToggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    }
  });

  // Highlight active page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.querySelectorAll('a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
}

// Header scroll + back-to-top
function initScroll() {
  const header = document.getElementById('header');
  const floatTop = document.getElementById('floatTop');
  if (!header) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 50);
    if (floatTop) floatTop.classList.toggle('visible', y > 500);
  });

  if (floatTop) {
    floatTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
}

// Reveal-on-scroll animation
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('active'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  reveals.forEach(el => observer.observe(el));
}

// Boot
document.addEventListener('DOMContentLoaded', async () => {
  await loadAllPartials();
  initReveal();
});