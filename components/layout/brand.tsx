import Link from "next/link";

interface BrandProps {
  href?: string;
  ariaLabel?: string;
}

export function Brand({ href = "#home", ariaLabel = "Aster Luxury" }: BrandProps) {
  return (
    <Link href={href} className="brand" aria-label={ariaLabel}>
      <span className="brand-mark">
        <svg viewBox="0 0 32 32" fill="none">
          <path
            d="M16 3 L28 13 L16 29 L4 13 Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path d="M4 13 L28 13" stroke="currentColor" strokeWidth="1" />
          <path d="M16 3 L11 13 L16 29" stroke="currentColor" strokeWidth="1" />
          <path d="M16 3 L21 13 L16 29" stroke="currentColor" strokeWidth="1" />
        </svg>
      </span>
      <span className="brand-name">
        Aster<em>Luxury</em>
      </span>
    </Link>
  );
}
