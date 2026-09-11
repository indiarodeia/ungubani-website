import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionTitle } from "@/components/shared/section-title";
import { ProjectCard } from "@/components/shared/project-card";
import { PlaceholderProjectCard } from "@/components/shared/placeholder-project-card";
import { Reveal } from "@/components/shared/reveal";
import { localeHref, type Locale } from "@/lib/locale";
import type { Project } from "@/content/types";

type FeaturedProjectsProps = {
  eyebrow: string;
  title: string;
  description: string;
  viewAllLabel: string;
  placeholderLabel: string;
  projects: Project[];
  locale: Locale;
};

const GRID_SLOTS = 3;

export function FeaturedProjects({
  eyebrow,
  title,
  description,
  viewAllLabel,
  placeholderLabel,
  projects,
  locale,
}: FeaturedProjectsProps) {
  const slots: (Project | null)[] = [...projects];
  while (slots.length < GRID_SLOTS) slots.push(null);
  const [primary, ...secondary] = slots.slice(0, GRID_SLOTS);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
          <Link
            href={localeHref(locale, "/projects")}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {viewAllLabel}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            {primary ? (
              <ProjectCard project={primary} size="large" />
            ) : (
              <PlaceholderProjectCard size="large" label={placeholderLabel} />
            )}
          </Reveal>
          <div className="flex flex-col gap-6">
            {secondary.map((project, index) => (
              <Reveal key={project?.slug ?? `placeholder-${index}`} delay={(index + 1) * 100}>
                {project ? (
                  <ProjectCard project={project} />
                ) : (
                  <PlaceholderProjectCard label={placeholderLabel} />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
