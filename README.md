# Digital AI-Z — Website

Corporate website for **Digital AI-Z GbR**, an IT consulting, software development, and AI integration firm based in Deggendorf, Germany.

Live site: _coming soon_

---

## Stack

| Layer | Choice |
|---|---|
| Markup | HTML5 |
| Styles | Vanilla CSS (custom properties, grid, flexbox) |
| Scripts | Vanilla JS — 23 lines, zero dependencies |
| Fonts | System font stack (`-apple-system`, `BlinkMacSystemFont`, …) |
| Frameworks | None |
| Packages | None |

Total footprint: **3 files, ~43 KB uncompressed.**

---

## Project structure

```
/
├── index.html   # All markup and content (DE + EN)
├── styles.css   # All styles, animations, responsive rules
└── main.js      # Nav scroll effect · scroll-reveal · language toggle
```

---

## Features

### Bilingual (DE / EN)
Default language is **German**. An `EN` toggle in the top-right nav switches to English. Language switching is pure CSS — a single class toggle on `<html>` shows/hides `.de` and `.en` spans. The only JavaScript involved is the 4-line click handler that flips the class.

```css
html.lang-de .en { display: none; }
html.lang-en .de { display: none; }
```

### Scroll-reveal animations
Elements marked `.reveal` are observed via `IntersectionObserver` and gain the `.visible` class when they enter the viewport. No scroll event listeners, no layout thrashing.

### Nav blur effect
The fixed nav picks up a `backdrop-filter` glass blur once the user scrolls past 32 px — applied via a single `scrolled` class toggle.

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

The site is three static files — it deploys to any static host as-is:

- **GitHub Pages** — push to `main`, enable Pages in repo settings, set source to `/ (root)`
- **Netlify / Vercel** — connect repo, no build command needed, publish directory: `.`
- **Any web server** — upload the three files to the document root

---

## Legal

© 2026 Digital AI-Z GbR · Deggendorf, Germany
Impressum and Datenschutz pages to be linked once live.
