# Inclusivity Bookshelf

A static website for the Inclusivity Bookshelf scheme — helping university departments become more inclusive communities through shared reading.

**Live site:** [www.inclusivitybookshelf.com](https://www.inclusivitybookshelf.com)

Built with [Docusaurus](https://docusaurus.io/). Deployed automatically to GitHub Pages on every push to `main`.

## Running locally

```bash
# Install dependencies
npm install

# Start dev server (usually http://localhost:3000)
npm start

# Build for production
npm run build

# Preview the production build
npm run serve
```

## Project structure

```
src/
├── components/       # React components (Hero, Features, BookList, etc.)
├── css/
│   └── custom.css    # Global CSS and Docusaurus theming
├── data/
│   └── bookshelves.ts # Data for the bookshelf gallery
├── pages/
│   └── index.mdx     # Main page content (MDX)
└── theme/            # Theme overrides
static/
├── img/              # Images and favicons
└── bookshelves/      # Bookshelf photos
```

## Editing content

Main content lives in `src/pages/index.mdx`. The hero and features sections are built with React components found in `src/components/`.

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

- Semantic HTML landmarks
- Skip-to-content link
- Logical heading hierarchy
- Visible focus indicators
- Colour contrast meeting WCAG AA
- Responsive typography using `rem` units
- `prefers-reduced-motion` support
- Dark mode with system preference detection and manual toggle

## Licence

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Content is intended for reuse. If you set up a bookshelf, we would love to hear about it.
