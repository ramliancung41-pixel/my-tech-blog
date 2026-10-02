import { useId } from "react";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  const gradientId = `logo-gradient-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={`shrink-0 transition duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.65)] ${className}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="55%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
      <rect
        x="1.75"
        y="1.75"
        width="28.5"
        height="28.5"
        rx="8"
        fill="#0c0e16"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.5"
      />
      <path
        d="M12.2 11.2 8.4 16l3.8 4.8"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8 11.2 23.6 16l-3.8 4.8"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4 9.6 14.6 22.4"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
