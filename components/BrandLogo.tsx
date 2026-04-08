type BrandLogoProps = {
  className?: string;
};

const strokeT = {
  stroke: "var(--bg)",
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none" as const,
};

const strokeL = {
  stroke: "var(--logo-l-stroke)",
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none" as const,
};

/** Icon-only: T (page bg) + L (accent stroke) on solid tile. */
export default function BrandLogo({ className = "brand__logo" }: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="52" height="52" rx="14" fill="currentColor" />
      <g transform="translate(2,2)">
        <path d="M 14 18 L 38 18 M 26 18 L 26 42" {...strokeT} />
        <path d="M 14 20.5 L 24 20.5 L 24 42" {...strokeL} />
      </g>
    </svg>
  );
}
