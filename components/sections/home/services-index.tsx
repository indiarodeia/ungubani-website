"use client";

import { useState } from "react";

import { SectionTitle } from "@/components/shared/section-title";
import { TechnicalGrid } from "@/components/shared/technical-grid";
import { ServiceIllustration } from "@/components/shared/service-illustrations";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/content/dictionaries";
import type { Locale } from "@/lib/locale";

type ServicesIndexProps = {
  eyebrow: string;
  title: string;
  description: string;
  locale: Locale;
};

export function ServicesIndex({ eyebrow, title, description, locale }: ServicesIndexProps) {
  const { services } = getDictionary(locale).services;
  const [active, setActive] = useState(0);
  const activeService = services[active];
  const ActiveIcon = activeService.icon;

  return (
    <section id="servicos" className="scroll-mt-16 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr_1fr] lg:gap-10">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionTitle eyebrow={eyebrow} title={title} description={description} />
          </div>

          <ol className="hidden border-t border-border lg:block">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === active;
              return (
                <li key={service.title} className="border-b border-border">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    className="flex w-full items-baseline gap-5 py-5 text-left"
                  >
                    <span
                      className={cn(
                        "font-heading text-sm tabular-nums transition-colors",
                        isActive ? "text-accent" : "text-muted-foreground",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={cn(
                        "font-heading text-xl font-medium transition-colors",
                        isActive ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {service.title}
                    </span>
                    <Icon
                      className={cn(
                        "size-4 shrink-0 opacity-0 transition-opacity",
                        isActive && "opacity-40",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden pr-10 pb-5 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="flex flex-col divide-y divide-border border-t border-border lg:hidden">
            {services.map((service, index) => (
              <details key={service.title} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-4 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="font-heading text-sm text-muted-foreground tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-lg font-medium text-foreground">
                    {service.title}
                  </span>
                </summary>
                <p className="pb-4 pl-9 text-muted-foreground">{service.description}</p>
              </details>
            ))}
          </div>

          <div className="relative hidden overflow-hidden border border-border bg-primary text-primary-foreground lg:block">
            <TechnicalGrid invert />
            <div className="relative flex h-full min-h-72 flex-col justify-between p-8">
              <span className="text-xs font-medium tracking-[0.12em] text-primary-foreground/60 uppercase">
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>
              <div
                key={active}
                className="flex flex-1 items-center justify-center py-4 text-primary-foreground/35 animate-in fade-in-0 duration-300 motion-reduce:animate-none"
              >
                <ServiceIllustration index={active} className="size-28" />
              </div>
              <div className="flex items-center gap-3">
                <ActiveIcon className="size-5 shrink-0 text-primary-foreground/70" />
                <p className="font-display text-2xl font-medium text-primary-foreground">
                  {activeService.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
