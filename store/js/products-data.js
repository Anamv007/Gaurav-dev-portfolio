/* =========================================================
   UrbanKart — Products Catalog + Cart & Utility Functions
   ========================================================= */
'use strict';

/* ── Product Catalog ── */
const PRODUCTS = [
  {
    id: 'uk-led-strip-01',
    shortName: 'SmartGlow LED Strip',
    name: 'SmartGlow 5M RGB LED Strip — App & Voice Controlled',
    category: 'Smart Lighting',
    categorySlug: 'lighting',
    price: 1299,
    mrp: 2999,
    discount: 57,
    deliveryDays: '3–5',
    stock: 23,
    lowStock: true,
    codAvailable: true,
    isBestseller: true,
    isNew: false,
    rating: 4.8,
    reviews: 2847,
    sold: 12400,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=85',
      'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=85',
    ],
    problem: 'Your bedroom looks dull, plain, and uninspiring. Standard ceiling lights are boring. You want atmosphere — but smart lighting seems complicated and expensive.',
    solution: 'SmartGlow LED Strip changes your room in 10 minutes. 16 million colors, 20+ music-sync modes, app + voice control (works with Alexa & Google). Designed for Indian 220V sockets. No electrician needed.',
    features: [
      '16M colors, 20+ scene modes',
      'Music sync — reacts to your beats',
      'Alexa & Google Assistant ready',
      'Indian 220V — no adaptor needed',
      'App control from anywhere',
      'Sticky back — no tools needed',
      'Cuttable every 5cm',
      'IP65 waterproof rating',
    ],
    specs: {
      'Length': '5 metres',
      'LED Count': '300 LEDs',
      'Voltage': '220–240V AC (Indian)',
      'Power': '18W',
      'Waterproof': 'IP65',
      'Connectivity': 'WiFi 2.4GHz + Bluetooth',
      'App': 'LedHue (iOS & Android)',
      'Voice': 'Alexa, Google Assistant',
      'Warranty': '12 months',
      'In The Box': 'LED Strip, Power Adapter, Remote, 3M tape',
    },
    reviewList: [
      { name: 'Rahul Sharma', city: 'Delhi NCR', rating: 5, title: 'Absolutely transformed my room!', body: 'I was skeptical at first but this LED strip is INCREDIBLE. My gaming setup looks like a professional studio now. The music sync feature is mind-blowing — it literally dances to the beat. Installation took 10 minutes. My 6-year-old keeps wanting to "disco mode" every evening!', date: '2 weeks ago', helpful: 234, verified: true },
      { name: 'Priya Singh', city: 'Mumbai', rating: 5, title: 'Best purchase under ₹1,500 EVER', body: 'I bought this for my daughter\'s birthday to decorate her room. She absolutely loves it. The app is very intuitive, even my 60-year-old mom figured it out. Colors are vibrant and accurate. Delivery was in 4 days to Mumbai. Highly highly recommended!', date: '1 month ago', helpful: 189, verified: true },
      { name: 'Arun Kumar', city: 'Bengaluru', rating: 4, title: 'Great product, minor app issue resolved', body: 'Product is excellent — colors are vivid, brightness is good. Had a small connectivity issue with the app initially but customer support on WhatsApp helped me fix it in 15 minutes. Will buy 2 more sets for other rooms.', date: '3 weeks ago', helpful: 67, verified: true },
    ],
  },

  {
    id: 'uk-cam-pro-02',
    shortName: 'SecureEye 2K Camera',
    name: 'SecureEye 2K WiFi Security Camera — 360° Night Vision + AI Motion',
    category: 'Home Security',
    categorySlug: 'security',
    price: 2299,
    mrp: 4999,
    discount: 54,
    deliveryDays: '3–5',
    stock: 47,
    lowStock: false,
    codAvailable: true,
    isBestseller: true,
    isNew: false,
    rating: 4.7,
    reviews: 3621,
    sold: 18750,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=85',
      'https://images.unsplash.com/photo-1516357231954-91487b459602?w=800&q=85',
    ],
    problem: 'You worry about your home, elderly parents, or children when you\'re away. You want a security camera but fear complex installation, poor night quality, or high monthly subscription fees.',
    solution: 'SecureEye 2K sees everything — even at night — in stunning 2K clarity. 360° pan & tilt covers your entire room with zero blind spots. AI motion alerts go directly to your phone. One-time purchase, no monthly fees.',
    features: [
      '2K (2304×1296) super-clear resolution',
      '360° Pan & Tilt — zero blind spots',
      'Color Night Vision up to 8 metres',
      'AI motion detection + phone alerts',
      'Two-way audio — talk to family',
      'Local storage (SD) + Cloud option',
      'Works with Alexa & Google Home',
      '220V Indian plug included',
    ],
    specs: {
      'Resolution': '2K / 4MP (2304×1296)',
      'Night Vision': 'Full-colour, up to 8m',
      'Pan Angle': '355° horizontal',
      'Tilt Angle': '90° vertical',
      'Audio': 'Two-way with noise cancellation',
      'Storage': 'MicroSD up to 256GB + Cloud',
      'Connectivity': 'WiFi 2.4GHz & 5GHz',
      'Power': '220V Indian plug',
      'IP Rating': 'IP44 (indoor)',
      'Warranty': '12 months',
    },
    reviewList: [
      { name: 'Priya Nair', city: 'Bengaluru', rating: 5, title: 'Best security camera I\'ve ever bought', body: 'I was skeptical about ordering a security camera online but COD gave me confidence. The 2K footage is crystal clear even at night — I can read number plates! WhatsApp support responded in 10 minutes when I had a setup question. Truly outstanding service.', date: '1 month ago', helpful: 312, verified: true },
      { name: 'Suresh Patel', city: 'Ahmedabad', rating: 5, title: 'Caught a theft attempt on camera!', body: 'I got an alert at 2AM when someone tried to open my garage. The footage was so clear that I could share it directly with police. The 360° coverage means I only need 1 camera for my entire living room. Worth every rupee!', date: '6 weeks ago', helpful: 456, verified: true },
    ],
  },

  {
    id: 'uk-plug-pack-03',
    shortName: 'SmartPlug Pro (2-Pack)',
    name: 'SmartPlug Pro WiFi + Energy Monitor — Pack of 2',
    category: 'Smart Plugs',
    categorySlug: 'smart-plugs',
    price: 1499,
    mrp: 3499,
    discount: 57,
    deliveryDays: '3–5',
    stock: 61,
    lowStock: false,
    codAvailable: true,
    isBestseller: true,
    isNew: false,
    rating: 4.9,
    reviews: 4203,
    sold: 22100,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
      'https://images.unsplash.com/photo-1558618047-f4e70e93c7cb?w=800&q=85',
    ],
    problem: 'High electricity bills. Forgetting to turn off AC or geyser. No way to control appliances when you\'re not home. Worry about appliances left on while you travel.',
    solution: 'SmartPlug Pro lets you control ANY appliance from your phone — anywhere in the world. Built-in energy monitor shows exactly how much power each device uses. Set schedules so your geyser turns on automatically 20 minutes before your shower.',
    features: [
      'Energy monitor — real-time watts',
      'Remote control from anywhere',
      'Schedules & timers',
      'Voice: Alexa + Google Home',
      '16A Indian 3-pin socket',
      'Overload + surge protection',
      'Works on 2.4GHz WiFi',
      'No hub required',
    ],
    specs: {
      'Max Load': '16A / 3520W',
      'Voltage': '220–240V AC',
      'Connectivity': 'WiFi 2.4GHz',
      'Voice': 'Alexa, Google Assistant',
      'App': 'Smart Life / Tuya',
      'Energy Monitoring': 'Yes, real-time',
      'Protection': 'Overload + surge + short circuit',
      'Plug Type': 'Indian 3-pin (16A)',
      'Pack': '2 plugs',
      'Warranty': '12 months',
    },
    reviewList: [
      { name: 'Amit Verma', city: 'Mumbai', rating: 5, title: 'Saved ₹800 in first month!', body: 'I use this for my AC and geyser. My electricity bill dropped by ₹800 in the FIRST MONTH! The schedule feature is brilliant — geyser automatically turns on 20 minutes before my alarm. I can also see exactly how much power each device is using. Pays for itself in 2 months!', date: '3 weeks ago', helpful: 567, verified: true },
      { name: 'Neha Gupta', city: 'Delhi', rating: 5, title: 'Perfect for my work-from-home setup', body: 'I use these for my monitor and printer. Set them to turn off automatically at 6PM so I never forget. The energy monitor showed me my old printer was consuming 120W even in standby — I never knew! Saved money and reduced stress.', date: '2 months ago', helpful: 234, verified: true },
    ],
  },

  {
    id: 'uk-speaker-04',
    shortName: 'SoundPod Bluetooth Speaker',
    name: 'SoundPod 360° Waterproof Bluetooth Speaker — 20W Bass Boost',
    category: 'Smart Audio',
    categorySlug: 'audio',
    price: 1899,
    mrp: 3999,
    discount: 53,
    deliveryDays: '3–5',
    stock: 35,
    lowStock: false,
    codAvailable: true,
    isBestseller: true,
    isNew: false,
    rating: 4.7,
    reviews: 1892,
    sold: 9300,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=85',
      'https://images.unsplash.com/photo-1601574968106-b312ac309953?w=800&q=85',
    ],
    problem: 'Tinny phone speakers ruin your music, podcasts, and calls. Expensive speakers sound good indoors but aren\'t waterproof for the bathroom or outdoors — and their batteries die too fast.',
    solution: 'SoundPod delivers real 20W 360° sound that fills any room. Genuinely waterproof (IPX7 — you can submerge it). 24-hour battery. Works as a speakerphone for crisp calls. Pairs in 3 seconds via Bluetooth 5.0.',
    features: [
      '20W 360° omnidirectional sound',
      'IPX7 waterproof — pool safe',
      '24-hour battery life',
      'Bluetooth 5.0 — 30m range',
      'Built-in speakerphone',
      'Bass boost mode',
      'Type-C charging',
      'Party mode: link 2 speakers',
    ],
    specs: {
      'Power Output': '20W (stereo)',
      'Frequency': '60Hz – 20kHz',
      'Waterproof': 'IPX7 (30min at 1m)',
      'Battery': '5000mAh, 24 hours',
      'Bluetooth': '5.0, up to 30m',
      'Microphone': 'Built-in, HD calls',
      'Charging': 'Type-C, 2 hours full charge',
      'Colors': 'Midnight Black, Ocean Blue, Forest Green',
      'Weight': '520g',
      'Warranty': '12 months',
    },
    reviewList: [
      { name: 'Deepika Menon', city: 'Chennai', rating: 5, title: 'Floated in the swimming pool — still works!', body: 'Gifted this to my husband for his birthday. He took it to the beach and it floated in the swimming pool and still worked perfectly. Sound quality is incredible for this price. Already ordering another for my sister.', date: '1 week ago', helpful: 178, verified: true },
      { name: 'Vikram Joshi', city: 'Pune', rating: 5, title: 'Best speaker under ₹2000 — period', body: 'I compared this with 5 other speakers in this range. SoundPod wins on sound quality, battery life, and waterproofing. The 360° sound is real — you can walk around it and volume stays consistent. Highly recommend!', date: '1 month ago', helpful: 245, verified: true },
    ],
  },

  {
    id: 'uk-purifier-05',
    shortName: 'AirPure Smart Purifier',
    name: 'AirPure H13 HEPA Smart Air Purifier — Real AQI Display',
    category: 'Air Quality',
    categorySlug: 'air-quality',
    price: 4999,
    mrp: 9999,
    discount: 50,
    deliveryDays: '4–6',
    stock: 18,
    lowStock: true,
    codAvailable: true,
    isBestseller: false,
    isNew: true,
    rating: 4.8,
    reviews: 943,
    sold: 4100,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=85',
    ],
    problem: 'India has some of the world\'s most polluted air. PM2.5, dust, pet dander, and allergens inside your home are invisible — causing allergies, sneezing, poor sleep, and long-term health damage for your family.',
    solution: 'AirPure H13 HEPA captures 99.97% of particles as small as 0.1 microns. The real AQI display shows you exactly what\'s in your air — before and after cleaning. Auto mode adjusts fan speed automatically based on air quality.',
    features: [
      'H13 HEPA — 99.97% filtration',
      'Real AQI display (PM2.5)',
      'Auto mode — adjusts automatically',
      'Covers up to 30 sq metre room',
      'Ultra-quiet: 25dB sleep mode',
      'Activated carbon for odours',
      'Filter life indicator',
      'App + voice control',
    ],
    specs: {
      'CADR': '280 m³/h',
      'Room Coverage': 'Up to 30 sq metres',
      'Filter': 'H13 HEPA + Activated Carbon',
      'Noise Level': '25dB (sleep) – 55dB (max)',
      'Sensor': 'Laser PM2.5 + CO2',
      'Display': 'Real-time AQI colour',
      'Connectivity': 'WiFi 2.4GHz',
      'Voice': 'Alexa, Google Assistant',
      'Power': '45W, 220V Indian',
      'Warranty': '12 months (filter: 6 months)',
    },
    reviewList: [
      { name: 'Sunita Devi', city: 'Patna', rating: 5, title: 'Son\'s allergies gone in 2 weeks!', body: 'My son has dust allergies and was sneezing every morning. After 2 weeks with AirPure, his symptoms are almost completely gone. The AQI screen went from RED to GREEN in 30 minutes when I first turned it on. I was shocked at how dirty our "clean" home air actually was. Worth every rupee!', date: '2 months ago', helpful: 389, verified: true },
      { name: 'Rajesh Iyer', city: 'Chennai', rating: 5, title: 'PM2.5 dropped from 180 to 12!', body: 'I have an AQI monitor and tested this purifier rigorously. Within 45 minutes, PM2.5 in my bedroom dropped from 180 to 12. That\'s incredible. The H13 filter is genuine — not a cheap knockoff. Sleep quality has improved noticeably. Highly recommend!', date: '6 weeks ago', helpful: 234, verified: true },
    ],
  },

  {
    id: 'uk-lock-06',
    shortName: 'SmartLock Pro Fingerprint',
    name: 'SmartLock Pro — Fingerprint + PIN + Card + Key Door Lock',
    category: 'Home Security',
    categorySlug: 'security',
    price: 6999,
    mrp: 14999,
    discount: 53,
    deliveryDays: '5–7',
    stock: 12,
    lowStock: true,
    codAvailable: true,
    isBestseller: false,
    isNew: true,
    rating: 4.6,
    reviews: 621,
    sold: 2800,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85',
    ],
    problem: 'Traditional keys get lost, stolen, or copied. You can\'t let housekeeping or family in remotely. Deadbolts don\'t log who enters your home or when — leaving you with no security audit trail.',
    solution: 'SmartLock Pro unlocks in 0.3 seconds via fingerprint — no key fumbling. Add 20 fingerprints, 100 PINs, or RFID cards. Get push notifications whenever your door opens. Remote unlock from your phone — let guests in from anywhere.',
    features: [
      'Fingerprint unlock in 0.3 seconds',
      '4 unlock methods: finger/PIN/card/key',
      'Remote unlock via phone',
      'Entry log — know who came when',
      '20 fingerprints + 100 PINs',
      'Anti-peep PIN masking',
      'Low battery alert',
      'Standard Indian door fit',
    ],
    specs: {
      'Fingerprint Capacity': '20',
      'PIN Capacity': '100',
      'RFID Cards': '50',
      'Unlock Speed': '0.3 seconds',
      'Connectivity': 'Bluetooth + WiFi Gateway',
      'Battery': '4 x AA, 6–12 months',
      'Door Fit': '35–65mm thick',
      'Certification': 'BIS, CE, FCC',
      'Material': 'Zinc alloy + ABS',
      'Warranty': '12 months',
    },
    reviewList: [
      { name: 'Ankit Mehta', city: 'Mumbai', rating: 5, title: 'No more lost keys — life changed!', body: 'I\'ve locked myself out 3 times in the last year. Never again. The fingerprint reader is insanely fast — faster than even high-end phones. Installation was straightforward with the included guide. Customer support helped me set up the app in 20 minutes over a call.', date: '1 month ago', helpful: 145, verified: true },
    ],
  },

  {
    id: 'uk-charger-07',
    shortName: 'PowerHub 65W GaN Charger',
    name: 'PowerHub 65W GaN Fast Charger — 4-Port, Charges Laptop + Phone',
    category: 'Charging',
    categorySlug: 'charging',
    price: 1799,
    mrp: 3999,
    discount: 55,
    deliveryDays: '3–5',
    stock: 89,
    lowStock: false,
    codAvailable: true,
    isBestseller: false,
    isNew: true,
    rating: 4.8,
    reviews: 1204,
    sold: 6200,
    images: [
      'https://images.unsplash.com/photo-1558618066-fcd25c85cd64?w=800&q=85',
    ],
    problem: 'Carrying 3+ chargers for your laptop, phone, and tablet is a nightmare — especially when travelling. Slow charging wastes time. Cheap chargers overheat and damage your expensive devices.',
    solution: 'PowerHub 65W GaN replaces ALL your chargers with one compact unit the size of a business card holder. Charges a MacBook or laptop at full 65W speed. Two USB-C + two USB-A ports so you charge 4 devices simultaneously.',
    features: [
      '65W total output (45W single port)',
      'GaN technology — runs cool',
      '2x USB-C + 2x USB-A ports',
      'Charges laptop + 3 devices',
      'PD 3.0 + Quick Charge 3.0',
      'Charges iPhone in 30 min',
      'BIS certified for India',
      'Weighs only 120g',
    ],
    specs: {
      'Total Power': '65W',
      'USB-C 1': '45W (PD 3.0)',
      'USB-C 2': '20W',
      'USB-A 1': '18W (QC 3.0)',
      'USB-A 2': '12W',
      'Technology': 'GaN (Gallium Nitride)',
      'Voltage': '100–240V AC (works globally)',
      'Plug': 'Indian 3-pin',
      'Size': '68 × 68 × 32mm',
      'Warranty': '12 months',
    },
    reviewList: [
      { name: 'Karan Mehta', city: 'Hyderabad', rating: 5, title: 'Replaced 4 chargers with this one!', body: 'I travel for work every week. I used to carry 4 different chargers. Now I carry just this one. Charges my MacBook Air at full speed, my iPhone fast-charges in 30 minutes, and my iPad charges simultaneously. This is a game-changer. STRONGLY recommend.', date: '2 months ago', helpful: 312, verified: true },
    ],
  },

  {
    id: 'uk-light-sleep-08',
    shortName: 'DreamLight Sleep Lamp',
    name: 'DreamLight Smart Bedside Lamp — Sunrise Alarm + Sleep Therapy',
    category: 'Wellness Lighting',
    categorySlug: 'wellness',
    price: 2499,
    mrp: 4999,
    discount: 50,
    deliveryDays: '3–5',
    stock: 28,
    lowStock: false,
    codAvailable: true,
    isBestseller: false,
    isNew: true,
    rating: 4.9,
    reviews: 782,
    sold: 3400,
    images: [
      'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=85',
    ],
    problem: 'You struggle to wake up feeling refreshed. Harsh alarm sounds jolt you out of deep sleep leaving you groggy. Blue light from phones and laptops destroys your sleep quality, leading to fatigue throughout the day.',
    solution: 'DreamLight simulates a natural sunrise — gently brightening 30 minutes before your alarm, so you wake up energised not shocked. 16M colours + warm amber sleep mode reduces blue light automatically at night, improving your sleep quality within days.',
    features: [
      'Sunrise alarm — wake naturally',
      '16M colours + warm amber mode',
      'Sleep therapy light sequence',
      'No blue light in bedtime mode',
      'Touch control + app control',
      'USB-A port — charge phone',
      'Timer + sleep/wake schedules',
      'Alexa & Google voice control',
    ],
    specs: {
      'Brightness': '1–100%, stepless',
      'Color Temp': '1800K–6500K',
      'Colors': '16 million (RGB + W)',
      'Sunrise Timer': '10 / 20 / 30 minutes',
      'Connectivity': 'WiFi 2.4GHz + BT',
      'USB Output': 'USB-A 5W charging',
      'Power': '10W, 220V Indian',
      'Voice': 'Alexa, Google Assistant',
      'Material': 'ABS, frosted PC diffuser',
      'Warranty': '12 months',
    },
    reviewList: [
      { name: 'Meena Krishnamurthy', city: 'Bengaluru', rating: 5, title: 'Life-changing — I actually enjoy mornings now!', body: 'I\'ve struggled with waking up for 10 years. The sunrise alarm feature has completely changed my mornings. I wake up gradually feeling rested, not shocked by a loud alarm. The warm amber bedtime mode has also improved my sleep noticeably. Best wellness purchase ever!', date: '3 weeks ago', helpful: 289, verified: true },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   Cart Functions (localStorage)
───────────────────────────────────────────────────────── */
const CART_KEY = 'uk_cart_v2';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge && updateCartBadge();
}

function getCartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}

function getCartTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}

function addToCart(id, qty = 1, variant = '') {
  const cart = getCart();
  const idx  = cart.findIndex(i => i.id === id && i.variant === variant);
  if (idx > -1) {
    cart[idx].qty = Math.min(20, cart[idx].qty + qty);
  } else {
    const p = getProductById(id);
    if (!p) return;
    cart.push({ id, name: p.shortName, price: p.price, image: p.images[0], qty, variant });
  }
  saveCart(cart);
}

function handleAddToCart(id, qty = 1, variant = '') {
  addToCart(id, qty, variant);
  showToast('🛒 Added to cart!', 'success');
  updateCartBadge && updateCartBadge();
}

function removeFromCart(id, variant = '') {
  saveCart(getCart().filter(i => !(i.id === id && i.variant === variant)));
}

function updateCartQty(id, variant = '', newQty) {
  if (newQty < 1) { removeFromCart(id, variant); return; }
  const cart = getCart();
  const idx  = cart.findIndex(i => i.id === id && i.variant === variant);
  if (idx > -1) { cart[idx].qty = Math.min(20, newQty); saveCart(cart); }
}

/* ─────────────────────────────────────────────────────────
   Product Utility Functions
───────────────────────────────────────────────────────── */
function getProductById(id)       { return PRODUCTS.find(p => p.id === id) || null; }
function getProductsByCategory(slug) { return PRODUCTS.filter(p => p.categorySlug === slug); }

function formatPrice(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}

function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '⯨' : '') + '☆'.repeat(empty);
}

/* ── Shared Product Card HTML ── */
function productCardHTML(p) {
  const badgeHtml = [
    p.discount ? `<span class="badge badge-sale">-${p.discount}%</span>` : '',
    p.isBestseller ? `<span class="badge badge-hot">🔥 Hot</span>` : '',
    p.isNew ? `<span class="badge badge-new">New</span>` : '',
    p.lowStock ? `<span class="badge badge-sale">Only ${p.stock} left</span>` : '',
  ].filter(Boolean).join('');

  const savingAmt = p.mrp - p.price;

  return `
    <div class="product-card">
      <div class="product-card__img-wrap">
        <a href="product.html?id=${p.id}">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        </a>
        <div class="product-card__badges">${badgeHtml}</div>
        <button class="product-card__wishlist" data-pid="${p.id}" aria-label="Wishlist">🤍</button>
      </div>
      <div class="product-card__body">
        <div class="product-card__category">${p.category}</div>
        <a href="product.html?id=${p.id}" class="product-card__name">${p.shortName}</a>
        <div class="product-card__rating">
          <span class="stars stars-sm">${renderStars(p.rating)}</span>
          <span class="product-card__rating-count">${p.rating} (${p.reviews.toLocaleString('en-IN')})</span>
        </div>
        <div class="product-card__price">
          <span class="product-card__current">${formatPrice(p.price)}</span>
          <span class="product-card__mrp">${formatPrice(p.mrp)}</span>
          <span class="product-card__off">Save ${formatPrice(savingAmt)}</span>
        </div>
        <div class="product-card__cod" style="margin-bottom:.65rem;">✅ COD Available &nbsp;|&nbsp; 🚚 Free Delivery</div>
        <button class="product-card__add" onclick="handleAddToCart('${p.id}')">Add to Cart 🛒</button>
      </div>
    </div>`;
}
