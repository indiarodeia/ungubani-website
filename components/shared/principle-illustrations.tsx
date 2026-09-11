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

/** 01 — Rigor Técnico: column and beam connection detail. */
function ColumnBeamJoint({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" className={cn(shared, className)} aria-hidden preserveAspectRatio="xMidYMid meet">
      <path d="M20 30 H180" {...strokeProps} />
      <path d="M20 40 H180" {...strokeProps} />
      <path d="M92 40 V110 M108 40 V110" {...strokeProps} />
      <path d="M76 40 L92 30 M124 40 L108 30" {...strokeProps} />
    </svg>
  );
}

/** 02 — Qualidade de Execução: wall / floor build-up section. */
function WallSection({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" className={cn(shared, className)} aria-hidden preserveAspectRatio="xMidYMid meet">
      <path d="M30 20 V110 M50 20 V110 M76 20 V110 M96 20 V110" {...strokeProps} />
      <path d="M30 20 H96 M30 110 H96" {...strokeProps} />
      <path d="M120 100 H180 M120 90 H180 M120 80 H180" {...strokeProps} />
    </svg>
  );
}

/** 03 — Soluções Inovadoras: LSF structural wireframe. */
function LsfWireframe({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" className={cn(shared, className)} aria-hidden preserveAspectRatio="xMidYMid meet">
      <path d="M40 20 V100 M100 20 V100 M160 20 V100" {...strokeProps} />
      <path d="M40 20 H160 M40 60 H160 M40 100 H160" {...strokeProps} />
      <path d="M40 20 L100 60 M100 20 L40 60 M100 60 L160 100 M160 60 L100 100" {...strokeProps} />
    </svg>
  );
}

/** 04 — Cumprimento de Prazos: phased construction schedule. */
function ScheduleBars({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" className={cn(shared, className)} aria-hidden preserveAspectRatio="xMidYMid meet">
      <path d="M30 30 H170 M30 30 V95" {...strokeProps} />
      <path d="M40 45 H80 M40 60 H120 M40 75 H150" strokeWidth={3} stroke="currentColor" strokeLinecap="round" />
      <path d="M80 40 V50 M120 55 V65 M150 70 V80" {...strokeProps} />
    </svg>
  );
}

/** 05 — Conhecimento do Território: Azorean contour lines. */
function TerritoryContours({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" className={cn(shared, className)} aria-hidden preserveAspectRatio="xMidYMid meet">
      <path d="M20 90 Q60 40 100 55 T180 45" {...strokeProps} />
      <path d="M25 75 Q65 55 100 68 T175 62" {...strokeProps} />
      <path d="M30 60 Q65 75 100 82 T170 78" {...strokeProps} />
    </svg>
  );
}

/** 06 — Acompanhamento Personalizado: annotated floor plan. */
function FloorPlan({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 120" className={cn(shared, className)} aria-hidden preserveAspectRatio="xMidYMid meet">
      <path d="M30 20 H160 V100 H30 Z" {...strokeProps} />
      <path d="M100 20 V60 M30 60 H100" {...strokeProps} />
      <path d="M120 100 V70 M140 100 V70" {...strokeProps} strokeDasharray="3 4" />
      <path d="M40 30 H60" {...strokeProps} />
    </svg>
  );
}

const illustrations = [
  ColumnBeamJoint,
  WallSection,
  LsfWireframe,
  ScheduleBars,
  TerritoryContours,
  FloorPlan,
];

type PrincipleIllustrationProps = {
  index: number;
  className?: string;
};

/**
 * Low-contrast blueprint-style line art for the "why choose us" cards —
 * temporary internal artwork, easy to swap for commissioned illustrations.
 */
export function PrincipleIllustration({ index, className }: PrincipleIllustrationProps) {
  const Illustration = illustrations[index % illustrations.length];
  return <Illustration className={className} />;
}
