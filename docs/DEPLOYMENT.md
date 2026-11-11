# Deployment and pre-launch checklist

## Hosting

This project is a static Vite website. It does not need a continuously running Node server.

Recommended first deployment: Netlify or Cloudflare Pages.

| Setting | Value |
|---|---|
| Repository | `ENJ0Y-Labs/pomas-website` |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node version | 22.12+ |
| Environment variables | None required |

## Before connecting a production domain

- [ ] Replace the illustrative interface previews with approved screenshots captured from the current Pomas desktop build.
- [ ] Confirm the public product name, tagline and all feature descriptions.
- [ ] Confirm the latest release and installer download from the application repository.
- [ ] Test the release list when GitHub API is available and when it is unavailable.
- [ ] Test every download link and confirm it points to an official release asset.
- [ ] Verify the displayed checksum matches the release asset digest.
- [ ] Submit a test feedback draft and confirm it opens the correct GitHub repository, report title, type and prefilled details. Do not create a noisy public issue unless intended.
- [ ] Confirm the application issue tracker is enabled. The form prefixes issue titles by report type and includes the selected type in the issue body; maintainers can apply repository labels during triage.
- [ ] Check that no personal access token or private farm information is present in the frontend bundle.
- [ ] Verify all navigation links, footer links and external links.
- [ ] Test the site at 320px, 375px, 768px, 1024px and 1440px widths.
- [ ] Test light and dark themes.
- [ ] Test keyboard navigation, visible focus, form labels, reduced-motion preference and screen-reader names.
- [ ] Check the browser console and network panel for errors.
- [ ] Run the production build from a clean install.
- [ ] Configure the production domain and HTTPS.
- [ ] Add the final canonical URL and social preview image after the domain is chosen.
- [ ] Verify the deployed site and all routes/anchors on desktop and mobile.

## Local quality gates

```bash
npm ci
npm run build
npm run preview
```

Open the preview URL printed by Vite and complete the manual checks above. A successful build confirms compilation only; it does not replace real browser testing.

## Feedback architecture

The current feedback workflow opens a prefilled GitHub Issue page. It does not create issues silently and does not send form data to a website-owned backend.

A future server-side submission endpoint may be added if anonymous issue submission is required. Keep any GitHub token server-side, validate and rate-limit submissions, restrict accepted fields, and never expose the token in client-side JavaScript.

## Security and privacy

- Do not collect analytics until a privacy-conscious provider and disclosure are selected.
- Do not embed external scripts or third-party trackers without a deliberate review.
- Do not ask users to submit passwords, database files, real farm records or other sensitive information.
- The website does not need user accounts or a database.
