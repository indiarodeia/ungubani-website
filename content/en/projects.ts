import type { PageMeta, Project } from "../types";

export const projectsMeta: PageMeta = {
  title: "Projects",
  description:
    "Discover the civil construction and public works projects Ungubani has been building across the Azores.",
};

export const projectsHero = {
  eyebrow: "Projects",
  headline: "Our portfolio",
  subheadline:
    "A selection of works that reflect Ungubani's technical rigour and attention to detail.",
};

export const projectsPlaceholderLabel = "Project coming soon";

/**
 * Only confirmed projects belong here — see content/projects.ts for details.
 * Keep this list's facts in sync with the Portuguese version.
 */
export const projects: Project[] = [
  {
    slug: "prime-infinity-residence",
    name: "Prime Infinity Residence",
    category: "Residential",
    location: "Terceira Island, Azores",
    summary:
      "Ungubani is responsible for the construction of this residential development, combining contemporary architecture, construction quality and integration with the Azorean landscape.",
    image: "/images/projects/prime-infinity-residence.jpg",
    featured: true,
  },
];
