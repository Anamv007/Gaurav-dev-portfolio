# UrbanKart — Smart Home Gadgets Store 🏠

A complete 7-page eCommerce website built with HTML, CSS and vanilla JavaScript.  
**No frameworks, no build step, no installs needed.**

---

## ⚡ How to Run Locally (3 ways)

### Option 1 — VS Code Live Server (Easiest, Recommended)
1. Open the project folder in **VS Code**
2. Install the **Live Server** extension (Ritwick Dey)
3. Right-click `store/index.html` → **"Open with Live Server"**
4. Browser opens automatically at `http://127.0.0.1:5500/store/index.html`

### Option 2 — Python (no install needed on Mac/Linux)
```bash
# From the repo root
cd store
python3 -m http.server 8080
# Then open: http://localhost:8080/index.html
```

### Option 3 — Node.js `serve` (if you have Node installed)
```bash
npx serve store
# Then open the URL it prints (usually http://localhost:3000)
```

---

## 📁 Pages & What Each Does

| File | URL | What's on it |
|------|-----|-------------|
| `index.html` | `/` | Homepage — hero, sale countdown, bestsellers, testimonials, FAQ |
| `products.html` | `/products.html` | Shop page — filter by category/price/tag, search, sort |
| `product.html` | `/product.html?id=1` | Product detail — gallery, problem→solution, reviews, add to cart |
| `cart.html` | `/cart.html` | Cart — qty controls, coupon codes, order summary |
| `checkout.html` | `/checkout.html` | Checkout — address form, COD/UPI/card, order confirm |
| `about.html` | `/about.html` | About — brand story, milestones, team |
| `contact.html` | `/contact.html` | Contact — form, WhatsApp, FAQ cards |

---

## 🛒 Test the Cart Flow

1. Go to **`products.html`** → click **"Add to Cart"** on any product
2. Click the **🛒 Cart** button in the nav bar
3. Adjust quantities, try coupon codes:
   - `WELCOME10` → 10% off
   - `URBAN15` → 15% off  
   - `SAVE20` → 20% off
4. Click **Proceed to Checkout**
5. Fill the address form → pick COD or UPI → click **Place Order**
6. See the ✅ order confirmation screen

---

## 🧪 Quick Checks

| Feature | How to test |
|---------|-------------|
| Search | Click 🔍 in nav → type "camera" or "LED" |
| Mobile menu | Resize browser to < 768 px → tap ☰ |
| Countdown timer | Check the urgency section on homepage |
| Wishlist | Click ♡ on any product card |
| Newsletter | Scroll to bottom of homepage → enter email |
| Contact form | Fill all fields → click Send Message |

---

## 📂 File Structure

```
store/
├── index.html          ← Homepage
├── products.html       ← Shop / all products
├── product.html        ← Product detail (dynamic via ?id=N)
├── cart.html           ← Shopping cart
├── checkout.html       ← Checkout & payment
├── about.html          ← About us
├── contact.html        ← Contact
├── css/
│   ├── main.css        ← Design system, nav, footer, shared components
│   ├── home.css        ← Homepage-specific styles
│   └── shop.css        ← Product/cart/checkout styles
└── js/
    ├── products-data.js ← Product catalog + cart helpers (localStorage)
    └── main.js          ← Nav, search, FAQ accordion, countdown, toast
```

---

## 🌐 Deploy to GitHub Pages (Free Hosting)

1. Push your code to GitHub (already done via this PR)
2. Go to **Settings → Pages** in the repo
3. Source: **Deploy from branch** → `main` → `/` (root)
4. Your store will be live at:  
   `https://anamv007.github.io/Gaurav-dev-portfolio/store/`

> Cart data is saved in **localStorage** (browser) — no backend needed.
