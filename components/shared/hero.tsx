import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ParallaxMedia } from "@/components/shared/parallax-media";
import { AnnotationPanel } from "@/components/shared/annotation-panel";
import { TechnicalGrid } from "@/components/shared/technical-grid";
import { Reveal } from "@/components/shared/reveal";

type HeroLicence = {
  value: string;
};

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
  licence?: HeroLicence;
  licenceLabel?: string;
  panelLabel?: string;
  specialisms?: string[];
  location?: string;
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
  licence,
  licenceLabel = "Alvará",
  panelLabel = "Informação Técnica",
  specialisms,
  location,
  size = "full",
}: HeroProps) {
  const isFull = size === "full";

  if (!isFull) {
    return (
      <section className="bg-muted px-6 py-20">
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

  return (
    <section className="relative -mt-16 h-[92vh] min-h-[640px] w-full overflow-hidden bg-primary lg:h-screen">
      {image && (
        <ParallaxMedia
          src={image}
          alt=""
          priority
          sizes="100vw"
          strength={0.08}
          focalPoint={focalPoint}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/5 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary/35 via-primary/0 to-transparent lg:w-[55%]" />

      <div className="relative flex h-full flex-col justify-end gap-10 px-6 pt-24 pb-20 sm:pb-24 lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:pr-16 lg:pb-28 lg:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
        <div className="flex max-w-2xl flex-col gap-6">
          {eyebrow && (
            <Reveal>
              <span className="text-xs font-medium tracking-[0.15em] text-primary-foreground/80 uppercase">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={90}>
            <h1 className="font-display text-display-1 font-medium whitespace-pre-line text-primary-foreground italic">
              {headline}
            </h1>
          </Reveal>
          {subheadline && (
            <Reveal delay={180}>
              <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/80">
                {subheadline}
              </p>
            </Reveal>
          )}
          <Reveal delay={270}>
            <div className="flex flex-wrap items-center gap-6">
              {ctaLabel && ctaHref && (
                <Button asChild size="lg">
                  <Link href={ctaHref}>{ctaLabel}</Link>
                </Button>
              )}
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/90 underline-offset-4 hover:underline"
                >
                  {secondaryLabel}
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          </Reveal>
        </div>

        {(licence || (specialisms && specialisms.length > 0)) && (
          <Reveal delay={450} className="w-full max-w-xs lg:w-72 lg:shrink-0">
            <AnnotationPanel label={panelLabel} className="w-full lg:w-72">
              <TechnicalGrid className="opacity-[0.04]" />
              <div className="relative flex flex-col gap-3">
                {licence && (
                  <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">{licenceLabel}</span>
                    <span className="font-heading text-base font-medium text-foreground">
                      {licence.value}
                    </span>
                  </div>
                )}
                {specialisms && specialisms.length > 0 && (
                  <ul
                    className={cn(
                      "flex flex-col gap-1 text-sm text-muted-foreground",
                      location && "border-b border-border pb-3",
                    )}
                  >
                    {specialisms.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {location && (
                  <span className="text-sm text-muted-foreground">{location}</span>
                )}
              </div>
            </AnnotationPanel>
          </Reveal>
        )}
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
