type PresentationProps = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export function Presentation({ eyebrow, title, paragraphs }: PresentationProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-medium tracking-wide text-accent uppercase">
            {eyebrow}
          </span>
          <h2 className="text-heading-1 font-display font-medium text-foreground italic">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
