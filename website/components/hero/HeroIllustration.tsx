/**
 * A tasteful inline-SVG hero illustration — a stylized "compare two
 * treatment cards" motif. No external image asset, zero CLS.
 */
export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 380"
      role="img"
      aria-label="Two treatment options being compared side by side"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hero-panel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#DCE8F7" />
          <stop offset="1" stopColor="#F1F6FC" />
        </linearGradient>
      </defs>

      {/* Backdrop panel */}
      <rect
        x="0"
        y="0"
        width="480"
        height="380"
        rx="24"
        fill="url(#hero-panel)"
      />

      {/* Left comparison card */}
      <g transform="translate(48 70)">
        <rect
          width="170"
          height="240"
          rx="16"
          fill="#FFFFFF"
          stroke="#E2E8F0"
        />
        <rect x="20" y="22" width="44" height="44" rx="10" fill="#1E4D8C" />
        <rect x="76" y="30" width="70" height="10" rx="5" fill="#0F172A" />
        <rect x="76" y="48" width="50" height="8" rx="4" fill="#64748B" />
        {/* score */}
        <rect x="20" y="86" width="130" height="34" rx="8" fill="#FEF3E0" />
        <text
          x="34"
          y="110"
          fontFamily="sans-serif"
          fontSize="22"
          fontWeight="800"
          fill="#0B1F3A"
        >
          9.8
        </text>
        {/* stars */}
        <g transform="translate(86 96)" fill="#F5A623">
          <circle cx="6" cy="8" r="5" />
          <circle cx="22" cy="8" r="5" />
          <circle cx="38" cy="8" r="5" />
          <circle cx="54" cy="8" r="5" />
        </g>
        {/* bullets */}
        <rect x="20" y="138" width="130" height="8" rx="4" fill="#E2E8F0" />
        <rect x="20" y="156" width="110" height="8" rx="4" fill="#E2E8F0" />
        <rect x="20" y="174" width="120" height="8" rx="4" fill="#E2E8F0" />
        {/* cta */}
        <rect x="20" y="198" width="130" height="26" rx="8" fill="#16A34A" />
      </g>

      {/* Right comparison card (raised) */}
      <g transform="translate(262 48)">
        <rect
          width="170"
          height="240"
          rx="16"
          fill="#FFFFFF"
          stroke="#E2E8F0"
        />
        <rect x="20" y="22" width="44" height="44" rx="10" fill="#16A34A" />
        <rect x="76" y="30" width="70" height="10" rx="5" fill="#0F172A" />
        <rect x="76" y="48" width="50" height="8" rx="4" fill="#64748B" />
        <rect x="20" y="86" width="130" height="34" rx="8" fill="#FEF3E0" />
        <text
          x="34"
          y="110"
          fontFamily="sans-serif"
          fontSize="22"
          fontWeight="800"
          fill="#0B1F3A"
        >
          9.6
        </text>
        <g transform="translate(86 96)" fill="#F5A623">
          <circle cx="6" cy="8" r="5" />
          <circle cx="22" cy="8" r="5" />
          <circle cx="38" cy="8" r="5" />
          <circle cx="54" cy="8" r="5" />
        </g>
        <rect x="20" y="138" width="130" height="8" rx="4" fill="#E2E8F0" />
        <rect x="20" y="156" width="110" height="8" rx="4" fill="#E2E8F0" />
        <rect x="20" y="174" width="120" height="8" rx="4" fill="#E2E8F0" />
        <rect x="20" y="198" width="130" height="26" rx="8" fill="#16A34A" />
      </g>

      {/* "VS" badge */}
      <g transform="translate(218 180)">
        <circle cx="22" cy="22" r="26" fill="#0B1F3A" />
        <text
          x="22"
          y="30"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="16"
          fontWeight="800"
          fill="#FFFFFF"
        >
          VS
        </text>
      </g>
    </svg>
  );
}
