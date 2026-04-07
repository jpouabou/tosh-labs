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
    title: "Production architecture",
    description:
      "Clean, documented codebase built to survive your next hire. Not a prototype duct-taped into production.",
  },
  {
    icon: Shield,
    title: "Full test coverage",
    description:
      "Unit, integration, and end-to-end tests written alongside the code. Quality isn't a phase — it's the process.",
  },
  {
    icon: Zap,
    title: "AI-accelerated delivery",
    description:
      "Every hour of engineering time is amplified by AI. You get to market faster without cutting corners.",
  },
  {
    icon: Package,
    title: "Deployment & infra",
    description:
      "Cloud infrastructure set up, CI/CD configured, monitoring in place. Launch day is ready from day one.",
  },
  {
    icon: Layers,
    title: "Scalable data model",
    description:
      "Schema and architecture designed for where you're going, not just where you are today.",
  },
  {
    icon: Users,
    title: "Handoff & documentation",
    description:
      "Thorough docs, onboarding guides, and a handoff session so your next team member hits the ground running.",
  },
];

const retainerFeatures = [
  "Unlimited project initiations",
  "Dedicated engineering capacity per active sprint",
  "AI-accelerated delivery on every build",
  "Production-grade architecture, always",
  "Priority access — no waitlist",
  "Cancel anytime",
];

const trustItems = [
  {
    icon: RefreshCw,
    title: "Unlimited projects",
    description:
      "No cap on the number of MVPs. Have an idea? We spin it up.",
  },
  {
    icon: Clock,
    title: "No long-term lock-in",
    description:
      "Month-to-month. Stay because the value is real, not because you're locked in.",
  },
  {
    icon: TrendingUp,
    title: "Scales with you",
    description:
      "As your company grows, so does our engagement. From MVP to scale, we're still there.",
  },
];

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Brief & scope",
    description:
      "You share what you're building. We align on scope, tech choices, and what 'done' looks like. No vague statements of work.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Architecture & design",
    description:
      "We design the data model, system architecture, and UX before a line of code is written. Decisions made right the first time.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Build",
    description:
      "Production-grade engineering, sprint by sprint. You see progress every week. Nothing ships without tests and documentation.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & handoff",
    description:
      "We deploy, monitor, and hand off. Your team gets full docs, onboarding support, and a codebase they can own.",
  },
];

const audience = [
  {
    icon: CheckCircle,
    title: "Early-stage founders",
    description:
      "You've validated the idea. Now you need a product — not a prototype. We build the real thing from day one so you're not rewriting in six months.",
  },
  {
    icon: Layers,
    title: "Startups between funding rounds",
    description:
      "You have runway and a roadmap. We give you the engineering capacity to execute it without the overhead of a full in-house team.",
  },
  {
    icon: Building2,
    title: "Companies launching new products",
    description:
      "You have an existing business and a new product idea. The retainer model means you can move fast without spinning up a new procurement process every time.",
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
              Your MVP shouldn&apos;t need<br />a rewrite.
            </h1>
            <p className="mvp-hero__lede">
              Most MVPs are rushed out and spend the next six months getting fixed. We build
              production-grade from the first commit — clean architecture, tested code, and a
              codebase your next hire can actually work in.
            </p>
            <div className="hero-actions">
              <a
                className="button button--primary button--lg"
                href="mailto:hello@toshlabs.com"
              >
                <Mail className="button__icon" aria-hidden />
                Start your MVP
              </a>
              <a className="button button--ghost button--lg" href="#retainer">
                View pricing
              </a>
            </div>
            <div className="mvp-hero__stats" aria-label="At a glance">
              <div className="mvp-hero__stat">
                <span className="mvp-hero__stat-value">2–8 Weeks</span>
                <span className="mvp-hero__stat-label">To production</span>
              </div>
              <div className="mvp-hero__stat">
                <span className="mvp-hero__stat-value">Production-grade</span>
                <span className="mvp-hero__stat-label">From commit one</span>
              </div>
              <div className="mvp-hero__stat">
                <span className="mvp-hero__stat-value">AI-accelerated</span>
                <span className="mvp-hero__stat-label">Delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">What&apos;s included</p>
            <h2>Everything you need. Nothing you don&apos;t.</h2>
            <p className="section-sub">
              A Production MVP engagement covers the full stack — from architecture decisions
              to deployment. No surprises, no scope creep.
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

        {/* ── RETAINER ── */}
        <section className="mvp-retainer-section" id="retainer">
          <div className="mvp-retainer-section__glow" aria-hidden="true" />
          <div className="container mvp-retainer-section__inner">

            <header className="mvp-retainer-header">
              <p className="eyebrow mvp-eyebrow--dark">The retainer model</p>
              <h2 className="mvp-retainer-title">Unlimited MVPs. $99/month.</h2>
              <p className="mvp-retainer-sub">
                Most product studios charge per project. We operate on a retainer. For $99/month,
                your company gets unlimited access to our MVP delivery engine — spin up as many
                products as you need, whenever you need them. We&apos;re betting on long-term
                partnerships, not one-time engagements.
              </p>
            </header>

            <div className="retainer-card">
              <div className="retainer-card__price-row">
                <span className="retainer-card__price">$99</span>
                <span className="retainer-card__per">/month</span>
              </div>
              <p className="retainer-card__headline">Unlimited Production MVPs</p>
              <ul className="retainer-card__features">
                {retainerFeatures.map((feature) => (
                  <li key={feature} className="retainer-card__feature">
                    <Check className="retainer-card__check" aria-hidden strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className="button button--primary button--lg retainer-card__cta"
                href="mailto:hello@toshlabs.com"
              >
                Start for $99/month
              </a>
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
            <p className="eyebrow">The process</p>
            <h2>From idea to production in weeks.</h2>
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
            <h2>Built for founders who build fast.</h2>
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
                Get started
              </p>
              <h2>Ready to build your MVP?</h2>
              <p>
                Tell us what you&apos;re building. We&apos;ll scope it, price it, and tell you
                honestly whether we&apos;re the right fit. Most projects kick off within a week.
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
              <p className="cta-note">Vancouver, BC · Working with clients globally</p>
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

        /* ── RETAINER SECTION (dark) ── */
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
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.13);
          color: rgba(255,255,255,0.55);
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

        /* ── RETAINER CARD ── */
        .retainer-card {
          width: 100%;
          max-width: 520px;
          padding: 48px 52px;
          border-radius: var(--radius-xl);
          background: #ffffff;
          color: #0d0d0d;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.08),
            0 24px 80px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0;
        }
        .retainer-card__price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 6px;
        }
        .retainer-card__price {
          font-size: clamp(3.2rem, 6vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.055em;
          color: #0d0d0d;
          line-height: 1;
        }
        .retainer-card__per {
          font-size: 1.1rem;
          font-weight: 500;
          color: #737373;
          letter-spacing: -0.01em;
        }
        .retainer-card__headline {
          font-size: 1.0625rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #0d0d0d;
          margin: 0 0 28px;
        }
        .retainer-card__features {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 36px;
          text-align: left;
        }
        .retainer-card__feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9375rem;
          font-weight: 500;
          color: #3d3d3d;
          line-height: 1.5;
        }
        .retainer-card__check {
          width: 17px;
          height: 17px;
          flex-shrink: 0;
          color: #0d0d0d;
          opacity: 0.75;
        }
        .retainer-card__cta {
          width: 100%;
          justify-content: center;
        }

        /* ── RETAINER TRUST ROW ── */
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

        /* ── PAGE RESPONSIVE ── */
        @media (max-width: 1100px) {
          .mvp-includes-grid { grid-template-columns: repeat(2, 1fr); }
          .retainer-trust-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 820px) {
          .mvp-hero { padding: 88px 0 80px; }
          .mvp-retainer-section { padding: 100px 0 80px; }
          .mvp-includes-grid { grid-template-columns: 1fr; }
          .mvp-hero__stats {
            grid-template-columns: 1fr;
            max-width: 320px;
          }
          .mvp-hero__stat {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
          .mvp-hero__stat:last-child { border-bottom: none; }
          .retainer-card { padding: 36px 28px; }
        }
        @media (max-width: 560px) {
          .retainer-card { padding: 32px 22px; }
        }
      `}</style>
    </>
  );
}
