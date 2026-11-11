# Content maintenance

## Product release updates

The download centre reads the Pomas desktop repository's public Releases API at runtime:

`https://api.github.com/repos/ENJ0Y-Labs/poultry-desktop/releases`

It filters draft releases, identifies the newest stable release, and uses attached Windows installer assets when available. If the request fails, the page falls back to the official release page link.

Do not replace this with a hardcoded "latest" version. Verify the release and asset in GitHub before publishing announcements.

## Updating product information

When the application changes:

1. Read the application README and current release notes.
2. Check relevant documentation under the application repository's `docs/` directory.
3. Update the feature copy and FAQ only where the source confirms the behavior.
4. Keep bird-type-specific behavior explicit.
5. Update [CONTENT-AND-PRODUCT-ACCURACY.md](CONTENT-AND-PRODUCT-ACCURACY.md).

## Screenshots

Use screenshots captured from a real, current Pomas build. Use realistic but synthetic demo farm data, not private Grantino Farms records. Crop out personal information, account identifiers, local paths and other sensitive information. Prefer optimized WebP images with descriptive alt text. Record the application version used for each screenshot.

The current website contains CSS-generated illustrative previews. They are not actual screenshots and are labelled as such in the page.
