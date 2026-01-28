# Inclusivity Bookshelf

A static website for the Inclusivity Bookshelf scheme — helping university departments become more inclusive communities through shared reading.

**Live site:** [www.inclusivitybookshelf.com](https://www.inclusivitybookshelf.com)

Built with [Astro](https://astro.build). Deployed automatically to GitHub Pages on every push to `main`.

## Running locally

```bash
# Install dependencies
npm install

# Start dev server (usually http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project structure

```
src/
├── components/
│   ├── DarkModeToggle.astro  # Light/dark theme toggle
│   ├── Footer.astro          # Site footer
│   └── Header.astro          # Sticky header with navigation
├── layouts/
│   └── BaseLayout.astro      # HTML shell, head, header/footer
├── pages/
│   └── index.astro           # Single-page site (all content)
└── styles/
    └── global.css            # All styles (theming, layout, components)

public/
├── CNAME                     # Custom domain for GitHub Pages
└── favicon.svg               # Site favicon

.github/workflows/
└── deploy.yml                # GitHub Actions workflow for deployment
```

## Editing content

All content lives in `src/pages/index.astro`. Edit the HTML directly — the site rebuilds on push.

## Setting up GitHub Pages

1. **Push this repo** to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select **GitHub Actions**.
4. Under **Custom domain**, enter `www.inclusivitybookshelf.com`.
5. Tick **Enforce HTTPS**.
6. Configure your DNS:
   - Add a **CNAME record** for `www` pointing to `<your-username>.github.io`.
   - Optionally add **A records** for the apex domain (`inclusivitybookshelf.com`) pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Add an **AAAA record** or second CNAME if you want the apex domain to redirect to `www`.

Once DNS propagates, the site will be live at `https://www.inclusivitybookshelf.com`.

## Accessibility

The site is built with accessibility in mind:

- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`)
- Skip-to-content link
- Logical heading hierarchy
- Visible focus indicators
- Colour contrast meeting WCAG AA
- Responsive typography using `rem` units
- `prefers-reduced-motion` support
- Dark mode with system preference detection and manual toggle

## Licence

Content is intended for reuse. If you set up a bookshelf, we would love to hear about it.
