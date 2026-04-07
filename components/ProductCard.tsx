import { Check, ArrowUpRight } from "lucide-react";

type ProductCardProps = {
  name: string;
  label: string;
  brief: string;
  deliverables: string[];
  stack: string[];
  accent: "pulse" | "pause";
  logoSrc: string;
  productUrl: string;
};

export default function ProductCard({
  name,
  label,
  brief,
  deliverables,
  stack,
  accent,
  logoSrc,
  productUrl,
}: ProductCardProps) {
  return (
    <article className={`product-card product-card--${accent}`}>

      {/* Header: logo + visit link */}
      <div className="product-card__logo-row">
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG wordmarks from public/ */}
        <img
          src={logoSrc}
          alt={name}
          className={`product-card__logo product-card__logo--${accent}`}
        />
        <a
          className="product-card__external"
          href={productUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site <ArrowUpRight size={12} aria-hidden="true" />
        </a>
      </div>

      <p className="product-card__eyebrow">{label}</p>
      <h3 className="product-card__name">{name}</h3>

      {/* Two-column body */}
      <div className="product-card__body">

        <div className="product-card__col">
          <p className="product-card__section-label">The brief</p>
          <p className="product-card__brief">{brief}</p>
        </div>

        <div className="product-card__col">
          <p className="product-card__section-label">What we delivered</p>
          <ul className="product-card__deliverables">
            {deliverables.map((item) => (
              <li key={item}>
                <Check size={13} strokeWidth={2.5} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="product-card__stack">
            {stack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
