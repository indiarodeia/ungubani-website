import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AnnotationPanelProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * A thin-bordered technical annotation — the visual language of a leader
 * line pointing to a detail on a drawing, not a dashboard stat card.
 */
export function AnnotationPanel({ label, children, className }: AnnotationPanelProps) {
  return (
    <div
      className={cn(
        "relative w-56 border border-border/80 bg-background/95 p-4 sm:w-64 sm:p-5",
        className,
      )}
    >
      <span className="absolute -top-px -left-6 hidden h-px w-6 bg-border/80 sm:block" />
      <span className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
        {label}
      </span>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}
