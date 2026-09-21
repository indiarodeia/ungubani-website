import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ParallaxMedia } from "@/components/shared/parallax-media";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image?: string;
  focalPoint?: string;
  size?: "full" | "compact";
};

export function Hero({
  eyebrow,
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  image,
  focalPoint,
  size = "full",
}: HeroProps) {
  const isFull = size === "full";

  if (!isFull) {
    return (
      <section className="bg-muted px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          {eyebrow && (
            <span className="text-sm font-medium tracking-wide text-accent uppercase">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display text-display-2 font-medium whitespace-pre-line text-foreground italic">
            {headline}
          </h1>
          {subheadline && (
            <p className="max-w-xl text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
      </section>
    );
  }

  const headlineLines = headline.split("\n");

  return (
    <section className="relative -mt-20 min-h-[max(640px,92vh)] w-full overflow-hidden bg-primary lg:h-screen">
      {image && (
        <ParallaxMedia
          src={image}
          alt=""
          priority
          sizes="100vw"
          strength={0.06}
          focalPoint={focalPoint}
        />
      )}

      {/* A single gradient pooled behind the copy, bottom-left — the render
          stays clear and unveiled everywhere else, architecture included. */}
      <div className="absolute inset-0 bg-[radial-gradient(130%_95%_at_0%_100%,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.24)_38%,rgba(0,0,0,0)_66%)]" />

      <div className="relative flex h-full flex-col justify-center gap-9 px-6 py-28 lg:gap-10 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
        <div className="flex max-w-4xl flex-col gap-7">
          {eyebrow && (
            <Reveal>
              <span className="text-xs font-medium tracking-[0.16em] text-primary-foreground/90 uppercase">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={90}>
            <h1 className="font-display text-4xl leading-[1.05] tracking-tight font-medium text-primary-foreground italic sm:text-5xl lg:text-6xl xl:text-display-1">
              {headlineLines.map((line, index) => (
                <span key={line} className="block lg:whitespace-nowrap">
                  {line}
                  {index < headlineLines.length - 1 && <br className="hidden lg:block" />}
                </span>
              ))}
            </h1>
          </Reveal>
          {subheadline && (
            <Reveal delay={180}>
              <p className="max-w-md text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
                {subheadline}
              </p>
            </Reveal>
          )}
          <div className="flex flex-wrap items-center gap-5">
            {ctaLabel && ctaHref && (
              <Reveal delay={270}>
                <Button
                  asChild
                  className="h-[50px] rounded-[2px] px-8 text-sm tracking-[0.01em]"
                >
                  <Link href={ctaHref} className="inline-flex items-center gap-2">
                    {ctaLabel}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>
                </Button>
              </Reveal>
            )}
            {secondaryLabel && secondaryHref && (
              <Reveal delay={360}>
                <Button
                  asChild
                  variant="outline-invert"
                  className="h-[50px] rounded-[2px] px-8 text-sm tracking-[0.01em]"
                >
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              </Reveal>
            )}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 hidden justify-center sm:flex">
        <div className="flex flex-col items-center gap-2 text-primary-foreground/70">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
          <span className="h-8 w-px animate-pulse bg-primary-foreground/50 motion-reduce:animate-none" />
        </div>
      </div>
    </section>
  );
}
