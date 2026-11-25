import { Reveal } from "@/components/shared/reveal";
import { LsfAdvantageIllustration } from "@/components/shared/lsf-illustrations";
import type { LsfAdvantage } from "@/content/types";

type LsfAdvantagesProps = {
  eyebrow: string;
  title: string;
  items: LsfAdvantage[];
};

export function LsfAdvantages({ eyebrow, title, items }: LsfAdvantagesProps) {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <div className="flex flex-col gap-5">
          <span className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
            {eyebrow}
          </span>
          <h2 className="text-heading-1 font-display font-medium text-foreground">{title}</h2>
        </div>

        <div className="flex flex-col divide-y divide-border border-t border-border">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 60} as="div">
              <div className="group flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:gap-10 lg:py-12">
                <span className="font-display text-4xl leading-none font-medium text-muted-foreground/40 tabular-nums sm:w-24 sm:shrink-0 sm:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:gap-10">
                  <h3 className="font-heading text-xl font-medium text-foreground sm:w-56 sm:shrink-0">
                    {item.title}
                  </h3>
                  <p className="max-w-xl text-muted-foreground">{item.description}</p>
                </div>
                <span className="hidden size-10 shrink-0 text-primary/30 transition-colors duration-300 group-hover:text-accent lg:block">
                  <LsfAdvantageIllustration index={index} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
