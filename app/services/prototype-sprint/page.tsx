import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code2,
  FileText,
  Layers,
  Mail,
  MessageSquare,
  Paintbrush,
  Rocket,
  Search,
  Target,
  Users,
} from "lucide-react";
import { IconBox } from "@/components/IconBox";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

const deliverables = [
  {
    icon: Search,
    title: "Discovery & problem framing",
    description:
      "We start by getting clear on what you're actually solving — who uses it, what they need, and what a successful outcome looks like. Most projects fail because this step gets skipped.",
  },
  {
    icon: Paintbrush,
    title: "UX design & user flows",
    description:
      "Screens, flows, and interactions designed around real users. Not generic templates — layouts that match how your customers or team actually think and move through a process.",
  },
  {
    icon: Code2,
    title: "Working prototype",
    description:
      "Not a PDF. Not a slideshow. A real, clickable product you can put in front of customers, staff, or investors and get honest feedback from.",
  },
  {
    icon: FileText,
    title: "Feedback framework",
    description:
      "A structured approach to testing the prototype — what to ask, what to watch for, and how to turn what you learn into clear next steps.",
  },
  {
    icon: MessageSquare,
    title: "Findings & recommendations",
    description:
      "A plain-language summary of what worked, what didn't, and what to build next. No jargon, no fluff — just a clear read on where to put your money.",
  },
  {
    icon: Rocket,
    title: "Build-ready handoff",
    description:
      "If you decide to move forward, you already have everything a development team needs to start — no redesign, no rework, no starting from scratch.",
  },
];

const tiers = [
  {
    name: "Discovery Sprint",
    duration: "2 weeks",
    price: "$4,500",
    description:
      "For business owners who need to answer one important question before spending real money. We map the problem, design the core flow, and build a prototype you can actually react to.",
    includes: [
      "Problem framing session",
      "Core user flow design",
      "Clickable prototype (5–8 screens)",
      "User testing framework",
      "Written findings & recommendation",
    ],
    cta: "Start a Discovery Sprint",
    featured: false,
  },
  {
    name: "Foundation Sprint",
    duration: "3–4 weeks",
    price: "$9,500",
    description:
      "For businesses ready to build something more complete — a full prototype that covers the end-to-end experience and is detailed enough to test with real customers or present to stakeholders.",
    includes: [
      "Everything in Discovery Sprint",
      "Full UX design (10–20 screens)",
      "Functional prototype with real interactions",
      "Multiple rounds of user feedback",
      "Build-ready design handoff",
      "Technical stack recommendation",
    ],
    cta: "Start a Foundation Sprint",
    featured: true,
  },
];

const steps = [
  {
    step: "01",
    icon: Target,
    title: "Brief",
    description:
      "You walk us through your idea, your users, and what you need to find out. We ask the uncomfortable questions and align on what a useful result looks like.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Design",
    description:
      "User flows, wireframes, high-fidelity screens. We move quickly — you review and give feedback in real time. No month-long design phases.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Build",
    description:
      "A working prototype your customers or team can actually use. We build it to be tested — not just to look good in a demo.",
  },
  {
    step: "04",
    icon: FileText,
    title: "Test & hand off",
    description:
      "You put it in front of real people. We help you read what you learn. Then you get everything: designs, prototype, findings, and a clear recommendation.",
  },
];

const audience = [
  {
    icon: CheckCircle,
    title: "Business owners before their first software investment",
    description:
      "You've never spent $20,000 on custom software before and you want to make sure you're solving the right problem before committing. A sprint is the lowest-risk way to find out.",
  },
  {
    icon: Layers,
    title: "Teams replacing a manual process",
    description:
      "Your team is running on spreadsheets, email chains, or a tool that almost fits. You need to see what a purpose-built solution could look like before you commission a full build.",
  },
  {
    icon: Users,
    title: "Companies adding a customer-facing feature",
    description:
      "You want to offer online booking, a client portal, or a self-serve tool — but you don't want to build the wrong thing. Two weeks of prototyping can save months of rework.",
  },
];

export default function PrototypeSprintPage() {
  return (
    <>
      <Topbar />
      <main className="page-shell">

        {/* ── HERO ── */}
        <section className="svc-hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container svc-hero__inner">
            <p className="eyebrow">Prototype Sprint</p>
            <h1 className="svc-hero__title">
              Test the idea before<br />
              <span className="svc-hero__accent">you fund the build.</span>
            </h1>
            <p className="svc-hero__lede">
              Most small business software projects go wrong for the same reason: no one
              validated the idea before the build started. A Prototype Sprint gives you a
              working, testable product in two to four weeks — enough to know whether
              you&apos;re solving the right problem before you spend real money on it.
            </p>
            <div className="hero-actions">
              <a className="button button--primary button--lg" href="mailto:hello@toshlabs.com">
                <Mail className="button__icon" aria-hidden />
                Start a sprint
              </a>
              <a className="button button--ghost button--lg" href="#pricing">
                View pricing
              </a>
            </div>
            <div className="svc-hero__stats">
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">From $4,500</span>
                <span className="svc-hero__stat-label">Fixed price</span>
              </div>
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">2–4 Weeks</span>
                <span className="svc-hero__stat-label">Idea to prototype</span>
              </div>
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">Real feedback</span>
                <span className="svc-hero__stat-label">From actual users</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className="svc-problem-section">
          <div className="container svc-problem-inner">
            <div className="svc-problem-copy">
              <p className="eyebrow">Why this matters</p>
              <h2>Most business software fails before a line of code is written.</h2>
              <p>
                A local service company spends $30,000 building a customer portal their
                clients never use. A retailer commissions an inventory tool that doesn&apos;t
                match how their warehouse actually works. A professional services firm builds
                a quoting system that&apos;s slower than the spreadsheet it replaced.
              </p>
              <p>
                Every one of these is a validation problem, not a technical one. A
                Prototype Sprint exists to catch these issues before they become expensive.
              </p>
              <a className="svc-problem-link" href="mailto:hello@toshlabs.com">
                Talk to us about your idea <ArrowRight size={14} aria-hidden />
              </a>
            </div>
            <div className="svc-problem-callout">
              <p className="svc-callout__quote">
                &ldquo;The two weeks you spend testing your assumptions will save you
                more money than anything else you do this year.&rdquo;
              </p>
              <span className="svc-callout__attr">— Something we say in every kickoff call.</span>
            </div>
          </div>
        </section>

        {/* ── DELIVERABLES ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">What you get</p>
            <h2>A prototype you can actually use. Not just look at.</h2>
            <p className="section-sub">
              Every sprint ends with a working product, a clear read on what your users
              think, and a recommendation on what to do next. You leave with real information,
              not another presentation.
            </p>
          </header>

          <div className="svc-grid">
            {deliverables.map((item) => (
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
              <h2 className="svc-pricing-title">Two tiers. Both fixed-price.</h2>
              <p className="svc-pricing-sub">
                You know exactly what you&apos;re paying before anything starts.
                No hourly billing, no scope creep, no surprises at the end.
              </p>
            </header>

            <div className="svc-tier-grid">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`svc-tier-card${tier.featured ? " svc-tier-card--featured" : ""}`}
                >
                  {tier.featured && (
                    <span className="svc-tier-card__badge">Most popular</span>
                  )}
                  <div className="svc-tier-card__top">
                    <p className="svc-tier-card__name">{tier.name}</p>
                    <div className="svc-tier-card__price-row">
                      <span className="svc-tier-card__price">{tier.price}</span>
                      <span className="svc-tier-card__duration">/ {tier.duration}</span>
                    </div>
                    <p className="svc-tier-card__desc">{tier.description}</p>
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
              Not sure which tier is right for you? Email us — we&apos;ll ask a few questions and give you a straight answer.
            </p>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">How it works</p>
            <h2>Four steps. Four weeks max.</h2>
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
            <h2>For business owners who want to know before they build.</h2>
            <p className="section-sub">
              A Prototype Sprint is for anyone who has an idea worth testing but doesn&apos;t
              want to spend $20,000–$50,000 finding out it was the wrong one.
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
                Let&apos;s talk
              </p>
              <h2>Tell us what you&apos;re trying to figure out.</h2>
              <p>
                Describe the idea and the question you&apos;re sitting on. We&apos;ll tell
                you which sprint makes sense and what you&apos;ll walk away knowing.
                Most sprints start within a week of first contact.
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
          font-size: clamp(2.8rem, 6.5vw, 5.5rem);
          font-weight: 800;
          letter-spacing: -0.052em;
          line-height: 1.0;
          color: var(--text);
          max-width: 20ch;
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
          max-width: 640px;
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
          background: linear-gradient(180deg, #0d0d0d 0%, #888888 100%);
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

        /* ── PROBLEM SECTION ── */
        .svc-problem-section {
          padding: 96px 0;
          border-top: 1px solid var(--border);
          background: var(--surface);
        }
        .svc-problem-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .svc-problem-copy p {
          color: var(--muted);
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 18px;
        }
        .svc-problem-copy h2 {
          margin-bottom: 28px;
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
        .svc-problem-callout {
          padding: 40px 44px;
          border-radius: var(--radius-xl);
          background: #0d0d0d;
          color: #fafafa;
        }
        .svc-callout__quote {
          font-size: clamp(1.05rem, 1.5vw, 1.25rem);
          font-weight: 600;
          letter-spacing: -0.025em;
          line-height: 1.58;
          color: #fafafa;
          margin: 0 0 20px;
          font-style: italic;
        }
        .svc-callout__attr {
          font-size: 0.8125rem;
          color: #666;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        /* ── DELIVERABLES GRID ── */
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
        .svc-tier-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 40px 40px 36px;
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
        .svc-tier-card__top { margin-bottom: 28px; }
        .svc-tier-card__name {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #fafafa;
          margin: 0 0 12px;
        }
        .svc-tier-card--featured .svc-tier-card__name { color: #0d0d0d; }
        .svc-tier-card__price-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
          margin-bottom: 16px;
        }
        .svc-tier-card__price {
          font-size: clamp(2.4rem, 4vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.055em;
          line-height: 1;
          color: #fafafa;
        }
        .svc-tier-card--featured .svc-tier-card__price { color: #0d0d0d; }
        .svc-tier-card__duration {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #666;
          letter-spacing: -0.01em;
        }
        .svc-tier-card--featured .svc-tier-card__duration { color: #737373; }
        .svc-tier-card__desc {
          font-size: 0.9rem;
          line-height: 1.65;
          color: #666;
          margin: 0;
        }
        .svc-tier-card--featured .svc-tier-card__desc { color: #555; }
        .svc-tier-card__list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          margin-bottom: 32px;
        }
        .svc-tier-card__item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.9rem;
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

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-problem-inner { gap: 48px; }
        }
        @media (max-width: 820px) {
          .svc-hero { padding: 88px 0 80px; }
          .svc-pricing-section { padding: 100px 0 80px; }
          .svc-grid { grid-template-columns: 1fr; }
          .svc-problem-inner { grid-template-columns: 1fr; gap: 40px; }
          .svc-tier-grid { grid-template-columns: 1fr; max-width: 480px; }
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
          .svc-tier-card { padding: 32px 24px 28px; }
          .svc-problem-callout { padding: 28px 28px; }
        }
      `}</style>
    </>
  );
}
