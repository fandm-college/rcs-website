# F&M Research Computing Services Website

Astro site for the Franklin & Marshall College Research Computing Services portal.

## Local development on Windows

Install Node.js LTS, then run from the repository root:

```powershell
npm install
npm run dev
```

Open <http://localhost:4321>.

## Build locally

```powershell
npm run build
npm run preview
```

## GitHub Pages deployment

This repository is configured for GitHub Pages at:

```text
https://fandm-college.github.io/rcs-website/
```

Important files:

- `astro.config.mjs` sets `site` and `base` for the `rcs-website` repository.
- `.github/workflows/deploy.yml` installs dependencies, builds Astro, uploads `dist`, and deploys to GitHub Pages.

In GitHub, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

## Editing content

Most editable site content is in:

- `src/data/services.js`
- `src/data/news.js`
- `src/data/spotlight.js`
- `src/data/site.js`

Images are in:

- `public/images/`
- `public/logos/`
