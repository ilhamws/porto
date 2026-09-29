# Ilham Wahyu Saputro – Modern Portfolio Website

A clean, modern, responsive portfolio website built with semantic HTML5, modern Tailwind CSS, and vanilla JavaScript.

## Features
- **Design & UI**: Minimalist modern aesthetics, glassmorphism, responsive grid, custom typography (`Plus Jakarta Sans` & `JetBrains Mono`).
- **Theme Toggle**: Seamless Light & Dark mode support with `localStorage` persistence and system color-scheme detection.
- **Projects Showcase & Case Study Modals**: Interactive filtering (`All`, `AI & Vision`, `Security & Systems`, `Full Stack & Web`) with rich modal detail cards.
- **Interactive Actions**:
  - 1-click clipboard copy for Email and Phone with instant visual feedback badge.
  - Direct WhatsApp chat button (`wa.me`).
  - CV Print & PDF export ready (`window.print()` with dedicated print stylesheet).
  - Pre-formatted contact form with automated mail client invocation.
- **Performance**: Zero build-step dependencies required. Can be opened directly in any browser or hosted instantly on GitHub Pages, Vercel, or Netlify.

## Structure
```
/
├── index.html                  # Main portfolio semantic document
├── assets/
│   ├── css/
│   │   └── style.css           # Glassmorphism, animations, print media rules
│   └── js/
│       ├── projects-data.js    # Structured project records & case studies
│       └── main.js             # Filters, theme manager, modal, clipboard, form
├── CV_Ilham_Wahyu_Saputro.docx # Original CV document
└── README.md
```

## How to View
- **Direct in browser**: Double-click [index.html](file:///mnt/c/porto/index.html) or open `C:\porto\index.html` in your browser.
- **Local HTTP Server**:
  ```bash
  python3 -m http.server 8000
  ```
  Then open `http://localhost:8000` in your browser.

## Deployment to GitHub Pages
1. Initialize git and push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/ilhamws/portfolio.git
   git push -u origin main
   ```
2. In GitHub repository settings, go to **Settings > Pages** and set source to the `main` branch.
