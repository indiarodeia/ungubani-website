import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { TechnicalGrid } from "@/components/shared/technical-grid";
import { LsfAxonometric } from "@/components/shared/lsf-illustrations";

type LsfHeroProps = {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

/**
 * The page's own hero — built apart from the shared `<Hero>` because its
 * visual anchor is a technical line drawing, not a photograph (no verified
 * photography of an Ungubani LSF structure exists yet). Typography and
 * interaction match `<Hero>` exactly so the page still reads as one site.
 */
export function LsfHero({
  eyebrow,
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: LsfHeroProps) {
  const headlineLines = headline.split("\n");

  return (
    <section className="relative overflow-hidden bg-primary">
      <TechnicalGrid invert className="opacity-[0.07]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:gap-10 lg:py-28">
        <div className="flex max-w-xl flex-col gap-7">
          <Reveal>
            <span className="text-xs font-medium tracking-[0.16em] text-primary-foreground/90 uppercase">
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="font-display text-4xl leading-[1.05] font-medium whitespace-pre-line text-primary-foreground italic sm:text-5xl lg:text-6xl">
              {headlineLines.map((line, index) => (
                <span key={line} className="block lg:whitespace-nowrap">
                  {line}
                  {index < headlineLines.length - 1 && <br className="hidden lg:block" />}
                </span>
              ))}
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="max-w-md text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              {subheadline}
            </p>
          </Reveal>
          <div className="flex flex-wrap items-center gap-5">
            <Reveal delay={270}>
              <Button asChild className="h-[50px] rounded-[2px] px-8 text-sm tracking-[0.01em]">
                <Link href={ctaHref} className="inline-flex items-center gap-2">
                  {ctaLabel}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={360}>
              <Button
                asChild
                variant="outline-invert"
                className="h-[50px] rounded-[2px] px-8 text-sm tracking-[0.01em]"
              >
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            </Reveal>
          </div>
        </div>

        <Reveal delay={200} className="relative aspect-square w-full max-w-md shrink-0 lg:max-w-lg">
          <LsfAxonometric className="text-primary-foreground/50" />
        </Reveal>
      </div>
    </section>
  );
}
