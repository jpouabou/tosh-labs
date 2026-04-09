import {
  ArrowRight,
  BarChart2,
  Briefcase,
  Building2,
  CheckCircle,
  Code2,
  Layers,
  Mail,
  Search,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { IconBox } from "@/components/IconBox";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";

const whatThisMeans = [
  {
    icon: Search,
    title: "Technical direction & decision-making",
    description:
      "Every software decision your business faces — build vs. buy, which platform to use, whether to hire a developer or an agency — gets a clear, informed opinion from someone accountable for the outcome.",
  },
  {
    icon: Users,
    title: "Developer and agency oversight",
    description:
      "You hired a developer or an agency and you're not sure if they're doing the right things. We review their work, ask the hard questions, and make sure you're getting what you're paying for.",
  },
  {
    icon: Layers,
    title: "Tech roadmap you can actually follow",
    description:
      "A plain-language plan for what your business needs to build or fix over the next 6–12 months — why, in what order, and roughly what it will cost. Not a technical document. A business plan for your software.",
  },
  {
    icon: Code2,
    title: "Hiring and onboarding your first tech staff",
    description:
      "Writing job descriptions, reviewing candidates, and making sure the person you hire is right for your business — not just impressive on paper. We've done this before.",
  },
  {
    icon: Shield,
    title: "Protecting you from bad decisions",
    description:
      "The $40,000 platform migration that wasn't necessary. The agency that quoted six months for a six-week project. The developer who built the wrong thing for two years. We catch these before they happen.",
  },
  {
    icon: BarChart2,
    title: "Making sense of your software costs",
    description:
      "Subscription tools, hosting bills, contractor invoices — we review what you're spending on technology and tell you what's worth keeping, what's overpriced, and what you should cut.",
  },
];

const notThisNotThat = [
  {
    notThis: "A consultant who writes reports then disappears",
    thisThat: "A partner in your weekly team meeting who owns technical outcomes",
  },
  {
    notThis: "Someone who shows up once a quarter",
    thisThat: "Someone your team can message when a tech decision needs to be made this week",
  },
  {
    notThis: "A vendor who executes whatever you ask",
    thisThat: "Someone who tells you when what you're asking for is the wrong call",
  },
  {
    notThis: "Generic advice that could apply to any company",
    thisThat: "Specific guidance based on your industry, your team, and your actual constraints",
  },
];

const tiers = [
  {
    name: "Advisory",
    commitment: "2 hrs / week",
    price: "$1,500",
    duration: "per month",
    description:
      "Regular check-ins and async support for business owners who need a reliable technical voice without deep involvement. Good for ongoing guidance and sanity-checking decisions.",
    includes: [
      "Weekly 45-minute check-in call",
      "Async Q&A via email or Slack",
      "Tech vendor and quote reviews",
      "Software buying decisions",
      "Monthly priorities review",
    ],
    cta: "Start Advisory",
    featured: false,
  },
  {
    name: "Active",
    commitment: "4 hrs / week",
    price: "$3,000",
    duration: "per month",
    description:
      "Our most common engagement. Real involvement in your team's work — attending meetings, reviewing what your developers or agencies are building, and setting technical direction week by week.",
    includes: [
      "Everything in Advisory",
      "Attend your team meetings (2x/week)",
      "Developer and agency work reviews",
      "Hiring support — job descriptions and interviews",
      "Technical roadmap development",
      "Incident response availability",
    ],
    cta: "Start Active",
    featured: true,
  },
  {
    name: "Embedded",
    commitment: "8 hrs / week",
    price: "$5,000",
    duration: "per month",
    description:
      "For growing businesses that need a de facto technical leader. Deep, consistent involvement across team management, architecture decisions, vendor relationships, and day-to-day technical direction.",
    includes: [
      "Everything in Active",
      "Daily async touchpoints",
      "Full technical roadmap ownership",
      "Vendor contract and negotiation support",
      "Hands-on architecture reviews",
      "Team structure and process design",
    ],
    cta: "Start Embedded",
    featured: false,
  },
];

const vsFullTime = [
  {
    category: "Annual cost",
    fractional: "From $18,000/year",
    fullTime: "$180,000–$280,000/year in salary alone",
  },
  {
    category: "Time to start",
    fractional: "Within 1–2 weeks",
    fullTime: "3–6 months to find, interview, and onboard",
  },
  {
    category: "Commitment",
    fractional: "Month-to-month, cancel anytime",
    fullTime: "Multi-year expectation, severance exposure",
  },
  {
    category: "Experience",
    fractional: "Pattern-matched across multiple businesses and industries",
    fullTime: "Experience typically from one type of company",
  },
  {
    category: "Right for",
    fractional: "Businesses that need CTO-level thinking without a full-time hire",
    fullTime: "Companies with 20+ engineers and full-time technical leadership needs",
  },
];

const audience = [
  {
    icon: Zap,
    title: "Business owners who hired their first developer",
    description:
      "You made the hire, but now you have no idea if they're doing the right things, making good decisions, or building something that will hold up. A Fractional CTO gives you the oversight to know.",
  },
  {
    icon: TrendingUp,
    title: "Companies managing an agency relationship",
    description:
      "You're spending $5,000–$15,000 a month on a dev agency and you need someone in your corner — reviewing their work, holding them accountable, and making sure they're solving your problem, not the easiest version of it.",
  },
  {
    icon: Building2,
    title: "Non-technical founders scaling a software product",
    description:
      "Your business runs on software you didn't build and can't fully evaluate. Every tech decision feels like a guess. A Fractional CTO translates between your business goals and the technical work required to get there.",
  },
  {
    icon: Briefcase,
    title: "Established businesses modernizing their tech",
    description:
      "You've been running on the same system for years and you know it needs to change — but you don't have the technical background to evaluate options, manage vendors, or know what a realistic timeline looks like.",
  },
];

export default function FractionalCTOPage() {
  return (
    <>
      <Topbar />
      <main className="page-shell">

        {/* ── HERO ── */}
        <section className="svc-hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container svc-hero__inner">
            <p className="eyebrow">Fractional CTO</p>
            <h1 className="svc-hero__title">
              Someone who speaks<br />
              <span className="svc-hero__accent">business and technology.</span>
            </h1>
            <p className="svc-hero__lede">
              Most growing businesses aren&apos;t ready for a full-time CTO — but they
              still face technical decisions that can cost them years and hundreds of
              thousands of dollars if they get them wrong. A Fractional CTO gives you
              experienced technical leadership, embedded in your business, for a fraction
              of what a full-time hire would cost.
            </p>
            <div className="hero-actions">
              <a className="button button--primary button--lg" href="mailto:hello@toshlabs.com">
                <Mail className="button__icon" aria-hidden />
                Start the conversation
              </a>
              <a className="button button--ghost button--lg" href="#pricing">
                View engagement tiers
              </a>
            </div>
            <div className="svc-hero__stats">
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">From $1,500</span>
                <span className="svc-hero__stat-label">Per month</span>
              </div>
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">Month-to-month</span>
                <span className="svc-hero__stat-label">No lock-in</span>
              </div>
              <div className="svc-hero__stat">
                <span className="svc-hero__stat-value">Starts in 1–2 wks</span>
                <span className="svc-hero__stat-label">Not 6 months</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT THIS MEANS ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">What a Fractional CTO actually does</p>
            <h2>Not a consultant. A partner with skin in the game.</h2>
            <p className="section-sub">
              The difference is accountability. We don&apos;t hand you a report and
              leave — we sit in your meetings, review what your team builds, and own
              the outcome of the technical decisions we help you make.
            </p>
          </header>

          <div className="svc-grid">
            {whatThisMeans.map((item) => (
              <article key={item.title} className="svc-card">
                <IconBox icon={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── NOT THIS → THIS ── */}
        <section className="svc-contrast-section">
          <div className="container svc-contrast-inner">
            <div className="svc-contrast-copy">
              <p className="eyebrow">Be clear on what this is</p>
              <h2>What &ldquo;fractional&rdquo; doesn&apos;t mean here.</h2>
              <p>
                The word &ldquo;fractional&rdquo; gets used for a lot of things that are
                really just part-time advisory with a better job title. We want to be
                direct about what this engagement is — and what it isn&apos;t — before
                you decide.
              </p>
              <a className="svc-problem-link" href="mailto:hello@toshlabs.com">
                Ask us anything about how this works <ArrowRight size={14} aria-hidden />
              </a>
            </div>
            <div className="svc-contrast-list">
              {notThisNotThat.map((item) => (
                <div key={item.notThis} className="svc-contrast-item">
                  <div className="svc-contrast-item__not">
                    <span className="svc-contrast-item__label svc-contrast-item__label--not">Not this</span>
                    <p>{item.notThis}</p>
                  </div>
                  <div className="svc-contrast-item__divider" aria-hidden="true">→</div>
                  <div className="svc-contrast-item__yes">
                    <span className="svc-contrast-item__label svc-contrast-item__label--yes">This</span>
                    <p>{item.thisThat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="svc-pricing-section" id="pricing">
          <div className="svc-pricing-section__glow" aria-hidden="true" />
          <div className="container svc-pricing-inner">
            <header className="svc-pricing-header">
              <p className="eyebrow svc-eyebrow--dark">Engagement tiers</p>
              <h2 className="svc-pricing-title">Three levels of involvement.</h2>
              <p className="svc-pricing-sub">
                Start at whatever level fits your business right now. Most clients
                start at Advisory or Active and adjust as the relationship develops.
              </p>
            </header>

            <div className="svc-tier-grid svc-tier-grid--3">
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
                      <span className="svc-tier-card__per">/mo</span>
                    </div>
                    <span className="svc-tier-card__duration-pill">{tier.commitment}</span>
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
              All engagements are month-to-month. Stay because it&apos;s working, not because you&apos;re locked in.
            </p>
          </div>
        </section>

        {/* ── VS FULL TIME ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">The honest comparison</p>
            <h2>Fractional vs. full-time CTO.</h2>
            <p className="section-sub">
              A full-time CTO makes sense when you have 15+ engineers and a genuine need
              for full-time technical leadership. For most SMEs, that&apos;s not the stage
              you&apos;re at — and this is what the math looks like in the meantime.
            </p>
          </header>

          <div className="svc-comparison-table">
            <div className="svc-comparison-header">
              <div className="svc-comparison-header__category" />
              <div className="svc-comparison-header__col svc-comparison-header__col--us">
                Fractional CTO (us)
              </div>
              <div className="svc-comparison-header__col">
                Full-time CTO hire
              </div>
            </div>
            {vsFullTime.map((row) => (
              <div key={row.category} className="svc-comparison-row">
                <div className="svc-comparison-row__category">{row.category}</div>
                <div className="svc-comparison-row__col svc-comparison-row__col--us">
                  <CheckCircle size={14} aria-hidden className="svc-comparison-check" />
                  {row.fractional}
                </div>
                <div className="svc-comparison-row__col svc-comparison-row__col--them">
                  {row.fullTime}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="section container">
          <header className="section-header">
            <p className="eyebrow">Who it&apos;s for</p>
            <h2>For businesses navigating tech decisions without a technical leader.</h2>
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
                Let&apos;s talk
              </p>
              <h2>What technical decision are you sitting on?</h2>
              <p>
                Tell us what&apos;s on your plate and we&apos;ll be straight with you
                about which tier makes sense and whether we&apos;re the right fit.
                Most engagements are up and running within two weeks.
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
          max-width: 56ch;
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

        /* ── CONTRAST SECTION ── */
        .svc-contrast-section {
          padding: 96px 0;
          border-top: 1px solid var(--border);
          background: var(--surface);
        }
        .svc-contrast-inner {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: start;
        }
        .svc-contrast-copy h2 { margin-bottom: 22px; }
        .svc-contrast-copy p {
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
        .svc-contrast-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .svc-contrast-item {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 16px;
          padding: 18px 22px;
          border-radius: 14px;
          background: var(--bg);
          border: 1px solid var(--border);
        }
        .svc-contrast-item__not p,
        .svc-contrast-item__yes p {
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.55;
          color: var(--soft);
        }
        .svc-contrast-item__label {
          display: inline-block;
          font-size: 0.6875rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 999px;
          margin-bottom: 5px;
        }
        .svc-contrast-item__label--not {
          background: rgba(0,0,0,0.05);
          color: var(--muted);
        }
        .svc-contrast-item__label--yes {
          background: #0d0d0d;
          color: #fafafa;
        }
        .svc-contrast-item__divider {
          font-size: 1.1rem;
          color: var(--muted);
          flex-shrink: 0;
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
          gap: 4px;
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
        .svc-tier-card__per {
          font-size: 0.9375rem;
          font-weight: 500;
          color: #666;
          letter-spacing: -0.01em;
        }
        .svc-tier-card--featured .svc-tier-card__per { color: #737373; }
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

        /* ── COMPARISON TABLE ── */
        .svc-comparison-table {
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .svc-comparison-header {
          display: grid;
          grid-template-columns: 1fr 1.4fr 1.4fr;
          background: #0d0d0d;
          padding: 18px 28px;
          gap: 24px;
        }
        .svc-comparison-header__col {
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #666;
        }
        .svc-comparison-header__col--us { color: #fafafa; }
        .svc-comparison-row {
          display: grid;
          grid-template-columns: 1fr 1.4fr 1.4fr;
          gap: 24px;
          padding: 20px 28px;
          border-top: 1px solid var(--border);
          align-items: start;
          background: var(--surface);
          transition: background 0.2s;
        }
        .svc-comparison-row:hover { background: var(--bg); }
        .svc-comparison-row__category {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.01em;
        }
        .svc-comparison-row__col {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--muted);
        }
        .svc-comparison-row__col--us {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: var(--text);
          font-weight: 500;
        }
        .svc-comparison-check {
          flex-shrink: 0;
          margin-top: 2px;
          color: #0d0d0d;
        }

        /* ── AUDIENCE GRID ── */
        .svc-audience-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-tier-grid--3 { grid-template-columns: 1fr; max-width: 540px; }
          .svc-contrast-inner { gap: 48px; }
          .svc-comparison-header,
          .svc-comparison-row { grid-template-columns: 1fr 1fr; }
          .svc-comparison-header__category,
          .svc-comparison-row__category { display: none; }
        }
        @media (max-width: 820px) {
          .svc-hero { padding: 88px 0 80px; }
          .svc-pricing-section { padding: 100px 0 80px; }
          .svc-grid { grid-template-columns: 1fr; }
          .svc-contrast-inner { grid-template-columns: 1fr; gap: 40px; }
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
          .svc-comparison-table { overflow-x: auto; }
          .svc-comparison-header,
          .svc-comparison-row {
            grid-template-columns: 1.2fr 1.2fr;
            min-width: 560px;
          }
        }
        @media (max-width: 560px) {
          .svc-tier-card { padding: 28px 22px 24px; }
          .svc-contrast-item { grid-template-columns: 1fr; }
          .svc-contrast-item__divider { display: none; }
        }
      `}</style>
    </>
  );
}
