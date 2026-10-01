import { Reveal } from "@/components/shared/reveal";
import type { LsfProcessStage } from "@/content/types";

type LsfApproachProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  stages: LsfProcessStage[];
};

export function LsfApproach({ eyebrow, title, paragraphs, stages }: LsfApproachProps) {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
              {eyebrow}
            </span>
            <h2 className="text-heading-1 font-display font-medium text-foreground">{title}</h2>
          </div>
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Desktop / tablet — horizontal timeline. */}
        <div className="hidden sm:block">
          <div className="relative grid grid-cols-8 gap-4 pt-5">
            <div className="absolute inset-x-0 top-0 h-px bg-border" />
            {stages.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 80} className="relative flex flex-col gap-3">
                <span className="absolute -top-5 left-0 size-2 -translate-y-1/2 rounded-full bg-accent" />
                <span className="font-heading text-xs text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-foreground">{stage.title}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile — vertical timeline. */}
        <div className="relative flex flex-col gap-8 pl-6 sm:hidden">
          <div className="absolute top-1 bottom-1 left-[3px] w-px bg-border" />
          {stages.map((stage, index) => (
            <Reveal
              key={stage.title}
              delay={index * 70}
              className="relative flex items-center gap-4"
            >
              <span className="absolute -left-6 size-2 rounded-full bg-accent" />
              <span className="font-heading text-xs text-muted-foreground tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-foreground">{stage.title}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
