import { Reveal } from "@/components/shared/reveal";
import { TechnicalGrid } from "@/components/shared/technical-grid";

type LsfIntroductionProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export function LsfIntroduction({ eyebrow, title, paragraphs }: LsfIntroductionProps) {
  return (
    <section id="sistema" className="scroll-mt-20 px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
            {eyebrow}
          </span>
          <h2 className="text-heading-1 font-display font-medium whitespace-pre-line text-foreground">
            {title}
          </h2>
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <Reveal className="relative aspect-square w-full self-center border border-border bg-muted">
          <TechnicalGrid className="opacity-[0.08]" />
          <svg
            viewBox="0 0 200 200"
            className="relative h-full w-full p-10 text-primary"
            aria-hidden
          >
            <g fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round">
              <path d="M40 170 V50 M80 170 V50 M120 170 V50 M160 170 V50" strokeWidth={1.5} />
              <path d="M30 50 H170 M30 170 H170" strokeWidth={1.5} />
              <path d="M40 90 H80 M120 90 H160" strokeWidth={0.6} strokeDasharray="2 4" />
              <path d="M40 130 H160" strokeWidth={0.6} strokeDasharray="2 4" />
            </g>
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
