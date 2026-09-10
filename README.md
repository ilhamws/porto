# Ilham Wahyu Saputro — Personal Portfolio Website

> Full Stack Developer & AI Systems Engineer specializing in Layer 6 API Security, Real-Time Anomaly Detection, Machine Learning & Modern Web Applications.

---

## 🌟 Overview & Highlights

- **Live AI Security & Gate Simulator**: Interactive demonstration of Layer 6 inspection, TLS handshake validation, ASN scoring, and Scikit-learn anomaly detection (inspired by RitAPI & MiniFW-AI at PT. Sydeco).
- **Comprehensive Project Showcase**: Filterable showcase covering Enterprise Cybersecurity, Computer Vision (SIBI Thesis), Medical ML (RetinaScan), and Full-Stack Web Applications with interactive deep-dive modals.
- **Career & Academic Timeline**: PT. Sydeco, DBS Foundation Coding Camp (Dicoding), PT. Enggal Jaya, and Universitas Stikubank (GPA: 3.71).
- **Interactive UI/UX**: Dark cyber-glassmorphic aesthetic, 1-click email copy with toast feedback, direct WhatsApp routing, resume download, and responsive layout for mobile, tablet, and desktop.

---

## 🚀 Quick Start / Local Preview

### Method 1: Direct Double-Click
Simply open `index.html` in your favorite web browser (Chrome, Edge, Firefox).

### Method 2: Lightweight Local Server
Using Python (built-in):
```bash
python3 -m http.server 3000
```
Then visit: `http://localhost:3000`

Using npm:
```bash
npm start
```

---

## 📁 Project Structure

```
.
├── index.html                     # Semantic, responsive HTML5 with Tailwind CSS
├── profile.jpg                    # Ilham Wahyu Saputro's profile photo
├── CV_Ilham_Wahyu_Saputro.pdf     # Downloadable resume
├── package.json                   # Project metadata & start scripts
├── README.md                      # Documentation
└── assets/
    ├── css/
    │   └── style.css              # Custom cyber styling, glassmorphism & keyframes
    └── js/
        ├── main.js                # Dynamic filtering, modals, copy toast, contact routing
        ├── projects-data.js       # Complete project catalog & architectural metadata
        └── terminal-simulator.js  # Interactive RitAPI & MiniFW-AI simulation logic
```

---

## 🌐 Deploying to GitHub Pages

1. Initialize git (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio website with interactive AI simulator"
   ```
2. Push to your GitHub repository (e.g., `https://github.com/ilhamws/ilhamws.github.io`):
   ```bash
   git remote add origin https://github.com/ilhamws/ilhamws.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages in repository Settings &rarr; Pages &rarr; Source: `Deploy from a branch` (`main` / root).
