import type { PageMeta, Project } from "../types";

export const projectsMeta: PageMeta = {
  title: "Projets",
  description:
    "Découvrez les projets de construction civile et de travaux publics qu'Ungubani réalise aux Açores.",
};

export const projectsHero = {
  eyebrow: "Projets",
  headline: "Notre portefeuille",
  subheadline:
    "Une sélection d'ouvrages qui reflètent la rigueur technique et le souci du détail d'Ungubani.",
};

export const projectsPlaceholderLabel = "Projet à venir";

/**
 * Only confirmed projects belong here — see content/projects.ts for
 * details. Keep this list's facts in sync with the Portuguese version.
 */
export const projects: Project[] = [
  {
    slug: "prime-infinity-residence",
    name: "Prime Infinity Residence",
    category: "Résidentiel",
    location: "Île de Terceira, Açores",
    summary:
      "Ungubani est responsable de la construction de cet ensemble résidentiel, qui allie architecture contemporaine, qualité d'exécution et intégration au paysage açorien.",
    image: "/images/projects/prime-infinity-residence.jpg",
    featured: true,
  },
];
