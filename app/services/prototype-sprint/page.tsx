import {
  CheckCircle,
  Clock,
  Code2,
  Layers,
  Mail,
  Paintbrush,
  Rocket,
  Search,
  Users,
  Zap,
  FileText,
  MessageSquare,
  Target,
  ArrowRight,
} from "lucide-react";
import { IconBox } from "@/components/IconBox";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

const deliverables = [
  {
    icon: Search,
    title: "Discovery & problem framing",
    description:
      "Before we design anything, we get sharp on what you're actually solving. Who are the users, what job are they hiring your product to do, and what does a successful validation look like?",
  },
  {
    icon: Paintbrush,
    title: "UX design & flows",
    description:
      "End-to-end user flows, wireframes, and high-fidelity designs. Built to test, not just to present. Every screen earns its place.",
  },
  {
    icon: Code2,
    title: "Working prototype",
    description:
      "Not a Figma file. A real, interactive product you can put in front of users, share with investors, and demonstrate with confidence.",
  },
  {
    icon: FileText,
    title: "Test plan & feedback framework",
    description:
      "A structured way to collect signal from your first users — what to ask, what to watch, and how to turn observations into decisions.",
  },
  {
    icon: MessageSquare,
    title: "Findings & recommendations",
    description:
      "A clear read on what the prototype revealed: what's working, what isn't, and what to build next. Evidence over intuition.",
  },
  {
    icon: Rocket,
    title: "Build-ready handoff",
    description:
      "If the prototype validates, you have everything you need to move directly into a production build — no rework, no redesign from scratch.",
  },
];

const tiers = [
  {
    name: "Validation Sprint",
    duration: "2 weeks",
    price: "$9,500",
    description:
      "Designed for founders who need to answer one critical question before committing serious engineering time or capital.",
    includes: [
      "Problem framing workshop",
      "Core user flow design",
      "Interactive prototype (5–8 screens)",
      "Structured user testing framework",
      "Findings summary & recommendation",
    ],
    cta: "Start a Validation Sprint",
    featured: false,
  },
  {
    name: "Foundation Sprint",
    duration: "4 weeks",
    price: "$19,500",
    description:
      "For founders who are past the question stage and need a fully testable product that can stand up to real users and investor scrutiny.",
    includes: [
      "Everything in Validation Sprint",
      "Full UX design (10–20 screens)",
      "Functional prototype with real interactions",
      "Multiple user testing rounds",
      "Full build-ready design handoff",
      "Technical architecture recommendations",
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
      "You walk us through the problem, the users, and the assumptions you need to test. We push back where we see gaps and align on what a successful sprint looks like.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Design",
    description:
      "User flows, wireframes, high-fidelity screens. We move fast — no month-long design phases. You review and give feedback in real time.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Build",
    description:
      "A real, working prototype built to be tested. Not a presentation deck. Something users can interact with and give honest reactions to.",
  },
  {
    step: "04",
    icon: FileText,
    title: "Validate & Hand off",
    description:
      "You test it. We help you collect and interpret the signal. Then you get everything: designs, prototype, findings, and a clear recommendation on what to build next.",
  },
];

const audience = [
  {
    icon: CheckCircle,
    title: "Pre-build founders",
    description:
      "You have an idea that feels right but haven't committed engineering resources yet. A sprint is the cheapest way to confirm you're building the right thing before you build it.",
  },
  {
    icon: Layers,
    title: "Teams replatforming a feature",
    description:
      "You're about to invest in a significant product change and want to test the UX before you start writing code. Two weeks of prototyping can save two months of rework.",
  },
  {
    icon: Users,
    title: "Founders raising pre-seed or seed",
    description:
      "A working prototype that you can demo isn't a nice-to-have — it can be the difference between a term sheet and a pass. We've built investor-ready prototypes on a two-week timeline.",
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
              Stop building on<br />
              <span className="svc-hero__accent">assumptions.</span>
            </h1>
            <p className="svc-hero__lede">
              Most founders spend months and real money building the wrong thing. A
              Prototype Sprint gives you a working, testable product in two to four weeks —
              enough to put in front of users, show investors, and make your next decision
              with something real in hand.
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
                <span className="svc-hero__stat-value">2–4 Weeks</span>
                <span className="svc-hero__stat-label">Idea to prototype</span>
              </div>
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">Real users</span>
                <span className="svc-hero__stat-label">Test-ready product</span>
              </div>
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">Investor-ready</span>
                <span className="svc-hero__stat-label">From day one</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className="svc-problem-section">
          <div className="container svc-problem-inner">
            <div className="svc-problem-copy">
              <p className="eyebrow">The problem</p>
              <h2>Most products fail before they launch.</h2>
              <p>
                Not because the engineering was bad. Because the team spent six months
                building the wrong thing. No one validated the assumptions. No one put
                the product in front of a real user before the architecture was locked in.
              </p>
              <p>
                A Prototype Sprint is the antidote. Two to four weeks of focused work
                to answer the most important question you have before you commit serious
                resources to the answer.
              </p>
              <a className="svc-problem-link" href="mailto:hello@toshlabs.com">
                Let&apos;s talk about your assumption <ArrowRight size={14} aria-hidden />
              </a>
            </div>
            <div className="svc-problem-callout">
              <p className="svc-callout__quote">
                &ldquo;The most dangerous assumption in product development is the one everyone
                in the room already agrees with.&rdquo;
              </p>
              <span className="svc-callout__attr">— Every post-mortem, ever.</span>
            </div>
          </div>
        </section>

        {/* ── DELIVERABLES ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">What you get</p>
            <h2>Everything to validate, nothing to throw away.</h2>
            <p className="section-sub">
              A Prototype Sprint isn&apos;t a deck and a Figma link. It&apos;s a working
              product, a tested hypothesis, and a clear path forward — all in under a month.
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
                No hourly rates. No scope creep. You know exactly what you&apos;re getting
                and what you&apos;re paying before the sprint starts.
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
              Not sure which tier is right for you? Email us and we&apos;ll be direct about which one fits your stage.
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
            <h2>Built for founders who respect the unknown.</h2>
            <p className="section-sub">
              The best builders validate before they build. A Prototype Sprint is for the teams
              who understand that the two weeks you spend testing assumptions saves six months
              of rework.
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
                Start a sprint
              </p>
              <h2>What assumption are you sitting on?</h2>
              <p>
                Tell us what you&apos;re building and what you need to validate. We&apos;ll
                scope the sprint and tell you honestly which tier makes sense for your stage.
                Most sprints kick off within a week.
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

        /* ghost variant inside dark section */
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
