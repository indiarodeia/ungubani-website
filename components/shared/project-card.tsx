import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/content/types";

type ProjectCardProps = {
  project: Project;
  size?: "large" | "default";
};

export function ProjectCard({ project, size = "default" }: ProjectCardProps) {
  const isLarge = size === "large";

  return (
    <div className="group relative block w-full overflow-hidden bg-muted">
      <div
        className={cn(
          "relative w-full",
          isLarge ? "aspect-4/3 lg:aspect-16/9" : "aspect-4/5",
        )}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes={
            isLarge
              ? "(min-width: 1024px) 66vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/15 to-transparent transition-opacity duration-500 group-hover:from-primary/95" />

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5",
            isLarge && "p-7 lg:p-8",
          )}
        >
          <div className="flex flex-col gap-1 transition-transform duration-500 ease-out group-hover:-translate-y-1">
            <span className="text-xs font-medium tracking-[0.15em] text-primary-foreground/70 uppercase">
              {project.category} · {project.location}
            </span>
            <h3
              className={cn(
                "font-heading font-medium text-primary-foreground",
                isLarge ? "text-2xl sm:text-3xl" : "text-lg",
              )}
            >
              {project.name}
            </h3>
            {project.year && (
              <span className="text-sm text-primary-foreground/60">{project.year}</span>
            )}
          </div>
          <ArrowUpRight className="size-5 -translate-x-2 translate-y-2 shrink-0 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );
}
