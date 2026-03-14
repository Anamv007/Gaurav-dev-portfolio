/* =========================================
   PROJECTS JS — Filter + Modal
   ========================================= */

// ── Project Data for Modal ──
const projectData = [
  {
    title: 'CONFESS',
    tags: ['Node.js', 'Express', 'MongoDB', 'Vanilla JS', 'HTML/CSS'],
    description: 'An anonymous confession platform with a dark gothic aesthetic. Users post confessions under auto-generated dark aliases (e.g., "Shadow #4821") without creating accounts.',
    features: [
      'Anonymous posting with auto-generated gothic aliases',
      'Profanity filtering and auto-hide moderation',
      'Reaction system (💀 ❤️ 🔥) per confession',
      'Comment modal and category filtering',
      'Report system with threshold-based hiding',
      'Full-stack: Node.js + Express + MongoDB Atlas + Render deployment'
    ],
    live: '#',
    github: '#'
  },
  {
    title: 'Product Landing Page',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'A responsive product landing page featuring smooth scroll animations, sticky navigation, interactive pricing toggle, and mobile-first responsive layout.',
    features: [
      'Smooth scroll and section reveal animations',
      'Sticky transparent→solid nav on scroll',
      'Interactive monthly/annual pricing toggle',
      'CSS Grid + Flexbox fully responsive layout',
      'Contact form with validation'
    ],
    live: '#',
    github: '#'
  },
  {
    title: 'React Dashboard UI',
    tags: ['React', 'Tailwind CSS', 'Chart.js'],
    description: 'Admin dashboard UI with data visualization, responsive collapsible sidebar, and dark/light mode. Built as a deep-dive into React hooks, state management, and component architecture.',
    features: [
      'React functional components + hooks',
      'Chart.js bar, line, and doughnut charts',
      'Responsive sidebar with collapse toggle',
      'Dark/light mode with context API',
      'Reusable card and table components'
    ],
    live: '#',
    github: '#'
  },
  {
    title: 'This Portfolio',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'The very portfolio you\'re looking at. Designed and built from scratch with a futuristic glassmorphism aesthetic, particle background, custom animations, and a dark/light theme toggle.',
    features: [
      'Multi-page site with shared nav and footer',
      'Interactive particle canvas (mouse-aware)',
      'Typing effect and counter animations',
      'Scroll-triggered reveal animations',
      'Dark/light theme toggle with localStorage',
      'Fully responsive across all devices'
    ],
    live: '#',
    github: '#'
  }
];

// ── Modal Functions ──
function openModal(index) {
  const data = projectData[index];
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <div class="modal-body">
      <h2>${data.title}</h2>
      <div class="tags">${data.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
      <p>${data.description}</p>
      <ul class="feature-list">
        ${data.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="modal-actions">
        <a href="${data.live}" class="btn btn-primary"><span>Live Demo</span></a>
        <a href="${data.github}" class="btn btn-outline">GitHub →</a>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Filter Logic ──
const filterChips = document.querySelectorAll('.filter-chip');
const cards = document.querySelectorAll('.project-card');

filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');

    const filter = chip.dataset.filter;
    cards.forEach(card => {
      const tags = card.dataset.tags || '';
      if (filter === 'all' || tags.includes(filter)) {
        card.classList.remove('hidden');
        // Re-trigger reveal
        card.classList.remove('revealed');
        setTimeout(() => card.classList.add('revealed'), 50);
      } else {
        card.classList.add('hidden');
      }
    });
  });
});
