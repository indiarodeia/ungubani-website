import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/metadata";
import { isLocale, type Locale } from "@/lib/locale";
import { getDictionary } from "@/content/dictionaries";
import { Hero } from "@/components/shared/hero";
import { ProjectCard } from "@/components/shared/project-card";
import { PlaceholderProjectCard } from "@/components/shared/placeholder-project-card";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const MIN_SLOTS = 3;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "pt";
  return buildMetadata(getDictionary(locale).projects.projectsMeta, "/projects", locale);
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const {
    projects: { projectsHero, projects, projectsPlaceholderLabel },
  } = getDictionary(locale);
  const placeholderCount = Math.max(0, MIN_SLOTS - projects.length);

  return (
    <>
      <Hero {...projectsHero} size="compact" />
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          {Array.from({ length: placeholderCount }).map((_, index) => (
            <PlaceholderProjectCard key={`placeholder-${index}`} label={projectsPlaceholderLabel} />
          ))}
        </div>
      </section>
    </>
  );
}
