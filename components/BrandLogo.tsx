type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export default function BrandLogo({
  className = "brand__logo",
  compact = false,
}: BrandLogoProps) {
  if (compact) {
    return (
      <svg
        viewBox="0 0 56 56"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <rect x="2" y="2" width="52" height="52" rx="16" fill="currentColor" />
        <rect x="16" y="16" width="24" height="6" rx="3" fill="var(--bg)" />
        <rect x="25" y="16" width="6" height="24" rx="3" fill="var(--bg)" />
        <rect x="25" y="25" width="18" height="6" rx="3" fill="#86EFAC" />
        <rect x="34" y="34" width="9" height="6" rx="3" fill="#86EFAC" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 360 72"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="4" y="10" width="52" height="52" rx="16" fill="currentColor" />
      <rect x="18" y="24" width="24" height="6" rx="3" fill="var(--bg)" />
      <rect x="27" y="24" width="6" height="24" rx="3" fill="var(--bg)" />
      <rect x="27" y="33" width="18" height="6" rx="3" fill="#86EFAC" />
      <rect x="36" y="42" width="9" height="6" rx="3" fill="#86EFAC" />

      <text
        x="78"
        y="33"
        fill="currentColor"
        fontFamily="var(--font-sans), Inter, system-ui, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="-0.04em"
      >
        Tosh Labs
      </text>
      <text
        x="79"
        y="54"
        fill="var(--muted)"
        fontFamily="var(--font-sans), Inter, system-ui, sans-serif"
        fontSize="10"
        fontWeight="700"
        letterSpacing="0.24em"
      >
        PRODUCT ENGINEERING
      </text>
    </svg>
  );
}
