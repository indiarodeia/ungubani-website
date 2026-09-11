import { ImagePlus } from "lucide-react";

import { cn } from "@/lib/utils";

type PlaceholderProjectCardProps = {
  label?: string;
  size?: "large" | "default";
};

/**
 * Stands in for a project the client hasn't supplied content for yet.
 * Deliberately looks unfinished rather than presenting invented work as real.
 */
export function PlaceholderProjectCard({
  label = "Conteúdo em atualização",
  size = "default",
}: PlaceholderProjectCardProps) {
  const isLarge = size === "large";

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3 border border-dashed border-border bg-muted/60 text-muted-foreground",
        isLarge ? "aspect-4/3 lg:aspect-16/9" : "aspect-4/5",
      )}
    >
      <ImagePlus className="size-6" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
