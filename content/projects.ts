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

export const projects: Project[] = [
  {
    slug: "edificio-marina",
    name: "Edifício Marina",
    category: "Residencial",
    location: "Ponta Delgada",
    year: 2024,
    summary:
      "Edifício residencial multifamiliar com vista para o porto, construído com foco em eficiência energética.",
    image: "/images/projects/edificio-marina.jpg",
    featured: true,
  },
  {
    slug: "centro-tecnico-acores",
    name: "Centro Técnico Açores",
    category: "Industrial",
    location: "Lagoa",
    year: 2023,
    summary:
      "Instalação industrial com estrutura técnica adaptada a operações contínuas.",
    image: "/images/projects/centro-tecnico-acores.jpg",
    featured: true,
  },
  {
    slug: "requalificacao-orla",
    name: "Requalificação da Orla",
    category: "Obra Pública",
    location: "Vila Franca do Campo",
    year: 2022,
    summary:
      "Requalificação da orla marítima, com nova pavimentação e espaços públicos.",
    image: "/images/projects/requalificacao-orla.jpg",
    featured: true,
  },
  {
    slug: "residencial-fajazinha",
    name: "Residencial Fajãzinha",
    category: "Residencial",
    location: "Lajes das Flores",
    year: 2021,
    summary: "Conjunto habitacional integrado na paisagem rural das Flores.",
    image: "/images/projects/residencial-fajazinha.jpg",
  },
  {
    slug: "pavilhao-desportivo",
    name: "Pavilhão Desportivo",
    category: "Equipamento Público",
    location: "Ribeira Grande",
    year: 2020,
    summary: "Pavilhão multiusos para a comunidade, com estrutura de grande vão.",
    image: "/images/projects/pavilhao-desportivo.jpg",
  },
];
