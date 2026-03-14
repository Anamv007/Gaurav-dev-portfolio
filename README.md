# 🚀 Front-End Developer Portfolio

A modern, multi-page portfolio website with glassmorphism design, particle animations, and interactive UI.

## 📁 Folder Structure

```
portfolio/
├── index.html          ← Home / Hero page
├── about.html          ← About Me + Timeline
├── projects.html       ← Project Cards + Modal
├── skills.html         ← Skill Bars + Tech Stack
├── contact.html        ← Contact Form + Social Links
│
├── css/
│   ├── style.css       ← Global styles, variables, nav, footer
│   ├── home.css        ← Hero section styles
│   ├── about.css       ← About page styles
│   ├── projects.css    ← Project cards + modal styles
│   ├── skills.css      ← Skill bars + tech grid styles
│   └── contact.css     ← Contact form + info styles
│
├── js/
│   ├── main.js         ← Shared: particles, nav, theme, scroll reveal
│   ├── projects.js     ← Filter chips + project modal
│   └── contact.js      ← Form validation + submit handling
│
└── assets/             ← Add your images/icons here
    └── (your images)
```

## ✨ Features

- **Glassmorphism** dark design with neon blue accents
- **Interactive particle canvas** — reacts to mouse movement
- **Typing effect** on the hero page
- **Dark / Light mode toggle** with localStorage persistence
- **Scroll-triggered reveal animations** (Intersection Observer)
- **Animated skill bars** — triggered on scroll
- **Project filter chips** — filter by tech stack
- **Project modal** — detailed info popup for each project
- **Contact form** — with real-time validation and submit animation
- **Fully responsive** — mobile, tablet, desktop
- **Counter animations** on hero stats

## 🛠️ Setup & Deployment

### Local
1. Clone/download the project
2. Open `index.html` in your browser (no build step needed!)

### GitHub Pages
1. Push to a GitHub repo
2. Go to **Settings → Pages**
3. Set Source to `main` branch, `/` (root)
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify (Drag & Drop)
1. Zip the `portfolio/` folder
2. Drag it onto [netlify.com/drop](https://netlify.com/drop)
3. Live instantly with a free URL!

## 🎨 Customization

### Change Your Name & Info
- Search for `"Your Name"` across all HTML files and replace
- Update bio in `about.html`
- Update links in footer and contact page

### Add Real Projects
In `projects.html`, copy a `.project-card` block and update:
- Title, description, tech chips
- The mockup CSS in `projects.css`
- Data in the `projectData` array in `projects.js`

### Connect the Contact Form
Replace the simulated submit in `contact.js` with:
- **FormSpree**: `fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: new FormData(form) })`
- **EmailJS**: Include their SDK and use `emailjs.send()`
- **Netlify Forms**: Add `netlify` attribute to the `<form>` tag

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --neon: #00c8ff;      /* Main accent color */
  --bg-0: #03050f;      /* Darkest background */
}
```

## 📦 Dependencies
Zero dependencies. Pure HTML + CSS + JavaScript.

---
Built with 💙 | Ready for GitHub Pages hosting
