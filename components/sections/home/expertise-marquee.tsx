type ExpertiseMarqueeProps = {
  items: string[];
  srLabel?: string;
};

export function ExpertiseMarquee({ items, srLabel = "Áreas de especialização" }: ExpertiseMarqueeProps) {
  return (
    <div className="group relative overflow-hidden border-y border-primary-foreground/10 bg-primary py-2.5">
      <span className="sr-only">
        {srLabel}: {items.join(", ")}
      </span>
      <div
        aria-hidden
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none"
      >
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-6 px-6 text-xs font-medium tracking-[0.2em] text-primary-foreground/45 uppercase"
              >
                {item}
                <span className="text-primary-foreground/20">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
