import {
  AlertTriangle,
  ArrowRight,
  BarChart2,
  CheckCircle,
  Clock,
  Code2,
  Database,
  Layers,
  Mail,
  Paintbrush,
  Search,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { IconBox } from "@/components/IconBox";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

const symptoms = [
  "Deployments take over an hour and break things when they shouldn't",
  "Every new feature requires touching code in five different places",
  "Your database is the bottleneck and everyone knows it",
  "Onboarding a new engineer takes weeks because the system is impossible to explain",
  "You're scared to touch certain parts of the codebase",
  "Your infrastructure costs are climbing faster than your revenue",
];

const whatWeDo = [
  {
    icon: Search,
    title: "Architecture audit",
    description:
      "A systematic review of your codebase, infrastructure, data model, and deployment pipeline. We document what exists, identify the constraints, and diagnose the root causes — not just the symptoms.",
  },
  {
    icon: Paintbrush,
    title: "Redesign & roadmap",
    description:
      "A concrete technical roadmap: what to change, in what order, and why. Not a wish list — a phased plan that accounts for your team size, your runway, and the fact that you can't stop shipping.",
  },
  {
    icon: Code2,
    title: "Implementation",
    description:
      "We don't just deliver a report. We implement the changes. Database migrations, service extraction, infrastructure re-architecture — done alongside your team or independently, depending on what's faster.",
  },
  {
    icon: Shield,
    title: "Zero-downtime transition",
    description:
      "Every architectural change is sequenced to keep the business running. Feature flags, incremental migrations, parallel runs. Your users don't feel the work.",
  },
  {
    icon: BarChart2,
    title: "Performance & observability",
    description:
      "Meaningful metrics, alerting that tells you something useful, and traces that let you diagnose problems in minutes instead of hours.",
  },
  {
    icon: Layers,
    title: "Knowledge transfer",
    description:
      "Your team owns everything when we're done. Architectural decision records, runbooks, and working sessions so the next engineer doesn't start from zero.",
  },
];

const tiers = [
  {
    name: "Architecture Audit",
    price: "$4,500",
    duration: "Standalone",
    description:
      "You need to understand what you're dealing with before you commit to fixing it. A clear-eyed assessment of your current architecture, the technical debt that's slowing you down, and a prioritized roadmap for what to address first.",
    includes: [
      "Full codebase & infrastructure review",
      "Performance bottleneck identification",
      "Technical debt inventory & prioritization",
      "Architectural redesign recommendations",
      "Written report + 90-minute findings session",
    ],
    cta: "Start with an audit",
    featured: false,
  },
  {
    name: "Audit + Implementation",
    price: "From $25,000",
    duration: "4–12 weeks",
    description:
      "The full engagement. We diagnose, design the fix, and implement it — working alongside your team through every phase. The architecture you end up with is one you can operate, extend, and hand off.",
    includes: [
      "Everything in Architecture Audit",
      "Phased implementation with your team",
      "Database migration & optimization",
      "Service decomposition or consolidation",
      "CI/CD pipeline rebuild",
      "Observability stack setup",
      "Documentation & knowledge transfer",
    ],
    cta: "Let's scope it",
    featured: true,
  },
  {
    name: "Ongoing Retainer",
    price: "$6,000",
    duration: "per month",
    description:
      "Architecture isn't a one-time project. For teams that want continuous technical leadership on their infrastructure — ongoing advisory, implementation support, and a partner who understands your system deeply.",
    includes: [
      "16 hours/month of dedicated architecture time",
      "Continuous codebase & infra advisory",
      "Code and architecture reviews",
      "Incident response & root cause analysis",
      "Monthly architecture health check",
    ],
    cta: "Start the retainer",
    featured: false,
  },
];

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Assess",
    description:
      "We get read access to your codebase, infrastructure, and monitoring. No questionnaires — we read the actual code and the actual metrics. Then we tell you what we found.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Redesign",
    description:
      "Based on the audit, we design the target architecture. Not a perfect greenfield system — a practical system that accounts for where you are and what it takes to get there without stopping the business.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Implement",
    description:
      "Phased execution. We tackle the highest-impact changes first, validate the results, and move methodically through the roadmap. You see improvements before the engagement is over.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Stabilize & hand off",
    description:
      "We monitor the post-change system, tune what needs tuning, document everything, and hand off to your team with confidence that they can operate it without us.",
  },
];

const audience = [
  {
    icon: Zap,
    title: "Startups past product–market fit",
    description:
      "Your architecture was built to get to launch. Now it's slowing down every sprint. The codebase that got you to 10K users won't get you to 100K without significant work.",
  },
  {
    icon: Database,
    title: "Companies with database problems",
    description:
      "Slow queries, index debt, schema decisions made in year one that are now costing you in year three. We've untangled these systems before. We know what it takes.",
  },
  {
    icon: AlertTriangle,
    title: "Teams preparing for a big technical bet",
    description:
      "You're about to rebuild a major feature, migrate to a new stack, or onboard a significant new customer. Before you make that move, you want someone to pressure-test the plan.",
  },
  {
    icon: CheckCircle,
    title: "Engineering teams that inherited a mess",
    description:
      "New CTO or VP Eng who inherited a system they didn't build. You need an independent assessment and a credible plan before you can tell the board what it will take to fix things.",
  },
];

export default function ScaleArchitecturePage() {
  return (
    <>
      <Topbar />
      <main className="page-shell">

        {/* ── HERO ── */}
        <section className="svc-hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container svc-hero__inner">
            <p className="eyebrow">Scale &amp; Architecture</p>
            <h1 className="svc-hero__title">
              Your architecture is either<br />
              <span className="svc-hero__accent">an asset or a liability.</span>
            </h1>
            <p className="svc-hero__lede">
              Most scaling problems aren&apos;t engineering problems — they&apos;re
              architecture problems that compound over time. We diagnose what&apos;s
              holding you back, design the fix, and implement it without stopping the
              business.
            </p>
            <div className="hero-actions">
              <a className="button button--primary button--lg" href="mailto:hello@toshlabs.com">
                <Mail className="button__icon" aria-hidden />
                Start with an audit
              </a>
              <a className="button button--ghost button--lg" href="#pricing">
                View pricing
              </a>
            </div>
            <div className="svc-hero__stats">
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">$4,500</span>
                <span className="svc-hero__stat-label">Audit starting price</span>
              </div>
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">Zero downtime</span>
                <span className="svc-hero__stat-label">Implementation approach</span>
              </div>
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">4–12 Weeks</span>
                <span className="svc-hero__stat-label">Full engagement</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SYMPTOMS ── */}
        <section className="svc-symptoms-section">
          <div className="container svc-symptoms-inner">
            <div className="svc-symptoms-copy">
              <p className="eyebrow">Sound familiar?</p>
              <h2>The signs your architecture needs attention.</h2>
              <p>
                These aren&apos;t edge cases. They&apos;re the compounding cost of
                decisions made under pressure when things were smaller. The longer you
                wait, the more they cost to fix.
              </p>
              <a className="svc-problem-link" href="mailto:hello@toshlabs.com">
                Talk to us about your situation <ArrowRight size={14} aria-hidden />
              </a>
            </div>
            <ul className="svc-symptoms-list">
              {symptoms.map((s) => (
                <li key={s} className="svc-symptom-item">
                  <AlertTriangle size={15} className="svc-symptom-icon" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── WHAT WE DO ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">What we do</p>
            <h2>From diagnosis to production — we own the whole problem.</h2>
            <p className="section-sub">
              Most consultants deliver a report. We deliver a working system. Every
              engagement covers the full arc from audit through implementation and handoff.
            </p>
          </header>

          <div className="svc-grid">
            {whatWeDo.map((item) => (
              <article key={item.title} className="svc-card">
                <IconBox icon={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="svc-pricing-section" id="pricing">
          <div className="svc-pricing-section__glow" aria-hidden="true" />
          <div className="container svc-pricing-inner">
            <header className="svc-pricing-header">
              <p className="eyebrow svc-eyebrow--dark">Pricing</p>
              <h2 className="svc-pricing-title">Three ways to engage.</h2>
              <p className="svc-pricing-sub">
                Start with an audit and see what we find. Expand to implementation if the
                scope warrants it. Stay on retainer if you want us watching the system long-term.
              </p>
            </header>

            <div className="svc-tier-grid svc-tier-grid--3">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`svc-tier-card${tier.featured ? " svc-tier-card--featured" : ""}`}
                >
                  {tier.featured && (
                    <span className="svc-tier-card__badge">Most comprehensive</span>
                  )}
                  <div className="svc-tier-card__top">
                    <p className="svc-tier-card__name">{tier.name}</p>
                    <div className="svc-tier-card__price-row">
                      <span className="svc-tier-card__price">{tier.price}</span>
                    </div>
                    <span className="svc-tier-card__duration-pill">{tier.duration}</span>
                    <p className="svc-tier-card__desc" style={{marginTop: "16px"}}>{tier.description}</p>
                  </div>
                  <ul className="svc-tier-card__list">
                    {tier.includes.map((item) => (
                      <li key={item} className="svc-tier-card__item">
                        <CheckCircle size={15} aria-hidden strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`button button--lg svc-tier-card__cta${tier.featured ? " button--primary" : " button--ghost"}`}
                    href="mailto:hello@toshlabs.com"
                  >
                    {tier.cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="svc-pricing-note">
              All engagements start with a scoping call — no commitment, just an honest conversation about what you&apos;re dealing with.
            </p>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">The process</p>
            <h2>A methodology built around your constraints.</h2>
            <p className="section-sub">
              We don&apos;t stop your team to fix things. Every change is sequenced to keep
              the business running while the architecture underneath it improves.
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
            <h2>For teams where the architecture is the problem.</h2>
          </header>

          <div className="diff-grid svc-audience-grid">
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
                Start with an audit
              </p>
              <h2>Tell us where it hurts.</h2>
              <p>
                Describe what&apos;s slowing you down and we&apos;ll tell you honestly
                whether an audit makes sense or if there&apos;s a faster path. Most
                engagements start within two weeks.
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

      {/* ── PAGE-SCOPED STYLES ── */}
      <style>{`
        /* ── SVC HERO ── */
        .svc-hero {
          position: relative;
          padding: 120px 0 112px;
          overflow: hidden;
        }
        .svc-hero__inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .svc-hero__title {
          margin: 0;
          font-size: clamp(2.4rem, 5.5vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.052em;
          line-height: 1.0;
          color: var(--text);
          max-width: 22ch;
        }
        .svc-hero__accent {
          background: linear-gradient(135deg, #0d0d0d 0%, #555 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .svc-hero__lede {
          max-width: 54ch;
          margin: 30px 0 0;
          color: var(--muted);
          font-size: clamp(1rem, 1.4vw, 1.175rem);
          line-height: 1.72;
          letter-spacing: -0.01em;
        }
        .svc-hero__stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 72px;
          width: 100%;
          max-width: 700px;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          background: var(--surface);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
        }
        .svc-hero__stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 24px 20px;
          border-right: 1px solid var(--border);
        }
        .svc-hero__stat:last-child { border-right: none; }
        .svc-hero__stat-value {
          font-size: clamp(0.85rem, 1.3vw, 1.05rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          background: linear-gradient(180deg, #0d0d0d 0%, #888 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          white-space: nowrap;
        }
        .svc-hero__stat-label {
          font-size: 0.75rem;
          color: var(--muted);
          font-weight: 500;
          white-space: nowrap;
        }

        /* ── SYMPTOMS SECTION ── */
        .svc-symptoms-section {
          padding: 96px 0;
          border-top: 1px solid var(--border);
          background: var(--surface);
        }
        .svc-symptoms-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .svc-symptoms-copy h2 { margin-bottom: 22px; }
        .svc-symptoms-copy p {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 22px;
        }
        .svc-problem-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--text);
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: gap 0.2s;
        }
        .svc-problem-link:hover { gap: 10px; }
        .svc-symptoms-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .svc-symptom-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--soft);
          padding: 14px 18px;
          border-radius: 12px;
          background: var(--bg);
          border: 1px solid var(--border);
        }
        .svc-symptom-icon {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--muted);
        }

        /* ── DELIVERABLES / WHAT WE DO GRID ── */
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .svc-card {
          padding: 32px 28px;
          border-radius: var(--radius-xl);
          background: var(--surface);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          transition:
            border-color 0.35s var(--ease-out),
            transform    0.35s var(--ease-out),
            box-shadow   0.35s var(--ease-out);
        }
        .svc-card .icon-box { margin-bottom: 20px; }
        .svc-card h3 { margin-bottom: 10px; }
        .svc-card p {
          color: var(--muted);
          font-size: 0.9375rem;
          line-height: 1.68;
          margin: 0;
        }
        .svc-card:hover {
          border-color: var(--border-2);
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }

        /* ── PRICING SECTION (dark) ── */
        .svc-pricing-section {
          position: relative;
          padding: 160px 0 120px;
          background: #0d0d0d;
          overflow: hidden;
        }
        .svc-pricing-section__glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 65% 70% at 50% 30%, rgba(255,255,255,0.055), transparent 68%);
          pointer-events: none;
        }
        .svc-pricing-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .svc-pricing-header {
          text-align: center;
          max-width: 640px;
          margin-bottom: 64px;
        }
        .svc-eyebrow--dark {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.13);
          color: rgba(255,255,255,0.55);
        }
        .svc-pricing-title {
          margin: 0 0 22px;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.048em;
          line-height: 1.06;
          color: #fafafa;
        }
        .svc-pricing-sub {
          color: #666;
          font-size: clamp(1rem, 1.35vw, 1.1rem);
          line-height: 1.72;
          margin: 0;
        }
        .svc-pricing-note {
          margin-top: 32px;
          font-size: 0.875rem;
          color: #555;
          text-align: center;
          max-width: 52ch;
        }

        /* ── TIER CARDS ── */
        .svc-tier-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          width: 100%;
          max-width: 860px;
        }
        .svc-tier-grid--3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
          max-width: 1100px;
        }
        .svc-tier-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 36px 36px 32px;
          border-radius: var(--radius-xl);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          transition: border-color 0.35s, background 0.35s;
        }
        .svc-tier-card:hover {
          background: rgba(255,255,255,0.065);
          border-color: rgba(255,255,255,0.15);
        }
        .svc-tier-card--featured {
          background: #ffffff;
          border-color: #ffffff;
        }
        .svc-tier-card--featured:hover {
          background: #ffffff;
          border-color: #ffffff;
        }
        .svc-tier-card__badge {
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
        .svc-tier-card__top { margin-bottom: 22px; }
        .svc-tier-card__name {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #fafafa;
          margin: 0 0 10px;
        }
        .svc-tier-card--featured .svc-tier-card__name { color: #0d0d0d; }
        .svc-tier-card__price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 8px;
        }
        .svc-tier-card__price {
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 800;
          letter-spacing: -0.05em;
          line-height: 1;
          color: #fafafa;
        }
        .svc-tier-card--featured .svc-tier-card__price { color: #0d0d0d; }
        .svc-tier-card__duration-pill {
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
        .svc-tier-card--featured .svc-tier-card__duration-pill {
          background: rgba(0,0,0,0.06);
          border-color: rgba(0,0,0,0.1);
          color: #666;
        }
        .svc-tier-card__desc {
          font-size: 0.875rem;
          line-height: 1.65;
          color: #666;
          margin: 0;
        }
        .svc-tier-card--featured .svc-tier-card__desc { color: #555; }
        .svc-tier-card__list {
          display: flex;
          flex-direction: column;
          gap: 11px;
          flex: 1;
          margin-bottom: 28px;
        }
        .svc-tier-card__item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #aaa;
          line-height: 1.5;
        }
        .svc-tier-card__item svg {
          flex-shrink: 0;
          margin-top: 1px;
          color: #555;
        }
        .svc-tier-card--featured .svc-tier-card__item { color: #3d3d3d; }
        .svc-tier-card--featured .svc-tier-card__item svg { color: #0d0d0d; }
        .svc-tier-card__cta { width: 100%; justify-content: center; }

        .svc-tier-card .button--ghost {
          border-color: rgba(255,255,255,0.18);
          color: #fafafa;
        }
        .svc-tier-card .button--ghost:hover {
          background: rgba(255,255,255,0.07);
        }

        /* ── AUDIENCE GRID ── */
        .svc-audience-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-tier-grid--3 { grid-template-columns: 1fr; max-width: 540px; }
          .svc-symptoms-inner { gap: 48px; }
        }
        @media (max-width: 820px) {
          .svc-hero { padding: 88px 0 80px; }
          .svc-pricing-section { padding: 100px 0 80px; }
          .svc-grid { grid-template-columns: 1fr; }
          .svc-symptoms-inner { grid-template-columns: 1fr; gap: 40px; }
          .svc-tier-grid { grid-template-columns: 1fr; max-width: 480px; }
          .svc-audience-grid { grid-template-columns: 1fr; }
          .svc-hero__stats {
            grid-template-columns: 1fr;
            max-width: 320px;
          }
          .svc-hero__stat {
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
          .svc-hero__stat:last-child { border-bottom: none; }
        }
        @media (max-width: 560px) {
          .svc-tier-card { padding: 28px 22px 24px; }
        }
      `}</style>
    </>
  );
}
