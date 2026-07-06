# F&M Research Computing Services Portal

Astro starter site for the Franklin & Marshall College Research Computing Services portal. It is designed for deployment through GitHub Pages.

## Local development on Windows

Install the current LTS version of Node.js, then open PowerShell in this directory:

```powershell
npm install
npm run dev
```

Open the local URL shown by Astro, usually:

```text
http://localhost:4321/research-computing-portal/
```

## Build locally

```powershell
npm run build
npm run preview
```

## GitHub Pages deployment

This project includes `.github/workflows/deploy.yml`.

1. Push this folder to a GitHub repository.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` branch.
5. GitHub Actions will build and deploy the site automatically.

## Important GitHub Pages setting

The current `astro.config.mjs` assumes the repository will be named:

```text
research-computing-portal
```

That means the deployed URL would be:

```text
https://fandm-college.github.io/research-computing-portal/
```

If the repository name is different, change this line in `astro.config.mjs`:

```js
base: '/research-computing-portal',
```

For example, if the repo is named `research-computing`, use:

```js
base: '/research-computing',
```

If this becomes the organization site at `https://fandm-college.github.io/`, remove the `base` line.

## Current external guide links

- Globus faculty guide: https://fandm-college.github.io/globus/
- JupyterHub faculty guide: https://fandm-college.github.io/jupyterhub-guide/

## Contact information used by the site

- Location: Stager Hall, STA007
- Email: dorc@fandm.edu
- Tickets: https://request.fandm.edu

## Research spotlight note

The Research Spotlight includes placeholder `#` for the ResearchGate link because only the label was provided. Update `src/content/spotlight.ts` with the exact ResearchGate URL when available.
