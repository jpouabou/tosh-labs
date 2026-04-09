import {
  Check,
  CheckCircle,
  Clock,
  Code2,
  Layers,
  Mail,
  Package,
  Paintbrush,
  RefreshCw,
  Rocket,
  Search,
  Shield,
  TrendingUp,
  Users,
  Building2,
  Zap,
} from "lucide-react";
import { IconBox } from "@/components/IconBox";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

const includes = [
  {
    icon: Code2,
    title: "Clean, maintainable code",
    description:
      "Written so your next developer can understand it on day one. No clever hacks, no spaghetti logic — just straightforward code that does what it says.",
  },
  {
    icon: Shield,
    title: "Testing built in, not bolted on",
    description:
      "The features that matter get tested as they're built. When something breaks — and something always eventually breaks — you find out before your customers do.",
  },
  {
    icon: Zap,
    title: "AI-accelerated delivery",
    description:
      "We use AI throughout the build process to move faster without cutting corners. You get to market sooner — and the code is still yours to own and maintain.",
  },
  {
    icon: Package,
    title: "Hosting and deployment set up",
    description:
      "Your app is deployed, configured, and running on reliable infrastructure from day one. No scrambling at the finish line. Launch day is ready from the start.",
  },
  {
    icon: Layers,
    title: "A data model built to last",
    description:
      "Database structure designed for where your business is going, not just where it is today. Changing it later is expensive — we get it right up front.",
  },
  {
    icon: Users,
    title: "Handoff your team can work from",
    description:
      "Documentation, a walkthrough session, and a codebase that a new developer or agency can pick up without needing us to explain it every time.",
  },
];

const pricingTiers = [
  {
    name: "Core Build",
    price: "From $12,000",
    duration: "4–6 weeks",
    description:
      "A focused web application built around your most important workflow. Right-sized for small businesses commissioning their first custom tool — nothing over-engineered, nothing left out.",
    includes: [
      "UX design & user flows",
      "Full-stack web application",
      "Hosting setup & deployment",
      "Core feature testing",
      "Launch support",
      "Handoff documentation",
    ],
    featured: false,
    cta: "Scope a Core Build",
  },
  {
    name: "Full Build",
    price: "From $22,000",
    duration: "6–10 weeks",
    description:
      "For businesses that need more — integrations with existing tools, multiple user types, or a more complex workflow. Still scoped tightly. Still fixed-price.",
    includes: [
      "Everything in Core Build",
      "Third-party integrations (payment, CRM, APIs)",
      "Multi-role user access",
      "Advanced data model",
      "End-to-end test coverage",
      "Performance review",
      "Extended handoff & onboarding",
    ],
    featured: true,
    cta: "Scope a Full Build",
  },
];

const trustItems = [
  {
    icon: RefreshCw,
    title: "Fixed price, agreed upfront",
    description:
      "You know what you're paying before a single line of code is written. No hourly billing, no change-order surprises at the end.",
  },
  {
    icon: Clock,
    title: "No ongoing dependency on us",
    description:
      "We build things you can own. When the project is done, your team or another developer can maintain and extend it without needing us on retainer.",
  },
  {
    icon: TrendingUp,
    title: "Built to grow with you",
    description:
      "The architecture and data model are designed for where your business is heading — not just what you need on launch day.",
  },
];

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Scope & agree",
    description:
      "You walk us through what you need. We ask the questions, identify what's in scope, and give you a fixed price before anything starts. No vague estimates.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Design",
    description:
      "We design the user flows, screens, and data structure before writing code. You review and approve. Changes at this stage cost nothing — changes mid-build cost time and money.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Build",
    description:
      "Weekly progress updates. You see the product taking shape and can give feedback as it grows. Nothing gets shipped internally without testing.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & hand off",
    description:
      "We deploy your app, walk your team through it, and hand over everything — code, docs, and access. You own it from here.",
  },
];

const audience = [
  {
    icon: CheckCircle,
    title: "Small businesses replacing a manual process",
    description:
      "You're running something on spreadsheets, email chains, or a tool that almost fits but not quite. A custom build replaces the workarounds with something that actually matches how your business works.",
  },
  {
    icon: Layers,
    title: "Service companies launching a client-facing tool",
    description:
      "Online booking, a client portal, a self-serve quoting tool — something that saves your team time and gives your customers a better experience. Scoped, built, and done.",
  },
  {
    icon: Building2,
    title: "Businesses with a specific operational problem",
    description:
      "You know exactly what you need. You've looked at the off-the-shelf options and none of them fit. A custom build, scoped tightly, is often cheaper than years of workarounds with the wrong tool.",
  },
];

export default function ProductionMVPPage() {
  return (
    <>
      <Topbar />
      <main className="page-shell">

        {/* ── HERO ── */}
        <section className="mvp-hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container mvp-hero__inner">
            <p className="eyebrow">Production MVP</p>
            <h1 className="mvp-hero__title">
              Custom software that<br />actually gets used.
            </h1>
            <p className="mvp-hero__lede">
              Most small business software projects fail not because of bad developers,
              but because the scope wasn&apos;t right, the price wasn&apos;t fixed, or
              nobody validated the idea before the build started. We do all three —
              scope it tightly, price it upfront, and build it to last.
            </p>
            <div className="hero-actions">
              <a
                className="button button--primary button--lg"
                href="mailto:hello@toshlabs.com"
              >
                <Mail className="button__icon" aria-hidden />
                Tell us what you need
              </a>
              <a className="button button--ghost button--lg" href="#pricing">
                View pricing
              </a>
            </div>
            <div className="mvp-hero__stats" aria-label="At a glance">
              <div className="mvp-hero__stat">
                <span className="mvp-hero__stat-value">From $12,000</span>
                <span className="mvp-hero__stat-label">Fixed-price project</span>
              </div>
              <div className="mvp-hero__stat">
                <span className="mvp-hero__stat-value">4–10 Weeks</span>
                <span className="mvp-hero__stat-label">Scope to launch</span>
              </div>
              <div className="mvp-hero__stat">
                <span className="mvp-hero__stat-value">You own it</span>
                <span className="mvp-hero__stat-label">No lock-in, ever</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">What&apos;s included</p>
            <h2>Everything to ship. Nothing to regret later.</h2>
            <p className="section-sub">
              Every build covers the full picture — design, code, hosting, testing, and
              handoff. No hidden extras, no follow-up invoices for things that should have
              been in scope from the start.
            </p>
          </header>

          <div className="mvp-includes-grid">
            {includes.map((item) => (
              <article key={item.title} className="mvp-include-card">
                <IconBox icon={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="mvp-retainer-section" id="pricing">
          <div className="mvp-retainer-section__glow" aria-hidden="true" />
          <div className="container mvp-retainer-section__inner">

            <header className="mvp-retainer-header">
              <p className="eyebrow mvp-eyebrow--dark">Pricing</p>
              <h2 className="mvp-retainer-title">Fixed-price. Scoped before we start.</h2>
              <p className="mvp-retainer-sub">
                We don&apos;t do hourly billing. Every project is scoped, priced, and
                agreed before work begins. You know what you&apos;re paying and what
                you&apos;re getting — no change orders, no surprises.
              </p>
            </header>

            <div className="mvp-tier-grid">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`mvp-tier-card${tier.featured ? " mvp-tier-card--featured" : ""}`}
                >
                  {tier.featured && (
                    <span className="mvp-tier-card__badge">Most common</span>
                  )}
                  <div className="mvp-tier-card__top">
                    <p className="mvp-tier-card__name">{tier.name}</p>
                    <div className="mvp-tier-card__price-row">
                      <span className="mvp-tier-card__price">{tier.price}</span>
                    </div>
                    <span className="mvp-tier-card__duration-pill">{tier.duration}</span>
                    <p className="mvp-tier-card__desc">{tier.description}</p>
                  </div>
                  <ul className="mvp-tier-card__list">
                    {tier.includes.map((item) => (
                      <li key={item} className="mvp-tier-card__item">
                        <Check size={15} aria-hidden strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`button button--lg mvp-tier-card__cta${tier.featured ? " button--primary" : " button--ghost"}`}
                    href="mailto:hello@toshlabs.com"
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>

            <div className="mvp-retainer-add">
              <div className="mvp-retainer-add__inner">
                <div className="mvp-retainer-add__copy">
                  <p className="mvp-retainer-add__title">Need ongoing development after launch?</p>
                  <p className="mvp-retainer-add__desc">
                    Once your first build is live, we offer a monthly development retainer for
                    businesses that want to keep improving the product. New features, bug fixes,
                    and a team that already knows your codebase. From <strong>$2,500/month</strong>.
                  </p>
                </div>
                <a className="button button--ghost mvp-retainer-add__cta" href="mailto:hello@toshlabs.com">
                  Ask about ongoing support
                </a>
              </div>
            </div>

            <div className="retainer-trust-row">
              {trustItems.map((item) => (
                <div key={item.title} className="retainer-trust-item">
                  <span className="retainer-trust-item__icon-wrap" aria-hidden="true">
                    <item.icon strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="retainer-trust-item__title">{item.title}</p>
                    <p className="retainer-trust-item__desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">How it works</p>
            <h2>Scope, build, launch. No detours.</h2>
            <p className="section-sub">
              You know what you&apos;re getting into at every stage. No black boxes,
              no disappearing for weeks, no surprises at the end.
            </p>
          </header>

          <div className="process-grid">
            {steps.map((step) => (
              <article key={step.step} className="process-card">
                <span className="process-card__step">{step.step}</span>
                <IconBox icon={step.icon} />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">Who it&apos;s for</p>
            <h2>For businesses that know what they need built.</h2>
            <p className="section-sub">
              Not sure yet? Start with a <a href="/services/prototype-sprint" style={{color:"var(--text)", fontWeight:600}}>Prototype Sprint</a> to
              validate the idea first. This service is for businesses ready to build.
            </p>
          </header>

          <div className="diff-grid">
            {audience.map((item) => (
              <article key={item.title} className="diff-card">
                <IconBox icon={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section section--contact container" id="contact">
          <div className="cta-panel">
            <div className="cta-panel__glow" aria-hidden="true" />
            <div className="cta-panel__copy">
              <p className="eyebrow">
                <Mail className="eyebrow__icon" aria-hidden />
                Get a fixed price
              </p>
              <h2>Tell us what you need built.</h2>
              <p>
                Describe what you&apos;re trying to build and we&apos;ll come back
                with a scope and a fixed price. If it&apos;s not a good fit, we&apos;ll
                tell you that too. Most projects are scoped within three to five business days.
              </p>
            </div>
            <div className="cta-panel__action">
              <a
                className="button button--primary button--lg"
                href="mailto:hello@toshlabs.com"
              >
                <Mail className="button__icon" aria-hidden />
                hello@toshlabs.com
              </a>
              <p className="cta-note">Based in Vancouver, BC · Serving businesses across Canada and the US</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />

      {/* ── PAGE-SCOPED STYLES ── */}
      <style>{`
        /* ── MVP HERO ── */
        .mvp-hero {
          position: relative;
          padding: 120px 0 112px;
          overflow: hidden;
        }
        .mvp-hero__inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .mvp-hero__title {
          margin: 0;
          font-size: clamp(2.8rem, 6.5vw, 5.5rem);
          font-weight: 800;
          letter-spacing: -0.052em;
          line-height: 1.0;
          color: var(--text);
          max-width: 18ch;
        }
        .mvp-hero__lede {
          max-width: 54ch;
          margin: 30px 0 0;
          color: var(--muted);
          font-size: clamp(1rem, 1.4vw, 1.175rem);
          line-height: 1.72;
          letter-spacing: -0.01em;
        }
        .mvp-hero__stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 72px;
          width: 100%;
          max-width: 640px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: var(--surface);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
        }
        .mvp-hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 24px 20px;
          border-right: 1px solid var(--border);
        }
        .mvp-hero__stat:last-child { border-right: none; }
        .mvp-hero__stat-value {
          font-size: clamp(0.85rem, 1.3vw, 1.1rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(180deg, #0d0d0d 0%, #888888 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          white-space: nowrap;
        }
        .mvp-hero__stat-label {
          font-size: 0.75rem;
          color: var(--muted);
          font-weight: 500;
          white-space: nowrap;
        }

        /* ── INCLUDES GRID ── */
        .mvp-includes-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .mvp-include-card {
          padding: 32px 28px;
          border-radius: var(--radius-xl);
          background: var(--surface);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          position: relative;
          overflow: hidden;
          transition:
            border-color 0.35s var(--ease-out),
            transform    0.35s var(--ease-out),
            box-shadow   0.35s var(--ease-out);
        }
        .mvp-include-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 75% 55% at 0% 0%, rgba(0,0,0,0.025), transparent 65%);
          pointer-events: none;
        }
        .mvp-include-card .icon-box { margin-bottom: 20px; }
        .mvp-include-card h3 { margin-bottom: 10px; }
        .mvp-include-card p {
          color: var(--muted);
          font-size: 0.9375rem;
          line-height: 1.68;
          position: relative;
          z-index: 1;
        }
        .mvp-include-card:hover {
          border-color: var(--border-2);
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        /* ── PRICING SECTION (dark) ── */
        .mvp-retainer-section {
          position: relative;
          padding: 160px 0 120px;
          background: #0d0d0d;
          color: #fafafa;
          overflow: hidden;
          margin-top: 0;
        }
        .mvp-retainer-section__glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 65% 70% at 50% 30%, rgba(255,255,255,0.055), transparent 68%);
          pointer-events: none;
          animation: retainer-breathe 10s ease infinite alternate;
        }
        @keyframes retainer-breathe {
          0%   { opacity: 0.6; transform: scale(1); }
          100% { opacity: 1;   transform: scale(1.05); }
        }
        .mvp-retainer-section__inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mvp-retainer-header {
          text-align: center;
          max-width: 680px;
          margin-bottom: 56px;
        }
        .mvp-eyebrow--dark {
          background: #ffffff;
          border-color: #ffffff;
          color: #0d0d0d;
        }
        .mvp-retainer-title {
          margin: 0 0 22px;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.048em;
          line-height: 1.06;
          color: #fafafa;
        }
        .mvp-retainer-sub {
          color: #666666;
          font-size: clamp(1rem, 1.35vw, 1.1rem);
          line-height: 1.72;
          margin: 0;
        }

        /* ── PRICING TIER CARDS ── */
        .mvp-tier-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          width: 100%;
          max-width: 860px;
          margin-bottom: 32px;
        }
        .mvp-tier-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 40px 40px 36px;
          border-radius: var(--radius-xl);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          transition: border-color 0.35s, background 0.35s;
        }
        .mvp-tier-card:hover {
          background: rgba(255,255,255,0.065);
          border-color: rgba(255,255,255,0.15);
        }
        .mvp-tier-card--featured {
          background: #ffffff;
          border-color: #ffffff;
        }
        .mvp-tier-card--featured:hover {
          background: #ffffff;
          border-color: #ffffff;
        }
        .mvp-tier-card__badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #0d0d0d;
          background: #f0f0f0;
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: 20px;
          align-self: flex-start;
        }
        .mvp-tier-card__top { margin-bottom: 28px; }
        .mvp-tier-card__name {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #fafafa;
          margin: 0 0 10px;
        }
        .mvp-tier-card--featured .mvp-tier-card__name { color: #0d0d0d; }
        .mvp-tier-card__price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 8px;
        }
        .mvp-tier-card__price {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1;
          color: #fafafa;
        }
        .mvp-tier-card--featured .mvp-tier-card__price { color: #0d0d0d; }
        .mvp-tier-card__duration-pill {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          padding: 3px 9px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.13);
          color: #888;
        }
        .mvp-tier-card--featured .mvp-tier-card__duration-pill {
          background: rgba(0,0,0,0.06);
          border-color: rgba(0,0,0,0.1);
          color: #666;
        }
        .mvp-tier-card__desc {
          font-size: 0.875rem;
          line-height: 1.65;
          color: #666;
          margin: 16px 0 0;
        }
        .mvp-tier-card--featured .mvp-tier-card__desc { color: #555; }
        .mvp-tier-card__list {
          display: flex;
          flex-direction: column;
          gap: 11px;
          flex: 1;
          margin-bottom: 28px;
        }
        .mvp-tier-card__item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #aaa;
          line-height: 1.5;
        }
        .mvp-tier-card__item svg {
          flex-shrink: 0;
          margin-top: 1px;
          color: #555;
        }
        .mvp-tier-card--featured .mvp-tier-card__item { color: #3d3d3d; }
        .mvp-tier-card--featured .mvp-tier-card__item svg { color: #0d0d0d; }
        .mvp-tier-card__cta { width: 100%; justify-content: center; }
        .mvp-tier-card .button--ghost {
          border-color: rgba(255,255,255,0.18);
          color: #fafafa;
        }
        .mvp-tier-card .button--ghost:hover {
          background: rgba(255,255,255,0.07);
        }

        /* ── ONGOING SUPPORT ADD-ON ── */
        .mvp-retainer-add {
          width: 100%;
          max-width: 860px;
          margin-bottom: 48px;
        }
        .mvp-retainer-add__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 28px 36px;
          border-radius: var(--radius-xl);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
        }
        .mvp-retainer-add__title {
          font-size: 0.9375rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #fafafa;
          margin: 0 0 6px;
        }
        .mvp-retainer-add__desc {
          font-size: 0.875rem;
          line-height: 1.62;
          color: #666;
          margin: 0;
          max-width: 52ch;
        }
        .mvp-retainer-add__desc strong { color: #aaa; }
        .mvp-retainer-add__cta {
          flex-shrink: 0;
          border-color: rgba(255,255,255,0.18);
          color: #fafafa;
          white-space: nowrap;
        }
        .mvp-retainer-add__cta:hover {
          background: rgba(255,255,255,0.07);
        }

        /* ── TRUST ROW ── */
        .retainer-trust-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 48px;
          width: 100%;
        }
        .retainer-trust-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 28px 24px;
          border-radius: var(--radius-xl);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          transition: border-color 0.35s, background 0.35s;
        }
        .retainer-trust-item:hover {
          background: rgba(255,255,255,0.065);
          border-color: rgba(255,255,255,0.14);
        }
        .retainer-trust-item__icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          border-radius: 11px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          color: #fafafa;
        }
        .retainer-trust-item__icon-wrap svg {
          width: 18px;
          height: 18px;
        }
        .retainer-trust-item__title {
          margin: 0 0 6px;
          font-size: 0.9375rem;
          font-weight: 700;
          letter-spacing: -0.022em;
          color: #fafafa;
        }
        .retainer-trust-item__desc {
          margin: 0;
          font-size: 0.875rem;
          color: #666666;
          line-height: 1.62;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .mvp-includes-grid { grid-template-columns: repeat(2, 1fr); }
          .retainer-trust-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 820px) {
          .mvp-hero { padding: 88px 0 80px; }
          .mvp-retainer-section { padding: 100px 0 80px; }
          .mvp-includes-grid { grid-template-columns: 1fr; }
          .mvp-tier-grid { grid-template-columns: 1fr; max-width: 480px; }
          .mvp-retainer-add__inner { flex-direction: column; align-items: flex-start; gap: 20px; }
          .mvp-hero__stats {
            grid-template-columns: 1fr;
            max-width: 320px;
          }
          .mvp-hero__stat {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
          .mvp-hero__stat:last-child { border-bottom: none; }
        }
        @media (max-width: 560px) {
          .mvp-tier-card { padding: 28px 22px 24px; }
          .mvp-retainer-add__inner { padding: 22px 22px; }
        }
      `}</style>
    </>
  );
}
