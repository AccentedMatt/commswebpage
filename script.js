
const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-nav-toggle]');

function setHeaderState() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
    document.body.classList.toggle('nav-open', !open);
  });
  nav.addEventListener('click', event => {
    if (event.target.tagName === 'A') {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    }
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-visible'));
}

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const topic = data.get('topic') || 'BallyComms enquiry';
    const name = data.get('name') || '';
    const business = data.get('business') || '';
    const email = data.get('email') || '';
    const businessType = data.get('businessType') || '';
    const message = data.get('message') || '';
    const recipient = topic === 'Existing customer support' ? 'support@ballycomms.com' : 'enquiries@ballycomms.com';
    const body = [
      `Name: ${name}`,
      business ? `Business: ${business}` : '',
      `Email: ${email}`,
      businessType ? `Business type: ${businessType}` : '',
      `Topic: ${topic}`,
      '',
      message
    ].filter(Boolean).join('\n');
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(body)}`;
  });
}
