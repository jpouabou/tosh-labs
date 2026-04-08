import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand-block">
          <div>
            <div className="brand__lockup--footer">
              <BrandLogo className="brand__logo brand__logo--footer" />
              <span className="brand__wordmark">Tosh Labs</span>
            </div>
            <p className="site-footer__tagline">Product engineering partner</p>
          </div>
        </div>
        <nav className="site-footer__nav" aria-label="Footer">
          <div className="site-footer__col">
            <p className="site-footer__col-heading">Services</p>
            <Link href="/services/prototype-sprint">Prototype Sprint</Link>
            <Link href="/services/production-mvp">Production MVP</Link>
            <Link href="/services/scale-architecture">Scale &amp; Architecture</Link>
            <Link href="/services/fractional-cto">Fractional CTO</Link>
          </div>
          <div className="site-footer__col">
            <p className="site-footer__col-heading">Company</p>
            <a href="/#ai">AI approach</a>
            <Link href="/portfolio">Portfolio</Link>
            <a href="/#process">Process</a>
            <a href="/#contact">Contact</a>
          </div>
          <div className="site-footer__col">
            <p className="site-footer__col-heading">Products</p>
            <a href="https://www.usepulsr.com" target="_blank" rel="noopener noreferrer" className="footer-external">
              Pulsr <ArrowUpRight size={11} aria-hidden />
            </a>
            <a href="https://www.usepausr.com" target="_blank" rel="noopener noreferrer" className="footer-external">
              Pausr <ArrowUpRight size={11} aria-hidden />
            </a>
          </div>
          <div className="site-footer__col">
            <p className="site-footer__col-heading">Contact</p>
            <a href="mailto:hello@toshlabs.com">hello@toshlabs.com</a>
          </div>
        </nav>
      </div>
      <div className="container site-footer__bottom">
        <p>© 2026 Tosh Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}
