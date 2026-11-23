import { useState } from "react";

const iconGlyphs = {"assignment":"▤","person":"●","open_in_new":"↗","arrow_downward":"↓","verified_user":"✓","info":"i","touch_app":"⌁","edit_note":"✎","shopping_bag":"▱","warning":"!","vaccines":"✚","trending_up":"↗","payments":"₦","lightbulb":"✦","record_voice_over":"◖","analytics":"▥","terminal":"⌘","mail":"✉","check_circle":"✓","timer":"◷","agriculture":"⌂","call":"☎","arrow_forward":"→","expand_less":"⌃","expand_more":"⌄","close":"×","menu":"☰"};

function Icon({ name, className = "" }) {
  return <span aria-hidden="true" className={`inline-flex items-center justify-center leading-none ${className}`}>{iconGlyphs[name] ?? "•"}</span>;
}

export default function ResearchPage() {
  const [expandedTopics, setExpandedTopics] = useState({});
  const [expandedFaqs, setExpandedFaqs] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col justify-between" style={{ backgroundColor: "#f2fbff", backgroundImage: "radial-gradient(circle at 50% 0%, rgba(26, 77, 92, 0.08) 0%, transparent 60%), linear-gradient(to right, rgba(26, 77, 92, 0.04) 1px, transparent 1px), linear-gradient(rgba(26, 77, 92, 0.04) 1px, transparent 1px)", backgroundSize: "100% 100%, 32px 32px, 32px 32px" }}>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-20 max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between gap-2 sm:gap-4"><div className="flex items-center gap-3 shrink-0"><img src="/pomas-logo.png" alt="POMAS logo" className="w-10 h-10 rounded-xl object-contain shrink-0" width="40" height="40" /><div className="flex flex-col"><div className="flex items-center gap-2"><span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">POMAS</span><span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-micro-eyebrow text-micro-eyebrow uppercase">Research Stage</span></div><span className="hidden sm:block font-body-sm text-body-sm text-on-surface-variant font-normal leading-tight">Poultry Management System</span></div></div><nav className={menuOpen ? "absolute top-20 left-0 right-0 z-50 flex flex-col items-stretch gap-1 bg-surface/95 p-4 shadow-lg backdrop-blur-xl lg:static lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:p-0 lg:shadow-none" : "hidden lg:flex items-center gap-1"} data-active-classes="bg-surface-container-high text-on-surface font-semibold rounded-lg"><a aria-current="page" className="px-3 py-2 transition-colors bg-surface-container-high text-on-surface font-semibold rounded-lg" href="#research-areas" onClick={() => setMenuOpen(false)}>Research Topics</a><a className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#approach-vision" onClick={() => setMenuOpen(false)}>Our Vision</a><a className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#our-approach" onClick={() => setMenuOpen(false)}>Our Approach</a><a className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#about-pomas" onClick={() => setMenuOpen(false)}>About POMAS</a><a className="px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></nav><div className="flex items-center gap-2 sm:gap-3 shrink-0"><a className="inline-flex min-w-0 items-center justify-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm hover:bg-secondary-fixed transition-all shadow-[0_1px_8px_rgba(0,0,0,0.06)]" href="https://forms.gle/aTcjXwnxzwvoDoEu8" rel="noopener noreferrer" target="_blank"><Icon name="assignment" className="text-[18px]" /><span className="hidden sm:inline">Take the Farmer Survey</span><span className="sm:hidden">Survey</span></a><button aria-label={menuOpen ? "Close mobile menu" : "Open mobile menu"} onClick={() => setMenuOpen(open => !open)} className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" type="button"><Icon name={menuOpen ? "close" : "menu"} className="text-[24px]" /></button></div></div></header><main className="w-full pt-20 bg-surface flex-grow"><div className="flex flex-col w-full">
      
      <section className="w-full py-12 md:py-20 lg:py-24 bg-surface relative"><div className="absolute inset-0 pointer-events-none z-0" style={{backgroundImage: "linear-gradient(to right, rgba(26, 77, 92, 0.07) 1px, transparent 1px), linear-gradient(rgba(26, 77, 92, 0.07) 1px, transparent 1px)", backgroundSize: "28px 28px", maskImage: "radial-gradient(75% 70% at 50% 30%, rgb(0, 0, 0) 30%, transparent 85%)"}}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <div className="flex flex-col items-start gap-6">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-primary font-label-caps text-label-caps uppercase tracking-wider shadow-sm">
      <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
      <span>Early Research · Validating With Farmers</span>
      </div>
      <h1 className="font-headline-hero-mobile text-headline-hero-mobile md:font-headline-hero md:text-headline-hero text-on-surface tracking-tight">
                  Better understanding. Better decisions. Stronger poultry farms.
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                  We are exploring how technology can help poultry farmers understand daily operations, production and finances. POMAS already has an early desktop application. This research helps us understand how farms actually work before deciding what to improve next.
                </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
      <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secondary-container text-on-secondary-container font-headline-sm text-headline-sm hover:bg-secondary-fixed transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2" href="https://forms.gle/aTcjXwnxzwvoDoEu8" rel="noopener noreferrer" target="_blank">
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
      
      <div className="rounded-2xl bg-primary text-on-primary p-7 sm:p-9 shadow-lg flex flex-col gap-6">
      <div className="flex items-center justify-between gap-3">
        <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-primary-container">Early field feedback</span>
        <span className="rounded-full bg-primary-container px-3 py-1 font-body-sm text-body-sm text-on-primary">Research snapshot</span>
      </div>
      <div>
        <h2 className="font-headline-lg text-headline-lg text-on-primary mb-3">Farm records do not all live in the same place.</h2>
        <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">The first three survey responses mention a mix of notebooks, spreadsheets, phone notes and a farm app. We are keeping the research open rather than assuming one workflow represents every farm.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-primary-container p-4"><span className="font-headline-sm text-headline-sm text-on-primary">Notebooks</span><p className="font-body-sm text-body-sm text-on-primary-container mt-1">Handwritten records</p></div>
        <div className="rounded-xl bg-primary-container p-4"><span className="font-headline-sm text-headline-sm text-on-primary">Spreadsheets</span><p className="font-body-sm text-body-sm text-on-primary-container mt-1">Excel-based records</p></div>
        <div className="rounded-xl bg-primary-container p-4"><span className="font-headline-sm text-headline-sm text-on-primary">Phone notes</span><p className="font-body-sm text-body-sm text-on-primary-container mt-1">Notes kept on devices</p></div>
        <div className="rounded-xl bg-primary-container p-4"><span className="font-headline-sm text-headline-sm text-on-primary">Farm apps</span><p className="font-body-sm text-body-sm text-on-primary-container mt-1">Dedicated software tools</p></div>
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
                    Early responses already point to different record-keeping methods, including notebooks, Excel spreadsheets, phone notes and farm apps. We are investigating how these methods fit into each farm’s day-to-day work.
                  </p>
      <p>
                    We are investigating how farmers currently handle these critical operational workflows on the ground—and exploring whether technology can genuinely illuminate patterns without creating an exhausting second job of data entry.
                  </p>
      </div>
      <div className="rounded-2xl bg-surface p-5 shadow-sm">
        <span className="font-label-caps text-label-caps uppercase text-secondary font-bold block mb-3">What the first responses mention</span>
        <div className="flex flex-wrap gap-2">
          {["Notebooks", "Excel spreadsheets", "Phone notes", "Farm apps"].map(method => <span key={method} className="rounded-full bg-surface-container px-3 py-2 font-body-sm text-body-sm text-on-surface">{method}</span>)}
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-3">A small early sample, not a representative industry survey.</p>
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
      
      <section className="w-full py-16 md:py-24 bg-surface relative scroll-mt-20" id="research-areas"><div className="absolute inset-0 pointer-events-none z-0" style={{backgroundImage: "linear-gradient(to right, rgba(26, 77, 92, 0.05) 1px, transparent 1px), linear-gradient(rgba(26, 77, 92, 0.05) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(80% 65% at 50% 40%, rgb(0, 0, 0) 20%, transparent 90%)"}}></div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div className="flex flex-col bg-surface-container-low rounded-2xl p-6 transition-all duration-200 hover:shadow-md">
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
                  Bridging the gap between paper sheets and timely decisions.
                </div>
      <button aria-controls="panel-topic-1" aria-expanded={!!expandedTopics[1]} onClick={() => setExpandedTopics(current => ({ ...current, [1]: !current[1] }))} className="investigation-trigger mt-auto inline-flex items-center justify-between w-full pt-3 font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" type="button">
      <span>Interview Questions</span>
      <Icon name={expandedTopics[1] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedTopics[1] ? "pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2" : "hidden pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2"} id="panel-topic-1">
      <p>• Who physically writes down counts at the pen door each evening?</p>
      <p>• How long does it take for dead bird logs to reach the supervisor?</p>
      <p>• How often are handwritten sheets lost, smeared, or miscalculated?</p>
      </div>
      </div>
      
      <div className="flex flex-col bg-surface-container-low rounded-2xl p-6 transition-all duration-200 hover:shadow-md">
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
                  Feed purchasing, usage and cost tracking are important topics in the research.
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
      
      <div className="flex flex-col bg-surface-container-low rounded-2xl p-6 transition-all duration-200 hover:shadow-md">
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
                  Timely action prevents catastrophic disease spread.
                </div>
      <button aria-controls="panel-topic-3" aria-expanded={!!expandedTopics[3]} onClick={() => setExpandedTopics(current => ({ ...current, [3]: !current[3] }))} className="investigation-trigger mt-auto inline-flex items-center justify-between w-full pt-3 font-headline-sm text-headline-sm text-primary hover:text-secondary transition-colors" type="button">
      <span>Interview Questions</span>
      <Icon name={expandedTopics[3] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedTopics[3] ? "pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2" : "hidden pt-4 mt-2 font-body-sm text-body-sm text-on-surface-variant space-y-2"} id="panel-topic-3">
      <p>• At what percentage threshold do you sound an alarm on pen mortality?</p>
      <p>• Do you notice changes in water intake 48 hours before mortality strikes?</p>
      <p>• How are necropsy findings documented and shared across team shifts?</p>
      </div>
      </div>
      
      <div className="flex flex-col bg-surface-container-low rounded-2xl p-6 transition-all duration-200 hover:shadow-md">
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
                  Compliance protects flock health and biosecurity.
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
      
      <div className="flex flex-col bg-surface-container-low rounded-2xl p-6 transition-all duration-200 hover:shadow-md">
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
                  Benchmarking reveals performance dips before they hurt revenue.
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
      
      <div className="flex flex-col bg-surface-container-low rounded-2xl p-6 transition-all duration-200 hover:shadow-md">
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
                  Clear financial visibility replaces guesswork at harvest.
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
      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                        Can pen-side record keeping be streamlined so it doesn't burden farm hands?
                      </h4>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Investigating single-tap tally counters, voice notes in local dialects, or optical scanning of physical clipboards to eliminate manual double-entry.
                      </p>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-surface shadow-sm flex items-start gap-4">
      <span className="font-label-caps text-label-caps font-bold px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed shrink-0">Q2</span>
      <div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                        Can early production dips and feed anomalies be flagged automatically?
                      </h4>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Exploring lightweight statistical thresholds that notify managers of water drops or consumption slows 24-48 hours before visible mortality spikes occur.
                      </p>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-surface shadow-sm flex items-start gap-4">
      <span className="font-label-caps text-label-caps font-bold px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed shrink-0">Q3</span>
      <div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                        How can batch-by-batch feed conversion and operational costs be visible in real time?
                      </h4>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Evaluating methods to calculate live cost-per-kg of live bird or cost-per-crate of eggs as feed prices change week-to-week.
                      </p>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-surface shadow-sm flex items-start gap-4">
      <span className="font-label-caps text-label-caps font-bold px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed shrink-0">Q4</span>
      <div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                        Can layer production curves be tracked simply to forecast feed needs and culling?
                      </h4>
      <p className="font-body-md text-body-md text-on-surface-variant">
                        Understanding how flock age correlates with shell quality and crate output to plan timely spent-hen sales before birds consume more than they produce.
                      </p>
      </div>
      </div>
      <div className="p-5 rounded-2xl bg-surface shadow-sm flex items-start gap-4">
      <span className="font-label-caps text-label-caps font-bold px-2 py-1 rounded bg-secondary-fixed text-on-secondary-fixed shrink-0">Q5</span>
      <div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                        What lightweight tools actually serve farms with intermittent internet connectivity?
                      </h4>
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
                Our Approach: Listen → Learn → Build
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
      <div className="pt-2">
      <a className="inline-flex items-center gap-2 text-primary font-headline-sm text-headline-sm hover:text-secondary transition-colors" href="mailto:research@pomas.ng">
      <Icon name="mail" className="text-[20px]" />
      <span>Contact the Research Team: research@pomas.ng</span>
      </a>
      </div>
      </div>
      <div className="lg:col-span-6">
      <div className="p-8 rounded-3xl bg-surface shadow-md flex flex-col gap-6">
      <span className="font-label-caps text-label-caps uppercase text-secondary font-bold">Research Governance</span>
      <h3 className="font-headline-md text-headline-md text-primary">Transparent Research Commitment</h3>
      <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
      <div className="flex items-start gap-3">
      <Icon name="check_circle" className="text-primary text-[20px] shrink-0 mt-0.5" />
      <span><strong>No Commercial Push:</strong> We are researchers and engineers, not salespeople pushing enterprise SaaS agreements.</span>
      </div>
      <div className="flex items-start gap-3">
      <Icon name="check_circle" className="text-primary text-[20px] shrink-0 mt-0.5" />
      <span><strong>Confidential Feedback:</strong> Your specific operational numbers, bird counts, and veterinary notes are never sold or shared.</span>
      </div>
      <div className="flex items-start gap-3">
      <Icon name="check_circle" className="text-primary text-[20px] shrink-0 mt-0.5" />
      <span><strong>Direct Co-Design:</strong> Farmers who participate have early direct input into wireframes and feature validation.</span>
      </div>
      </div>
      <div className="p-4 rounded-xl bg-surface-container font-body-sm text-body-sm text-on-surface-variant">
                    Have questions about how we handle research insights? Contact us anytime at <span className="text-primary font-semibold">research@pomas.ng</span>.
                  </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-primary text-on-primary scroll-mt-20" id="farmer-survey">
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
      <span className="font-headline-sm text-headline-sm text-on-primary">Optional Follow-up</span>
      <span className="font-body-sm text-body-sm text-on-primary-container">15-min direct conversation</span>
      </div>
      </div>
      <a className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-secondary-container text-on-secondary-container font-headline-md text-headline-md hover:bg-secondary-fixed transition-all shadow-lg focus:outline-none focus:ring-4 focus:ring-secondary-fixed" href="https://forms.gle/aTcjXwnxzwvoDoEu8" rel="noopener noreferrer" target="_blank">
      <span>Take the Farmer Survey</span>
      <Icon name="arrow_forward" className="text-[22px]" />
      </a>
      <span className="font-body-sm text-body-sm text-on-primary-container">
                The survey opens on Google Forms. Review the privacy notice before submitting.
              </span>
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
      <button aria-controls="faq-answer-1" aria-expanded={!!expandedFaqs[1]} onClick={() => setExpandedFaqs(current => ({ ...current, [1]: !current[1] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary focus:outline-none" type="button">
      <span>What is POMAS?</span>
      <Icon name={expandedFaqs[1] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[1] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-1">
                  POMAS is an early-stage agritech research initiative focused on understanding poultry farm operations and exploring practical technology solutions. We are currently in the problem discovery stage.
                </div>
      </div>
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-2" aria-expanded={!!expandedFaqs[2]} onClick={() => setExpandedFaqs(current => ({ ...current, [2]: !current[2] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary focus:outline-none" type="button">
      <span>Is POMAS available to use or download?</span>
      <Icon name={expandedFaqs[2] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[2] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-2">
                  No. POMAS is not currently an available software product, and we are not accepting registrations, downloads, or payments. We are actively conducting farmer research first.
                </div>
      </div>
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-3" aria-expanded={!!expandedFaqs[3]} onClick={() => setExpandedFaqs(current => ({ ...current, [3]: !current[3] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary focus:outline-none" type="button">
      <span>Who should participate in the survey?</span>
      <Icon name={expandedFaqs[3] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[3] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-3">
                  Any poultry farm owner, manager, supervisor, or farm hand working with layers, broilers, breeders, or mixed flocks in Nigeria or similar agricultural markets.
                </div>
      </div>
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-4" aria-expanded={!!expandedFaqs[4]} onClick={() => setExpandedFaqs(current => ({ ...current, [4]: !current[4] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary focus:outline-none" type="button">
      <span>How long does participation take?</span>
      <Icon name={expandedFaqs[4] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[4] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-4">
                  The initial online survey takes approximately 5 minutes. If you are open to sharing deeper insights, there is an optional 15-minute follow-up conversation.
                </div>
      </div>
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-5" aria-expanded={!!expandedFaqs[5]} onClick={() => setExpandedFaqs(current => ({ ...current, [5]: !current[5] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary focus:outline-none" type="button">
      <span>How will my survey responses and privacy be handled?</span>
      <Icon name={expandedFaqs[5] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[5] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-5">
                  Survey responses are used for POMAS research. The form is hosted by Google Forms, so Google processes submitted information under its own privacy terms. POMAS does not sell survey responses. Avoid including passwords, financial credentials or sensitive personal information. Read our privacy notice for details and contact options.
                </div>
      </div>
      
      <div className="rounded-2xl bg-surface-container-low transition-all">
      <button aria-controls="faq-answer-6" aria-expanded={!!expandedFaqs[6]} onClick={() => setExpandedFaqs(current => ({ ...current, [6]: !current[6] }))} className="faq-accordion-trigger flex items-center justify-between w-full p-6 text-left font-headline-sm text-headline-sm text-primary focus:outline-none" type="button">
      <span>Will POMAS cost money in the future?</span>
      <Icon name={expandedFaqs[6] ? "expand_less" : "expand_more"} className="transition-transform duration-200 trigger-icon" />
      </button>
      <div className={expandedFaqs[6] ? "px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed" : "hidden px-6 pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed"} id="faq-answer-6">
                  Because we are still validating whether and what to build, no pricing model exists. Any future tools will be evaluated in collaboration with farmers to ensure practical affordability.
                </div>
      </div>
      </div>
      </div>
      </section>
      
      
      </div></main><footer className="w-full bg-surface-container-low mt-16 shadow-[0_1px_8px_rgba(0,0,0,0.02)]"><div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-10"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"><div className="lg:col-span-2 flex flex-col gap-4"><div className="flex items-center gap-3"><img src="/pomas-logo.png" alt="POMAS logo" className="w-9 h-9 rounded-xl object-contain shrink-0" width="36" height="36" /><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-primary font-bold">POMAS</span><span className="font-body-sm text-body-sm text-on-surface-variant">Poultry Management System</span></div></div><div className="inline-flex items-center gap-2 self-start px-2 py-1 rounded-lg bg-surface-container text-secondary font-label-caps text-label-caps uppercase tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span><span>Early Research Stage</span></div><p className="font-body-md text-body-md text-on-surface-variant max-w-md">An early-stage Nigerian agritech research initiative investigating practical poultry farm management workflows and records. We are listening and collecting early feedback before building software.</p></div><div className="flex flex-col gap-3"><span className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold">Initiative</span><ul className="flex flex-col gap-2 font-body-sm text-body-sm list-none m-0 p-0"><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#about-pomas" onClick={() => setMenuOpen(false)}>About POMAS</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#approach-vision" onClick={() => setMenuOpen(false)}>Our Vision</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#our-approach" onClick={() => setMenuOpen(false)}>Our Approach</a></li></ul></div><div className="flex flex-col gap-3"><span className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold">Research</span><ul className="flex flex-col gap-2 font-body-sm text-body-sm list-none m-0 p-0"><li><a className="text-secondary font-semibold hover:text-on-surface transition-colors" href="https://forms.gle/aTcjXwnxzwvoDoEu8" rel="noopener noreferrer" target="_blank">5-Min Survey</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#research-areas" onClick={() => setMenuOpen(false)}>Areas We're Exploring</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a></li></ul></div><div className="flex flex-col gap-3"><span className="font-label-caps text-label-caps uppercase tracking-wider text-primary font-bold">Governance &amp; Contact</span><ul className="flex flex-col gap-2 font-body-sm text-body-sm list-none m-0 p-0"><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" href="mailto:research@pomas.ng">research@pomas.ng</a></li><li><a className="text-on-surface-variant hover:text-on-surface transition-colors" data-path="privacy-notice" href="/privacy.html">Privacy Notice</a></li></ul></div></div><div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant"><p className="text-center sm:text-left">This page loads the Inter typeface from Google. Survey responses are submitted through Google Forms; Google may process technical and form data under its own privacy terms.</p><p className="text-center sm:text-right">© 2026 POMAS Research Initiative. All rights reserved.</p></div></div></footer>
      
      
    </div>
  );
}
