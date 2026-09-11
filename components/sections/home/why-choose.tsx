import type { LucideIcon } from "lucide-react";

import { SectionTitle } from "@/components/shared/section-title";
import { Reveal } from "@/components/shared/reveal";
import { PrincipleIllustration } from "@/components/shared/principle-illustrations";
import type { Service } from "@/content/types";

type WhyChooseProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: Service[];
};

export function WhyChoose({ eyebrow, title, description, items }: WhyChooseProps) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="h-full">
              <WhyChooseCard
                number={index + 1}
                index={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

type WhyChooseCardProps = {
  number: number;
  index: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

function WhyChooseCard({ number, index, icon: Icon, title, description }: WhyChooseCardProps) {
  return (
    <div className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden border border-border bg-muted p-7 transition-colors duration-300 hover:bg-muted/70 lg:aspect-square">
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100" />

      <div className="relative flex h-16 items-start justify-between">
        <PrincipleIllustration
          index={index}
          className="absolute -top-2 left-0 h-20 w-full text-primary opacity-[0.12] transition-opacity duration-300 group-hover:opacity-25"
        />
        <Icon className="relative size-7 text-primary transition-colors duration-300 group-hover:text-accent" />
        <span className="relative font-heading text-xs text-muted-foreground tabular-nums">
          {String(number).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <h3 className="font-heading text-lg font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
