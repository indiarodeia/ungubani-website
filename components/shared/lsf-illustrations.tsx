import { cn } from "@/lib/utils";

type IllustrationProps = {
  className?: string;
};

const shared = "h-full w-full";
const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * Large axonometric line drawing of an LSF stud wall frame — the Hero's
 * visual anchor. Deliberately a technical diagram, not a photograph: the
 * project has no verified photography of an Ungubani LSF structure yet.
 */
export function LsfAxonometric({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 520 520"
      className={cn(shared, className)}
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      {/* floor track */}
      <path d="M60 420 L260 480 L460 420 L260 360 Z" {...strokeProps} />
      {/* vertical studs */}
      <path d="M90 410 V140 M150 429 V159 M210 448 V178 M270 460 V190 M330 448 V178 M390 429 V159 M430 416 V146" {...strokeProps} strokeWidth={0.75} />
      {/* top track */}
      <path d="M60 160 L260 100 L460 160 L260 220 Z" {...strokeProps} />
      {/* diagonal bracing */}
      <path d="M90 410 L430 146 M430 416 L90 140" {...strokeProps} strokeWidth={0.5} strokeDasharray="2 5" />
      {/* opening (window) */}
      <path d="M190 330 L190 240 L330 270 L330 360 Z" {...strokeProps} strokeWidth={0.75} />
    </svg>
  );
}

/** 01 — Rapidez: progressive assembly marks. */
function Speed({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn(shared, className)} aria-hidden>
      <path d="M8 48 H24 M8 38 H36 M8 28 H48" {...strokeProps} />
      <path d="M24 48 V38 M36 38 V28 M48 28 V18" {...strokeProps} strokeWidth={0.6} strokeDasharray="2 3" />
    </svg>
  );
}

/** 02 — Precisão: dimensioned stud detail. */
function Precision({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn(shared, className)} aria-hidden>
      <rect x="22" y="10" width="20" height="44" {...strokeProps} />
      <path d="M14 10 V54 M10 10 H18 M10 54 H18" {...strokeProps} strokeWidth={0.6} />
    </svg>
  );
}

/** 03 — Menos desperdício: optimised cut layout. */
function LessWaste({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn(shared, className)} aria-hidden>
      <rect x="8" y="14" width="48" height="36" {...strokeProps} />
      <path d="M8 30 H40 M40 14 V50 M40 38 H56" {...strokeProps} strokeWidth={0.6} />
    </svg>
  );
}

/** 04 — Obra mais limpa: single clean stack, no debris lines. */
function CleanSite({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn(shared, className)} aria-hidden>
      <path d="M14 46 H50 M14 38 H50 M14 30 H50" {...strokeProps} />
      <path d="M14 46 V30 M50 46 V30" {...strokeProps} strokeWidth={0.6} />
    </svg>
  );
}

/** 05 — Eficiência: layered envelope cross-section. */
function Efficiency({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn(shared, className)} aria-hidden>
      <path d="M12 12 V52 M22 12 V52 M34 12 V52 M44 12 V52 M52 12 V52" {...strokeProps} strokeWidth={0.6} />
      <path d="M12 12 H52 M12 52 H52" {...strokeProps} />
    </svg>
  );
}

/** 06 — Liberdade arquitetónica: varied roof silhouettes. */
function ArchitecturalFreedom({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 64 64" className={cn(shared, className)} aria-hidden>
      <path d="M8 48 L8 30 L18 22 L18 48" {...strokeProps} />
      <path d="M24 48 V26 L34 18 L44 26 V48" {...strokeProps} />
      <path d="M50 48 V32 L58 32 L58 48" {...strokeProps} />
      <path d="M8 48 H58" {...strokeProps} />
    </svg>
  );
}

const advantageIllustrations = [
  Speed,
  Precision,
  LessWaste,
  CleanSite,
  Efficiency,
  ArchitecturalFreedom,
];

type AdvantageIllustrationProps = {
  index: number;
  className?: string;
};

export function LsfAdvantageIllustration({ index, className }: AdvantageIllustrationProps) {
  const Illustration = advantageIllustrations[index % advantageIllustrations.length];
  return <Illustration className={className} />;
}

/** One conceptual exploded-wall layer — a plain rectangle with a subtle
 * offset, stacked and staggered by the caller to suggest depth. */
export function LsfWallLayer({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 240 40" className={cn(shared, className)} aria-hidden preserveAspectRatio="none">
      <rect x="1" y="1" width="238" height="38" {...strokeProps} strokeWidth={0.75} />
    </svg>
  );
}
