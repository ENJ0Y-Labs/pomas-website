import { useEffect, useMemo, useState } from "react";

const OWNER = "ENJ0Y-Labs";
const REPO = "poultry-desktop";
const RELEASES_API = `https://api.github.com/repos/${OWNER}/${REPO}/releases`;
const REPO_URL = `https://github.com/${OWNER}/${REPO}`;

const featureGroups = [
  {
    number: "01",
    title: "Know every flock",
    description: "Keep each batch's identity, bird type, placement details, house and lifecycle in one place.",
    items: ["Layer, Broiler and Turkey batches", "Houses and shared housing", "Mortality, culling and transfers", "Batch-level records and summaries"],
    icon: "flock"
  },
  {
    number: "02",
    title: "Keep daily work visible",
    description: "Capture the everyday facts that are easy to lose in notebooks, loose sheets and memory.",
    items: ["Daily farm operations and water", "Feed purchases and usage", "Health, drugs and vaccination", "Historical records and audit trail"],
    icon: "clipboard"
  },
  {
    number: "03",
    title: "Follow production",
    description: "Track the production records that matter to different types of poultry.",
    items: ["Layer egg collection and quality", "Egg inventory and sales", "Broiler and Turkey weight records", "Growth and feed conversion reporting"],
    icon: "chart"
  },
  {
    number: "04",
    title: "Understand stock and money",
    description: "Connect purchases, stock movements, sales and expenses to a clearer farm picture.",
    items: ["Feed inventory and FIFO costing", "Drugs and farm-supply inventory", "Customers, sales and expenses", "Pricing, margins and reports"],
    icon: "wallet"
  }
];

const docs = [
  { id: "getting-started", title: "Getting started", text: "Install Pomas, create the first farm account and set up the basic farm records.", tag: "START HERE", href: `${REPO_URL}/blob/main/README.md` },
  { id: "daily-records", title: "Historical imports", text: "Understand supported CSV templates and how historical production records are imported.", tag: "OPERATIONS", href: `${REPO_URL}/blob/main/docs/csv-bulk-import.md` },
  { id: "production", title: "Farm calculations", text: "Read how key production, population and cost metrics are derived from farm records.", tag: "PRODUCTION", href: `${REPO_URL}/blob/main/docs/calculations.md` },
  { id: "backup", title: "Backup and restore", text: "Protect the local database with validated backups and a deliberate restore process.", tag: "DATA SAFETY", href: `${REPO_URL}/blob/main/docs/backup-restore.md` },
  { id: "troubleshooting", title: "Development and setup", text: "Find environment requirements, setup steps and technical troubleshooting guidance.", tag: "HELP", href: `${REPO_URL}/blob/main/docs/development.md` }
];

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 19h14"/></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
    flock: <><path d="M4 15c0-3 2-5 5-5s5 2 5 5"/><path d="M14 15c0-2 1.5-4 4-4s4 2 4 4"/><circle cx="9" cy="6" r="3"/><circle cx="18" cy="7" r="2"/></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 10h8M8 14h8M8 18h5"/></>,
    chart: <><path d="M4 19V5M4 19h17"/><path d="m7 15 4-4 3 2 6-7"/></>,
    wallet: <><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 9h18M16 14h2"/><path d="M6 6V4h12"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    external: <><path d="M14 4h6v6M20 4l-9 9"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    laptop: <><rect x="4" y="4" width="16" height="12" rx="2"/><path d="M2 20h20l-2-4H4l-2 4Z"/></>,
    leaf: <><path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 10-6 8-16Z"/><path d="M4 21c3-6 7-9 13-13"/></>
  };
  return <svg {...common}>{paths[name] || paths.leaf}</svg>;
}

function SectionHeading({ eyebrow, title, text, centered = false }) {
  return <div className={`section-heading ${centered ? "centered" : ""}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function DashboardPreview() {
  return <div className="preview-frame" aria-label="Illustrative preview of the Pomas desktop interface">
    <div className="preview-topbar">
      <div className="preview-brand"><span className="mini-mark">P</span><strong>Pomas</strong></div>
      <span className="preview-caption">ILLUSTRATIVE INTERFACE PREVIEW</span>
      <span className="preview-window-dots"><i/><i/><i/></span>
    </div>
    <div className="preview-body">
      <aside className="preview-sidebar">
        <div className="preview-side-label">WORKSPACE</div>
        {["Overview", "Flocks", "Daily work", "Feed & stock", "Health", "Production", "Sales & money", "Reports"].map((item, i) =>
          <div className={`preview-nav ${i === 0 ? "active" : ""}`} key={item}><span className="preview-nav-dot"/>{item}</div>
        )}
        <div className="preview-side-foot">LOCAL FARM DATA</div>
      </aside>
      <div className="preview-main">
        <div className="preview-greeting"><div><span className="preview-kicker">FARM OVERVIEW</span><h3>Your farm at a glance</h3><p>A clearer view of the records behind your operation.</p></div><span className="preview-date">TODAY · FARM VIEW</span></div>
        <div className="preview-metrics">
          <div><span>ACTIVE BATCHES</span><b>—</b><small>Layer · Broiler · Turkey</small></div>
          <div><span>LIVE BIRDS</span><b>—</b><small>Calculated from records</small></div>
          <div><span>EGG PRODUCTION</span><b>—</b><small>Layer batches</small></div>
        </div>
        <div className="preview-lower">
          <div className="preview-panel"><div className="preview-panel-head"><b>Production trend</b><span>Illustrative</span></div><svg viewBox="0 0 420 120" role="img" aria-label="Decorative example line chart"><path d="M8 96H410M8 64H410M8 32H410" stroke="#dfe7e3" strokeDasharray="3 5" fill="none"/><path d="M8 91 C48 84 55 70 92 76 S145 48 180 57 S230 28 267 44 S330 19 410 22" stroke="#1a4d5c" strokeWidth="3" fill="none" strokeLinecap="round"/><path d="M8 91 C48 84 55 70 92 76 S145 48 180 57 S230 28 267 44 S330 19 410 22 L410 110 L8 110Z" fill="#1a4d5c" opacity=".08"/></svg><div className="preview-chart-labels"><span>WEEK 1</span><span>WEEK 2</span><span>WEEK 3</span><span>WEEK 4</span></div></div>
          <div className="preview-panel preview-attention"><div className="preview-panel-head"><b>Needs attention</b><span className="preview-alert-dot"/></div><div className="preview-empty"><span className="preview-check"><Icon name="check" size={15}/></span><span>Records determine what needs attention.</span></div><div className="preview-empty"><span className="preview-check"><Icon name="check" size={15}/></span><span>Keep important farm activity visible.</span></div></div>
        </div>
        <div className="preview-footnote">Sample layout only. Values are intentionally not presented as live farm data.</div>
      </div>
    </div>
  </div>;
}

function formatDate(value) {
  if (!value) return "Date not provided";
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(new Date(value));
}

function Downloads() {
  const [releases, setReleases] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    fetch(RELEASES_API, { headers: { Accept: "application/vnd.github+json" } })
      .then(response => {
        if (!response.ok) throw new Error("Release information is temporarily unavailable.");
        return response.json();
      })
      .then(data => {
        if (!active) return;
        setReleases(Array.isArray(data) ? data.filter(item => !item.draft) : []);
        setStatus("ready");
      })
      .catch(err => {
        if (!active) return;
        setError(err.message || "Could not load releases.");
        setStatus("error");
      });
    return () => { active = false; };
  }, []);

  const latest = releases.find(item => !item.prerelease);
  const installer = latest?.assets?.find(asset => asset.name.toLowerCase().endsWith(".exe"));
  return <section className="section downloads-section" id="downloads">
    <div className="section-inner">
      <SectionHeading eyebrow="DOWNLOAD CENTRE" title="Get Pomas for Windows." text="Download the latest stable installer or browse previous releases. Release information is read directly from the official application repository."/>
      <div className="download-feature">
        <div className="download-copy">
          <span className="release-pill"><span/> LATEST STABLE RELEASE</span>
          <h3>{latest?.name || "Pomas for Windows"}</h3>
          <p>{latest?.body ? latest.body.split("\n").find(line => line.trim() && !line.startsWith("#"))?.replace(/^\*\s*/, "") : "The Windows desktop application, packaged with its local backend and runtime."}</p>
          <div className="download-meta">
            <span><b>Version</b>{latest?.tag_name || "Loading…"}</span>
            <span><b>Published</b>{latest ? formatDate(latest.published_at) : "—"}</span>
            <span><b>Platform</b>Windows x64</span>
          </div>
          {installer ? <a className="button button-gold" href={installer.browser_download_url}><Icon name="download"/> Download installer <span className="button-size">{(installer.size / 1024 / 1024).toFixed(0)} MB</span></a> :
            <a className="button button-gold" href={latest?.html_url || `${REPO_URL}/releases`}><Icon name="external"/> View release</a>}
          {installer?.digest && <div className="asset-digest"><span>SHA-256 CHECKSUM</span><code>{installer.digest.replace(/^sha256:/, "")}</code></div>}
          <p className="download-note">The installer includes the application and its bundled Java runtime. No separate Java installation is required.</p>
        </div>
        <div className="download-art"><div className="download-art-orbit orbit-one"/><div className="download-art-orbit orbit-two"/><div className="download-laptop"><div className="download-screen"><img src="/pomas-logo.png" alt="Pomas logo"/><strong>Pomas</strong><span>POULTRY MANAGEMENT</span></div><div className="download-base"/></div><span className="download-art-tag">WINDOWS DESKTOP</span></div>
      </div>
      <div className="release-heading"><div><span className="eyebrow">RELEASE HISTORY</span><h3>Previous versions</h3></div><a className="text-link" href={`${REPO_URL}/releases`} target="_blank" rel="noreferrer">All releases <Icon name="external" size={15}/></a></div>
      {status === "loading" && <div className="release-state">Loading official release information…</div>}
      {status === "error" && <div className="release-state"><p>{error}</p><a href={`${REPO_URL}/releases`} target="_blank" rel="noreferrer">Open releases on GitHub <Icon name="external" size={15}/></a></div>}
      {status === "ready" && releases.length === 0 && <div className="release-state">No public releases are available yet.</div>}
      {status === "ready" && releases.map(release => {
        const asset = release.assets?.find(item => item.name.toLowerCase().endsWith(".exe"));
        return <article className="release-row" key={release.id}>
          <div className="release-version"><span className="version-icon"><Icon name="download" size={17}/></span><div><b>{release.name || release.tag_name}</b><small>{release.tag_name} · {formatDate(release.published_at)}</small></div></div>
          <span className={`channel ${release.prerelease ? "beta" : "stable"}`}>{release.prerelease ? "Pre-release" : "Stable"}</span>
          <span className="release-file">{asset ? asset.name : "No Windows installer attached"}</span>
          <a className="release-action" href={asset?.browser_download_url || release.html_url} target="_blank" rel="noreferrer">{asset ? "Download" : "Release notes"} <Icon name="arrow" size={16}/></a>
        </article>;
      })}
      <div className="checksum-note"><Icon name="shield" size={18}/><p><b>Verify your download.</b> Each published installer includes a SHA-256 digest in the official GitHub release asset metadata. Compare it with the downloaded file before installation.</p></div>
    </div>
  </section>;
}

function Feedback() {
  const [kind, setKind] = useState("bug");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [version, setVersion] = useState("");
  const [email, setEmail] = useState("");
  const [os, setOs] = useState("Windows 11");
  const issueUrl = useMemo(() => {
    const prefixes = { bug: "[BUG]", feature: "[FEATURE REQUEST]", support: "[SUPPORT]", feedback: "[FEEDBACK]" };
    const issueTitle = `${prefixes[kind]} ${title.trim() || ({ bug: "Bug report", feature: "Feature request", support: "Support request", feedback: "General feedback" }[kind])}`;
    const body = [
      `## Type\n${kind}`,
      `## Pomas version\n${version || "Not provided"}`,
      `## Operating system\n${os || "Not provided"}`,
      `## Description\n${details || "Please describe the issue or suggestion."}`,
      email ? `## Contact email\n${email}` : ""
    ].filter(Boolean).join("\n\n");
    return `${REPO_URL}/issues/new?title=${encodeURIComponent(issueTitle)}&body=${encodeURIComponent(body)}`;
  }, [kind, title, details, version, email, os]);

  return <section className="section feedback-section" id="feedback">
    <div className="section-inner feedback-layout">
      <div className="feedback-intro">
        <span className="eyebrow">FEEDBACK & SUPPORT</span>
        <h2>Help make the next farm day better.</h2>
        <p>Found a problem? Have an idea? Tell us what happened. Reports are submitted to the Pomas GitHub issue tracker, where they can be reviewed and followed up.</p>
        <div className="feedback-points">
          <div><span className="feedback-point-icon"><Icon name="shield" size={18}/></span><span><b>Clear issue history</b><small>Each report gets its own trackable discussion.</small></span></div>
          <div><span className="feedback-point-icon"><Icon name="clipboard" size={18}/></span><span><b>Useful details</b><small>Version and operating-system information help reproduce problems.</small></span></div>
          <div><span className="feedback-point-icon"><Icon name="external" size={18}/></span><span><b>Transparent follow-up</b><small>Track progress through GitHub Issues.</small></span></div>
        </div>
      </div>
      <form className="feedback-form" onSubmit={event => { event.preventDefault(); window.open(issueUrl, "_blank", "noopener,noreferrer"); }}>
        <div className="form-head"><div><span className="eyebrow">SEND A REPORT</span><h3>What would you like to share?</h3></div><span className="form-step">01 / 01</span></div>
        <label className="field-label">I'm submitting a <span>*</span></label>
        <div className="feedback-types">
          {[["bug","Bug report"],["feature","Feature request"],["support","Support"],["feedback","General feedback"]].map(([value,label]) =>
            <button type="button" key={value} className={kind === value ? "type-option selected" : "type-option"} onClick={() => setKind(value)}>{label}</button>
          )}
        </div>
        <label className="field-label" htmlFor="feedback-title">Short title</label>
        <input id="feedback-title" value={title} onChange={event => setTitle(event.target.value)} placeholder="A short summary" maxLength={120}/>
        <label className="field-label" htmlFor="feedback-details">Description <span>*</span></label>
        <textarea id="feedback-details" value={details} onChange={event => setDetails(event.target.value)} placeholder="What happened? Include steps to reproduce a bug, what you expected, and what actually happened." rows={5} required/>
        <div className="form-grid">
          <div><label className="field-label" htmlFor="feedback-version">Pomas version</label><input id="feedback-version" value={version} onChange={event => setVersion(event.target.value)} placeholder="e.g. 1.0.4"/></div>
          <div><label className="field-label" htmlFor="feedback-os">Operating system</label><select id="feedback-os" value={os} onChange={event => setOs(event.target.value)}><option>Windows 11</option><option>Windows 10</option><option>Other / Not sure</option></select></div>
        </div>
        <label className="field-label" htmlFor="feedback-email">Email <small>(optional)</small></label>
        <input id="feedback-email" type="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="you@example.com"/>
        <button className="button button-primary form-submit" type="submit" disabled={!details.trim()}><span>Continue to GitHub</span><Icon name="arrow" size={18}/></button>
        <p className="form-privacy">You'll review and submit the report on GitHub. A GitHub account is required to create an issue. Do not include passwords, private farm records or other sensitive information.</p>
      </form>
    </div>
  </section>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [theme, setTheme] = useState("light");
  const nav = [["Features","#features"],["Product tour","#product"],["Downloads","#downloads"],["Documentation","#documentation"],["Feedback","#feedback"]];
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const faqs = [
    ["Does Pomas need an internet connection?", "Pomas is designed as a local-first Windows desktop application. Its farm database is stored on the computer, and normal farm operations do not depend on a cloud database. Internet access is useful for downloading releases and opening external support links."],
    ["Do I need to install Java separately?", "No. The published Windows installer bundles the application, its Spring Boot backend and a trimmed Java runtime. You do not need to install Java, Node.js or Maven to use the packaged application."],
    ["Where is farm data stored?", "The application stores its SQLite database locally in the Windows application-data directory. The documented production location is under %APPDATA%/Poultry Farm Manager/data. Keep regular backups and protect the computer that stores the data."],
    ["Can I move Pomas to another computer?", "Use the application's backup workflow to create a validated backup, then restore it on the other installation. Do not copy a live SQLite database file while the application is running."],
    ["Which poultry types are supported?", "The current product documentation describes Layer, Broiler and Turkey batch types. Some workflows are type-specific: egg production is for Layers, while weight and meat-bird growth workflows apply to Broilers and Turkeys."]
  ];
  return <>
    <div className="announcement"><span className="announcement-dot"/> Pomas v1.0.4 is available <a href="#downloads">Explore the release <Icon name="arrow" size={14}/></a></div>
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Pomas home"><img src="/pomas-logo.png" alt="Pomas logo"/><span>Pomas<small>POULTRY MANAGEMENT</small></span></a>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
        {nav.map(([label,href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-download" href="#downloads" onClick={() => setMenuOpen(false)}>Download <Icon name="arrow" size={15}/></a>
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" type="button" onClick={() => setTheme(value => value === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`} title="Toggle theme"><span className="theme-toggle-icon">{theme === "light" ? "☾" : "☀"}</span></button>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(value => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"}><Icon name={menuOpen ? "close" : "menu"} size={22}/></button>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grain"/>
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="hero-tag"><span/> FARM MANAGEMENT, WITHOUT THE GUESSWORK</span>
            <h1>Run your farm with <em>the full picture.</em></h1>
            <p className="hero-description">Pomas brings your poultry records, production, stock and farm finances into one dependable Windows desktop application.</p>
            <div className="hero-actions"><a className="button button-gold" href="#downloads"><Icon name="download"/> Download Pomas <Icon name="arrow" size={16}/></a><a className="button button-outline" href="#product">Explore the product</a></div>
            <div className="hero-proof"><span><Icon name="shield" size={16}/> Local-first data</span><i/><span><Icon name="laptop" size={16}/> Windows desktop</span><i/><span><Icon name="leaf" size={16}/> Farm-focused</span></div>
          </div>
          <div className="hero-visual"><div className="hero-visual-glow"/><DashboardPreview/><div className="hero-floating-note"><span className="floating-icon"><Icon name="shield" size={17}/></span><span><b>Your records stay local</b><small>Built for offline farm work</small></span></div></div>
        </div>
        <div className="hero-bottom-line"><span>RECORD WHAT HAPPENED</span><i/><span>UNDERSTAND WHAT IS HAPPENING</span><i/><span>DECIDE WHAT TO DO NEXT</span></div>
      </section>

      <section className="trust-strip"><div><span className="trust-icon"><Icon name="laptop"/></span><span><b>Windows desktop</b><small>Built for the farm computer</small></span></div><div><span className="trust-icon"><Icon name="shield"/></span><span><b>Local-first operation</b><small>No cloud database dependency</small></span></div><div><span className="trust-icon"><Icon name="chart"/></span><span><b>Calculated farm insights</b><small>Records become useful summaries</small></span></div><div><span className="trust-icon"><Icon name="leaf"/></span><span><b>Layer · Broiler · Turkey</b><small>Workflows for different bird types</small></span></div></section>

      <section className="section intro-section" id="product"><div className="section-inner intro-grid"><div><span className="eyebrow">A SYSTEM FOR THE WORK BEHIND THE FARM</span><h2>Good decisions start with <em>good records.</em></h2></div><div className="intro-text"><p>Farm work creates information every day: birds placed, feed used, eggs collected, treatments given, stock purchased and sales made. When those records live in different places, it becomes harder to understand the whole operation.</p><p>Pomas gives those records a shared home. It calculates derived farm information from recorded facts, keeps a history of important changes and turns the results into dashboards and reports.</p><a className="text-link" href="#features">See what Pomas can manage <Icon name="arrow" size={16}/></a></div></div></section>

      <section className="section features-section" id="features"><div className="section-inner"><SectionHeading eyebrow="ONE CONNECTED WORKFLOW" title="The moving parts of your farm, connected." text="Pomas brings the core work of poultry management into one desktop application, with workflows that respect the differences between bird types."/><div className="feature-grid">{featureGroups.map(group => <article className="feature-card" key={group.number}><div className="feature-card-top"><span className="feature-number">{group.number}</span><span className="feature-icon"><Icon name={group.icon} size={23}/></span></div><h3>{group.title}</h3><p>{group.description}</p><ul>{group.items.map(item => <li key={item}><Icon name="check" size={15}/>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="section workflow-section"><div className="section-inner workflow-grid"><div className="workflow-copy"><span className="eyebrow">HOW POMAS THINKS</span><h2>Facts first. <em>Clarity follows.</em></h2><p>Pomas is built around a simple operating loop. Record the event, calculate the current position, highlight what needs attention and make the information available in reports.</p><a className="text-link" href={`${REPO_URL}/blob/main/docs/architecture.md`} target="_blank" rel="noreferrer">Explore the product architecture <Icon name="external" size={15}/></a></div><div className="workflow-steps"><div className="workflow-step"><span className="workflow-index">01</span><div><b>Record what happened</b><p>Capture dated farm events and transactions.</p></div><span className="workflow-symbol">＋</span></div><div className="workflow-connector"/><div className="workflow-step"><span className="workflow-index">02</span><div><b>Calculate what is happening</b><p>Use recorded facts to derive current farm state.</p></div><span className="workflow-symbol">⌁</span></div><div className="workflow-connector"/><div className="workflow-step"><span className="workflow-index">03</span><div><b>See what needs attention</b><p>Bring relevant operational signals into view.</p></div><span className="workflow-symbol">◎</span></div><div className="workflow-connector"/><div className="workflow-step"><span className="workflow-index">04</span><div><b>Use the reports</b><p>Review farm-wide and batch-level information.</p></div><span className="workflow-symbol">↗</span></div></div></div></section>

      <section className="section tour-section"><div className="section-inner tour-layout"><div className="tour-copy"><span className="eyebrow">A CLOSER LOOK</span><h2>One place for the <em>everyday details.</em></h2><p>From opening a batch to reviewing a report, Pomas is organized around the work that happens on a poultry farm.</p><div className="tour-tabs"><div className="tour-tab active"><span>01</span><b>Farm overview</b><small>See the wider operation</small></div><div className="tour-tab"><span>02</span><b>Daily work</b><small>Capture routine records</small></div><div className="tour-tab"><span>03</span><b>Production & money</b><small>Follow output and costs</small></div></div><p className="tour-disclaimer">The interface panel on this page is an illustrative layout preview, not a screenshot of a live Pomas installation. Actual application screenshots can be added here as the approved capture set is prepared.</p></div><div className="tour-preview"><DashboardPreview/></div></div></section>

      <Downloads/>

      <section className="section docs-section" id="documentation"><div className="section-inner"><SectionHeading eyebrow="POMAS KNOWLEDGE BASE" title="The help you need, close at hand." text="Practical guidance for installing the application, keeping records and protecting farm data."/><div className="docs-grid">{docs.map((item,i) => <a className="doc-card" href={item.href} target="_blank" rel="noreferrer" key={item.id}><span className="doc-tag">{item.tag}</span><span className="doc-number">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><span className="doc-link">Read documentation <Icon name="arrow" size={15}/></span></a>)}</div><div className="docs-bottom"><span>Technical documentation is maintained alongside the application source.</span><a className="text-link" href={`${REPO_URL}/tree/main/docs`} target="_blank" rel="noreferrer">Browse all documentation <Icon name="external" size={15}/></a></div></div></section>

      <section className="section faq-section"><div className="section-inner faq-layout"><div><span className="eyebrow">GOOD TO KNOW</span><h2>Questions, <em>answered.</em></h2><p>Some practical details before you install.</p></div><div className="faq-list">{faqs.map(([question,answer],i) => <article className={activeFaq === i ? "faq-item expanded" : "faq-item"} key={question}><button type="button" onClick={() => setActiveFaq(activeFaq === i ? -1 : i)} aria-expanded={activeFaq === i}><span>{question}</span><b>{activeFaq === i ? "−" : "+"}</b></button>{activeFaq === i && <p>{answer}</p>}</article>)}</div></div></section>

      <Feedback/>
      <section className="closing-cta"><div className="closing-cta-inner"><div><span className="eyebrow">MAKE THE RECORDS COUNT</span><h2>A clearer view of your farm starts here.</h2><p>Download Pomas and bring your farm's daily records into one place.</p></div><a className="button button-gold" href="#downloads">Get Pomas <Icon name="arrow" size={17}/></a></div></section>
    </main>

    <footer className="site-footer"><div className="footer-main"><div className="footer-brand-col"><a href="#home" className="brand footer-brand"><img src="/pomas-logo.png" alt="Pomas logo"/><span>Pomas<small>POULTRY MANAGEMENT</small></span></a><p>Practical farm management software for clearer records and better-informed decisions.</p><span className="footer-local"><Icon name="shield" size={15}/> Local-first Windows application</span></div><div className="footer-links"><div><b>EXPLORE</b><a href="#features">Features</a><a href="#product">Product tour</a><a href="#downloads">Downloads</a><a href="#documentation">Documentation</a></div><div><b>SUPPORT</b><a href="#feedback">Report an issue</a><a href={`${REPO_URL}/issues`} target="_blank" rel="noreferrer">Issue tracker</a><a href={`${REPO_URL}/releases`} target="_blank" rel="noreferrer">Release notes</a><a href={`${REPO_URL}`} target="_blank" rel="noreferrer">Source repository</a></div><div><b>ECOSYSTEM</b><a href="https://enj0y.netlify.app/" target="_blank" rel="noreferrer">Developed by ENJ0Y <Icon name="external" size={13}/></a><a href="https://github.com/ENJ0Y-Labs" target="_blank" rel="noreferrer">ENJ0Y Labs <Icon name="external" size={13}/></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Pomas. Product information is subject to change.</span><span>Built for the work behind the farm.</span></div></footer>
  </>;
}

export default App;
