import { cn } from "@/utils/cn";

/**
 * Smart Doors mark — gear (signal-500) + flame (signal-700) + door glyph.
 * The gear/flame colors are the ONE place brand warmth stays literal.
 * The wordmark swaps to `paper` on dark backgrounds.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      {/* gear ring (signal-500) */}
      <g stroke="var(--color-signal-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          const x1 = 32 + Math.cos(a) * 27;
          const y1 = 32 + Math.sin(a) * 27;
          const x2 = 32 + Math.cos(a) * 31;
          const y2 = 32 + Math.sin(a) * 31;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
        <circle cx="32" cy="32" r="22" />
      </g>

      {/* flame (signal-700) */}
      <path
        d="M32 12c2.4 4.6-.8 7-2.4 9.4-1.7 2.5-3 4.7-1.2 7.6 1 1.7 2.6 2.6 4.3 2.6 3.6 0 6-3.3 5.4-7.4 2 2.6 2.7 5.1 1.9 8.4-.9 3.9-4.4 6.8-8.6 6.8-4.9 0-9-3.9-9-9 0-6.4 5.5-9.8 9.6-18.4Z"
        fill="var(--color-signal-700)"
        stroke="var(--color-signal-700)"
        strokeWidth="0.5"
      />

      {/* door glyph (paper) */}
      <rect x="26.5" y="38" width="11" height="16" rx="1" stroke="var(--color-paper)" strokeWidth="1.6" fill="none" />
      <line x1="34" y1="46" x2="34" y2="47.5" stroke="var(--color-paper)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({
  className,
  showWord = true,
}: {
  className?: string;
  showWord?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      {showWord && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.15rem] font-800 tracking-tight text-paper">سمارت</span>
          <span className="mono text-[0.55rem] font-500 uppercase tracking-[0.32em] text-paper-dim">
            SMART&nbsp;DOORS
          </span>
        </span>
      )}
    </span>
  );
}
