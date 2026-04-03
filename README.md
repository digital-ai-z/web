# Digital AI-Z — Website

**Pragmatic by design.** This site was built with a focus on speed, clarity, and directness. We believe that a high-quality web experience shouldn't require hundreds of kilobytes of frameworks and bundled scripts that consume user resources and slow down page loads, especially when less than 1% of their functionality is typically needed. 

Digital AI-Z is a static project with minimal, purpose-built JavaScript. It relies on modern CSS and a clean structure to deliver content efficiently and beautifully.

---

Corporate website for **Digital AI-Z GbR**, an IT consulting, software development, and AI integration firm based in Deggendorf, Germany.

Live site: [https://digital-ai-z.de/](https://digital-ai-z.de/)

---

## Stack

| Layer | Choice |
|---|---|
| Markup | HTML5 |
| Styles | Vanilla CSS (custom properties, grid, flexbox) |
| Scripts | Vanilla JS (modularized, zero dependencies) |
| Fonts | System font stack (`-apple-system`, `BlinkMacSystemFont`, …) |
| SEO | JSON-LD Structured Data, Canonical Tags, Sitemap, Robots.txt |
| Privacy | No cookies, no tracking, no external frameworks |

Total footprint: **~80 KB uncompressed** (all assets and legal pages included).

---

## Project structure

```
/
├── index.html           # Main landing page (German)
├── en/                  # English localized content
│   └── index.html       # English entry point
├── assets/
│   ├── css/             # Stylesheets (styles.css, modal.css)
│   ├── js/              # JavaScript files (main.js, modal.js)
│   └── images/          # Shared images, icons, and flags
├── robots.txt           # Crawler instructions
├── sitemap.xml          # SEO indexing map
├── de/                  # German localized legal pages
│   ├── impressum.html
│   └── datenschutz.html
└── en/                  # English localized legal pages
    ├── impressum.html
    └── datenschutz.html
```

---

## Features

### Bilingual (DE / EN)
Default language is **German**. An `EN` toggle in the top-right nav switches to English. Language switching is pure CSS — a single class toggle on `<html>` shows/hides `.de` and `.en` spans. The toggle logic in `ui.js` manages the class flip and synchronizes SEO metadata.

### Privacy by Design
The site is built to be as privacy-friendly as possible:
- **No external scripts** (no Google Fonts, no Analytics, no CDNs).
- **No cookies** or local storage used for tracking.
- **Self-hosted assets** (images, logos, fonts).
- **GDPR compliant** legal notices (Impressum and Datenschutz).

### Dynamic Legal Modal
Legal pages (`Impressum` and `Datenschutz`) are loaded on-demand via the **Fetch API** into a modern modal overlay. This keeps the main landing page lean while providing a seamless user experience. Standalone versions of these pages are also accessible for SEO and direct linking.

### SEO & Structured Data
- **JSON-LD**: Full schema markup for `Organization`, `LocalBusiness`, `Service`, `FAQ`, and `Breadcrumbs` included directly in `index.html`.
- **Meta Tags**: Optimized titles and descriptions for all pages and languages.
- **Canonical Tags**: Prevents duplicate content issues.
- **Performance**: High Lighthouse scores due to zero dependencies and minimal asset sizes.

### Scroll-reveal animations
Elements marked `.reveal` are observed via `IntersectionObserver` and gain the `.visible` class when they enter the viewport. No scroll event listeners, no layout thrashing.

---

## Sections

1. **Hero** — full-viewport headline with animated entry
2. **Manifesto** — mission statement
3. **Visual panel** — large dark card with pure-CSS animated AI node network
4. **Services** — IT Consulting · Software Development · AI Integration · Enterprise Integration
5. **Approach** — four numbered principles
6. **Gradient strip** — full-bleed cinematic statement
7. **Process** — four-step engagement model
8. **CTA** — contact call-to-action
9. **Footer** — links, legal (Impressum · Datenschutz)

---

## Color palette

| Variable | Hex | Usage |
|---|---|---|
| `--accent` | `#2DD4BF` | Logo mark, eyebrow labels, scroll indicator |
| `--accent2` | `#C084FC` | Gradient endpoints |
| `--accent3` | `#818CF8` | Buttons, gradient midpoint |

Gradient direction: **teal → indigo → soft violet** (`#2DD4BF → #818CF8 → #C084FC`)

---

## Local development

No build step required. Open `index.html` directly in a browser:

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

## Deployment

The site is a collection of static files — it deploys to any static host as-is:

- **GitHub Pages** — push to `main`, enable Pages in repo settings, set source to `/ (root)`
- **Netlify / Vercel** — connect repo, no build command needed, publish directory: `.`
- **Any web server** — upload all files to the document root

---

## Legal

© 2026 Digital AI-Z GbR · Deggendorf, Germany
Legal notices are available via the footer or directly at `/de/impressum.html` and `/de/datenschutz.html`.
