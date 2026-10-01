import { Reveal } from "@/components/shared/reveal";
import { TechnicalGrid } from "@/components/shared/technical-grid";
import type { LsfSustainabilityConcept } from "@/content/types";

type LsfSustainabilityProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  concepts: LsfSustainabilityConcept[];
};

export function LsfSustainability({
  eyebrow,
  title,
  paragraphs,
  concepts,
}: LsfSustainabilityProps) {
  return (
    <section className="relative overflow-hidden bg-primary px-6 py-28 text-primary-foreground">
      <TechnicalGrid invert className="opacity-[0.05]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium tracking-[0.12em] text-primary-foreground/60 uppercase">
              {eyebrow}
            </span>
            <h2 className="text-heading-1 font-display font-medium whitespace-pre-line text-primary-foreground">
              {title}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-primary-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 border-t border-primary-foreground/15 pt-10 sm:grid-cols-3">
          {concepts.map((concept, index) => (
            <Reveal key={concept.title} delay={index * 90} className="flex flex-col gap-3">
              <span className="text-sm text-primary-foreground/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-lg font-medium text-primary-foreground">
                {concept.title}
              </h3>
              <p className="text-sm text-primary-foreground/70">{concept.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
