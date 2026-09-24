const langBtn = document.getElementById('langBtn');
const root = document.documentElement;
let lang = 'en';

function applyLanguage(next) {
  lang = next;
  root.lang = next;
  root.dir = next === 'fa' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-en][data-fa]').forEach(el => {
    el.textContent = el.dataset[next];
  });
  langBtn.textContent = next === 'en' ? 'FA' : 'EN';
  localStorage.setItem('portfolio-lang', next);
}

langBtn.addEventListener('click', () => applyLanguage(lang === 'en' ? 'fa' : 'en'));
applyLanguage(localStorage.getItem('portfolio-lang') || 'en');

document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
