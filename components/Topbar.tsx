import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const serviceLinks = [
  { href: "/services/prototype-sprint",   label: "Prototype Sprint",     desc: "Idea to testable product in weeks" },
  { href: "/services/production-mvp",     label: "Production MVP",       desc: "Production-grade from commit one" },
  { href: "/services/scale-architecture", label: "Scale & Architecture", desc: "Fix what's slowing you down" },
  { href: "/services/fractional-cto",     label: "Fractional CTO",       desc: "CTO-level thinking, part-time" },
];

export default function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar__inner container">
        <a className="brand" href="/" aria-label="Tosh Labs home">
          <BrandLogo />
        </a>

        <nav className="topbar__nav" aria-label="Primary">
          {/* Services — CSS-only hover dropdown */}
          <div className="topbar__dropdown-wrap">
            <span className="topbar__nav-btn" tabIndex={0} role="button" aria-haspopup="true">
              Services <ChevronDown size={12} className="topbar__chevron" aria-hidden />
            </span>
            <div className="topbar__dropdown" role="menu">
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} className="topbar__dropdown-item" role="menuitem">
                  <span className="topbar__dropdown-label">{s.label}</span>
                  <span className="topbar__dropdown-desc">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          <a href="/#ai">AI</a>
          <Link href="/portfolio">Portfolio</Link>
          <a href="/#process">Process</a>
          <a href="https://www.usepulsr.com" target="_blank" rel="noopener noreferrer">
            Pulsr <ArrowUpRight className="nav-external" aria-hidden />
          </a>
          <a href="https://www.usepausr.com" target="_blank" rel="noopener noreferrer">
            Pausr <ArrowUpRight className="nav-external" aria-hidden />
          </a>
        </nav>

        <a className="button button--accent topbar__cta" href="mailto:hello@toshlabs.com">
          Start a project
        </a>
      </div>
    </header>
  );
}
