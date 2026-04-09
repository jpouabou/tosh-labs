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
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Zap,
    title: "Prototype Sprint",
    href: "/services/prototype-sprint",
    cta: "See sprint details",
    description:
      "Test the idea before you fund the build. We design and build a working, testable prototype in two to four weeks — enough to know whether you're solving the right problem before you spend real money on it.",
    tags: ["From $4,500", "2–4 weeks", "Fixed price"],
  },
  {
    icon: Rocket,
    title: "Production MVP",
    href: "/services/production-mvp",
    cta: "See how we build",
    description:
      "Custom software built right the first time. Scoped tightly, priced upfront, and handed off with documentation your team or next developer can actually work from.",
    tags: ["From $12,000", "4–10 weeks", "Fixed price"],
  },
  {
    icon: TrendingUp,
    title: "Scale & Architecture",
    href: "/services/scale-architecture",
    cta: "Start with an audit",
    description:
      "A slow site, tools that don't connect, or a codebase nobody can maintain — these problems compound quietly. We find what's holding you back and fix it, without disrupting your operations.",
    tags: ["Audit from $2,500", "No downtime", "SME-focused"],
  },
  {
    icon: Building2,
    title: "Fractional CTO",
    href: "/services/fractional-cto",
    cta: "View engagement tiers",
    description:
      "Technical leadership without the full-time hire. We sit in your meetings, oversee your developers or agencies, and make sure your technology decisions are the right ones for your business.",
    tags: ["From $1,500/mo", "Month-to-month", "No lock-in"],
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
  { value: "1-3 Weeks", label: "Idea to prototype" },
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
    <>
      <Topbar />
      <main className="page-shell">

      {/* ── HERO ── */}
      <section className="hero-section" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-inner">

          <p className="hero-badge hero-animate hero-animate--1">
            <span className="hero-badge__dot" aria-hidden="true" />
            Product engineering partner
          </p>

          <h1 className="hero-title hero-animate hero-animate--2">
            From idea<br />
            <span className="hero-title--accent">to scalable product.</span><br />
            <span className="hero-title--sub">Your engineering partner.</span>
          </h1>

          <p className="hero-lede hero-animate hero-animate--3">
            We help startups and teams validate ideas, build production-ready products, and scale
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

      {/* ── EXPERIENCE ── */}
      <section className="xp-section">
        <div className="container xp-inner">
          <div className="xp-copy">
            <p className="eyebrow">Pedigree</p>
            <h2 className="xp-heading">Experience that compounds.</h2>
            <p className="xp-sub">
              Our team has built, shipped, and scaled inside companies like these, as
              engineers, product leads, and technical partners embedded in the work.
              That exposure is what we bring to every engagement.
            </p>
          </div>
          <div className="xp-logos" aria-label="Companies our team has worked at or alongside">
            {[
              { src: "/logos/clients/amazon.svg",         alt: "Amazon" },
              { src: "/logos/clients/instacart.svg",      alt: "Instacart" },
              { src: "/logos/clients/herschel.svg",       alt: "Herschel" },
              { src: "/logos/clients/ifit.svg",           alt: "iFit" },
              { src: "/logos/clients/rvo-health.svg",     alt: "RVO Health" },
              { src: "/logos/clients/shamrock-foods.svg", alt: "Shamrock Foods" },
              { src: "/logos/clients/lumin.svg",          alt: "Lumin" },
            ].map((logo) => (
              <div key={logo.alt} className="xp-logo-cell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.alt} className="xp-logo-img" />
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
            <a key={svc.title} href={svc.href} className="service-card service-card--link">
              <IconBox icon={svc.icon} />
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <div className="tag-row">
                {svc.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <span className="service-card__cta">
                {svc.cta}
                <span className="service-card__cta-arrow" aria-hidden="true">→</span>
              </span>
            </a>
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
              AI-First Engineering
            </h2>
            <p className="ai-intro__sub">
              We use AI to accelerate our engineering process. From discovery to launch,
              every engagement is AI-augmented. Not bolted on at the end, baked into how
              we work from day one. The result is faster delivery, fewer surprises, and a
              codebase that holds up.
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


      </main>
      <Footer />
    </>
  );
}
