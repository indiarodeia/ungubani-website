import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionTitle } from "@/components/shared/section-title";
import { ProjectCard } from "@/components/shared/project-card";
import { Reveal } from "@/components/shared/reveal";
import type { Project } from "@/content/types";

type FeaturedProjectsProps = {
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
};

export function FeaturedProjects({
  eyebrow,
  title,
  description,
  projects,
}: FeaturedProjectsProps) {
  const [primary, ...rest] = projects;
  const secondary = rest.slice(0, 2);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Ver todos os projetos
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {primary && (
            <Reveal className="lg:col-span-2">
              <ProjectCard project={primary} size="large" />
            </Reveal>
          )}
          <div className="flex flex-col gap-6">
            {secondary.map((project, index) => (
              <Reveal key={project.slug} delay={(index + 1) * 100}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
