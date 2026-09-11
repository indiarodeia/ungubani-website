import type { PageMeta, Project } from "./types";

export const projectsMeta: PageMeta = {
  title: "Projetos",
  description:
    "Conhece os projetos de construção civil e obras públicas que a Ungubani tem vindo a construir nos Açores.",
};

export const projectsHero = {
  eyebrow: "Projetos",
  headline: "O nosso portefólio",
  subheadline:
    "Uma seleção de obras que refletem o rigor técnico e a atenção ao detalhe da Ungubani.",
};

export const projectsPlaceholderLabel = "Projeto a adicionar";

/**
 * Only confirmed projects belong here. Prime Infinity Residence is the one
 * project the client has confirmed so far — no invented names, locations,
 * categories or years. Add real projects as the client supplies them; the
 * `projects` page and the homepage grid both render placeholder slots for
 * the rest automatically (see PlaceholderProjectCard).
 */
export const projects: Project[] = [
  {
    slug: "prime-infinity-residence",
    name: "Prime Infinity Residence",
    category: "Residencial",
    location: "Ilha Terceira, Açores",
    summary:
      "A Ungubani é responsável pela construção deste empreendimento residencial, que alia arquitetura contemporânea, qualidade construtiva e integração com a paisagem açoriana.",
    image: "/images/projects/prime-infinity-residence.jpg",
    featured: true,
  },
];
