# Digital **AI**-Z — Website

*Digitalisierung. Durchdacht.*

[![Live Site](https://img.shields.io/badge/Live-digital--ai--z.de-2DD4BF?style=flat-square&logo=googlechrome&logoColor=white)](https://digital-ai-z.de/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Zero dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)](package.json)
[![No build step](https://img.shields.io/badge/build_step-none-2DD4BF?style=flat-square)](#local-development)
[![GDPR](https://img.shields.io/badge/GDPR-compliant-818CF8?style=flat-square)](https://digital-ai-z.de/de/datenschutz.html)
[![No cookies](https://img.shields.io/badge/cookies-none-C084FC?style=flat-square)](#privacy-by-design)

---

**Pragmatic by design.** This site was built with a focus on speed, clarity, and directness. We believe that a high-quality web experience shouldn't require hundreds of kilobytes of frameworks and bundled scripts that consume user resources and slow down page loads, especially when less than 1% of their functionality is typically needed.

Digital AI-Z is a static project with minimal, purpose-built JavaScript. It relies on modern CSS and a clean structure to deliver content efficiently and beautifully.

Corporate website for **Digital AI-Z GbR**, an IT consulting, software development, and AI integration firm based in Deggendorf, Germany.

---

## 🗂 Stack

| Layer | Choice |
|---|---|
| Markup | HTML5 |
| Styles | Vanilla CSS (custom properties, grid, flexbox) — split across focused files |
| Scripts | Vanilla JS (modularized, zero dependencies) |
| Fonts | System font stack (`-apple-system`, `BlinkMacSystemFont`, …) |
| SEO | JSON-LD Structured Data, Canonical Tags, Sitemap, Robots.txt |
| Privacy | No cookies, no tracking, no external frameworks |

Total footprint: **~80 KB uncompressed** (all assets and legal pages included).

---

## 📁 Project structure

```
/
├── index.html               # Main landing page (German)
├── en/                      # English localized content
│   ├── index.html           # English entry point
│   ├── impressum.html       # English legal notice
│   └── datenschutz.html     # English privacy policy
├── de/                      # German localized legal pages
│   ├── impressum.html
│   └── datenschutz.html
├── assets/
│   ├── css/
│   │   ├── styles.css       # Core styles and layout
│   │   ├── gallery.css      # Scrolling card gallery
│   │   ├── modal.css        # Legal modal overlay
│   │   ├── menu.css         # Mobile hamburger menu
│   │   └── responsive.css   # Breakpoint overrides
│   ├── js/
│   │   ├── main.js          # Nav scroll, hamburger menu, scroll-reveal, language link hashes
│   │   ├── modal.js         # On-demand legal modal (Fetch API)
│   │   └── gallery.js       # Auto-advancing card gallery with dot controls
│   └── images/
│       ├── *.png / *.svg    # Shared images, icons, and flags
│       └── mobile/          # Optimised mobile variants of gallery images
├── favicon.svg
├── robots.txt               # Crawler instructions
└── sitemap.xml              # SEO indexing map
```

---

## ✨ Features

### 🌐 Bilingual (DE / EN)
The default language is **German**. The `EN` toggle in the top-right nav links to the separate `/en/` subdirectory, which contains a fully localized version of every page. `main.js` preserves any active anchor hash when the language link is clicked, so users land on the same section after switching. The mobile menu exposes the same language link in the bottom bar.

### 🔒 Privacy by Design
The site is built to be as privacy-friendly as possible:
- **No external scripts** (no Google Fonts, no Analytics, no CDNs).
- **No cookies** or local storage used for tracking.
- **Self-hosted assets** (images, logos, fonts).
- **GDPR-compliant** legal notices (Impressum and Datenschutz).

### ⚖️ Dynamic Legal Modal
Legal pages (`Impressum` and `Datenschutz`) are loaded on-demand via the **Fetch API** into a modern modal overlay. This keeps the main landing page lean while providing a seamless user experience. Standalone versions of these pages are also accessible for SEO and direct linking.

### 🎠 Auto-advancing Card Gallery
The services section uses a touch-friendly, auto-advancing card gallery (`gallery.js` + `gallery.css`) with dot navigation and a pause/resume control. Cards cycle automatically and pause on hover or user interaction.

### 📱 Mobile Navigation
A hamburger menu (`menu.css`, `main.js`) slides in a full-screen overlay on small viewports. It closes on any nav link click or `Escape` key press, and locks body scroll while open.

### 📈 SEO & Structured Data
- **JSON-LD**: Full schema markup for `Organization`, `LocalBusiness`, `Service`, `FAQ`, and `Breadcrumbs` included directly in `index.html`.
- **Meta Tags**: Optimized titles and descriptions for all pages and languages.
- **Canonical Tags**: Prevents duplicate content issues.
- **Performance**: High Lighthouse scores due to zero dependencies and minimal asset sizes.

### 🎞 Scroll-reveal animations
Elements marked `.reveal`, `.reveal-left`, or `.reveal-right` are observed via `IntersectionObserver` and gain the `.visible` class when they enter the viewport. No scroll event listeners, no layout thrashing. A fallback scroll listener is included for older browsers.

---

## 📄 Sections

| # | Section            | Description                                                                                                                 |
|---|--------------------|-----------------------------------------------------------------------------------------------------------------------------|
| 1 | **Hero**           | Full-viewport headline with animated entry                                                                                  |
| 2 | **Manifesto**      | Mission statement and three value propositions                                                                              |
| 3 | **Visual panel**   | Two-column strategy/architecture overview (Strategie & Steuerung · Architektur & Umsetzung)                                 |
| 4 | **Services**       | Auto-advancing gallery: IT-Beratung · Software & Lösungen · KI-Integration · Systemintegration · Daten & Automatisierung    |
| 5 | **Approach**       | Four principles: Business-First · Pragmatische Lösungen · Saubere Entscheidungen · Unabhängigkeit & Nachhaltigkeit          |
| 6 | **Gradient strip** | Full-bleed cinematic statement                                                                                              |
| 7 | **Process**        | Five-step model: Analyse · Strategie & Architektur · Umsetzung & Integration · Iterationen & Feedback · Launch & Befähigung |
| 8 | **CTA**            | Contact call-to-action with email, phone, and LinkedIn links                                                                |
| 9 | **Footer**         | Service links, company links, legal (Impressum · Datenschutz)                                                               |

---

## 🎨 Color palette

| Variable    | Hex       | Preview                                                                      | Usage                                       |
|-------------|-----------|------------------------------------------------------------------------------|---------------------------------------------|
| `--accent`  | `#2DD4BF` | ![#2DD4BF](https://img.shields.io/badge/-%232DD4BF-2DD4BF?style=flat-square) | Logo mark, eyebrow labels, scroll indicator |
| `--accent2` | `#C084FC` | ![#C084FC](https://img.shields.io/badge/-%23C084FC-C084FC?style=flat-square) | Gradient endpoints                          |
| `--accent3` | `#818CF8` | ![#818CF8](https://img.shields.io/badge/-%23818CF8-818CF8?style=flat-square) | Buttons, gradient midpoint                  |

Gradient direction: **teal → indigo → soft violet** (`#2DD4BF → #818CF8 → #C084FC`)

---

## 🚀 Local development

No build step is required. Open `index.html` directly in a browser:

```bash
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Or serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

---

## ☁️ Deployment

The site is a collection of static files — it deploys to any static host as-is:

- **GitHub Pages** — push to `main`, enable Pages in repo settings, set a source to `/ (root)`
- **Netlify / Vercel** — connect repo, no build command needed, publish directory: `.`
- **Any web server** — upload all files to the document root

---

## 📜 Legal

© 2026 Digital AI-Z GbR · Deggendorf, Germany
Legal notices are available via the footer or directly at `/de/impressum.html` and `/de/datenschutz.html`.
