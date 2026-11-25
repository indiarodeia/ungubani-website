type LsfMultidisciplinaryProps = {
  title: string;
  description: string;
};

export function LsfMultidisciplinary({ title, description }: LsfMultidisciplinaryProps) {
  return (
    <section className="bg-muted px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <h2 className="text-heading-1 font-display font-medium whitespace-pre-line text-foreground">
          {title}
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
