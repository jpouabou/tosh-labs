import {
  ArrowUpRight,
  Building2,
  CheckCircle,
  Code2,
  Cpu,
  Layers,
  Mail,
  Paintbrush,
  Rocket,
  Search,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { IconBox } from "@/components/IconBox";
import ProductCard from "@/components/ProductCard";

const services = [
  {
    icon: Zap,
    title: "Prototype Sprint",
    description:
      "Got an idea you need to validate? We design and build a functional, testable prototype in weeks. Enough to put in front of investors, test with real users, and make your next decision with something concrete in hand.",
    tags: ["2-4 Weeks", "Investor-ready", "User-testable"],
  },
  {
    icon: Rocket,
    title: "Production MVP",
    description:
      "Your MVP shouldn't need a full rewrite six months in. We build production-grade from the first commit: clean architecture, tested code, and a foundation your next engineering hire can actually work in.",
    tags: ["Web & Mobile", "Production-grade", "Built to scale"],
  },
  {
    icon: TrendingUp,
    title: "Scale & Architecture",
    description:
      "Your product is growing faster than your architecture can handle. We step in, assess what's holding you back, redesign what needs to change, and implement it without stopping the business.",
    tags: ["System design", "Performance", "Zero downtime"],
  },
  {
    icon: Building2,
    title: "Fractional CTO",
    description:
      "Not ready for a full-time CTO but need the thinking? We sit at your leadership table, own the technical direction, and give your team the clarity they need to ship with confidence.",
    tags: ["Technical strategy", "Team leadership", "Ongoing advisory"],
  },
];

const aiFeatures = [
  {
    icon: Zap,
    title: "Compressed timelines",
    description:
      "AI removes the ceiling on how fast we can prototype, iterate, and ship. What used to require three sprints often ships in one. You get to market before the window closes, without cutting corners.",
  },
  {
    icon: Cpu,
    title: "Sharper decisions, earlier",
    description:
      "We use AI to stress-test architecture, surface blind spots, and flag risks before they harden into expensive problems. Every design choice arrives at code already pressure-tested.",
  },
  {
    icon: TrendingUp,
    title: "Human judgment at the top",
    description:
      "AI handles the repetitive. Our team handles the strategic. The product decisions that define your business still get the full weight of experienced engineering judgment.",
  },
];

const aiStats = [
  { value: "3×", label: "Faster prototyping" },
  { value: "Day 0", label: "AI in every engagement" },
  { value: "Zero", label: "Tolerance for avoidable debt" },
];

const process = [
  {
    step: "01",
    icon: Search,
    title: "Align",
    description:
      "We spend time getting sharp on the actual problem. What are you solving, for whom, and what does success look like in six months? Most engagements fail here. Ours start here.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Prototype",
    description:
      "Before serious code gets written, we validate. A working prototype in your hands so decisions get made on evidence, not assumptions and best guesses.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Build",
    description:
      "Production-grade engineering from the first commit. Tested, documented, and built to be maintained by the team you'll hire next, not just the one you have today.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Scale",
    description:
      "We don't hand off and disappear. As your product grows, we grow with it: new features, better architecture, and the strategic thinking your stage demands.",
  },
];

const differentiators = [
  {
    icon: CheckCircle,
    title: "We have skin in the game",
    description:
      "Pulsr and Pausr aren't portfolio slides. They're live products we built, operate, and iterate on every week. When we advise you on product decisions, we're drawing from the same choices you're facing.",
  },
  {
    icon: Layers,
    title: "Partner, not vendor",
    description:
      "We don't take a brief and execute it. We ask hard questions, push back when something won't work, and make product decisions alongside you. Your outcomes are our outcomes.",
  },
  {
    icon: Shield,
    title: "CTO-level thinking on every engagement",
    description:
      "Whether it's a two-week prototype or a full build, every engagement gets strategic oversight. We think about your business, your users, and your architecture two years from now.",
  },
];

const stats = [
  { value: "Weeks", label: "Idea to prototype" },
  { value: "2", label: "Live products we operate" },
  { value: "CTO-level", label: "Strategic oversight" },
  { value: "Global", label: "Clients" },
];

const products = [
  {
    name: "Pulsr",
    label: "Engineering team management",
    brief:
      "Engineering team leads were juggling too many tools with too little visibility. Standups in Slack, 1:1s in Notion, health checks in spreadsheets. The ask: one workspace that connects the human side of running a team to the work actually being done.",
    deliverables: [
      "Full-stack SaaS platform, built from zero to production",
      "Team health dashboard with cycle tracking and watchlists",
      "Structured 1:1 templates and async standup workflows",
      "Linear integration for linking team context to active work",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Linear API"],
    accent: "pulse" as const,
    logoSrc: "/logos/pulsr.svg",
    productUrl: "https://www.usepulsr.com",
  },
  {
    name: "Pausr",
    label: "PTO management for engineering teams",
    brief:
      "Most leave management tools are buried inside HR suites that engineering teams don't want to live in. The ask: something lightweight, calendar-first, and built around how engineering teams actually plan work, releases, and capacity.",
    deliverables: [
      "Full-stack SaaS with freemium model, built from zero to production",
      "Color-coded team calendar with one-click approval flows",
      "Capacity planning by week or month with release freeze periods",
      "Holiday-aware scheduling across multiple regions",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    accent: "pause" as const,
    logoSrc: "/logos/pausr.svg",
    productUrl: "https://www.usepausr.com",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">

      {/* ── NAV ── */}
      <header className="topbar">
        <div className="topbar__inner container">
          <a className="brand" href="#top" aria-label="Tosh Labs home">
            <div className="brand__mark" aria-hidden="true" />
            <p className="brand__name">Tosh Labs</p>
          </a>

          <nav className="topbar__nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#ai">AI</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#process">Process</a>
            <a href="https://www.usepulsr.com" target="_blank" rel="noopener noreferrer">
              Pulsr <ArrowUpRight className="nav-external" aria-hidden />
            </a>
            <a href="https://www.usepausr.com" target="_blank" rel="noopener noreferrer">
              Pausr <ArrowUpRight className="nav-external" aria-hidden />
            </a>
          </nav>

          <a className="button button--accent topbar__cta" href="mailto:hello@toshlabs.com">
            Start a project
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero-section" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-inner">

          <p className="hero-badge hero-animate hero-animate--1">
            <span className="hero-badge__dot" aria-hidden="true" />
            Product engineering partner · Vancouver
          </p>

          <h1 className="hero-title hero-animate hero-animate--2">
            From idea<br />
            <span className="hero-title--accent">to scalable product.</span><br />
            <span className="hero-title--sub">Your engineering partner.</span>
          </h1>

          <p className="hero-lede hero-animate hero-animate--3">
            We help startups validate ideas, build production-ready products, and scale
            their systems. Not as a vendor executing your tickets. As a partner invested
            in what you&apos;re building.
          </p>

          <div className="hero-actions hero-animate hero-animate--4">
            <a className="button button--primary" href="mailto:hello@toshlabs.com">
              Start a project
            </a>
            <a className="button button--ghost" href="#services">
              How we engage
            </a>
          </div>

          <div className="hero-stats hero-animate hero-animate--5" aria-label="At a glance">
            {stats.map((s) => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat__value">{s.value}</span>
                <span className="hero-stat__label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section container" id="services">
        <header className="section-header">
          <p className="eyebrow">How we engage</p>
          <h2>Four ways to work with us.</h2>
          <p className="section-sub">
            From a two-week prototype to a long-term technical partnership, every engagement
            is scoped around your stage, your constraints, and what actually moves the needle.
          </p>
        </header>

        <div className="services-grid">
          {services.map((svc) => (
            <article key={svc.title} className="service-card">
              <IconBox icon={svc.icon} />
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <div className="tag-row">
                {svc.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── AI SECTION ── */}
      <section className="section ai-section" id="ai">
        <div className="ai-section__glow" aria-hidden="true" />
        <div className="container">

          <div className="ai-intro">
            <p className="eyebrow">AI-accelerated delivery</p>
            <h2 className="ai-intro__title">
              We don&apos;t fight AI.<br />We run on it.
            </h2>
            <p className="ai-intro__sub">
              AI hasn&apos;t replaced good engineering judgment. It&apos;s amplified it.
              Every engagement is AI-augmented from discovery to launch. Not bolted on
              at the end — baked into how we work from day one. The result is faster
              delivery, fewer surprises, and a codebase that holds up.
            </p>
          </div>

          <div className="ai-stat-row">
            {aiStats.map((s) => (
              <div key={s.label} className="ai-stat">
                <span className="ai-stat__value">{s.value}</span>
                <span className="ai-stat__label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="ai-grid">
            {aiFeatures.map((f) => (
              <article key={f.title} className="ai-card">
                <IconBox icon={f.icon} />
                <h3>{f.title}</h3>
                <p>{f.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="section container" id="portfolio">
        <header className="section-header">
          <p className="eyebrow">Case studies</p>
          <h2>Built by us. Owned and run by us.</h2>
          <p className="section-sub">
            Pulsr and Pausr aren&apos;t portfolio slides. They&apos;re live products we designed,
            built, and continue to operate. When we advise on product decisions, we&apos;re
            drawing from the same choices you&apos;re facing right now.
          </p>
        </header>

        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section container" id="process">
        <header className="section-header">
          <p className="eyebrow">How we work</p>
          <h2>A process built for founders, not agencies.</h2>
          <p className="section-sub">
            No long discovery phases. No status-update theatre. Clear stages,
            real output at every step, and a partner who tells you the truth.
          </p>
        </header>

        <div className="process-grid">
          {process.map((step) => (
            <article key={step.step} className="process-card">
              <span className="process-card__step">{step.step}</span>
              <IconBox icon={step.icon} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── WHY TOSH LABS ── */}
      <section className="section container" id="why">
        <header className="section-header">
          <p className="eyebrow">Why Tosh Labs</p>
          <h2>A partner with skin in the game.</h2>
        </header>

        <div className="diff-grid">
          {differentiators.map((d) => (
            <article key={d.title} className="diff-card">
              <IconBox icon={d.icon} />
              <div>
                <h3>{d.title}</h3>
                <p>{d.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section section--contact container" id="contact">
        <div className="cta-panel">
          <div className="cta-panel__glow" aria-hidden="true" />
          <div className="cta-panel__copy">
            <p className="eyebrow">
              <Mail className="eyebrow__icon" aria-hidden />
              Let&apos;s talk
            </p>
            <h2>Tell us what you&apos;re building.</h2>
            <p>
              We work with a small number of companies at a time. If you have an idea to
              validate, a product to build, or a system to scale, reach out and we&apos;ll
              tell you honestly whether we&apos;re the right fit.
            </p>
          </div>
          <div className="cta-panel__action">
            <a className="button button--primary button--lg" href="mailto:hello@toshlabs.com">
              <Mail className="button__icon" aria-hidden />
              hello@toshlabs.com
            </a>
            <p className="cta-note">Vancouver, BC · Working with clients globally</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div className="site-footer__brand-block">
            <div className="brand__mark brand__mark--sm" aria-hidden="true" />
            <div>
              <p className="site-footer__brand">Tosh Labs</p>
              <p className="site-footer__tagline">
                Product engineering partner · Vancouver, BC
              </p>
            </div>
          </div>

          <nav className="site-footer__nav" aria-label="Footer">
            <div className="site-footer__col">
              <p className="site-footer__col-heading">Company</p>
              <a href="#services">Services</a>
              <a href="#ai">AI approach</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="site-footer__col">
              <p className="site-footer__col-heading">Products</p>
              <a href="https://www.usepulsr.com" target="_blank" rel="noopener noreferrer">
                Pulsr
              </a>
              <a href="https://www.usepausr.com" target="_blank" rel="noopener noreferrer">
                Pausr
              </a>
            </div>
            <div className="site-footer__col">
              <p className="site-footer__col-heading">Contact</p>
              <a href="mailto:hello@toshlabs.com">hello@toshlabs.com</a>
            </div>
          </nav>
        </div>

        <div className="container site-footer__bottom">
          <p>© 2026 Tosh Labs. All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}
