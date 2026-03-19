/* =========================================================
   UrbanKart — Products Catalog Data
   Niche: Smart Home Gadgets | Optimized for Indian market
   ========================================================= */
'use strict';

const PRODUCTS = [
  {
    id: 'p001',
    name: 'SmartGlow RGB LED Strip — 5 Metre WiFi Enabled',
    shortName: 'SmartGlow RGB LED Strip 5m',
    category: 'Lighting',
    categorySlug: 'lighting',
    price: 999,
    mrp: 1999,
    discount: 50,
    rating: 4.8,
    reviews: 2847,
    stock: 47,
    lowStock: true,
    isBestseller: true,
    isNew: false,
    codAvailable: true,
    deliveryDays: '3–5',
    tags: ['wifi', 'bestseller', 'lighting'],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=700&q=80',
      'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=700&q=80',
    ],
    problem: 'Boring white walls that make your room look dull and lifeless',
    solution: 'SmartGlow transforms any room in 10 minutes with 16 million colours, music sync, and voice control. No electrician needed.',
    features: [
      'Controls via free smartphone app (iOS & Android)',
      'Works with Alexa, Google Home, and Siri',
      'Music Sync Mode — lights dance to your playlist',
      'Schedule timer — auto on/off every day',
      '16 million colour combinations, adjustable brightness',
      'Easy peel-and-stick installation, no wiring needed',
      'Energy efficient — uses only 24W for 5 metres',
      'IP65 water-resistant — safe for kitchen and bathroom edges',
    ],
    specs: {
      'Length':        '5 Metres',
      'Type':          'SMD5050 RGB',
      'Connectivity':  'WiFi 2.4GHz',
      'Voltage':       '12V DC',
      'Power':         '24W',
      'Compatibility': 'iOS 9+, Android 5.0+',
      'Voice Control': 'Alexa, Google Home, Siri',
      'Warranty':      '1 Year',
      'In the Box':    'LED Strip × 1, Power Adapter × 1, WiFi Controller × 1, Remote × 1',
    },
    description: 'Instantly upgrade any room with SmartGlow — the premium WiFi LED strip that makes your space come alive with colour.',
  },
  {
    id: 'p002',
    name: 'SecureHome 2K WiFi CCTV Camera — Night Vision, Two-Way Audio',
    shortName: 'SecureHome 2K WiFi Camera',
    category: 'Security',
    categorySlug: 'security',
    price: 2499,
    mrp: 4999,
    discount: 50,
    rating: 4.9,
    reviews: 1923,
    stock: 23,
    lowStock: true,
    isBestseller: true,
    isNew: false,
    codAvailable: true,
    deliveryDays: '3–7',
    tags: ['wifi', 'security', 'bestseller'],
    images: [
      'https://images.unsplash.com/photo-1558002038-1ad5a42b29d0?w=700&q=80',
      'https://images.unsplash.com/photo-1617879232546-36f3b9c29174?w=700&q=80',
      'https://images.unsplash.com/photo-1587919935985-a3f5ebcd91d0?w=700&q=80',
    ],
    problem: 'You leave for work and spend all day worried about your home and family\'s safety',
    solution: 'SecureHome streams 2K crystal-clear video to your phone 24/7. Get instant alerts for any motion — even at night from 30 metres away.',
    features: [
      '2K Super HD — read vehicle number plates at night',
      'Advanced IR Night Vision up to 30 metres',
      'AI Motion Detection — no false alarms from wind or traffic',
      'Two-Way Audio — speak directly through the camera',
      'Free Cloud + Local SD card storage (128GB supported)',
      'Weatherproof IP66 — tested for Indian monsoon conditions',
      'Instant WhatsApp & push notifications on motion',
      'Works with Alexa & Google Assistant',
    ],
    specs: {
      'Resolution':    '2304×1296 (2K)',
      'Field of View': '120° wide angle',
      'Night Vision':  'IR LED, up to 30m',
      'Connectivity':  'WiFi 2.4GHz',
      'Storage':       'Free Cloud + MicroSD (up to 128GB)',
      'Weatherproof':  'IP66',
      'Audio':         'Two-Way (built-in mic + speaker)',
      'Power':         '12V/1A adaptor (included)',
      'Warranty':      '1 Year',
    },
    description: 'Monitor your home from anywhere with 2K clarity. SecureHome is the most trusted smart camera for Indian families.',
  },
  {
    id: 'p003',
    name: 'PowerSmart WiFi Smart Plug — Energy Monitor, Voice Control',
    shortName: 'PowerSmart WiFi Smart Plug',
    category: 'Smart Plugs',
    categorySlug: 'smart-plugs',
    price: 699,
    mrp: 1499,
    discount: 53,
    rating: 4.7,
    reviews: 3412,
    stock: 200,
    lowStock: false,
    isBestseller: true,
    isNew: false,
    codAvailable: true,
    deliveryDays: '3–5',
    tags: ['wifi', 'bestseller', 'smart-plugs'],
    images: [
      'https://images.unsplash.com/photo-1558618047-f4e90ef9a933?w=700&q=80',
      'https://images.unsplash.com/photo-1586891015058-a8c01f3a5cde?w=700&q=80',
    ],
    problem: 'Forgetting to turn off appliances when you leave — wasting electricity and money',
    solution: 'PowerSmart turns any dumb appliance smart. Control anything remotely, track energy usage, and save up to 30% on electricity bills.',
    features: [
      'Control any appliance from anywhere via smartphone',
      'Real-time energy monitoring (kWh tracker)',
      'Schedule timer — auto off/on at set times',
      'Voice control with Alexa & Google Home',
      'Surge protection built-in — protects your devices',
      '16A high-power rating — safe for ACs and geysers',
      'Works with existing plugs — zero installation required',
      'Away Mode — randomises on/off to deter intruders',
    ],
    specs: {
      'Max Load':       '16A / 3680W',
      'Connectivity':   'WiFi 2.4GHz',
      'Compatibility':  'Indian 3-pin plug (IS 1293)',
      'Voice Control':  'Alexa, Google Home',
      'Energy Monitor': 'Real-time kWh tracking',
      'Safety':         'Over-voltage, over-current protection',
      'Warranty':       '1 Year',
    },
    description: 'Control any appliance from your phone, track energy usage, and save money — no electrician, no hassle.',
  },
  {
    id: 'p004',
    name: 'BassWave 360° Portable Bluetooth Speaker — 20W, IPX7, 24hr Battery',
    shortName: 'BassWave 360° Bluetooth Speaker',
    category: 'Audio',
    categorySlug: 'audio',
    price: 1499,
    mrp: 2999,
    discount: 50,
    rating: 4.7,
    reviews: 891,
    stock: 89,
    lowStock: false,
    isBestseller: true,
    isNew: false,
    codAvailable: true,
    deliveryDays: '3–5',
    tags: ['audio', 'bestseller'],
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700&q=80',
    ],
    problem: 'Tiny phone speakers that sound terrible in outdoor settings or bathrooms',
    solution: 'BassWave delivers concert-quality 360° sound anywhere — pool, bathroom, rooftop. 24 hours of music on one charge.',
    features: [
      '20W dual-driver for rich bass and crystal treble',
      '360° omnidirectional sound — fills any room',
      'IPX7 waterproof — fully submersible up to 1 metre',
      '24-hour battery life at 50% volume',
      'Quick Charge — 10 minutes = 2 hours playback',
      'TWS pairing — connect two for true stereo sound',
      'Built-in mic for hands-free calls',
      'Works in -10°C to 45°C — ideal for Indian summers',
    ],
    specs: {
      'Output Power':  '20W (2×10W)',
      'Connectivity':  'Bluetooth 5.3, AUX',
      'Battery':       '4400mAh — 24 hours',
      'Charge Time':   '2 hours',
      'Waterproof':    'IPX7 (1m, 30 min)',
      'Frequency':     '60Hz – 20kHz',
      'Weight':        '620g',
      'Warranty':      '1 Year',
    },
    description: 'Room-filling 20W sound, 24-hour battery, IPX7 waterproof — the only speaker you\'ll ever need.',
  },
  {
    id: 'p005',
    name: 'PureAir Smart WiFi Air Purifier — HEPA + UV, 400 sq ft Coverage',
    shortName: 'PureAir Smart WiFi Air Purifier',
    category: 'Air Quality',
    categorySlug: 'air-quality',
    price: 7999,
    mrp: 14999,
    discount: 47,
    rating: 4.9,
    reviews: 612,
    stock: 15,
    lowStock: true,
    isBestseller: false,
    isNew: true,
    codAvailable: true,
    deliveryDays: '5–7',
    tags: ['wifi', 'new', 'air-quality'],
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=700&q=80',
    ],
    problem: 'Delhi AQI crossing 400+, making your family breathe toxic air inside their own home',
    solution: 'PureAir\'s medical-grade HEPA-13 + UV combo removes 99.97% of PM2.5, dust, allergens, viruses, and bacteria from 400 sq ft in 15 minutes.',
    features: [
      'HEPA-13 filter — captures PM0.1 particles (99.97%)',
      'UV sterilisation — kills viruses and bacteria',
      'Real-time AQI display on device and app',
      'Auto Mode — senses air quality and adjusts speed',
      'Ultra-quiet at 22dB — sleep peacefully',
      'Covers 400 sq ft in one pass (30 min)',
      'WiFi control via app — turn on before you reach home',
      'Filter life indicator — no guesswork',
    ],
    specs: {
      'Coverage':      '400 sq ft',
      'CADR':          '300 m³/h',
      'Filter':        'Pre-filter + HEPA-13 + UV + Activated Carbon',
      'Noise':         '22dB (Sleep Mode)',
      'Power':         '65W',
      'Connectivity':  'WiFi 2.4GHz',
      'Display':       'Touch screen + AQI sensor',
      'Warranty':      '2 Years',
    },
    description: 'Breathe clean air at home. Medical-grade HEPA-13 + UV technology removes 99.97% of airborne pollutants.',
  },
  {
    id: 'p006',
    name: 'NightLight Smart Doorbell Camera — HD, Two-Way Talk, No Subscription',
    shortName: 'NightLight Smart Doorbell Camera',
    category: 'Security',
    categorySlug: 'security',
    price: 2999,
    mrp: 5999,
    discount: 50,
    rating: 4.6,
    reviews: 438,
    stock: 55,
    lowStock: false,
    isBestseller: false,
    isNew: true,
    codAvailable: true,
    deliveryDays: '3–7',
    tags: ['wifi', 'security', 'new'],
    images: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80',
      'https://images.unsplash.com/photo-1558244661-d248897f7bc4?w=700&q=80',
    ],
    problem: 'Missing deliveries and not knowing who is at your door when you\'re not home',
    solution: 'NightLight lets you see, speak to, and record anyone at your door from anywhere. No monthly subscription — free local storage included.',
    features: [
      'Full HD 1080p with HDR — see faces clearly',
      'Wide 160° field of view — no blind spots at door',
      'Instant smartphone alert when visitor rings',
      'Two-way talk — speak to visitors remotely',
      'Night Vision up to 10 metres',
      'Free local storage via MicroSD — no subscription',
      'IP65 weatherproof — ready for India\'s monsoon',
      'Easy 30-minute DIY installation',
    ],
    specs: {
      'Resolution':    '1920×1080 Full HD',
      'Field of View': '160°',
      'Night Vision':  'Colour Night Vision up to 10m',
      'Storage':       'MicroSD (up to 256GB, included: 32GB)',
      'Connectivity':  'WiFi 2.4GHz',
      'Weatherproof':  'IP65',
      'Power':         'Hardwired 8–24V AC or included battery pack',
      'Warranty':      '1 Year',
    },
    description: 'See, talk to, and record visitors at your door from anywhere. No subscriptions, no surprises.',
  },
  {
    id: 'p007',
    name: 'ChargeStack 65W GaN Wireless Charging Station — 4-in-1',
    shortName: 'ChargeStack 65W 4-in-1 Charger',
    category: 'Charging',
    categorySlug: 'charging',
    price: 1299,
    mrp: 2499,
    discount: 48,
    rating: 4.8,
    reviews: 1234,
    stock: 120,
    lowStock: false,
    isBestseller: false,
    isNew: true,
    codAvailable: true,
    deliveryDays: '3–5',
    tags: ['new', 'charging'],
    images: [
      'https://images.unsplash.com/photo-1625765143185-d39b3b4c3a83?w=700&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&q=80',
    ],
    problem: 'Cable clutter on your desk and waiting 3 hours for your phone to charge',
    solution: 'ChargeStack charges your phone, earbuds, smartwatch, and laptop simultaneously using GaN technology — faster and cooler than traditional chargers.',
    features: [
      '65W GaN technology — 3× faster than standard chargers',
      'Charge 4 devices simultaneously (phone, watch, earbuds, tablet)',
      '15W fast wireless charging pad built-in',
      'Smart power distribution — auto-adjusts per device',
      'Runs 40% cooler than conventional chargers',
      'Compatible with iPhones, Samsung, OnePlus, Pixel',
      'MagSafe compatible for iPhone 12/13/14/15 series',
      'BIS certified — safe for Indian power grids (100–240V)',
    ],
    specs: {
      'Total Output':      '65W',
      'Wireless Charging': '15W (Qi, MagSafe)',
      'USB-C Ports':       '2 × USB-C PD',
      'USB-A Ports':       '1 × USB-A QC3.0',
      'Technology':        'GaN (Gallium Nitride)',
      'Compatibility':     'Universal',
      'Certification':     'BIS, CE, FCC, RoHS',
      'Warranty':          '1 Year',
    },
    description: 'One charger for every device. 65W GaN technology charges your phone from 0–80% in 35 minutes.',
  },
  {
    id: 'p008',
    name: 'DreamLight Smart Himalayan Salt Lamp — WiFi, RGB, Sleep Aid',
    shortName: 'DreamLight Smart Salt Lamp',
    category: 'Wellness',
    categorySlug: 'wellness',
    price: 1799,
    mrp: 3499,
    discount: 49,
    rating: 4.7,
    reviews: 723,
    stock: 68,
    lowStock: false,
    isBestseller: false,
    isNew: false,
    codAvailable: true,
    deliveryDays: '3–7',
    tags: ['wellness'],
    images: [
      'https://images.unsplash.com/photo-1545239351-cefa43af60f3?w=700&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=80',
    ],
    problem: 'Screen light before bed disrupting your sleep and causing stress and fatigue',
    solution: 'DreamLight\'s warm amber glow reduces screen stress and helps your body produce melatonin naturally. Wake up feeling rested, every day.',
    features: [
      'Natural Pakistani Himalayan salt — genuine, not imitation',
      'Sleep Mode: gradually dims over 30 minutes to help you fall asleep',
      'Wake Mode: slowly brightens 30 minutes before alarm',
      'WiFi app control — set schedules from your phone',
      'RGB base light with 16 million colours',
      'Negative ion emission — reduces allergens in the air',
      'Touch sensor control on base',
      'Works with Alexa & Google Home for voice control',
    ],
    specs: {
      'Weight':        '2.1 kg (natural variations expected)',
      'Bulb':          '15W E14 LED (included)',
      'Connectivity':  'WiFi 2.4GHz',
      'RGB Base':      'Yes — 16M colours',
      'Modes':         'Sleep, Wake, Colour, Warm, Cool',
      'Power':         '240V adaptor included',
      'Certification': 'BIS approved',
      'Warranty':      '1 Year',
    },
    description: 'A natural sleep aid and smart light in one. Genuine Himalayan salt with WiFi app control and RGB base.',
  },
];

/* ── Helpers ── */
function formatPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
}

function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function renderProductCard(p) {
  const badges = [
    p.isBestseller ? `<span class="badge badge-orange">🔥 Bestseller</span>` : '',
    p.isNew        ? `<span class="badge badge-blue">✨ New</span>`          : '',
    p.lowStock     ? `<span class="badge badge-green">⚡ Almost Gone</span>` : '',
  ].filter(Boolean).join('');

  return `
  <div class="product-card reveal">
    <a href="product.html?id=${p.id}">
      <div class="product-card__img-wrap">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        <div class="product-card__badges">${badges}</div>
        <button class="product-card__wishlist" title="Save to wishlist">🤍</button>
      </div>
    </a>
    <div class="product-card__body">
      <p class="product-card__category">${p.category}</p>
      <a href="product.html?id=${p.id}"><h3 class="product-card__name">${p.shortName}</h3></a>
      <div class="product-card__rating">
        <div class="rating-row">
          <span class="stars stars-sm">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
          <span class="rating-count">${p.rating} (${p.reviews.toLocaleString('en-IN')})</span>
        </div>
      </div>
      <div class="product-card__footer">
        <div>
          <div class="price-wrap">
            <span class="price-current">${formatPrice(p.price)}</span>
            <span class="price-original">${formatPrice(p.mrp)}</span>
          </div>
          <span class="price-discount">${p.discount}% off</span>
        </div>
        <button class="product-card__add-btn" onclick="event.preventDefault();addToCart({id:'${p.id}',name:'${p.shortName.replace(/'/g,"\\'")}',price:${p.price},image:'${p.images[0]}'},1)">
          🛒 Add
        </button>
      </div>
    </div>
  </div>`;
}

function filterProducts({ category = 'all', sort = 'popular', search = '' } = {}) {
  let list = [...PRODUCTS];
  if (category !== 'all') list = list.filter(p => p.categorySlug === category);
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some(t => t.includes(q))
    );
  }
  switch (sort) {
    case 'price-low':  list.sort((a,b) => a.price - b.price); break;
    case 'price-high': list.sort((a,b) => b.price - a.price); break;
    case 'rating':     list.sort((a,b) => b.rating - a.rating); break;
    case 'newest':     list.sort((a,b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    default:           list.sort((a,b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0)); break;
  }
  return list;
}
