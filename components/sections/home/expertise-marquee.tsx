type ExpertiseMarqueeProps = {
  items: string[];
};

export function ExpertiseMarquee({ items }: ExpertiseMarqueeProps) {
  return (
    <div className="relative overflow-hidden border-y border-primary-foreground/10 bg-primary py-3">
      <span className="sr-only">Áreas de especialização: {items.join(", ")}</span>
      <div
        aria-hidden
        className="flex w-max animate-marquee motion-reduce:animate-none"
      >
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-6 px-6 text-xs font-medium tracking-[0.25em] text-primary-foreground/70 uppercase"
              >
                {item}
                <span className="text-primary-foreground/30">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
