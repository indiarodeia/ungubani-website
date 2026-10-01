import { Reveal } from "@/components/shared/reveal";
import { LsfWallLayer } from "@/components/shared/lsf-illustrations";
import type { LsfSystemLayer } from "@/content/types";

type LsfSystemDiagramProps = {
  eyebrow: string;
  title: string;
  description: string;
  disclaimer: string;
  layers: LsfSystemLayer[];
};

export function LsfSystemDiagram({
  eyebrow,
  title,
  description,
  disclaimer,
  layers,
}: LsfSystemDiagramProps) {
  return (
    <section className="bg-muted px-6 py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="flex max-w-2xl flex-col gap-5">
          <span className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
            {eyebrow}
          </span>
          <h2 className="text-heading-1 font-display font-medium text-foreground">{title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
        </div>

        {/* Desktop / tablet — staggered exploded stack. */}
        <div
          className="relative hidden pl-4 sm:block"
          style={{ height: `${layers.length * 56 + 48}px` }}
        >
          {layers.map((layer, index) => (
            <Reveal
              key={layer.label}
              delay={index * 90}
              className="absolute flex items-center gap-6"
              style={{ top: `${index * 56}px`, left: `${index * 22}px` }}
            >
              <span className="w-6 shrink-0 text-right font-heading text-xs text-muted-foreground tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-10 w-full max-w-xl text-foreground/70">
                <LsfWallLayer />
              </span>
              <span className="shrink-0 text-sm font-medium whitespace-nowrap text-foreground">
                {layer.label}
              </span>
            </Reveal>
          ))}
        </div>

        {/* Mobile — plain, legible list. */}
        <div className="flex flex-col divide-y divide-border border-t border-border sm:hidden">
          {layers.map((layer, index) => (
            <div key={layer.label} className="flex items-center gap-4 py-4">
              <span className="font-heading text-xs text-muted-foreground tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-foreground">{layer.label}</span>
            </div>
          ))}
        </div>

        <p className="max-w-2xl border-t border-border pt-6 text-sm text-muted-foreground">
          {disclaimer}
        </p>
      </div>
    </section>
  );
}
