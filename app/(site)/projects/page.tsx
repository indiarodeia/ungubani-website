import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/shared/hero";
import { ProjectCard } from "@/components/shared/project-card";
import { projectsMeta, projectsHero, projects } from "@/content/projects";

export const metadata: Metadata = buildMetadata(projectsMeta);

export default function ProjectsPage() {
  return (
    <>
      <Hero {...projectsHero} size="compact" />
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
