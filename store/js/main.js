/* =========================================================
   UrbanKart — Shared JavaScript
   Cart management, UI helpers, scroll effects
   ========================================================= */
'use strict';

/* ── Cart (localStorage) ── */
function getCart() {
  try { return JSON.parse(localStorage.getItem('uk_cart') || '[]'); }
  catch(e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem('uk_cart', JSON.stringify(cart));
  updateCartBadges();
}
function getCartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}
function getCartTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}
function addToCart(item, qty = 1, variant = '') {
  const cart = getCart();
  const idx = cart.findIndex(c => c.id === item.id && c.variant === variant);
  if (idx > -1) {
    cart[idx].qty = Math.min(cart[idx].qty + qty, 20);
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, image: item.image, qty, variant });
  }
  saveCart(cart);
  showToast(`✅ Added to cart!`);
}
function removeFromCart(id, variant = '') {
  saveCart(getCart().filter(c => !(c.id === id && c.variant === variant)));
}
function updateQty(id, variant, newQty) {
  const cart = getCart();
  const idx  = cart.findIndex(c => c.id === id && c.variant === variant);
  if (idx > -1) {
    if (newQty <= 0) cart.splice(idx, 1);
    else cart[idx].qty = Math.min(newQty, 20);
  }
  saveCart(cart);
}

/* ── Cart badge update ── */
function updateCartBadges() {
  const count = getCartCount();
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });
}

/* ── Toast notification ── */
let toastTimer;
function showToast(msg, type = '') {
  let t = document.getElementById('uk-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'uk-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = 'toast' + (type ? ' toast-' + type : '');
  clearTimeout(toastTimer);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => t.classList.add('show'));
  });
  toastTimer = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ── Navigation ── */
function initNav() {
  const burger = document.querySelector('.nav__burger');
  const links  = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }
  /* Scroll shadow */
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (nav) nav.style.boxShadow = window.scrollY > 30 ? '0 4px 20px rgba(0,0,0,.1)' : '0 2px 12px rgba(0,0,0,.06)';
  }, { passive: true });
}

/* ── Reveal on scroll ── */
function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}

/* ── Back to Top ── */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── FAQ Accordion ── */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
}

/* ── Countdown Timer ── */
function initCountdown(endTime) {
  function pad(n) { return String(n).padStart(2, '0'); }
  function tick() {
    const diff = Math.max(0, endTime - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const hEl = document.getElementById('timer-h');
    const mEl = document.getElementById('timer-m');
    const sEl = document.getElementById('timer-s');
    if (hEl) hEl.textContent = pad(h);
    if (mEl) mEl.textContent = pad(m);
    if (sEl) sEl.textContent = pad(s);
  }
  tick();
  setInterval(tick, 1000);
}

/* ── Wishlist toggle on product cards ── */
function initWishlistButtons() {
  document.querySelectorAll('.product-card__wishlist').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle('wished');
      btn.textContent = btn.classList.contains('wished') ? '❤️' : '🤍';
      showToast(btn.classList.contains('wished') ? 'Added to wishlist ❤️' : 'Removed from wishlist');
    });
  });
}

/* ── Init all on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();
  initNav();
  initReveal();
  initBackToTop();
  initFAQ();
  initWishlistButtons();
});
