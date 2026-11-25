import { useEffect, useState } from "react";

const iconPaths = {
  assignment:"M7 3h10a2 2 0 0 1 2 2v14H5V5a2 2 0 0 1 2-2Zm2 5h6M9 12h6M9 15h4",
  person:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0",
  open_in_new:"M13 5h6v6m0-6-9 9M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5",
  arrow_downward:"M12 4v15m-6-6 6 6 6-6",
  verified_user:"M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Zm-3-11 2 2 4-4",
  info:"M12 11v6m0-10h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  touch_app:"M8 11V5a2 2 0 0 1 4 0v6-2a2 2 0 0 1 4 0v3-1a2 2 0 0 1 4 0v5c0 4-3 7-7 7h-1c-2 0-3-1-4-2l-4-5a2 2 0 0 1 3-3l2 2",
  edit_note:"M4 20h4l11-11a2 2 0 0 0-4-4L4 16v4Zm9-13 4 4M4 4h6M4 8h4",
  shopping_bag:"M5 8h14l1 13H4L5 8Zm4 0V6a3 3 0 0 1 6 0v2",
  warning:"m12 3 10 18H2L12 3Zm0 6v5m0 3h.01",
  vaccines:"M8 3v5m-3-2h6m3-3 7 7m-2-2-7 7m-3-3 7 7M5 12l7 7",
  trending_up:"m3 17 6-6 4 4 8-9m-6 0h6v6",
  payments:"M3 7h18v12H3zM3 10h18m-13 5h4",
  lightbulb:"M9 18h6m-5 4h4m-5-7a6 6 0 1 1 6 0c-1 1-1 2-1 3h-4c0-1 0-2-1-3Z",
  record_voice_over:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 9a7 7 0 0 1 14 0m2-13a5 5 0 0 1 0 8m-3-6a2 2 0 0 1 0 4",
  analytics:"M4 19V5m0 14h17M8 16v-5m5 5V7m5 9v-8",
  terminal:"m5 7 5 5-5 5m7 0h7",
  mail:"M3 5h18v14H3z m0 2 9 7 9-7",
  check_circle:"m7 12 3 3 7-7m5 4a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",
  timer:"M10 2h4m-2 4v6l4 2m5-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  agriculture:"M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6",
  call:"M7 3h3l2 5-2 2a15 15 0 0 0 4 4l2-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 5 5a2 2 0 0 1 2-2Z",
  arrow_forward:"M4 12h16m-6-6 6 6-6 6",
  expand_less:"m6 15 6-6 6 6",
  expand_more:"m6 9 6 6 6-6",
  close:"m6 6 12 12M18 6 6 18",
  menu:"M4 6h16M4 12h16M4 18h16"
};
function Icon({ name, className = "" }) {
  return <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={`inline-block shrink-0 ${className}`}><path d={iconPaths[name] ?? "M12 5v14m-7-7h14"} /></svg>;
}

export default function ResearchPage() {
  const [expandedTopics, setExpandedTopics] = useState({});
  const [expandedFaqs, setExpandedFaqs] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (typeof window.IntersectionObserver !== "function") return undefined;
    let observer;
    try {
      observer = new window.IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });
      document.querySelectorAll(".reveal-on-scroll").forEach((element) => observer.observe(element));
      document.documentElement.classList.add("motion-ready");
    } catch {
      observer?.disconnect();
      document.documentElement.classList.remove("motion-ready");
      return undefined;
    }
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onEscape = (event) => { if (event.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  return (
    <div className="site-grid-shell bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col justify-between">
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-sm border-b border-outline-variant/50 shadow-none"><div className="h-20 max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4"><div className="flex items-center gap-3 shrink-0"><img src="/pomas-logo.png" alt="POMAS logo" className="w-10 h-10 rounded-xl object-contain shrink-0" width="40" height="40" /><div className="flex flex-col"><div className="flex items-center gap-2"><span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">POMAS</span><span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-micro-eyebrow text-micro-eyebrow uppercase">Research Stage</span></div><span className="hidden sm:block font-body-sm text-body-sm text-on-surface-variant font-normal leading-tight">Poultry Management System</span></div></div><nav id="mobile-navigation" className={menuOpen ? "absolute top-20 left-0 right-0 z-50 flex flex-col items-stretch gap-1 bg-surface/95 p-4 shadow-lg backdrop-blur-sm lg:static lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:p-0 lg:shadow-none" : "hidden lg:flex items-center gap-1"} data-active-classes="bg-surface-container-high text-on-surface font-semibold rounded-lg"><a aria-current="true" className="px-3 py-2 transition-colors bg-surface-container-high text-on-surface font-semibold rounded-lg" href="#research-areas" onClick={() => setMenuOpen(false)}>Research Topics</a><a className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#approach-vision" onClick={() => setMenuOpen(false)}>Our Vision</a><a className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#our-approach" onClick={() => setMenuOpen(false)}>Our Approach</a><a className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#about-pomas" onClick={() => setMenuOpen(false)}>About POMAS</a><a className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></nav><div className="flex items-center gap-2 sm:gap-3 shrink-0"><a className="inline-flex min-w-0 items-center justify-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm hover:bg-secondary-fixed transition-all shadow-[0_1px_8px_rgba(0,0,0,0.06)]" href="https://forms.gle/aTcjXwnxzwvoDoEu8" rel="noopener noreferrer" target="_blank"><Icon name="assignment" className="text-[18px]" /><span className="hidden sm:inline">Take the Farmer Survey</span><span className="sm:hidden">Survey</span></a><button aria-label={menuOpen ? "Close mobile menu" : "Open mobile menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)} className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button"><Icon name={menuOpen ? "close" : "menu"} className="text-[24px]" /></button></div></div></header><main className="w-full pt-20 bg-surface flex-grow"><div className="flex flex-col w-full">
      
      <section className="hero-grid-section w-full py-12 md:py-20 lg:py-24 bg-surface relative"><div className="grid-overlay hero-grid-overlay" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <div className="flex flex-col items-start gap-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-primary font-label-caps text-label-caps uppercase tracking-wider shadow-sm">
      <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
      <span>Early research · Talking to poultry farmers</span>
      </div>
      <h1 className="text-on-surface tracking-tight">
                  Better understanding. Better decisions. Stronger poultry farms.
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                  We are exploring how technology can help poultry farmers understand daily operations, production and finances. POMAS already has an early desktop application. This research helps us understand how farms actually work before deciding what to improve next.
                </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
      <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm hover:bg-secondary-fixed transition-all shadow-sm focus:ring-2 focus:ring-secondary focus:ring-offset-2" href="https://forms.gle/aTcjXwnxzwvoDoEu8" rel="noopener noreferrer" target="_blank">
      <span>Take the 5-Minute Farmer Survey</span>
      <Icon name="open_in_new" className="text-[18px]" />
      </a>
      <a className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-primary font-headline-sm text-headline-sm hover:bg-surface-container transition-colors" href="#approach-vision" onClick={() => setMenuOpen(false)}>
      <span>Explore Our Approach &amp; Vision</span>
      <Icon name="arrow_downward" className="text-[18px]" />
      </a>
      </div>
      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
      <Icon name="verified_user" className="text-[16px] text-tertiary" />
      <span>No sales pitch. The survey is hosted separately by Google Forms.</span>
      </div>
      </div>
      
      <div className="rounded-2xl bg-primary text-on-primary p-7 sm:p-9 border border-white/10 flex flex-col gap-6">
      <div className="flex items-center justify-between gap-3">
        <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-primary-container">Early field feedback</span>
        <span className="rounded-full bg-primary-container px-3 py-1 font-body-sm text-body-sm text-on-primary">Research snapshot</span>
      </div>
      <div>
        <h2 className="font-headline-lg text-headline-lg text-on-primary mb-3">Farm records do not all live in the same place.</h2>
        <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">n = 3, a small early sample, not representative.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-primary-container p-4"><span className="font-headline-sm text-headline-sm text-on-primary">Notebooks - 3 of 3 respondents</span></div>
        <div className="rounded-xl bg-primary-container p-4"><span className="font-headline-sm text-headline-sm text-on-primary">Spreadsheets - 3 of 3</span></div>
        <div className="rounded-xl bg-primary-container p-4"><span className="font-headline-sm text-headline-sm text-on-primary">Phone notes - 1 of 3</span></div>
        <div className="rounded-xl bg-primary-container p-4"><span className="font-headline-sm text-headline-sm text-on-primary">Farm apps - 1 of 3</span></div>
      </div>
    </div>
      </div>
      </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 flex flex-col gap-6">
      <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded bg-surface-container-highest text-primary font-micro-eyebrow text-micro-eyebrow uppercase">
                  Field Reality
                </div>
      <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Running a poultry farm involves more than raising birds.
                </h2>
      <div className="flex flex-col gap-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
      <p>
                    Daily poultry farm management brings countless interconnected decisions: unpredictable feed price spikes, sudden mortality fluctuations, egg production drop-offs, strict medication withdrawals, and razor-thin margins.
                  </p>
      <p>
                    We are investigating how records are created, updated and used during day-to-day farm work.
                  </p>
      <p>
                    We are investigating how farmers currently handle these critical operational workflows on the ground—and exploring whether technology can genuinely illuminate patterns without creating an exhausting second job of data entry.
                  </p>
      </div>
      </div>
      <div className="lg:col-span-6">
      <div className="rounded-2xl bg-surface p-7 sm:p-9 shadow-sm border border-outline-variant/40 flex flex-col gap-4">
        <span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Research principle</span>
        <h3 className="font-headline-md text-headline-md text-primary">Understand the current workflow before proposing a new one.</h3>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">A notebook, a spreadsheet, a phone note and a farm application can all be part of a farm’s record system. The research is looking at how information moves between people, records and decisions, not judging one method in isolation.</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="research-grid-section w-full py-16 md:py-24 bg-surface relative scroll-mt-20" id="research-areas"><div className="grid-overlay research-grid-overlay" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex flex-col gap-3 max-w-2xl">
      <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider font-bold">Inquiry Scope</span>
      <h2 className="font-headline-lg text-headline-lg text-primary">
                  Six operational areas we are investigating
                </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Click any card to review the core field questions we ask during early farm interviews.
                </p>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container font-body-sm text-body-sm text-on-surface-variant">
      <Icon name="touch_app" className="text-[18px] text-primary" />
      <span>Expandable Discovery Modules</span>
      </div>
      </div>
      <div className="research-topic-grid">
      
      <div className="research-topic-card reveal-on-scroll flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
      <Icon name="edit_note" className="text-[20px]" />
      </div>
      <span className="font-micro-eyebrow text-micro-eyebrow uppercase text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">Topic 01</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Record Keeping</h3>
      <div className="font-body-md text-body-md text-on-surface-variant mb-4">
      <span className="font-bold text-on-surface">Research Question:</span> How do farm owners and pen supervisors record daily feed, mortality, and egg counts?
                </div>
      <div className="p-3.5 rounded-xl bg-surface font-body-sm text-body-sm text-on-surface-variant mb-4">
      <span className="font-bold text-primary block mb-0.5">Why it matters:</span>
                  We want to understand how records are checked, shared and used in daily decisions.
                </div>
      <button aria-controls="panel-topic-1" aria-expanded={!!expandedTopics[1]} onClick={() => setExpandedTopics(current => ({ ...current, [1]: !current[1] }))} className="investigation-trigger mt-auto inline-flex items-center justify-between w-full pt-3 font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" type="button">
      <span>Interview Questions</span>
      <Icon name={expandedTopics[1] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedTopics[1] ? "pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2" : "hidden pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2"} id="panel-topic-1">
      <p>• Who physically writes down counts at the pen door each evening?</p>
      <p>• How quickly do mortality records reach the supervisor?</p>
      <p>• How do you check that records are complete and correct?</p>
      </div>
      </div>
      
      <div className="research-topic-card reveal-on-scroll flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
      <Icon name="shopping_bag" className="text-[20px]" />
      </div>
      <span className="font-micro-eyebrow text-micro-eyebrow uppercase text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">Topic 02</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Feed &amp; Cost Tracking</h3>
      <div className="font-body-md text-body-md text-on-surface-variant mb-4">
      <span className="font-bold text-on-surface">Research Question:</span> How is feed consumption tracked per batch, and how do price swings affect margin?
                </div>
      <div className="p-3.5 rounded-xl bg-surface font-body-sm text-body-sm text-on-surface-variant mb-4">
      <span className="font-bold text-primary block mb-0.5">Why it matters:</span>
                  We want to understand how feed purchases, usage and costs are recorded and reviewed.
                </div>
      <button aria-controls="panel-topic-2" aria-expanded={!!expandedTopics[2]} onClick={() => setExpandedTopics(current => ({ ...current, [2]: !current[2] }))} className="investigation-trigger mt-auto inline-flex items-center justify-between w-full pt-3 font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" type="button">
      <span>Interview Questions</span>
      <Icon name={expandedTopics[2] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedTopics[2] ? "pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2" : "hidden pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2"} id="panel-topic-2">
      <p>• Do you weigh leftovers daily, or log entire bags when opened?</p>
      <p>• When maize or concentrate prices jump 15%, how quickly do you adjust feed rations?</p>
      <p>• How do you reconcile commercial feed vs on-farm custom milling?</p>
      </div>
      </div>
      
      <div className="research-topic-card reveal-on-scroll flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
      <Icon name="warning" className="text-[20px]" />
      </div>
      <span className="font-micro-eyebrow text-micro-eyebrow uppercase text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">Topic 03</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Mortality &amp; Early Signals</h3>
      <div className="font-body-md text-body-md text-on-surface-variant mb-4">
      <span className="font-bold text-on-surface">Research Question:</span> What early indicators or pen-level symptoms alert managers before losses spread?
                </div>
      <div className="p-3.5 rounded-xl bg-surface font-body-sm text-body-sm text-on-surface-variant mb-4">
      <span className="font-bold text-primary block mb-0.5">Why it matters:</span>
                  We want to understand what managers notice, record and do when mortality changes.
                </div>
      <button aria-controls="panel-topic-3" aria-expanded={!!expandedTopics[3]} onClick={() => setExpandedTopics(current => ({ ...current, [3]: !current[3] }))} className="investigation-trigger mt-auto inline-flex items-center justify-between w-full pt-3 font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" type="button">
      <span>Interview Questions</span>
      <Icon name={expandedTopics[3] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedTopics[3] ? "pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2" : "hidden pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2"} id="panel-topic-3">
      <p>• How do you decide when mortality is a problem?</p>
      <p>• What do you notice in a flock before losses become obvious?</p>
      <p>• How are necropsy findings documented and shared across team shifts?</p>
      </div>
      </div>
      
      <div className="research-topic-card reveal-on-scroll flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
      <Icon name="vaccines" className="text-[20px]" />
      </div>
      <span className="font-micro-eyebrow text-micro-eyebrow uppercase text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">Topic 04</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Health &amp; Medication Schedules</h3>
      <div className="font-body-md text-body-md text-on-surface-variant mb-4">
      <span className="font-bold text-on-surface">Research Question:</span> How are vaccination protocols, withdrawal periods, and vet visits scheduled and logged?
                </div>
      <div className="p-3.5 rounded-xl bg-surface font-body-sm text-body-sm text-on-surface-variant mb-4">
      <span className="font-bold text-primary block mb-0.5">Why it matters:</span>
                  We want to understand how health routines, treatment records and withdrawal periods are managed.
                </div>
      <button aria-controls="panel-topic-4" aria-expanded={!!expandedTopics[4]} onClick={() => setExpandedTopics(current => ({ ...current, [4]: !current[4] }))} className="investigation-trigger mt-auto inline-flex items-center justify-between w-full pt-3 font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" type="button">
      <span>Interview Questions</span>
      <Icon name={expandedTopics[4] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedTopics[4] ? "pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2" : "hidden pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2"} id="panel-topic-4">
      <p>• How do pen workers remember Gumboro or Lasota vaccination dates?</p>
      <p>• How do you track antibiotic withdrawal before sending broilers to market?</p>
      <p>• How do external consulting veterinarians review past pen records?</p>
      </div>
      </div>
      
      <div className="research-topic-card reveal-on-scroll flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
      <Icon name="trending_up" className="text-[20px]" />
      </div>
      <span className="font-micro-eyebrow text-micro-eyebrow uppercase text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">Topic 05</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Production &amp; Weight Curves</h3>
      <div className="font-body-md text-body-md text-on-surface-variant mb-4">
      <span className="font-bold text-on-surface">Research Question:</span> How do layer farmers track laying percentages, and how do broiler farmers calculate FCR?
                </div>
      <div className="p-3.5 rounded-xl bg-surface font-body-sm text-body-sm text-on-surface-variant mb-4">
      <span className="font-bold text-primary block mb-0.5">Why it matters:</span>
                  We want to understand how farmers interpret production and weight records over time.
                </div>
      <button aria-controls="panel-topic-5" aria-expanded={!!expandedTopics[5]} onClick={() => setExpandedTopics(current => ({ ...current, [5]: !current[5] }))} className="investigation-trigger mt-auto inline-flex items-center justify-between w-full pt-3 font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" type="button">
      <span>Interview Questions</span>
      <Icon name={expandedTopics[5] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedTopics[5] ? "pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2" : "hidden pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2"} id="panel-topic-5">
      <p>• How often do you sample-weigh broilers (weekly, fortnightly)?</p>
      <p>• What hen-day percentage triggers a culling evaluation for layers?</p>
      <p>• Do you compare batch growth against breeder breed standard curves?</p>
      </div>
      </div>
      
      <div className="research-topic-card reveal-on-scroll flex flex-col">
      <div className="flex items-center justify-between gap-4 mb-4">
      <div className="w-10 h-10 rounded-xl bg-primary-container text-secondary-container flex items-center justify-center">
      <Icon name="payments" className="text-[20px]" />
      </div>
      <span className="font-micro-eyebrow text-micro-eyebrow uppercase text-on-surface-variant px-2 py-0.5 rounded bg-surface-container">Topic 06</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-2">Sales, Expenses &amp; Batch Profit</h3>
      <div className="font-body-md text-body-md text-on-surface-variant mb-4">
      <span className="font-bold text-on-surface">Research Question:</span> How do managers determine if a finished batch was truly profitable after all input costs?
                </div>
      <div className="p-3.5 rounded-xl bg-surface font-body-sm text-body-sm text-on-surface-variant mb-4">
      <span className="font-bold text-primary block mb-0.5">Why it matters:</span>
                  We want to understand how managers review costs, sales and batch results.
                </div>
      <button aria-controls="panel-topic-6" aria-expanded={!!expandedTopics[6]} onClick={() => setExpandedTopics(current => ({ ...current, [6]: !current[6] }))} className="investigation-trigger mt-auto inline-flex items-center justify-between w-full pt-3 font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" type="button">
      <span>Interview Questions</span>
      <Icon name={expandedTopics[6] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedTopics[6] ? "pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2" : "hidden pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2"} id="panel-topic-6">
      <p>• Do you factor brooding fuel, electricity, and litter bedding into cost-per-kg?</p>
      <p>• How are egg breakages and unsellable peewee eggs factored into crate revenue?</p>
      <p>• How long after a batch finishes do you know the final net profit margin?</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-surface-container-high scroll-mt-20" id="approach-vision">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 flex flex-col gap-6">
      <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider font-bold">Research Philosophy</span>
      <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Farm records should help farmers understand more than what happened yesterday.
                </h2>
      <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4">
      <p>
                    Agritech software often fails because it is engineered inside air-conditioned offices by people who have never shoveled chicken litter or tried to tap a smartphone screen while wearing nitrile gloves in the midday heat.
                  </p>
      <p>
                    Rather than promoting a bloated "all-in-one software platform," we frame our vision around open, humble inquiry. We are validating whether focused digital clarity can solve real headaches without multiplying administrative chores.
                  </p>
      </div>
      <div className="p-5 rounded-2xl bg-surface shadow-sm flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-surface-container text-primary flex items-center justify-center shrink-0">
      <Icon name="lightbulb" className="text-[22px]" />
      </div>
      <div className="flex flex-col gap-1">
      <span className="font-headline-sm text-headline-sm text-on-surface font-bold">No Feature Promises</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Every concept here is a research hypothesis subject to farmer scrutiny. If poultry farmers tell us an idea adds zero value, we drop it.
                    </p>
      </div>
      </div>
      </div>
      <div className="lg:col-span-7 flex flex-col gap-4">
      <div className="px-2 py-1 font-label-caps text-label-caps uppercase text-on-surface-variant font-bold">
                  Questions we are exploring for the future of poultry technology
                </div>
      
      <div className="space-y-3">
      <div className="p-5 rounded-2xl bg-surface shadow-sm flex items-start gap-4">
      <span className="font-label-caps text-label-caps font-bold px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed shrink-0">Q1</span>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                        Can pen-side record keeping be streamlined so it doesn't burden farm hands?
                      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Investigating single-tap tally counters, voice notes in local dialects, or optical scanning of physical clipboards to eliminate manual double-entry.
                      </p>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-surface shadow-sm flex items-start gap-4">
      <span className="font-label-caps text-label-caps font-bold px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed shrink-0">Q2</span>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                        Can early production dips and feed anomalies be flagged automatically?
                      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Exploring whether simple warning signs in daily records could help managers notice problems earlier.
                      </p>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-surface shadow-sm flex items-start gap-4">
      <span className="font-label-caps text-label-caps font-bold px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed shrink-0">Q3</span>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                        How can batch-by-batch feed conversion and operational costs be visible in real time?
                      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Evaluating methods to calculate live cost-per-kg of live bird or cost-per-crate of eggs as feed prices change week-to-week.
                      </p>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-surface shadow-sm flex items-start gap-4">
      <span className="font-label-caps text-label-caps font-bold px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed shrink-0">Q4</span>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                        Can layer production curves be tracked simply to forecast feed needs and culling?
                      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Understanding how flock age correlates with shell quality and crate output to plan timely spent-hen sales before birds consume more than they produce.
                      </p>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-surface shadow-sm flex items-start gap-4">
      <span className="font-label-caps text-label-caps font-bold px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed shrink-0">Q5</span>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                        What lightweight tools actually serve farms with intermittent internet connectivity?
                      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Investigating offline-first data persistence, lightweight SMS summaries, or low-bandwidth sync architectures that thrive in rural peri-urban areas.
                      </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-surface scroll-mt-20" id="our-approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-3">
      <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider font-bold">Field-Driven Methodology</span>
      <h2 className="font-headline-lg text-headline-lg text-primary">
                Our Approach: Listen, Learn &amp; Build
              </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                We reverse the classic software trap. We do not invent solutions in search of problems; we document problems to determine if solutions are justified.
              </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      
      <div className="flex flex-col bg-surface-container-low rounded-2xl p-8 relative shadow-sm">
      <div className="flex items-center justify-between mb-6">
      <span className="font-headline-hero text-headline-hero text-primary/20 font-extrabold">01</span>
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-label-caps uppercase font-bold">
      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Active Stage
                  </span>
      </div>
      <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">Listen</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Conducting early conversations and structured surveys with poultry farmers across commercial and smallholder operations to understand day-to-day operational pain points.
                </p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-primary font-headline-sm text-headline-sm">
      <Icon name="record_voice_over" className="text-[20px] text-secondary" />
      <span>Surveys &amp; Farm Visits</span>
      </div>
      </div>
      
      <div className="flex flex-col bg-surface-container-lowest rounded-2xl p-8 relative shadow-sm opacity-90">
      <div className="flex items-center justify-between mb-6">
      <span className="font-headline-hero text-headline-hero text-on-surface-variant/20 font-extrabold">02</span>
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps uppercase">
                    Upcoming
                  </span>
      </div>
      <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">Learn</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Synthesizing feedback to identify recurring operational bottlenecks, evaluate financial impact, and isolate problems genuinely worth solving before committing engineering effort.
                </p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-on-surface-variant font-headline-sm text-headline-sm">
      <Icon name="analytics" className="text-[20px]" />
      <span>Pattern Synthesis</span>
      </div>
      </div>
      
      <div className="flex flex-col bg-surface-container-lowest rounded-2xl p-8 relative shadow-sm opacity-80">
      <div className="flex items-center justify-between mb-6">
      <span className="font-headline-hero text-headline-hero text-on-surface-variant/20 font-extrabold">03</span>
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-caps text-label-caps uppercase">
                    Future
                  </span>
      </div>
      <h3 className="font-headline-md text-headline-md text-primary font-bold mb-3">Build</h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  Designing and iteratively testing practical, pen-side tools based on real field evidence, farmer feedback loops, and measurable return on investment.
                </p>
      <div className="mt-auto pt-4 flex items-center gap-2 text-on-surface-variant font-headline-sm text-headline-sm">
      <Icon name="terminal" className="text-[20px]" />
      <span>Iterative Prototypes</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-surface-container-low scroll-mt-20" id="about-pomas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 flex flex-col gap-6">
      <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded bg-surface-container-highest text-primary font-micro-eyebrow text-micro-eyebrow uppercase">
                  Origin &amp; Mandate
                </div>
      <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  Built on listening, not tech assumptions.
                </h2>
      <div className="font-body-lg text-body-lg text-on-surface-variant space-y-4 leading-relaxed">
      <p>
                    POMAS (Poultry Management System) began from a simple, practical realization: poultry farming is one of the most operationally demanding businesses in agriculture, yet most digital tools are either too complex, too expensive, or built without understanding the dust and pace of actual farm pens.
                  </p>
      <p>
                    We started this initiative to investigate poultry farm management workflows, listen directly to farm owners, managers, and hands, and determine what technology—if any—would actually provide genuine relief and clarity.
                  </p>
      <p>
                    We are currently in the initial validation phase, collecting early responses from poultry operators. We do not sell subscriptions, we do not claim nationwide validation, and we are taking the time to listen before deciding what to build.
                  </p>
      </div>
      <div className="rounded-xl border border-outline-variant/50 bg-surface p-4 font-body-md text-body-md text-on-surface break-words" style={{ overflowWrap: "anywhere" }}><strong>{"Ekwere Noble"}</strong>, {"Founded in 2015 by Mr Nathan Ekwere, Grantino Farms supplies eggs, poultry, day-old chicks and feed to households, retailers and farmers across Port Harcourt and its environs."}</div>
      <div className="pt-2">
      <a className="inline-flex items-center gap-2 text-primary font-headline-sm text-headline-sm hover:text-secondary transition-colors" href="mailto:support.pomas@gmail.com">
      <Icon name="mail" className="text-[20px]" />
      <span>Contact {"Ekwere Noble"}: support.pomas@gmail.com</span>
      </a>
      <a className="inline-flex items-center gap-2 text-primary font-headline-sm text-headline-sm hover:text-secondary transition-colors" href="https://wa.me/{{WHATSAPP_NUMBER}}" target="_blank" rel="noopener noreferrer"><Icon name="call" className="text-[20px]" /><span>Message us on WhatsApp</span></a>
      </div>
      </div>
      <div className="lg:col-span-6">
      <div className="p-8 rounded-3xl bg-surface shadow-md flex flex-col gap-6">
      <span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Research Governance</span>
      <h3 className="font-headline-md text-headline-md text-primary">Transparent Research Commitment</h3>
      <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
      <div className="flex items-start gap-3">
      <Icon name="check_circle" className="text-primary text-[20px] shrink-0 mt-0.5" />
      <span><strong>No sales pitch:</strong> this page sells nothing. We are here to learn.</span>
      </div>
      <div className="flex items-start gap-3">
      <Icon name="check_circle" className="text-primary text-[20px] shrink-0 mt-0.5" />
      <span><strong>Confidential Feedback:</strong> We do not sell survey responses. The form is hosted by Google Forms.</span>
      </div>
      <div className="flex items-start gap-3">
      <Icon name="check_circle" className="text-primary text-[20px] shrink-0 mt-0.5" />
      <span><strong>Direct Co-Design:</strong> Farmer feedback may inform future prototypes and feature validation; participation does not guarantee that a suggested feature will be built.</span>
      </div>
      </div>
      <div className="p-4 rounded-xl bg-surface-container font-body-sm text-body-sm text-on-surface-variant">
                    Have questions about how we handle research insights? Contact us anytime at <span className="text-primary font-semibold">support.pomas@gmail.com</span>.
                  </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="survey-grid-section w-full py-16 md:py-24 bg-primary text-on-primary scroll-mt-20" id="farmer-survey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-secondary-container font-label-caps text-label-caps uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
      <span>Community Collaboration</span>
      </div>
      <h2 className="font-headline-hero text-headline-hero text-on-primary tracking-tight">
                Help shape what we build next.
              </h2>
      <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
                We are currently speaking with poultry farmers to learn how they manage their flocks, what issues cause the most headaches, and what they wish was simpler. Whether you run a 200-bird pen or a 20,000-bird commercial operation, your input is invaluable.
              </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full my-4">
      <div className="p-4 rounded-xl bg-primary-container text-center flex flex-col items-center gap-1">
      <Icon name="timer" className="text-secondary-container text-[24px]" />
      <span className="font-headline-sm text-headline-sm text-on-primary">5 Minutes</span>
      <span className="font-body-sm text-body-sm text-on-primary-container">Quick online questionnaire</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-container text-center flex flex-col items-center gap-1">
      <Icon name="agriculture" className="text-secondary-container text-[24px]" />
      <span className="font-headline-sm text-headline-sm text-on-primary">Real Operators</span>
      <span className="font-body-sm text-body-sm text-on-primary-container">Owners, managers &amp; hands</span>
      </div>
      <div className="p-4 rounded-xl bg-primary-container text-center flex flex-col items-center gap-1">
      <Icon name="call" className="text-secondary-container text-[24px]" />
      <span className="font-headline-sm text-headline-sm text-on-primary">Optional follow-up</span>
      <span className="font-body-sm text-body-sm text-on-primary-container">A few short voice notes or a 15-minute call, your choice.</span>
      </div>
      </div>
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-secondary-container text-on-secondary-container font-headline-md text-headline-md hover:bg-secondary-fixed transition-all shadow-lg focus:ring-4 focus:ring-secondary-fixed" href="https://forms.gle/aTcjXwnxzwvoDoEu8" rel="noopener noreferrer" target="_blank">
      <span>Take the Farmer Survey</span>
      <Icon name="arrow_forward" className="text-[22px]" />
      </a>
      <span className="font-body-sm text-body-sm text-on-primary-container">
                The survey opens on Google Forms. Review the <a className="underline underline-offset-4 hover:text-white" href="/privacy.html">privacy notice</a> before submitting.
              </span>
      <a className="inline-flex items-center gap-2 text-on-primary underline font-body-md text-body-md" href="https://wa.me/{{WHATSAPP_NUMBER}}" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
      </div>
      </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-surface scroll-mt-20" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
      <div className="flex flex-col items-center text-center gap-3">
      <span className="font-label-caps text-label-caps uppercase text-secondary tracking-wider font-bold">Clarity &amp; Transparency</span>
      <h2 className="font-headline-lg text-headline-lg text-primary">Frequently Asked Questions</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                Honest answers about the POMAS research stage, our objectives, and your data.
              </p>
      </div>
      <div className="space-y-4">
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-1" aria-expanded={!!expandedFaqs[1]} onClick={() => setExpandedFaqs(current => ({ ...current, [1]: !current[1] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary" type="button">
      <span>What is POMAS?</span>
      <Icon name={expandedFaqs[1] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[1] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-1">
                  POMAS is an early-stage poultry management software project with an existing desktop application. The current public-facing work focuses on farmer research and validating what should improve next.
                </div>
      </div>
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-2" aria-expanded={!!expandedFaqs[2]} onClick={() => setExpandedFaqs(current => ({ ...current, [2]: !current[2] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary" type="button">
      <span>Is POMAS available to use or download?</span>
      <Icon name={expandedFaqs[2] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[2] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-2">
                  An early desktop version was built for one family farm. It is not publicly available, and we are not accepting registrations, downloads or payments.
                </div>
      </div>
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-3" aria-expanded={!!expandedFaqs[3]} onClick={() => setExpandedFaqs(current => ({ ...current, [3]: !current[3] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary" type="button">
      <span>Who should participate in the survey?</span>
      <Icon name={expandedFaqs[3] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[3] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-3">
                  Any poultry farm owner, manager, supervisor, or farm hand working with layers, broilers, breeders, or mixed flocks in Nigeria or similar agricultural markets.
                </div>
      </div>
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-4" aria-expanded={!!expandedFaqs[4]} onClick={() => setExpandedFaqs(current => ({ ...current, [4]: !current[4] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary" type="button">
      <span>How long does participation take?</span>
      <Icon name={expandedFaqs[4] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[4] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-4">
                  Optional follow-up: a few short voice notes or a 15-minute call, your choice.
                </div>
      </div>
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-5" aria-expanded={!!expandedFaqs[5]} onClick={() => setExpandedFaqs(current => ({ ...current, [5]: !current[5] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary" type="button">
      <span>How will my survey responses and privacy be handled?</span>
      <Icon name={expandedFaqs[5] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[5] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-5">
                  We do not sell survey responses. The form is hosted by Google Forms. Read our <a className="underline font-semibold" href="/privacy.html">privacy notice</a> for details.
                </div>
      </div>
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-6" aria-expanded={!!expandedFaqs[6]} onClick={() => setExpandedFaqs(current => ({ ...current, [6]: !current[6] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary" type="button">
      <span>Will POMAS cost money in the future?</span>
      <Icon name={expandedFaqs[6] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[6] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-6">
                  If farmers tell us this is worth building, it will probably become a paid product. Nothing is for sale now, and we will tell you before anything is.
                </div>
      </div>
      </div>
      </div>
      </section>
      
      
      </div></main><footer className="w-full bg-surface-container-low mt-16 shadow-[0_1px_8px_rgba(0,0,0,0.02)]"><div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"><div className="lg:col-span-2 flex flex-col gap-4"><div className="flex items-center gap-3"><img src="/pomas-logo.png" alt="POMAS logo" className="w-9 h-9 rounded-xl object-contain shrink-0" width="36" height="36" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-primary font-bold">POMAS</span><span className="font-body-sm text-body-sm text-on-surface-variant">Poultry Management System</span></div></div><div className="inline-flex items-center gap-2 self-start px-2 py-1 rounded-lg bg-surface-container text-secondary font-label-caps text-label-caps uppercase tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span><span>Early Research Stage</span></div><p className="font-body-md text-body-md text-on-surface-variant max-w-md">An early-stage Nigerian agritech research initiative investigating practical poultry farm management workflows and records. We are listening to farmers and collecting feedback to guide the next stage of POMAS.</p></div><div className="flex flex-col gap-3"><span className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold">Initiative</span><ul className="flex flex-col gap-2 font-body-sm text-body-sm list-none m-0 p-0"><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#about-pomas" onClick={() => setMenuOpen(false)}>About POMAS</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#approach-vision" onClick={() => setMenuOpen(false)}>Our Vision</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#our-approach" onClick={() => setMenuOpen(false)}>Our Approach</a></li></ul></div><div className="flex flex-col gap-3"><span className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold">Research</span><ul className="flex flex-col gap-2 font-body-sm text-body-sm list-none m-0 p-0"><li><a className="text-secondary font-semibold hover:text-on-surface transition-colors" href="https://forms.gle/aTcjXwnxzwvoDoEu8" rel="noopener noreferrer" target="_blank">5-Min Survey</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#research-areas" onClick={() => setMenuOpen(false)}>Areas We're Exploring</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li></ul></div><div className="flex flex-col gap-3"><span className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold">Governance &amp; Contact</span><ul className="flex flex-col gap-2 font-body-sm text-body-sm list-none m-0 p-0"><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="mailto:support.pomas@gmail.com">support.pomas@gmail.com</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="https://wa.me/{{WHATSAPP_NUMBER}}" target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="/privacy.html">Privacy Notice</a></li></ul></div></div><div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant"><p className="text-center sm:text-left">This page loads the Inter typeface from Google. Survey responses are submitted through Google Forms; Google may process technical and form data under its own privacy terms.</p><p className="text-center sm:text-right">© 2026 POMAS Research Initiative. All rights reserved.</p></div></div></footer>
      
      
    </div>
  );
}
