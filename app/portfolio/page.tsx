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
              <h2>You&apos;re already running your team. Stop doing it across twelve tabs.</h2>
              <p>
                Engineering managers don&apos;t only ship code. They track delivery,
                run standups, hold 1:1s, watch capacity, and unblock people — work
                that never stops but rarely has software built for it. Pulsr is a
                dedicated workspace for that layer of the job, connected to Linear
                so everything stays grounded in real execution data.
              </p>
              <div className="tag-row">
                <span className="tag">Live · Beta</span>
                <span className="tag">Linear integration</span>
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

            {/* 2b — Mockup: Dashboard view with accurate widgets and nav */}
            <div className="portfolio-mockup-wrap">
              <div className="portfolio-mockup-frame">
                <svg
                  viewBox="0 0 900 540"
                  xmlns="http://www.w3.org/2000/svg"
                  className="portfolio-mockup-svg"
                  aria-label="Pulsr dashboard interface"
                >
                  {/* App chrome */}
                  <rect width="900" height="540" fill="#0a0a0b" />

                  {/* ── Sidebar (0–192) ── */}
                  <rect width="192" height="540" fill="#111113" />

                  {/* App name — text only, no logo mark */}
                  <text x="16" y="34" fill="#e4e4e7" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">Pulsr</text>

                  {/* Dashboard — active highlight */}
                  <rect x="8" y="54" width="176" height="28" rx="6" fill="#1e1e24" />
                  <text x="26" y="73" fill="#e4e4e7" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">Dashboard</text>

                  {/* Inactive nav items */}
                  {[
                    ["Standup",   104],
                    ["Issues",    127],
                    ["Team",      150],
                    ["1:1s",      173],
                    ["Cycles",    196],
                    ["Projects",  219],
                    ["Watchlist", 242],
                  ].map(([label, y]) => (
                    <text key={label as string} x="26" y={y as number} fill="#3a3a46" fontSize="11" fontFamily="system-ui, sans-serif">{label as string}</text>
                  ))}

                  {/* Divider */}
                  <line x1="8" y1="266" x2="184" y2="266" stroke="#1e1e24" strokeWidth="1"/>

                  {/* Linear connected badge */}
                  <rect x="8" y="278" width="176" height="24" rx="6" fill="#18181f" />
                  <rect x="16" y="285" width="6" height="10" rx="1.5" fill="#5e6ad2"/>
                  <text x="28" y="294" fill="#5e6ad2" fontSize="9.5" fontWeight="600" fontFamily="system-ui, sans-serif">Linear connected</text>

                  {/* Settings at bottom */}
                  <text x="26" y="514" fill="#3a3a46" fontSize="11" fontFamily="system-ui, sans-serif">Settings</text>

                  {/* ── Main content (x: 200–900) ── */}
                  {/* Topbar */}
                  <text x="212" y="31" fill="#e4e4e7" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="-0.4">Dashboard</text>
                  {/* Team selector */}
                  <rect x="358" y="14" width="106" height="22" rx="5" fill="#1e1e24"/>
                  <text x="366" y="29" fill="#666" fontSize="9.5" fontFamily="system-ui, sans-serif">Platform team ▾</text>
                  {/* Sprint selector */}
                  <rect x="472" y="14" width="76" height="22" rx="5" fill="#1e1e24"/>
                  <text x="480" y="29" fill="#666" fontSize="9.5" fontFamily="system-ui, sans-serif">Sprint 18 ▾</text>
                  {/* Topbar divider */}
                  <line x1="200" y1="46" x2="900" y2="46" stroke="#1a1a1f" strokeWidth="1"/>

                  {/* ── Row 1: Cycle Overview (x208–683, y54–156) & Delivery (x695–887, y54–156) ── */}

                  {/* Cycle Overview widget */}
                  <rect x="208" y="54" width="475" height="102" rx="8" fill="#111113" stroke="#1e1e24" strokeWidth="1"/>
                  <text x="222" y="73" fill="#555560" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">CYCLE OVERVIEW · SPRINT 18</text>
                  {/* 5 evenly-spaced metric columns — x: 222, 315, 408, 501, 594 */}
                  {([
                    ["Total",         "42", "#e4e4e7", 222,   0],
                    ["In Progress",   "11", "#c97a28", 315, -14],
                    ["Completed",     "27", "#3e9c58", 408, -14],
                    ["High Priority",  "6", "#e4e4e7", 501, -14],
                    ["Overdue",        "3", "#d95757", 594,   0],
                  ] as [string, string, string, number, number][]).map(([label, val, color, x, lOff]) => (
                    <g key={label}>
                      <text x={x} y={110} fill={color} fontSize="21" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.5">{val}</text>
                      <text x={x + lOff} y={143} fill="#444450" fontSize="8.5" fontFamily="system-ui, sans-serif">{label}</text>
                    </g>
                  ))}
                  {/* Column dividers — midpoints between col x values */}
                  {[269, 362, 455, 548].map(x => (
                    <line key={x} x1={x} y1="84" x2={x} y2="148" stroke="#1e1e24" strokeWidth="1"/>
                  ))}

                  {/* Delivery widget */}
                  <rect x="695" y="54" width="193" height="102" rx="8" fill="#111113" stroke="#1e1e24" strokeWidth="1"/>
                  <text x="709" y="73" fill="#555560" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">DELIVERY</text>
                  {/* Bars — all anchored to bottom baseline y=144, heights 16–40px */}
                  {([
                    [711, 18, "#3e9c58"],
                    [727, 25, "#3e9c58"],
                    [743, 32, "#3e9c58"],
                    [759, 21, "#3e9c58"],
                    [775, 36, "#3e9c58"],
                    [791, 28, "#3e9c58"],
                    [807, 40, "#5e6ad2"],
                  ] as [number, number, string][]).map(([x, h, fill], i) => (
                    <rect key={i} x={x} y={133 - h} width="10" height={h} rx="2" fill={fill} opacity="0.85"/>
                  ))}
                  <text x="709" y="147" fill="#3e9c58" fontSize="9" fontFamily="system-ui, sans-serif">↑ 18% vs last sprint</text>

                  {/* ── Row 2: Team Health (x208–683, y166–322) & Resource Alloc (x695–887, y166–322) ── */}

                  {/* Team Health widget */}
                  <rect x="208" y="166" width="475" height="156" rx="8" fill="#111113" stroke="#1e1e24" strokeWidth="1"/>
                  <text x="222" y="184" fill="#555560" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">TEAM HEALTH</text>
                  {/* Column headers */}
                  <text x="248" y="202" fill="#3a3a46" fontSize="9" fontFamily="system-ui, sans-serif">Member</text>
                  <text x="382" y="202" fill="#3a3a46" fontSize="9" fontFamily="system-ui, sans-serif">Workload</text>
                  <text x="508" y="202" fill="#3a3a46" fontSize="9" fontFamily="system-ui, sans-serif">Mood</text>
                  <text x="590" y="202" fill="#3a3a46" fontSize="9" fontFamily="system-ui, sans-serif">Next 1:1</text>
                  <line x1="208" y1="208" x2="683" y2="208" stroke="#1e1e24" strokeWidth="1"/>

                  {/* Row 1 — Aiko Y. */}
                  <circle cx="230" cy="228" r="9" fill="#2a2a35"/>
                  <text x="225" y="232" fill="#666" fontSize="8" fontFamily="system-ui, sans-serif">AY</text>
                  <text x="245" y="232" fill="#ccc" fontSize="10" fontFamily="system-ui, sans-serif">Aiko Y.</text>
                  <rect x="378" y="224" width="90" height="6" rx="3" fill="#1e1e24"/>
                  <rect x="378" y="224" width="63" height="6" rx="3" fill="#4a7c59" opacity="0.9"/>
                  <text x="474" y="231" fill="#555" fontSize="8.5" fontFamily="system-ui, sans-serif">70%</text>
                  <circle cx="510" cy="228" r="3.5" fill="#3e9c58"/>
                  <circle cx="522" cy="228" r="3.5" fill="#3e9c58"/>
                  <circle cx="534" cy="228" r="3.5" fill="#3e9c58"/>
                  <circle cx="546" cy="228" r="3.5" fill="#3e9c58"/>
                  <circle cx="558" cy="228" r="3.5" fill="#1e1e24"/>
                  <text x="588" y="232" fill="#555560" fontSize="9" fontFamily="system-ui, sans-serif">Apr 10</text>
                  <line x1="208" y1="242" x2="683" y2="242" stroke="#1e1e24" strokeWidth="1"/>

                  {/* Row 2 — Marcus L. */}
                  <circle cx="230" cy="260" r="9" fill="#2a2a35"/>
                  <text x="224" y="264" fill="#666" fontSize="8" fontFamily="system-ui, sans-serif">ML</text>
                  <text x="245" y="264" fill="#ccc" fontSize="10" fontFamily="system-ui, sans-serif">Marcus L.</text>
                  <rect x="378" y="256" width="90" height="6" rx="3" fill="#1e1e24"/>
                  <rect x="378" y="256" width="77" height="6" rx="3" fill="#c97a28" opacity="0.8"/>
                  <text x="474" y="263" fill="#555" fontSize="8.5" fontFamily="system-ui, sans-serif">86%</text>
                  <circle cx="510" cy="260" r="3.5" fill="#3e9c58"/>
                  <circle cx="522" cy="260" r="3.5" fill="#3e9c58"/>
                  <circle cx="534" cy="260" r="3.5" fill="#3e9c58"/>
                  <circle cx="546" cy="260" r="3.5" fill="#1e1e24"/>
                  <circle cx="558" cy="260" r="3.5" fill="#1e1e24"/>
                  <text x="588" y="264" fill="#555560" fontSize="9" fontFamily="system-ui, sans-serif">Apr 11</text>
                  <line x1="208" y1="274" x2="683" y2="274" stroke="#1e1e24" strokeWidth="1"/>

                  {/* Row 3 — Sara K. */}
                  <circle cx="230" cy="292" r="9" fill="#2a2a35"/>
                  <text x="225" y="296" fill="#666" fontSize="8" fontFamily="system-ui, sans-serif">SK</text>
                  <text x="245" y="296" fill="#ccc" fontSize="10" fontFamily="system-ui, sans-serif">Sara K.</text>
                  <rect x="378" y="288" width="90" height="6" rx="3" fill="#1e1e24"/>
                  <rect x="378" y="288" width="50" height="6" rx="3" fill="#4a7c59" opacity="0.9"/>
                  <text x="474" y="295" fill="#555" fontSize="8.5" fontFamily="system-ui, sans-serif">55%</text>
                  <circle cx="510" cy="292" r="3.5" fill="#3e9c58"/>
                  <circle cx="522" cy="292" r="3.5" fill="#3e9c58"/>
                  <circle cx="534" cy="292" r="3.5" fill="#3e9c58"/>
                  <circle cx="546" cy="292" r="3.5" fill="#3e9c58"/>
                  <circle cx="558" cy="292" r="3.5" fill="#3e9c58"/>
                  <text x="588" y="296" fill="#555560" fontSize="9" fontFamily="system-ui, sans-serif">Apr 9</text>

                  {/* Resource Allocation widget */}
                  <rect x="695" y="166" width="193" height="156" rx="8" fill="#111113" stroke="#1e1e24" strokeWidth="1"/>
                  <text x="709" y="184" fill="#555560" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">RESOURCE ALLOC.</text>
                  {/* Donut — cx=792, cy=252, r=36, strokeWidth=14. Circumference≈226. */}
                  {/* Features 60% → 136, Bugs 32% → 72, Other 8% → 18 */}
                  <circle cx="792" cy="249" r="36" fill="none" stroke="#5e6ad2" strokeWidth="14" strokeDasharray="136 90" strokeDashoffset="0" opacity="0.9"/>
                  <circle cx="792" cy="249" r="36" fill="none" stroke="#3e9c58" strokeWidth="14" strokeDasharray="72 154" strokeDashoffset="-136" opacity="0.9"/>
                  <circle cx="792" cy="249" r="36" fill="none" stroke="#c97a28" strokeWidth="14" strokeDasharray="18 208" strokeDashoffset="-208" opacity="0.9"/>
                  {/* Centre label */}
                  <text x="781" y="246" fill="#e4e4e7" fontSize="12" fontWeight="700" fontFamily="system-ui, sans-serif">60%</text>
                  <text x="776" y="258" fill="#555560" fontSize="8" fontFamily="system-ui, sans-serif">features</text>
                  {/* Legend — sits below donut, within widget bottom (166+156=322) */}
                  <rect x="709" y="296" width="7" height="7" rx="2" fill="#5e6ad2"/>
                  <text x="720" y="303" fill="#888" fontSize="8.5" fontFamily="system-ui, sans-serif">Features 60%</text>
                  <rect x="709" y="308" width="7" height="7" rx="2" fill="#3e9c58"/>
                  <text x="720" y="315" fill="#888" fontSize="8.5" fontFamily="system-ui, sans-serif">Bugs 32%</text>

                  {/* ── Row 3: Hygiene (x208–503, y334–450) & Action Items (x515–887, y334–450) ── */}

                  {/* Hygiene Snapshot widget */}
                  <rect x="208" y="334" width="295" height="116" rx="8" fill="#111113" stroke="#1e1e24" strokeWidth="1"/>
                  <text x="222" y="353" fill="#555560" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">HYGIENE SNAPSHOT</text>
                  <text x="222" y="378" fill="#d95757" fontSize="10" fontFamily="system-ui, sans-serif">⚠ 8 issues missing priority</text>
                  <text x="222" y="396" fill="#c97a28" fontSize="10" fontFamily="system-ui, sans-serif">⚠ 5 issues no estimate</text>
                  <text x="222" y="414" fill="#3e9c58" fontSize="10" fontFamily="system-ui, sans-serif">✓ Backlog trending cleaner</text>
                  <text x="222" y="438" fill="#444450" fontSize="8.5" fontFamily="system-ui, sans-serif">Last checked 4 min ago</text>

                  {/* My Action Items widget */}
                  <rect x="515" y="334" width="373" height="116" rx="8" fill="#111113" stroke="#1e1e24" strokeWidth="1"/>
                  <text x="529" y="353" fill="#555560" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif" letterSpacing="0.08em">MY ACTION ITEMS</text>
                  {/* Item 1 */}
                  <rect x="529" y="364" width="9" height="9" rx="2" fill="#1e1e24" stroke="#2a2a35" strokeWidth="1"/>
                  <text x="544" y="373" fill="#cccccc" fontSize="9.5" fontFamily="system-ui, sans-serif">Follow up with Marcus on capacity</text>
                  {/* Item 2 */}
                  <rect x="529" y="381" width="9" height="9" rx="2" fill="#1e1e24" stroke="#2a2a35" strokeWidth="1"/>
                  <text x="544" y="390" fill="#cccccc" fontSize="9.5" fontFamily="system-ui, sans-serif">Review Sara&apos;s architecture proposal</text>
                  {/* Item 3 — completed */}
                  <rect x="529" y="398" width="9" height="9" rx="2" fill="#3e9c58"/>
                  <text x="544" y="407" fill="#44444e" fontSize="9.5" fontFamily="system-ui, sans-serif" textDecoration="line-through">Share sprint retro notes</text>
                  {/* Footer */}
                  <text x="529" y="436" fill="#444450" fontSize="8.5" fontFamily="system-ui, sans-serif">3 open · 1 completed · from 1:1 with Marcus</text>
                </svg>
              </div>
            </div>

            {/* 2c — Feature grid */}
            <div className="portfolio-features-grid">
              <div className="portfolio-feature-card">
                <IconBox icon={Layout} />
                <h3>Customisable dashboard</h3>
                <p>
                  Cycle overview, delivery throughput, team health, resource allocation,
                  hygiene snapshot, action items, and watchlist — all in one view,
                  ordered the way you work.
                </p>
              </div>
              <div className="portfolio-feature-card">
                <IconBox icon={Users} />
                <h3>1:1 workspace</h3>
                <p>
                  Shared notes, a private scratchpad, talking points, commitment tracking,
                  and a full session timeline per engineer. Every 1:1 starts with context.
                </p>
              </div>
              <div className="portfolio-feature-card">
                <IconBox icon={BarChart2} />
                <h3>Cycle &amp; project analytics</h3>
                <p>
                  Burndown charts, issue distribution, velocity trends, milestone tracking,
                  and resource allocation — pulled live from Linear, surfaced for the EM,
                  not the engineer.
                </p>
              </div>
              <div className="portfolio-feature-card">
                <IconBox icon={Bell} />
                <h3>Standup &amp; Watchlist</h3>
                <p>
                  A structured standup flow with blocker tracking and action items. A
                  Watchlist for the issues you can&apos;t afford to lose sight of, with a
                  live event timeline per issue.
                </p>
              </div>
            </div>

            {/* 2d — Tech + status row */}
            <div className="portfolio-product-meta">
              <div className="tag-row">
                <span className="tag">Next.js</span>
                <span className="tag">Prisma + PostgreSQL</span>
                <span className="tag">Supabase</span>
                <span className="tag">Linear API</span>
                <span className="tag">Stripe</span>
                <span className="tag">NextAuth</span>
              </div>
              <a
                href="https://usepulsr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tag tag--link"
              >
                Live · usepulsr.com <ArrowUpRight size={12} />
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
