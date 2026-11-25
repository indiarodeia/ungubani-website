import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { TechnicalGrid } from "@/components/shared/technical-grid";

type CtaProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "navy" | "light";
};

export function Cta({
  eyebrow,
  heading,
  description,
  buttonLabel,
  buttonHref,
  secondaryLabel,
  secondaryHref,
  variant = "navy",
}: CtaProps) {
  const isNavy = variant === "navy";

  return (
    <section
      className={cn(
        "relative overflow-hidden px-6 py-24",
        isNavy ? "bg-primary text-primary-foreground" : "bg-muted",
      )}
    >
      {isNavy && <TechnicalGrid invert />}
      <Reveal className="relative mx-auto flex max-w-6xl flex-col items-start gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-xl flex-col gap-5">
          {eyebrow && (
            <span
              className={cn(
                "text-xs font-medium tracking-[0.12em] uppercase",
                isNavy ? "text-primary-foreground/60" : "text-accent",
              )}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className={cn(
              "text-display-1 font-display font-medium",
              isNavy ? "text-primary-foreground" : "text-foreground",
            )}
          >
            {heading}
          </h2>
          {description && (
            <p
              className={cn(
                "text-lg leading-relaxed",
                isNavy ? "text-primary-foreground/75" : "text-muted-foreground",
              )}
            >
              {description}
            </p>
          )}
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-4">
          <Button asChild size="lg" variant={isNavy ? "outline-invert" : "default"}>
            <Link href={buttonHref}>{buttonLabel}</Link>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className={cn(
                "text-sm font-medium underline-offset-4 hover:underline",
                isNavy ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-primary",
              )}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </Reveal>
    </section>
  );
}
