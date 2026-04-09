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
  "Your website slows down or crashes when more than a handful of people visit at once",
  "You're manually moving data between systems that should be connected",
  "A developer quoted you $40,000 to add a feature that should take two weeks",
  "Your previous agency left you with code nobody else can understand or maintain",
  "You're paying for a platform you've outgrown but don't know how to get off it",
  "New staff take months to get up to speed because the system is impossible to explain",
];

const whatWeDo = [
  {
    icon: Search,
    title: "Tech audit",
    description:
      "We review your codebase, hosting setup, database, and integrations. No questionnaires — we read the actual system. Then we give you a plain-language report on what's working, what isn't, and what to fix first.",
  },
  {
    icon: Paintbrush,
    title: "A realistic fix plan",
    description:
      "Not a wishlist. A prioritized plan that accounts for your budget, your team's capacity, and the fact that your business has to keep running while we make changes.",
  },
  {
    icon: Code2,
    title: "Hands-on implementation",
    description:
      "We don't just tell you what needs to change — we do it. Database cleanup, performance fixes, integration repairs, platform migrations. Hands-on work, not a report.",
  },
  {
    icon: Shield,
    title: "Zero disruption to your operations",
    description:
      "Every change is sequenced so your business keeps running. No surprise downtime, no changes that break other things. Your customers and staff don't feel the work.",
  },
  {
    icon: BarChart2,
    title: "Visibility into what's happening",
    description:
      "Basic monitoring and alerting so you know when something's wrong before your customers do. You shouldn't be the last person to find out your site is down.",
  },
  {
    icon: Layers,
    title: "Documentation your team can use",
    description:
      "Notes, diagrams, and runbooks written for real people — not for engineers with ten years of context. The next person who touches the system will understand it.",
  },
];

const tiers = [
  {
    name: "Tech Audit",
    price: "$2,500",
    duration: "Standalone",
    description:
      "You need an honest picture of what you're working with before you can decide what to do about it. We review your system and give you a clear report — what's broken, what's a risk, and what to fix in what order.",
    includes: [
      "Full review of codebase & hosting",
      "Database and integration assessment",
      "Performance bottleneck identification",
      "Risk and technical debt inventory",
      "Prioritized written report",
      "60-minute findings walkthrough",
    ],
    cta: "Book a tech audit",
    featured: false,
  },
  {
    name: "Audit + Fixes",
    price: "From $8,500",
    duration: "2–6 weeks",
    description:
      "We diagnose the system and fix what needs fixing. The scope depends on what we find — most SME engagements fall in the $8,500–$18,000 range depending on the complexity of the work.",
    includes: [
      "Everything in Tech Audit",
      "Performance and database fixes",
      "Integration repairs or replacements",
      "Platform migration support",
      "Code cleanup and documentation",
      "Post-fix monitoring setup",
    ],
    cta: "Start with an audit",
    featured: true,
  },
  {
    name: "Monthly Oversight",
    price: "$1,800",
    duration: "per month",
    description:
      "For businesses that want a technical eye on the system ongoing. Eight hours a month of dedicated time — catching problems early, reviewing changes, and keeping things running cleanly.",
    includes: [
      "8 hours/month dedicated time",
      "Monthly system health review",
      "Code and change reviews",
      "Incident response support",
      "Ongoing technical Q&A",
    ],
    cta: "Start oversight",
    featured: false,
  },
];

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Assess",
    description:
      "We get access to your system and look at it directly. No intake forms, no generic checklists. We read the code, check the database, review the hosting setup. Then we tell you what we found.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Plan",
    description:
      "Based on the audit, we put together a realistic fix plan — what to change, in what order, and how much it will cost. You approve the plan before we touch anything.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Fix",
    description:
      "We make the changes, one phase at a time. You see progress each week. Nothing gets changed without you knowing what's happening and why.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Hand off",
    description:
      "When the work is done, we document everything and walk your team through it. You own the system. You understand it. You can maintain it without us.",
  },
];

const audience = [
  {
    icon: Zap,
    title: "Businesses that have outgrown their original setup",
    description:
      "The website or app that worked fine at 20 customers is struggling at 200. The database is slow, the hosting is straining, and adding new features keeps getting harder. Time to fix the foundation.",
  },
  {
    icon: Database,
    title: "Companies running on disconnected tools",
    description:
      "You're copying data between your CRM, your accounting software, and your operations tool by hand. That's not a workflow — it's a liability. We connect the systems or build the integrations that should have existed from the start.",
  },
  {
    icon: AlertTriangle,
    title: "Teams that inherited a codebase they can't understand",
    description:
      "A previous agency or developer left you with a system that works but that no one can explain, improve, or maintain. We clean it up, document it, and make it something you can actually own.",
  },
  {
    icon: CheckCircle,
    title: "Owners who want to know what they're sitting on",
    description:
      "You're not sure if your tech setup is solid or a ticking clock. An audit gives you a straight answer — not a sales pitch, just an honest assessment of where you stand.",
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
              Your old system is costing you<br />
              <span className="svc-hero__accent">more than you know.</span>
            </h1>
            <p className="svc-hero__lede">
              A slow website, a codebase nobody can maintain, tools that don&apos;t talk
              to each other — these aren&apos;t minor inconveniences. They cost you
              customers, staff time, and developer fees every single month. We fix the
              underlying problem, not just the symptoms.
            </p>
            <div className="hero-actions">
              <a className="button button--primary button--lg" href="mailto:hello@toshlabs.com">
                <Mail className="button__icon" aria-hidden />
                Book a tech audit
              </a>
              <a className="button button--ghost button--lg" href="#pricing">
                View pricing
              </a>
            </div>
            <div className="svc-hero__stats">
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">$2,500</span>
                <span className="svc-hero__stat-label">Audit fixed price</span>
              </div>
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">No downtime</span>
                <span className="svc-hero__stat-label">Business keeps running</span>
              </div>
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">2–6 Weeks</span>
                <span className="svc-hero__stat-label">Typical fix engagement</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SYMPTOMS ── */}
        <section className="svc-symptoms-section">
          <div className="container svc-symptoms-inner">
            <div className="svc-symptoms-copy">
              <p className="eyebrow">Sound familiar?</p>
              <h2>The signs your system needs attention.</h2>
              <p>
                These problems don&apos;t announce themselves. They compound quietly — a
                little slower every month, a little more expensive to change, a little
                harder to explain to new staff. By the time it feels urgent, it&apos;s
                already been costing you for a long time.
              </p>
              <a className="svc-problem-link" href="mailto:hello@toshlabs.com">
                Tell us what you&apos;re dealing with <ArrowRight size={14} aria-hidden />
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
            <h2>We find the problem and we fix it.</h2>
            <p className="section-sub">
              Most consultants hand you a report. We hand you a working system. Every
              engagement goes from diagnosis through implementation — with your team
              informed at every step.
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
                Start with an audit and see what we find. If the scope warrants a fix
                engagement, we scope it and price it before anything starts.
              </p>
            </header>

            <div className="svc-tier-grid svc-tier-grid--3">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`svc-tier-card${tier.featured ? " svc-tier-card--featured" : ""}`}
                >
                  {tier.featured && (
                    <span className="svc-tier-card__badge">Most common</span>
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
              Every engagement starts with a scoping call. No commitment — just an honest conversation about what you&apos;re dealing with.
            </p>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">How it works</p>
            <h2>Straightforward from day one.</h2>
            <p className="section-sub">
              We don&apos;t disappear for weeks and reappear with a surprise. You know
              what we&apos;re doing and why at every step.
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
            <h2>For businesses where the tech is getting in the way.</h2>
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
                Get started
              </p>
              <h2>Describe what&apos;s slowing you down.</h2>
              <p>
                Tell us what you&apos;re dealing with and we&apos;ll tell you honestly
                whether an audit makes sense and what it would likely cost to fix.
                Most engagements start within two weeks.
              </p>
            </div>
            <div className="cta-panel__action">
              <a className="button button--primary button--lg" href="mailto:hello@toshlabs.com">
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
          background: #ffffff;
          border-color: #ffffff;
          color: #0d0d0d;
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
