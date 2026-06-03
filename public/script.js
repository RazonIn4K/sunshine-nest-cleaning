const body = document.body;
const toggle = document.querySelector('[data-language-toggle]');

function setLanguage(lang) {
  body.dataset.lang = lang;
  document.documentElement.lang = lang === 'es' ? 'es' : 'en';
  localStorage.setItem('sunshineNestLanguage', lang);
  if (toggle) {
    toggle.setAttribute('aria-pressed', lang === 'es' ? 'true' : 'false');
    toggle.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
    toggle.innerHTML = lang === 'es'
      ? '<span lang="en">English</span>'
      : '<span lang="es">Español</span>';
  }
}

const savedLanguage = localStorage.getItem('sunshineNestLanguage');
if (savedLanguage === 'es' || savedLanguage === 'en') {
  setLanguage(savedLanguage);
}

if (toggle) {
  toggle.addEventListener('click', () => {
    const next = body.dataset.lang === 'es' ? 'en' : 'es';
    setLanguage(next);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  // Leave the skip link to native behavior so it moves keyboard focus, not just the viewport.
  if (link.classList.contains('skip-link')) return;
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    }
  });
});

// Prevent selecting a preferred date in the past.
const preferredDate = document.getElementById('preferred-date');
if (preferredDate) {
  preferredDate.min = new Date().toISOString().split('T')[0];
}
