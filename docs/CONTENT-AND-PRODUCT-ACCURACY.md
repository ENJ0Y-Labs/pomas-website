# Content and product accuracy

This website is based on the current public Pomas desktop application repository, not on unverified roadmap assumptions.

## Confirmed product identity

- Product name: Pomas
- Brand mark: egg-and-M logo from `app/renderer/src/assets/pomas-logo.png`
- Product type: Windows desktop poultry farm management application
- Architecture: Electron shell, React renderer, Spring Boot REST API and local SQLite database
- Product design: local-first and designed to work without a cloud database dependency
- Current source package version checked while creating this site: 1.0.4
- Current public stable release checked while creating this site: v1.0.4

The release centre reads the current releases from GitHub rather than treating the version above as permanent.

## Confirmed workflows

- Farm, house, supplier, customer and batch management
- Layer, Broiler and Turkey flock tracking
- Mortality, culling, transfers and bird sales
- Daily farm operations and water usage
- Feed types, purchases, usage, inventory and FIFO costing
- Health, drug and vaccination records
- Layer egg collection, egg inventory and egg sales
- Broiler/Turkey weight, growth and meat-bird sales workflows
- Expenses, stock movements, pricing and margin calculations
- Farm and batch dashboards and reports
- CSV/PDF report export
- Audit history
- SQLite-safe backup and restore

Some features are bird-type-specific. Do not imply every operation is available for every bird type.

## Important technical and marketing boundaries

- Say "Windows desktop application". Do not advertise a mobile app or web-based farm dashboard.
- Say "local-first" or "designed to work offline". Do not claim cloud synchronization.
- Do not claim multi-user collaboration, remote access, AI forecasting, automatic integrations or mobile support unless the application source and release notes confirm them.
- Do not invent customer testimonials, farm results, performance figures, pricing, support SLAs or certifications.
- Farm metrics shown in the CSS interface illustration are placeholders, not live data or actual application screenshots.
- The app's authoritative calculations and farm data are handled by its local Spring Boot backend and SQLite database.

## Source links

- [Application repository](https://github.com/ENJ0Y-Labs/poultry-desktop)
- [Application README](https://github.com/ENJ0Y-Labs/poultry-desktop/blob/main/README.md)
- [Application release history](https://github.com/ENJ0Y-Labs/poultry-desktop/releases)
- [Application architecture](https://github.com/ENJ0Y-Labs/poultry-desktop/blob/main/docs/architecture.md)
- [Application release process](https://github.com/ENJ0Y-Labs/poultry-desktop/blob/main/docs/release.md)
