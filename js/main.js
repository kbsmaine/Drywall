
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 }) : null;
document.querySelectorAll('.reveal').forEach(el => revealObserver ? revealObserver.observe(el) : el.classList.add('visible'));

const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const lightboxImg = lightbox.querySelector('img');
  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    lightboxImg.removeAttribute('src');
  };
  document.querySelectorAll('[data-lightbox]').forEach(button => {
    button.addEventListener('click', () => {
      lightboxImg.src = button.dataset.lightbox;
      lightboxImg.alt = button.querySelector('img')?.alt || 'Drywall project photograph';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', close);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
}

document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.hidden = filter !== 'all' && item.dataset.category !== filter;
    });
  });
});

const quoteForm = document.querySelector('#quote-form');
if (quoteForm) {
  quoteForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const status = quoteForm.querySelector('.form-status');
    const submit = quoteForm.querySelector('button[type="submit"]');
    const originalText = submit.textContent;
    status.className = 'form-status';
    status.textContent = '';
    submit.disabled = true;
    submit.textContent = 'Sending…';
    try {
      const endpoint = quoteForm.dataset.emailEndpoint || quoteForm.action;
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(quoteForm),
        headers: { 'Accept': 'application/json' }
      });
      if (!response.ok) throw new Error('Unable to send');
      quoteForm.reset();
      status.textContent = 'Thanks — your estimate request has been sent. We will be in touch soon.';
      status.classList.add('success');
    } catch (error) {
      status.textContent = 'Your request could not be sent. Please try again in a moment.';
      status.classList.add('error');
    } finally {
      submit.disabled = false;
      submit.textContent = originalText;
    }
  });
}
