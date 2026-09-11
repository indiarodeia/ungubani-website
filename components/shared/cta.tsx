import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { TechnicalGrid } from "@/components/shared/technical-grid";

type CtaProps = {
  heading: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  variant?: "navy" | "light";
};

export function Cta({
  heading,
  description,
  buttonLabel,
  buttonHref,
  variant = "navy",
}: CtaProps) {
  const isNavy = variant === "navy";

  return (
    <section
      className={cn(
        "relative overflow-hidden px-6 py-20",
        isNavy ? "bg-primary text-primary-foreground" : "bg-muted",
      )}
    >
      {isNavy && <TechnicalGrid invert />}
      <Reveal className="relative mx-auto flex max-w-6xl flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex max-w-xl flex-col gap-4">
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
        <Button asChild size="lg" variant={isNavy ? "outline-invert" : "default"} className="shrink-0">
          <Link href={buttonHref}>{buttonLabel}</Link>
        </Button>
      </Reveal>
    </section>
  );
}
