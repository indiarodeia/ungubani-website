import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";

type LsfArchitectureProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  focalPoint?: string;
};

export function LsfArchitecture({
  eyebrow,
  title,
  paragraphs,
  image,
  imageAlt,
  focalPoint = "50% 50%",
}: LsfArchitectureProps) {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
              {eyebrow}
            </span>
            <h2 className="text-heading-1 font-display font-medium whitespace-pre-line text-foreground">
              {title}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Reveal className="mx-4 mt-4 sm:mx-6 lg:mx-10">
        <div className="relative aspect-4/3 w-full overflow-hidden bg-primary sm:aspect-16/10 lg:aspect-21/9">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 90vw, 100vw"
            className="object-cover saturate-[.9] contrast-[1.03]"
            style={{ objectPosition: focalPoint }}
          />
        </div>
      </Reveal>
    </section>
  );
}
