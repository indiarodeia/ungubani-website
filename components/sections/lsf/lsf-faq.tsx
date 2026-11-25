import { ChevronDown } from "lucide-react";

import type { LsfFaqItem } from "@/content/types";

type LsfFaqProps = {
  eyebrow: string;
  title: string;
  items: LsfFaqItem[];
};

export function LsfFaq({ eyebrow, title, items }: LsfFaqProps) {
  return (
    <section className="bg-muted px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
          <span className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
            {eyebrow}
          </span>
          <h2 className="text-heading-1 font-display font-medium text-foreground">{title}</h2>
        </div>

        <div className="flex flex-col divide-y divide-border border-t border-border">
          {items.map((item) => (
            <details key={item.question} name="lsf-faq" className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="font-heading text-lg font-medium text-foreground">
                  {item.question}
                </span>
                <ChevronDown className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="pb-5 pr-10 leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
