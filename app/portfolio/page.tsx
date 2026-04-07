import type { Metadata } from "next";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import {
  Check,
  ArrowUpRight,
  Zap,
  Cpu,
  Users,
  Calendar,
  Layout,
  BarChart2,
  Bell,
  Clock,
} from "lucide-react";
import { IconBox } from "@/components/IconBox";

export const metadata: Metadata = {
  title: "Portfolio | Tosh Labs",
  description:
    "Pulsr and Pausr — two live products designed, built, and operated by Tosh Labs.",
};

export default function PortfolioPage() {
  return (
    <>
      <Topbar />
      <main className="page-shell">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="portfolio-hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container">
            <p className="eyebrow">Our work</p>
            <h1 className="portfolio-hero__title">
              Built, shipped, and still running.
            </h1>
            <p className="portfolio-hero__sub">
              Pulsr and Pausr aren&apos;t case studies in a slide deck. They&apos;re live
              products we designed, engineered, and continue to operate.
              Everything we advise our clients on, we&apos;ve lived ourselves.
            </p>
            <div className="portfolio-hero__products">
              <div className="portfolio-hero__badge">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/pulsr.svg"
                  alt="Pulsr"
                  height={28}
                  style={{ height: 28 }}
                />
                <span className="tag">Live</span>
              </div>
              <div className="portfolio-hero__badge">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logos/pausr.svg"
                  alt="Pausr"
                  height={20}
                  style={{ height: 20 }}
                />
                <span className="tag">Beta</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pulsr ────────────────────────────────────────────── */}
        <section id="pulsr" className="portfolio-product-section">
          <div className="container">
            {/* 2a — Intro */}
            <div className="portfolio-product-intro">
              <p className="eyebrow">
                <span className="portfolio-product-num">01</span> Product
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/pulsr.svg"
                alt="Pulsr"
                height={40}
                style={{ height: 40 }}
                className="portfolio-product-logo"
              />
              <h2>The engineering team OS.</h2>
              <p>
                Most engineering managers are doing the job across four
                different tools. Standups in Slack, 1:1s in Notion, health
                checks buried in spreadsheets, and sprint visibility somewhere
                in Linear. Pulsr consolidates all of it into one workspace
                built specifically for how engineering teams operate.
              </p>
              <div className="tag-row">
                <span className="tag">Beta</span>
                <a
                  href="https://usepulsr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag tag--link"
                >
                  usepulsr.com <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            {/* 2b — Mockup */}
            <div className="portfolio-mockup-wrap">
              <div className="portfolio-mockup-frame">
                <svg
                  viewBox="0 0 900 540"
                  xmlns="http://www.w3.org/2000/svg"
                  className="portfolio-mockup-svg"
                  aria-label="Pulsr app interface"
                >
                  {/* App background */}
                  <rect width="900" height="540" fill="#0a0a0b" />

                  {/* Sidebar */}
                  <rect width="188" height="540" fill="#111113" />

                  {/* Sidebar logo area */}
                  <rect x="16" y="16" width="28" height="28" rx="7" fill="#1a1a1f" />
                  <polygon
                    points="22,22 38,30 30,38 14,30"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    opacity="0.3"
                  />
                  <polygon
                    points="26,24 42,32 34,40 18,32"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    opacity="0.6"
                  />
                  <polygon points="23,27 32,32 23,37 14,32" fill="#ffffff" opacity="0.9" />
                  <text
                    x="52"
                    y="35"
                    fill="#ffffff"
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-0.5"
                  >
                    Pulsr
                  </text>

                  {/* Sidebar nav items */}
                  {/* Dashboard - active */}
                  <rect x="10" y="64" width="168" height="32" rx="7" fill="#1e1e24" />
                  <rect x="18" y="72" width="14" height="14" rx="3" fill="#2a2a35" />
                  <text
                    x="38"
                    y="83"
                    fill="#e4e4e7"
                    fontSize="11.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="500"
                  >
                    Dashboard
                  </text>

                  {/* Other nav items */}
                  <text x="36" y="116" fill="#555560" fontSize="11.5" fontFamily="system-ui, sans-serif">
                    Cycles
                  </text>
                  <text x="36" y="143" fill="#555560" fontSize="11.5" fontFamily="system-ui, sans-serif">
                    Standup
                  </text>
                  <text x="36" y="170" fill="#555560" fontSize="11.5" fontFamily="system-ui, sans-serif">
                    1:1s
                  </text>
                  <text x="36" y="197" fill="#555560" fontSize="11.5" fontFamily="system-ui, sans-serif">
                    Watchlist
                  </text>
                  <text x="36" y="224" fill="#555560" fontSize="11.5" fontFamily="system-ui, sans-serif">
                    Integrations
                  </text>

                  {/* Sidebar section label */}
                  <text
                    x="16"
                    y="270"
                    fill="#333340"
                    fontSize="9.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.08em"
                  >
                    TEAM
                  </text>

                  {/* Team member avatars */}
                  <circle cx="26" cy="292" r="10" fill="#2a2a35" />
                  <text x="22" y="296" fill="#888" fontSize="9" fontFamily="system-ui, sans-serif">
                    AY
                  </text>
                  <circle cx="26" cy="320" r="10" fill="#2a2a35" />
                  <text x="22" y="324" fill="#888" fontSize="9" fontFamily="system-ui, sans-serif">
                    ML
                  </text>
                  <circle cx="26" cy="348" r="10" fill="#2a2a35" />
                  <text x="22" y="352" fill="#888" fontSize="9" fontFamily="system-ui, sans-serif">
                    SK
                  </text>
                  <circle cx="26" cy="376" r="10" fill="#2a2a35" />
                  <text x="22" y="380" fill="#888" fontSize="9" fontFamily="system-ui, sans-serif">
                    JR
                  </text>
                  <text x="44" y="296" fill="#444450" fontSize="11" fontFamily="system-ui, sans-serif">
                    Aiko Yamamoto
                  </text>
                  <text x="44" y="324" fill="#444450" fontSize="11" fontFamily="system-ui, sans-serif">
                    Marcus Li
                  </text>
                  <text x="44" y="352" fill="#444450" fontSize="11" fontFamily="system-ui, sans-serif">
                    Sara Kim
                  </text>
                  <text x="44" y="380" fill="#444450" fontSize="11" fontFamily="system-ui, sans-serif">
                    James R.
                  </text>

                  {/* Main content area header */}
                  <text
                    x="212"
                    y="42"
                    fill="#e4e4e7"
                    fontSize="16"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-0.5"
                  >
                    Team Health
                  </text>
                  <rect x="342" y="26" width="68" height="22" rx="6" fill="#1e1e24" />
                  <text
                    x="356"
                    y="41"
                    fill="#aaaaaa"
                    fontSize="10.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="500"
                  >
                    Sprint 14
                  </text>

                  {/* Divider line */}
                  <line x1="200" y1="55" x2="900" y2="55" stroke="#1a1a1f" strokeWidth="1" />

                  {/* Metric cards row */}
                  {/* Card 1: Velocity */}
                  <rect
                    x="212"
                    y="72"
                    width="200"
                    height="96"
                    rx="10"
                    fill="#111113"
                    stroke="#1e1e24"
                    strokeWidth="1"
                  />
                  <text
                    x="230"
                    y="98"
                    fill="#555560"
                    fontSize="10"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.06em"
                  >
                    VELOCITY
                  </text>
                  <text
                    x="230"
                    y="132"
                    fill="#e4e4e7"
                    fontSize="28"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-1"
                  >
                    84
                  </text>
                  <text x="270" y="132" fill="#3e9c58" fontSize="12" fontFamily="system-ui, sans-serif">
                    ↑ 12%
                  </text>
                  <text x="230" y="152" fill="#444450" fontSize="10" fontFamily="system-ui, sans-serif">
                    vs last sprint
                  </text>

                  {/* Card 2: Morale */}
                  <rect
                    x="428"
                    y="72"
                    width="200"
                    height="96"
                    rx="10"
                    fill="#111113"
                    stroke="#1e1e24"
                    strokeWidth="1"
                  />
                  <text
                    x="446"
                    y="98"
                    fill="#555560"
                    fontSize="10"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.06em"
                  >
                    MORALE
                  </text>
                  <text
                    x="446"
                    y="132"
                    fill="#e4e4e7"
                    fontSize="28"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-1"
                  >
                    7.2
                  </text>
                  <text x="486" y="132" fill="#3e9c58" fontSize="12" fontFamily="system-ui, sans-serif">
                    ↑ 0.4
                  </text>
                  <text x="446" y="152" fill="#444450" fontSize="10" fontFamily="system-ui, sans-serif">
                    team avg (10 max)
                  </text>

                  {/* Card 3: Issues */}
                  <rect
                    x="644"
                    y="72"
                    width="200"
                    height="96"
                    rx="10"
                    fill="#111113"
                    stroke="#1e1e24"
                    strokeWidth="1"
                  />
                  <text
                    x="662"
                    y="98"
                    fill="#555560"
                    fontSize="10"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.06em"
                  >
                    OPEN ISSUES
                  </text>
                  <text
                    x="662"
                    y="132"
                    fill="#e4e4e7"
                    fontSize="28"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-1"
                  >
                    23
                  </text>
                  <text x="700" y="132" fill="#c97a28" fontSize="12" fontFamily="system-ui, sans-serif">
                    ↑ 5
                  </text>
                  <text x="662" y="152" fill="#444450" fontSize="10" fontFamily="system-ui, sans-serif">
                    needs triage
                  </text>

                  {/* Team health table */}
                  <text
                    x="212"
                    y="194"
                    fill="#555560"
                    fontSize="10"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.06em"
                  >
                    TEAM HEALTH
                  </text>

                  {/* Row headers */}
                  <text x="212" y="220" fill="#888890" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Member
                  </text>
                  <text x="420" y="220" fill="#888890" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Workload
                  </text>
                  <text x="590" y="220" fill="#888890" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Mood
                  </text>
                  <text x="720" y="220" fill="#888890" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Next 1:1
                  </text>
                  <line x1="200" y1="228" x2="890" y2="228" stroke="#1a1a1f" strokeWidth="1" />

                  {/* Row 1 */}
                  <circle cx="226" cy="249" r="11" fill="#2a2a35" />
                  <text x="221" y="253" fill="#888" fontSize="9" fontFamily="system-ui, sans-serif">
                    AY
                  </text>
                  <text x="244" y="253" fill="#cccccc" fontSize="11.5" fontFamily="system-ui, sans-serif">
                    Aiko Yamamoto
                  </text>
                  {/* Workload bar */}
                  <rect x="410" y="242" width="120" height="8" rx="4" fill="#1e1e24" />
                  <rect x="410" y="242" width="84" height="8" rx="4" fill="#4a7c59" opacity="0.9" />
                  <text x="540" y="252" fill="#888" fontSize="10" fontFamily="system-ui, sans-serif">
                    70%
                  </text>
                  {/* Mood dots */}
                  <circle cx="595" cy="248" r="4" fill="#3e9c58" />
                  <circle cx="608" cy="248" r="4" fill="#3e9c58" />
                  <circle cx="621" cy="248" r="4" fill="#3e9c58" />
                  <circle cx="634" cy="248" r="4" fill="#3e9c58" />
                  <circle cx="647" cy="248" r="4" fill="#1e1e24" />
                  <text x="715" y="252" fill="#555560" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Thu Apr 10
                  </text>

                  {/* Row 2 */}
                  <line x1="200" y1="264" x2="890" y2="264" stroke="#1a1a1f" strokeWidth="1" />
                  <circle cx="226" cy="285" r="11" fill="#2a2a35" />
                  <text x="221" y="289" fill="#888" fontSize="9" fontFamily="system-ui, sans-serif">
                    ML
                  </text>
                  <text x="244" y="289" fill="#cccccc" fontSize="11.5" fontFamily="system-ui, sans-serif">
                    Marcus Li
                  </text>
                  <rect x="410" y="278" width="120" height="8" rx="4" fill="#1e1e24" />
                  <rect x="410" y="278" width="102" height="8" rx="4" fill="#c97a28" opacity="0.8" />
                  <text x="540" y="288" fill="#888" fontSize="10" fontFamily="system-ui, sans-serif">
                    85%
                  </text>
                  <circle cx="595" cy="284" r="4" fill="#3e9c58" />
                  <circle cx="608" cy="284" r="4" fill="#3e9c58" />
                  <circle cx="621" cy="284" r="4" fill="#3e9c58" />
                  <circle cx="634" cy="284" r="4" fill="#1e1e24" />
                  <circle cx="647" cy="284" r="4" fill="#1e1e24" />
                  <text x="715" y="288" fill="#555560" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Fri Apr 11
                  </text>

                  {/* Row 3 */}
                  <line x1="200" y1="300" x2="890" y2="300" stroke="#1a1a1f" strokeWidth="1" />
                  <circle cx="226" cy="321" r="11" fill="#2a2a35" />
                  <text x="222" y="325" fill="#888" fontSize="9" fontFamily="system-ui, sans-serif">
                    SK
                  </text>
                  <text x="244" y="325" fill="#cccccc" fontSize="11.5" fontFamily="system-ui, sans-serif">
                    Sara Kim
                  </text>
                  <rect x="410" y="314" width="120" height="8" rx="4" fill="#1e1e24" />
                  <rect x="410" y="314" width="66" height="8" rx="4" fill="#4a7c59" opacity="0.9" />
                  <text x="540" y="324" fill="#888" fontSize="10" fontFamily="system-ui, sans-serif">
                    55%
                  </text>
                  <circle cx="595" cy="320" r="4" fill="#3e9c58" />
                  <circle cx="608" cy="320" r="4" fill="#3e9c58" />
                  <circle cx="621" cy="320" r="4" fill="#3e9c58" />
                  <circle cx="634" cy="320" r="4" fill="#3e9c58" />
                  <circle cx="647" cy="320" r="4" fill="#3e9c58" />
                  <text x="715" y="324" fill="#555560" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Wed Apr 9
                  </text>

                  {/* Row 4 */}
                  <line x1="200" y1="336" x2="890" y2="336" stroke="#1a1a1f" strokeWidth="1" />
                  <circle cx="226" cy="357" r="11" fill="#2a2a35" />
                  <text x="222" y="361" fill="#888" fontSize="9" fontFamily="system-ui, sans-serif">
                    JR
                  </text>
                  <text x="244" y="357" fill="#cccccc" fontSize="11.5" fontFamily="system-ui, sans-serif">
                    James R.
                  </text>
                  <rect x="410" y="350" width="120" height="8" rx="4" fill="#1e1e24" />
                  <rect x="410" y="350" width="90" height="8" rx="4" fill="#4a7c59" opacity="0.9" />
                  <text x="540" y="360" fill="#888" fontSize="10" fontFamily="system-ui, sans-serif">
                    75%
                  </text>
                  <circle cx="595" cy="356" r="4" fill="#3e9c58" />
                  <circle cx="608" cy="356" r="4" fill="#3e9c58" />
                  <circle cx="621" cy="356" r="4" fill="#1e1e24" />
                  <circle cx="634" cy="356" r="4" fill="#1e1e24" />
                  <circle cx="647" cy="356" r="4" fill="#1e1e24" />
                  <text x="715" y="360" fill="#555560" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Mon Apr 14
                  </text>

                  {/* Standup widget bottom */}
                  <rect
                    x="212"
                    y="390"
                    width="670"
                    height="110"
                    rx="10"
                    fill="#111113"
                    stroke="#1e1e24"
                    strokeWidth="1"
                  />
                  <text
                    x="232"
                    y="415"
                    fill="#555560"
                    fontSize="10"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.06em"
                  >
                    RECENT STANDUPS
                  </text>
                  <circle cx="248" cy="440" r="10" fill="#2a2a35" />
                  <text x="244" y="444" fill="#888" fontSize="9" fontFamily="system-ui, sans-serif">
                    AY
                  </text>
                  <text x="266" y="437" fill="#cccccc" fontSize="11" fontFamily="system-ui, sans-serif">
                    Aiko Yamamoto · 9:03 AM
                  </text>
                  <text x="266" y="453" fill="#555560" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Working on the integrations pipeline. Blocked on Linear webhook setup.
                  </text>
                  <circle cx="248" cy="478" r="10" fill="#2a2a35" />
                  <text x="244" y="482" fill="#888" fontSize="9" fontFamily="system-ui, sans-serif">
                    ML
                  </text>
                  <text x="266" y="474" fill="#cccccc" fontSize="11" fontFamily="system-ui, sans-serif">
                    Marcus Li · 9:15 AM
                  </text>
                  <text x="266" y="490" fill="#555560" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Finished the dashboard refactor. Reviewing Sara&apos;s PR this afternoon.
                  </text>
                </svg>
              </div>
            </div>

            {/* 2c — Feature grid */}
            <div className="portfolio-features-grid">
              <div className="portfolio-feature-card">
                <IconBox icon={Layout} />
                <h3>Team Health Dashboard</h3>
                <p>
                  Real-time visibility into workload, morale, and velocity for
                  every member of your team.
                </p>
              </div>
              <div className="portfolio-feature-card">
                <IconBox icon={Users} />
                <h3>Structured 1:1s</h3>
                <p>
                  Pre-built agendas, persistent notes, and action items that
                  carry forward between meetings.
                </p>
              </div>
              <div className="portfolio-feature-card">
                <IconBox icon={BarChart2} />
                <h3>Cycle Tracking</h3>
                <p>
                  Sprint-level visibility tied to real people — see who&apos;s
                  overloaded, who has capacity, and what&apos;s at risk.
                </p>
              </div>
              <div className="portfolio-feature-card">
                <IconBox icon={Cpu} />
                <h3>Linear Integration</h3>
                <p>
                  Issues and team activity in one place. Not a second inbox — a
                  smarter view of what&apos;s actually happening.
                </p>
              </div>
            </div>

            {/* 2d — Tech + status row */}
            <div className="portfolio-product-meta">
              <div className="tag-row">
                <span className="tag">Next.js</span>
                <span className="tag">TypeScript</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Linear API</span>
              </div>
              <a
                href="https://usepulsr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tag tag--link"
              >
                Beta · usepulsr.com <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* ── Pausr ────────────────────────────────────────────── */}
        <section id="pausr" className="portfolio-product-section">
          <div className="container">
            {/* 3a — Intro */}
            <div className="portfolio-product-intro">
              <p className="eyebrow">
                <span className="portfolio-product-num">02</span> Product
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logos/pausr.svg"
                alt="Pausr"
                height={32}
                style={{ height: 32 }}
                className="portfolio-product-logo"
              />
              <h2>PTO management built for engineering teams.</h2>
              <p>
                HR tools are designed for HR teams. Pausr is built for
                engineering managers who need to see team capacity, prevent
                release conflicts, and approve time-off without a 5-step
                process. Calendar-first, setup in 2 minutes, free for up to 5
                engineers.
              </p>
              <div className="tag-row">
                <span className="tag">Free tier available</span>
                <span className="tag">$29/month</span>
                <a
                  href="https://usepausr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tag tag--link"
                >
                  usepausr.com <ArrowUpRight size={12} />
                </a>
              </div>
            </div>

            {/* 3b — Mockup */}
            <div className="portfolio-mockup-wrap">
              <div className="portfolio-mockup-frame">
                <svg
                  viewBox="0 0 900 540"
                  xmlns="http://www.w3.org/2000/svg"
                  className="portfolio-mockup-svg"
                  aria-label="Pausr app interface"
                >
                  {/* App background */}
                  <rect width="900" height="540" fill="#020617" />

                  {/* Top navigation bar */}
                  <rect width="900" height="52" fill="#030b1a" />
                  <text
                    x="20"
                    y="31"
                    fill="#f8fafc"
                    fontSize="15"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-0.5"
                  >
                    Pa
                  </text>
                  {/* Pause icon in logo */}
                  <rect x="44" y="18" width="5" height="14" rx="1.5" fill="#86efac" />
                  <rect x="52" y="18" width="5" height="14" rx="1.5" fill="#86efac" />
                  <text
                    x="64"
                    y="31"
                    fill="#f8fafc"
                    fontSize="15"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-0.5"
                  >
                    r
                  </text>

                  {/* Nav links */}
                  <text x="160" y="31" fill="#94a3b8" fontSize="12" fontFamily="system-ui, sans-serif">
                    Calendar
                  </text>
                  <text x="240" y="31" fill="#94a3b8" fontSize="12" fontFamily="system-ui, sans-serif">
                    Requests
                  </text>
                  <text x="330" y="31" fill="#94a3b8" fontSize="12" fontFamily="system-ui, sans-serif">
                    Analytics
                  </text>
                  <text x="415" y="31" fill="#94a3b8" fontSize="12" fontFamily="system-ui, sans-serif">
                    Settings
                  </text>

                  {/* Inbox notification badge */}
                  <rect x="790" y="14" width="90" height="26" rx="6" fill="#0f3b25" />
                  <circle cx="803" cy="27" r="5" fill="#22c55e" />
                  <text
                    x="813"
                    y="31"
                    fill="#86efac"
                    fontSize="11"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                  >
                    2 pending
                  </text>

                  {/* Month header */}
                  <text
                    x="20"
                    y="84"
                    fill="#f8fafc"
                    fontSize="16"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-0.4"
                  >
                    April 2025
                  </text>
                  <text x="590" y="84" fill="#334155" fontSize="12" fontFamily="system-ui, sans-serif">
                    ← March
                  </text>
                  <text x="640" y="84" fill="#334155" fontSize="12" fontFamily="system-ui, sans-serif">
                    May →
                  </text>

                  {/* Day headers */}
                  {(
                    [
                      { d: "Mon", x: 20 },
                      { d: "Tue", x: 120 },
                      { d: "Wed", x: 220 },
                      { d: "Thu", x: 320 },
                      { d: "Fri", x: 420 },
                      { d: "Mon", x: 520 },
                      { d: "Tue", x: 620 },
                    ] as { d: string; x: number }[]
                  ).map(({ d, x }) => (
                    <text
                      key={x}
                      x={x}
                      y="106"
                      fill="#475569"
                      fontSize="10.5"
                      fontFamily="system-ui, sans-serif"
                      fontWeight="600"
                      letterSpacing="0.04em"
                    >
                      {d}
                    </text>
                  ))}
                  {(
                    [
                      { n: "7", x: 20 },
                      { n: "8", x: 120 },
                      { n: "9", x: 220 },
                      { n: "10", x: 320 },
                      { n: "11", x: 420 },
                      { n: "14", x: 520 },
                      { n: "15", x: 620 },
                    ] as { n: string; x: number }[]
                  ).map(({ n, x }) => (
                    <text
                      key={x}
                      x={x + 8}
                      y="120"
                      fill="#94a3b8"
                      fontSize="11"
                      fontFamily="system-ui, sans-serif"
                    >
                      {n}
                    </text>
                  ))}
                  <line x1="10" y1="128" x2="710" y2="128" stroke="#0f172a" strokeWidth="1.5" />

                  {/* Team rows */}
                  {/* Row 1: Aiko - has leave Apr 8-11 */}
                  <text x="20" y="158" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">
                    Aiko Y.
                  </text>
                  <rect
                    x="117"
                    y="138"
                    width="320"
                    height="26"
                    rx="5"
                    fill="#14532d"
                    stroke="#166534"
                    strokeWidth="1"
                    opacity="0.9"
                  />
                  <text
                    x="195"
                    y="156"
                    fill="#86efac"
                    fontSize="10.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="500"
                  >
                    Apr 8 – 11 · PTO
                  </text>

                  {/* Row 2: Marcus - leave Apr 9-10 */}
                  <line x1="10" y1="172" x2="710" y2="172" stroke="#0f172a" strokeWidth="1" />
                  <text x="20" y="198" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">
                    Marcus L.
                  </text>
                  <rect
                    x="217"
                    y="178"
                    width="220"
                    height="26"
                    rx="5"
                    fill="#1e3a5f"
                    stroke="#1d4ed8"
                    strokeWidth="1"
                    opacity="0.85"
                  />
                  <text
                    x="265"
                    y="196"
                    fill="#93c5fd"
                    fontSize="10.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="500"
                  >
                    Apr 9 – 10 · PTO
                  </text>

                  {/* Row 3: Sara - no leave */}
                  <line x1="10" y1="212" x2="710" y2="212" stroke="#0f172a" strokeWidth="1" />
                  <text x="20" y="238" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">
                    Sara K.
                  </text>
                  <text x="120" y="238" fill="#1e2a3a" fontSize="11" fontFamily="system-ui, sans-serif">
                    —
                  </text>

                  {/* Row 4: James - leave Apr 14-15 */}
                  <line x1="10" y1="252" x2="710" y2="252" stroke="#0f172a" strokeWidth="1" />
                  <text x="20" y="278" fill="#94a3b8" fontSize="11" fontFamily="system-ui, sans-serif">
                    James R.
                  </text>
                  <rect
                    x="517"
                    y="258"
                    width="220"
                    height="26"
                    rx="5"
                    fill="#3b1f4e"
                    stroke="#7c3aed"
                    strokeWidth="1"
                    opacity="0.85"
                  />
                  <text
                    x="565"
                    y="276"
                    fill="#c4b5fd"
                    fontSize="10.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="500"
                  >
                    Apr 14 – 15 · PTO
                  </text>

                  {/* Overlap warning */}
                  <rect
                    x="117"
                    y="295"
                    width="320"
                    height="24"
                    rx="5"
                    fill="#431a07"
                    stroke="#c2410c"
                    strokeWidth="1"
                  />
                  <text
                    x="135"
                    y="311"
                    fill="#fb923c"
                    fontSize="10.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                  >
                    ⚠ Overlap: Aiko &amp; Marcus both out Apr 9-10
                  </text>

                  {/* Release freeze marker */}
                  <rect x="317" y="130" width="2" height="170" fill="#dc2626" opacity="0.5" />
                  <text
                    x="324"
                    y="140"
                    fill="#dc2626"
                    fontSize="9.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                  >
                    Release freeze
                  </text>

                  {/* Right panel: Approval inbox */}
                  <rect
                    x="720"
                    y="62"
                    width="178"
                    height="430"
                    rx="10"
                    fill="#030d1e"
                    stroke="#0f172a"
                    strokeWidth="1"
                  />
                  <text
                    x="736"
                    y="88"
                    fill="#94a3b8"
                    fontSize="10"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.06em"
                  >
                    INBOX
                  </text>

                  {/* Request 1 */}
                  <rect
                    x="730"
                    y="96"
                    width="158"
                    height="88"
                    rx="7"
                    fill="#0a1628"
                    stroke="#1e293b"
                    strokeWidth="1"
                  />
                  <circle cx="748" cy="116" r="10" fill="#14532d" />
                  <text x="744" y="120" fill="#86efac" fontSize="9" fontFamily="system-ui, sans-serif">
                    AY
                  </text>
                  <text
                    x="764"
                    y="113"
                    fill="#e2e8f0"
                    fontSize="11"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                  >
                    Aiko Y.
                  </text>
                  <text x="764" y="127" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">
                    Apr 8–11 · 4 days
                  </text>
                  <rect x="730" y="148" width="72" height="24" rx="5" fill="#14532d" />
                  <text
                    x="749"
                    y="164"
                    fill="#86efac"
                    fontSize="10.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                  >
                    Approve
                  </text>
                  <rect x="812" y="148" width="64" height="24" rx="5" fill="#1e293b" />
                  <text x="826" y="164" fill="#64748b" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Decline
                  </text>

                  {/* Request 2 */}
                  <rect
                    x="730"
                    y="194"
                    width="158"
                    height="88"
                    rx="7"
                    fill="#0a1628"
                    stroke="#1e293b"
                    strokeWidth="1"
                  />
                  <circle cx="748" cy="214" r="10" fill="#1e3a5f" />
                  <text x="744" y="218" fill="#93c5fd" fontSize="9" fontFamily="system-ui, sans-serif">
                    JR
                  </text>
                  <text
                    x="764"
                    y="211"
                    fill="#e2e8f0"
                    fontSize="11"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                  >
                    James R.
                  </text>
                  <text x="764" y="225" fill="#475569" fontSize="10" fontFamily="system-ui, sans-serif">
                    Apr 14–15 · 2 days
                  </text>
                  <rect x="730" y="246" width="72" height="24" rx="5" fill="#14532d" />
                  <text
                    x="749"
                    y="262"
                    fill="#86efac"
                    fontSize="10.5"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                  >
                    Approve
                  </text>
                  <rect x="812" y="246" width="64" height="24" rx="5" fill="#1e293b" />
                  <text x="826" y="262" fill="#64748b" fontSize="10.5" fontFamily="system-ui, sans-serif">
                    Decline
                  </text>

                  {/* Balance tracker */}
                  <text
                    x="736"
                    y="305"
                    fill="#334155"
                    fontSize="10"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.06em"
                  >
                    BALANCES
                  </text>
                  {(
                    [
                      { name: "Aiko Y.", used: 8, total: 20, y: 326 },
                      { name: "Marcus L.", used: 6, total: 20, y: 352 },
                      { name: "Sara K.", used: 3, total: 20, y: 378 },
                      { name: "James R.", used: 10, total: 20, y: 404 },
                    ] as { name: string; used: number; total: number; y: number }[]
                  ).map(({ name, used, total, y }) => (
                    <g key={name}>
                      <text
                        x="736"
                        y={y - 2}
                        fill="#475569"
                        fontSize="9.5"
                        fontFamily="system-ui, sans-serif"
                      >
                        {name}
                      </text>
                      <rect x="736" y={y + 2} width="145" height="6" rx="3" fill="#0f172a" />
                      <rect
                        x="736"
                        y={y + 2}
                        width={Math.round(145 * (used / total))}
                        height="6"
                        rx="3"
                        fill="#16a34a"
                        opacity="0.8"
                      />
                      <text
                        x="888"
                        y={y + 8}
                        fill="#334155"
                        fontSize="9"
                        fontFamily="system-ui, sans-serif"
                      >
                        {used}/{total}
                      </text>
                    </g>
                  ))}

                  {/* Capacity view bottom */}
                  <rect
                    x="10"
                    y="340"
                    width="700"
                    height="130"
                    rx="10"
                    fill="#030d1e"
                    stroke="#0f172a"
                    strokeWidth="1"
                  />
                  <text
                    x="26"
                    y="365"
                    fill="#334155"
                    fontSize="10"
                    fontFamily="system-ui, sans-serif"
                    fontWeight="600"
                    letterSpacing="0.06em"
                  >
                    TEAM CAPACITY · THIS WEEK
                  </text>
                  <text x="26" y="395" fill="#94a3b8" fontSize="13" fontFamily="system-ui, sans-serif">
                    Mon Apr 7
                  </text>
                  <text
                    x="26"
                    y="415"
                    fill="#22c55e"
                    fontSize="22"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-0.5"
                  >
                    100%
                  </text>
                  <text x="26" y="432" fill="#334155" fontSize="10" fontFamily="system-ui, sans-serif">
                    Full team available
                  </text>
                  <text x="200" y="395" fill="#94a3b8" fontSize="13" fontFamily="system-ui, sans-serif">
                    Tue Apr 8
                  </text>
                  <text
                    x="200"
                    y="415"
                    fill="#f59e0b"
                    fontSize="22"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-0.5"
                  >
                    75%
                  </text>
                  <text x="200" y="432" fill="#334155" fontSize="10" fontFamily="system-ui, sans-serif">
                    Aiko out
                  </text>
                  <text x="374" y="395" fill="#94a3b8" fontSize="13" fontFamily="system-ui, sans-serif">
                    Wed Apr 9
                  </text>
                  <text
                    x="374"
                    y="415"
                    fill="#ef4444"
                    fontSize="22"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-0.5"
                  >
                    50%
                  </text>
                  <text x="374" y="432" fill="#334155" fontSize="10" fontFamily="system-ui, sans-serif">
                    Aiko &amp; Marcus out
                  </text>
                  <text x="548" y="395" fill="#94a3b8" fontSize="13" fontFamily="system-ui, sans-serif">
                    Thu Apr 10
                  </text>
                  <text
                    x="548"
                    y="415"
                    fill="#ef4444"
                    fontSize="22"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                    letterSpacing="-0.5"
                  >
                    50%
                  </text>
                  <text x="548" y="432" fill="#334155" fontSize="10" fontFamily="system-ui, sans-serif">
                    Aiko &amp; Marcus out
                  </text>
                </svg>
              </div>
            </div>

            {/* 3c — Feature grid */}
            <div className="portfolio-features-grid">
              <div className="portfolio-feature-card">
                <IconBox icon={Calendar} />
                <h3>Color-coded Team Calendar</h3>
                <p>
                  Everyone&apos;s time off in one view. Color-coded by
                  engineer, with overlap highlighting so you catch conflicts
                  before they happen.
                </p>
              </div>
              <div className="portfolio-feature-card">
                <IconBox icon={Bell} />
                <h3>One-click Approvals</h3>
                <p>
                  Requests land in an inbox. Approve or decline in one click.
                  No email chains, no Slack threads, no spreadsheet updates.
                </p>
              </div>
              <div className="portfolio-feature-card">
                <IconBox icon={BarChart2} />
                <h3>Capacity Planning</h3>
                <p>
                  See your team&apos;s availability by week or month. Plan
                  releases, design sprints, and hiring decisions around real
                  data.
                </p>
              </div>
              <div className="portfolio-feature-card">
                <IconBox icon={Clock} />
                <h3>Release Freeze Periods</h3>
                <p>
                  Mark dates as off-limits for time-off requests. Pausr
                  enforces it automatically so you&apos;re never short-staffed
                  before a launch.
                </p>
              </div>
            </div>

            {/* 3d — Pricing callout */}
            <div className="portfolio-pausr-pricing">
              <p>Free for up to 5 engineers · $29/month as you grow</p>
              <a
                href="https://usepausr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--ghost"
              >
                Visit usepausr.com <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="section section--contact container">
          <div className="cta-panel">
            <div className="cta-panel__glow" aria-hidden="true" />
            <div className="cta-panel__copy">
              <p className="eyebrow">Work with us</p>
              <h2>Building something? Let&apos;s talk.</h2>
              <p>
                If you want to see what end-to-end product engineering actually
                looks like — from the first Figma frame to a live product —
                we&apos;re the right partner.
              </p>
            </div>
            <div className="cta-panel__action">
              <a
                href="mailto:hello@toshlabs.com"
                className="button button--primary button--lg"
              >
                Start a project
              </a>
              <p className="cta-note">Vancouver, BC · Working with clients globally</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        /* ── PORTFOLIO HERO ── */
        .portfolio-hero {
          position: relative;
          padding: 100px 0 80px;
          overflow: hidden;
          text-align: center;
        }
        .portfolio-hero .container { position: relative; z-index: 1; }
        .portfolio-hero__title {
          margin: 0 auto 20px;
          font-size: clamp(2.4rem, 5.5vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.052em;
          line-height: 1.05;
          max-width: 20ch;
        }
        .portfolio-hero__sub {
          max-width: 52ch;
          margin: 0 auto 36px;
          color: var(--muted);
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          line-height: 1.72;
        }
        .portfolio-hero__products {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .portfolio-hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 18px;
          border-radius: var(--radius-lg);
          background: var(--surface);
          border: 1px solid var(--border-2);
          box-shadow: var(--shadow-sm);
        }

        /* ── PRODUCT SECTIONS ── */
        .portfolio-product-section {
          padding: 96px 0 80px;
          border-top: 1px solid var(--border);
        }
        .portfolio-product-section:first-of-type { border-top: none; }
        .portfolio-product-intro {
          max-width: 640px;
          margin-bottom: 48px;
        }
        .portfolio-product-num {
          font-weight: 700;
          margin-right: 6px;
          opacity: 0.5;
        }
        .portfolio-product-logo {
          display: block;
          margin: 18px 0 22px;
        }
        .portfolio-product-intro h2 {
          margin-bottom: 16px;
        }
        .portfolio-product-intro p {
          color: var(--muted);
          font-size: 1.0625rem;
          line-height: 1.72;
          max-width: 56ch;
        }

        /* ── MOCKUP FRAME ── */
        .portfolio-mockup-wrap {
          margin-bottom: 52px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          box-shadow:
            0 0 0 1px var(--border-2),
            var(--shadow-lg);
        }
        .portfolio-mockup-frame {
          background: #0a0a0b;
          border-radius: var(--radius-xl);
          overflow: hidden;
        }
        .portfolio-mockup-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── FEATURE GRID ── */
        .portfolio-features-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 32px;
        }
        .portfolio-feature-card {
          padding: 26px 22px;
          border-radius: var(--radius-lg);
          background: var(--surface);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s var(--ease-out);
        }
        .portfolio-feature-card:hover {
          border-color: var(--border-2);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .portfolio-feature-card .icon-box {
          margin-bottom: 16px;
        }
        .portfolio-feature-card h3 {
          font-size: 0.9375rem;
          margin-bottom: 8px;
        }
        .portfolio-feature-card p {
          font-size: 0.875rem;
          color: var(--muted);
          line-height: 1.65;
          margin: 0;
        }

        /* ── PRODUCT META ROW ── */
        .portfolio-product-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        /* ── PAUSR PRICING PILL ── */
        .portfolio-pausr-pricing {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 28px;
          padding: 20px 28px;
          border-radius: var(--radius-lg);
          background: var(--surface);
          border: 1px solid var(--border-2);
          box-shadow: var(--shadow-sm);
        }
        .portfolio-pausr-pricing p {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--soft);
          letter-spacing: -0.015em;
        }

        /* ── LINK TAG ── */
        .tag--link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .tag--link:hover {
          background: var(--dim-2);
          border-color: var(--border-3);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .portfolio-features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 820px) {
          .portfolio-hero { padding: 72px 0 56px; }
          .portfolio-product-section { padding: 64px 0 56px; }
          .portfolio-features-grid { grid-template-columns: repeat(2, 1fr); }
          .portfolio-product-meta { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 560px) {
          .portfolio-features-grid { grid-template-columns: 1fr; }
          .portfolio-pausr-pricing { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
