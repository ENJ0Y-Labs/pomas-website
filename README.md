# Pomas website

Official product website for **Pomas**, the local-first Windows desktop poultry management application.

## Stack

- React + Vite
- JavaScript (no TypeScript)
- Plain CSS with responsive layouts and light/dark themes
- GitHub Releases API for live release metadata and installer links
- GitHub Issues' prefilled issue form for user feedback

## Run locally

Requirements: Node.js 20.19+ or 22.12+, npm and Git.

```bash
git clone https://github.com/ENJ0Y-Labs/pomas-website.git
cd pomas-website
npm install
npm run dev
```

Open the local URL printed by Vite. To verify the production output:

```bash
npm run build
npm run preview
```

## Product source of truth

Product details, branding and supported workflows are based on the public application repository:

- [Pomas desktop application](https://github.com/ENJ0Y-Labs/poultry-desktop)
- [Product README](https://github.com/ENJ0Y-Labs/poultry-desktop/blob/main/README.md)
- [Product release notes](https://github.com/ENJ0Y-Labs/poultry-desktop/releases)
- [Product documentation](https://github.com/ENJ0Y-Labs/poultry-desktop/tree/main/docs)

The logo in `public/pomas-logo.png` is copied from `app/renderer/src/assets/pomas-logo.png` in the application repository.

## Release downloads

The download centre reads published, non-draft releases from the Pomas application repository at runtime. It selects the latest stable release and links to its attached Windows installer. Older releases and their release notes are listed automatically.

The browser uses GitHub's public API. If the API is unavailable or rate-limited, the page provides a direct link to the official releases page. Do not hardcode an installer URL or claim a version is latest without checking the source repository.

## Feedback

The feedback form builds a prefilled GitHub Issue URL for the selected report type. The visitor reviews and submits the issue on GitHub, so a GitHub account is required.

This first version intentionally does not use a backend or store a GitHub token in the browser. Do not add a personal access token to frontend code or environment variables that are exposed to Vite.

## Important content note

The application repository currently contains the approved Pomas logo but no curated set of real product screenshots. The website's dashboard panels are explicitly labelled as illustrative interface previews. Replace them with approved screenshots captured from the actual desktop application before presenting them as screenshots.

## Deployment

The site is a static Vite build and can be deployed to Netlify, Cloudflare Pages or GitHub Pages.

- Build command: `npm run build`
- Publish directory: `dist`
- No server-side environment variables are required for the current features.

See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the pre-deployment checklist.
