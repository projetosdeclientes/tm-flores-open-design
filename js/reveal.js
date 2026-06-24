const REVEAL_SELECTOR = '[class*="reveal"]';

function activateAll() {
  document.querySelectorAll(REVEAL_SELECTOR).forEach(el => {
    if ([...el.classList].some(c => c.startsWith('reveal'))) {
      el.classList.add('active');
    }
  });
}

function initReveal() {
  const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR))
    .filter(el => [...el.classList].some(c => c.startsWith('reveal')));
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('active'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('active');
    } else {
      observer.observe(el);
    }
  });

  setTimeout(activateAll, 1200);
}

function bootReveal() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal, { once: true });
  } else {
    initReveal();
  }
}

bootReveal();

window.addEventListener('pageshow', () => {
  activateAll();
});
