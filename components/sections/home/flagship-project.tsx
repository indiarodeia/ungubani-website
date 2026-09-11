"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TechnicalGrid } from "@/components/shared/technical-grid";
import { cn } from "@/lib/utils";

type FlagshipProjectProps = {
  eyebrow: string;
  name: string;
  location: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  image?: string;
  focalPoint?: string;
};

export function FlagshipProject({
  eyebrow,
  name,
  location,
  description,
  ctaLabel,
  ctaHref,
  image,
  focalPoint = "50% 50%",
}: FlagshipProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [settled, setSettled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (settled) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSettled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-background py-20">
      <div className="mx-4 sm:mx-6 lg:mx-10">
        <div
          ref={ref}
          className="relative aspect-4/3 w-full overflow-hidden bg-primary sm:aspect-16/10 lg:aspect-21/9"
        >
          {image ? (
            <div
              className={cn(
                "absolute inset-[-4%] transition-transform duration-[3000ms] ease-out",
                settled ? "scale-100" : "scale-110",
              )}
            >
              <Image
                src={image}
                alt={name}
                fill
                sizes="(min-width: 1024px) 90vw, 100vw"
                className="object-cover"
                style={{ objectPosition: focalPoint }}
              />
            </div>
          ) : (
            <div
              className={cn(
                "absolute inset-0 transition-transform duration-[3000ms] ease-out",
                settled ? "scale-100" : "scale-105",
              )}
            >
              <TechnicalGrid invert className="opacity-[0.12]" />
              <span className="absolute right-6 bottom-6 font-display text-[10rem] leading-none font-medium text-primary-foreground/[0.06] sm:text-[14rem]">
                01
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-8 sm:max-w-xl sm:p-12">
            <span className="text-xs font-medium tracking-[0.12em] text-primary-foreground/70 uppercase">
              {eyebrow}
            </span>
            <h2 className="font-display text-display-2 font-medium text-primary-foreground">
              {name}
            </h2>
            <p className="text-sm font-medium tracking-wide text-primary-foreground/70 uppercase">
              {location}
            </p>
            <p className="leading-relaxed text-primary-foreground/85">{description}</p>
            <div>
              <Button asChild size="lg" variant="outline-invert">
                <Link href={ctaHref} className="inline-flex items-center gap-2">
                  {ctaLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
