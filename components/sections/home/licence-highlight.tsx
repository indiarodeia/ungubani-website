import { Award } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { TechnicalGrid } from "@/components/shared/technical-grid";

type LicenceHighlightProps = {
  classNumber: string;
  heading: string;
  label: string;
  text: string;
};

export function LicenceHighlight({ classNumber, heading, label, text }: LicenceHighlightProps) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <TechnicalGrid invert />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="flex flex-col items-stretch gap-8 sm:flex-row">
          <div className="flex shrink-0 flex-col items-center justify-center border border-primary-foreground/20 px-8 py-5">
            <span className="font-display text-6xl leading-none font-medium text-primary-foreground italic sm:text-7xl">
              {classNumber}
            </span>
            <span className="mt-2 text-[0.65rem] font-medium tracking-[0.2em] text-primary-foreground/60 uppercase">
              {label}
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-3 border-t border-primary-foreground/20 pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
            <div className="flex items-center gap-2">
              <Award className="size-4 text-primary-foreground/60" />
              <span className="text-xs font-medium tracking-[0.15em] text-primary-foreground/60 uppercase">
                {heading}
              </span>
            </div>
            <p className="max-w-2xl text-lg text-primary-foreground/85">{text}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
