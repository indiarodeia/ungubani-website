import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Ungubani",
  tagline: "Construção Civil e Obras Públicas",
  description:
    "Ungubani é uma empresa de construção civil e obras públicas sediada nos Açores, dedicada à excelência técnica e ao rigor em cada projeto.",
  nav: [
    { label: "Início", href: "/" },
    { label: "Quem Somos", href: "/about" },
    { label: "Projetos", href: "/projects" },
    { label: "Contactos", href: "/contact" },
  ],
  contact: {
    email: "geral@ungubani.pt",
    phone: "+351 000 000 000",
    address: "Ponta Delgada, São Miguel, Açores",
  },
  social: [],
};
