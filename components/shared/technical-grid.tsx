import { cn } from "@/lib/utils";

type TechnicalGridProps = {
  className?: string;
  invert?: boolean;
};

/**
 * Faint architectural grid + contour lines used as a discreet textural
 * layer. Never decorative on its own — always positioned absolute behind
 * real content, at low opacity.
 */
export function TechnicalGrid({ className, invert = false }: TechnicalGridProps) {
  return (
    <svg
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        invert ? "opacity-[0.06]" : "opacity-[0.05]",
        className,
      )}
      preserveAspectRatio="none"
      viewBox="0 0 800 600"
    >
      <defs>
        <pattern id="tg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke={invert ? "#ffffff" : "currentColor"}
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#tg-grid)" />
      <path
        d="M0 480 C 140 420, 260 520, 400 460 S 660 380, 800 440"
        fill="none"
        stroke={invert ? "#ffffff" : "currentColor"}
        strokeWidth="1"
      />
      <path
        d="M0 520 C 160 470, 300 560, 440 500 S 680 430, 800 490"
        fill="none"
        stroke={invert ? "#ffffff" : "currentColor"}
        strokeWidth="1"
      />
    </svg>
  );
}
