import { cn } from "@/lib/utils";

type IllustrationProps = {
  className?: string;
};

const shared = "h-full w-full";
const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** 01 — Construção Civil: simple building elevation. */
function CivilConstruction({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 96 96" className={cn(shared, className)} aria-hidden>
      <path d="M14 78 H82" {...strokeProps} />
      <path d="M22 78 V38 L48 20 L74 38 V78" {...strokeProps} />
      <path d="M22 38 H74" {...strokeProps} />
      <rect x="30" y="48" width="12" height="12" {...strokeProps} />
      <rect x="54" y="48" width="12" height="12" {...strokeProps} />
      <rect x="42" y="64" width="12" height="14" {...strokeProps} />
    </svg>
  );
}

/** 02 — Obras Públicas: layered road cross-section. */
function PublicWorks({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 96 96" className={cn(shared, className)} aria-hidden>
      <path d="M10 70 H86" {...strokeProps} />
      <path d="M14 78 H82" {...strokeProps} />
      <path d="M18 62 H78" {...strokeProps} />
      <path d="M34 70 L38 62 M50 70 L54 62 M66 70 L70 62" {...strokeProps} />
      <path d="M48 62 V26" {...strokeProps} />
      <path d="M38 26 H58" {...strokeProps} />
    </svg>
  );
}

/** 03 — LSF Engenheirado: light steel frame wireframe. */
function LsfFrame({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 96 96" className={cn(shared, className)} aria-hidden>
      <rect x="18" y="18" width="60" height="60" {...strokeProps} />
      <path d="M18 18 L78 78 M78 18 L18 78" {...strokeProps} />
      <path d="M18 48 H78 M48 18 V78" {...strokeProps} />
    </svg>
  );
}

/** 04 — Betão Celular: running-bond block coursing. */
function CellularConcrete({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 96 96" className={cn(shared, className)} aria-hidden>
      <rect x="14" y="24" width="20" height="14" {...strokeProps} />
      <rect x="34" y="24" width="20" height="14" {...strokeProps} />
      <rect x="54" y="24" width="20" height="14" {...strokeProps} />
      <rect x="24" y="38" width="20" height="14" {...strokeProps} />
      <rect x="44" y="38" width="20" height="14" {...strokeProps} />
      <rect x="4" y="38" width="20" height="14" {...strokeProps} />
      <rect x="64" y="38" width="20" height="14" {...strokeProps} />
      <rect x="14" y="52" width="20" height="14" {...strokeProps} />
      <rect x="34" y="52" width="20" height="14" {...strokeProps} />
      <rect x="54" y="52" width="20" height="14" {...strokeProps} />
    </svg>
  );
}

/** 05 — Projeção de Espumas: sprayed insulation layers. */
function FoamSpray({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 96 96" className={cn(shared, className)} aria-hidden>
      <path d="M14 34 Q24 26 34 34 T54 34 T74 34 T82 34" {...strokeProps} />
      <path d="M14 48 Q24 40 34 48 T54 48 T74 48 T82 48" {...strokeProps} />
      <path d="M14 62 Q24 54 34 62 T54 62 T74 62 T82 62" {...strokeProps} />
      <path d="M48 20 V16 M48 76 V72" {...strokeProps} />
    </svg>
  );
}

/** 06 — Impermeabilizações: layered waterproofing membrane. */
function Waterproofing({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 96 96" className={cn(shared, className)} aria-hidden>
      <path d="M14 30 Q24 24 34 30 T54 30 T74 30 T82 30" {...strokeProps} />
      <path d="M14 44 H82" {...strokeProps} />
      <path d="M14 54 H82" {...strokeProps} />
      <path d="M14 64 H82" {...strokeProps} />
      <path d="M28 44 V64 M48 44 V64 M68 44 V64" {...strokeProps} strokeWidth={0.75} />
    </svg>
  );
}

const illustrations = [
  CivilConstruction,
  PublicWorks,
  LsfFrame,
  CellularConcrete,
  FoamSpray,
  Waterproofing,
];

type ServiceIllustrationProps = {
  index: number;
  className?: string;
};

/**
 * Low-contrast technical line art standing in for each service — temporary
 * internal artwork, easy to swap for commissioned illustrations later.
 */
export function ServiceIllustration({ index, className }: ServiceIllustrationProps) {
  const Illustration = illustrations[index % illustrations.length];
  return <Illustration className={className} />;
}
