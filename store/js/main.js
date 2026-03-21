/* =========================================================
   UrbanKart — Shared UI / Interactive Features
   ========================================================= */
'use strict';

/* ─── Cart Badge ─── */
function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ─── Toast Notification ─── */
let _toastTimer;
function showToast(msg, type = 'success') {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  clearTimeout(_toastTimer);
  el.textContent = msg;
  el.className = `toast ${type}`;
  requestAnimationFrame(() => el.classList.add('show'));
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

/* ─── Scroll-based features ─── */
function initScrollFeatures() {
  const nav  = document.querySelector('.nav');
  const btt  = document.querySelector('.back-to-top');

  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 10);
    if (btt) btt.classList.toggle('visible', y > 400);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ─── Reveal on Scroll ─── */
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ─── Mobile Navigation ─── */
function initMobileNav() {
  const burger = document.querySelector('.nav__burger');
  const links  = document.querySelector('.nav__links');
  if (!burger || !links) return;

  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!burger.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ─── Search Modal ─── */
function initSearch() {
  const modal    = document.getElementById('searchModal');
  const input    = document.getElementById('searchInput');
  const closeBtn = document.getElementById('searchClose');
  const results  = document.getElementById('searchResults');
  const openBtns = document.querySelectorAll('[data-search-open]');

  if (!modal) return;

  function open() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => input && input.focus(), 100);
  }
  function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (input) input.value = '';
    if (results) results.innerHTML = '';
  }

  openBtns.forEach(btn => btn.addEventListener('click', open));
  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target === modal) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });

  if (input) input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!results) return;
    if (!q) { results.innerHTML = ''; return; }

    const matches = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.features.some(f => f.toLowerCase().includes(q))
    ).slice(0, 6);

    if (!matches.length) {
      results.innerHTML = `<div style="padding:1.5rem;text-align:center;color:var(--gray-500);font-size:.88rem;">No products found for "<strong>${escapeHtml(q)}</strong>"</div>`;
      return;
    }
    results.innerHTML = matches.map(p => `
      <a href="product.html?id=${p.id}" class="search-result-item" style="text-decoration:none;">
        <img src="${p.images[0]}" alt="${p.shortName}" />
        <div>
          <div class="search-result-item__name">${p.shortName}</div>
          <div class="search-result-item__price">${formatPrice(p.price)} <span style="color:var(--gray-400);text-decoration:line-through;font-size:.78rem;">${formatPrice(p.mrp)}</span></div>
        </div>
      </a>`).join('');
  });
}

/* ─── FAQ Accordion ─── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item    = btn.closest('.faq-item');
      const answer  = item.querySelector('.faq-answer');
      const content = item.querySelector('.faq-answer-inner');
      const open    = item.classList.toggle('open');
      answer.style.height = open ? content.scrollHeight + 'px' : '0';
    });
  });
}

/* ─── Countdown Timer ─── */
function initCountdown(targetDate) {
  const numEls = {
    h: document.querySelector('[data-countdown="h"]'),
    m: document.querySelector('[data-countdown="m"]'),
    s: document.querySelector('[data-countdown="s"]'),
  };
  if (!numEls.h && !numEls.m && !numEls.s) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const diff = Math.max(0, Math.floor((targetDate - Date.now()) / 1000));
    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    if (numEls.h) numEls.h.textContent = pad(h);
    if (numEls.m) numEls.m.textContent = pad(m);
    if (numEls.s) numEls.s.textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);
}

/* ─── Wishlist ─── */
const WISH_KEY = 'uk_wishlist';

function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISH_KEY) || '[]'); }
  catch { return []; }
}

function toggleWishlist(id) {
  let w = getWishlist();
  const idx = w.indexOf(id);
  if (idx > -1) { w.splice(idx, 1); showToast('Removed from wishlist', ''); }
  else { w.push(id); showToast('❤️ Added to wishlist!', 'success'); }
  localStorage.setItem(WISH_KEY, JSON.stringify(w));
  initWishlist();
}

function initWishlist() {
  const w = getWishlist();
  document.querySelectorAll('.product-card__wishlist').forEach(btn => {
    const pid = btn.dataset.pid;
    btn.textContent  = w.includes(pid) ? '❤️' : '🤍';
    btn.classList.toggle('wished', w.includes(pid));
    btn.onclick = e => { e.preventDefault(); e.stopPropagation(); toggleWishlist(pid); };
  });
}

/* ─── Newsletter ─── */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]');
    if (!email || !email.value.includes('@')) {
      showToast('Please enter a valid email address', 'error'); return;
    }
    showToast('✅ Subscribed! Check your inbox for 10% off code.', 'success');
    email.value = '';
  });
}

/* ─── Security: HTML escape ─── */
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initScrollFeatures();
  initReveal();
  initMobileNav();
  initSearch();
  initFAQ();
  initWishlist();
  initNewsletter();
});
