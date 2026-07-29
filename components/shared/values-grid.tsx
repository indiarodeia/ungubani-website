import { cn } from "@/lib/utils";
import type { ValueItem } from "@/content/types";

type ValuesGridProps = {
  values: ValueItem[];
  invert?: boolean;
};

export function ValuesGrid({ values, invert = false }: ValuesGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-10 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4",
        invert ? "border-primary-foreground/15" : "border-border",
      )}
    >
      {values.map((value, index) => (
        <div key={value.title} className="flex flex-col gap-3">
          <span
            className={cn(
              "text-sm",
              invert ? "text-primary-foreground/50" : "text-muted-foreground",
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={cn(
              "font-heading text-lg font-medium",
              invert ? "text-primary-foreground" : "text-foreground",
            )}
          >
            {value.title}
          </h3>
          <p
            className={cn(
              "text-sm",
              invert ? "text-primary-foreground/70" : "text-muted-foreground",
            )}
          >
            {value.description}
          </p>
        </div>
      ))}
    </div>
  );
}
