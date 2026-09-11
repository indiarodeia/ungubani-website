import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CompanyIntroProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CompanyIntro({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt = "",
  ctaLabel,
  ctaHref,
}: CompanyIntroProps) {
  return (
    <section className="bg-muted px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-0">
        <div className="relative aspect-3/4 w-full max-w-sm overflow-hidden border border-border bg-background lg:aspect-auto lg:max-w-none">
          {image && (
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-6 lg:border-l lg:border-border lg:pl-14">
          {eyebrow && (
            <span className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
              {eyebrow}
            </span>
          )}
          <h2 className="text-heading-1 font-display font-medium text-foreground">
            {title}
          </h2>
          <div className="flex max-w-2xl flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {ctaLabel}
              <ArrowRight className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
