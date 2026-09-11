import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
  invert?: boolean;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
  invert = false,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCenter && "items-center text-center",
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-medium tracking-[0.12em] uppercase",
            invert ? "text-primary-foreground/60" : "text-accent",
          )}
        >
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "text-heading-1 font-display font-medium",
          invert ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed",
            invert ? "text-primary-foreground/70" : "text-muted-foreground",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
