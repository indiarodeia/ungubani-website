import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Ungubani",
  legalName: "Ungubani, Lda",
  tagline: "Construção Civil e Obras Públicas",
  description:
    "Ungubani é uma empresa de construção civil e obras públicas sediada em Angra do Heroísmo, Ilha Terceira, dedicada à excelência técnica e ao rigor em cada projeto.",
  nav: [
    { label: "Início", href: "/pt" },
    { label: "Quem Somos", href: "/pt/about" },
    { label: "Serviços", href: "/pt#servicos" },
    { label: "Projetos", href: "/pt/projects" },
    { label: "Contactos", href: "/pt/contact" },
  ],
  primaryCta: { label: "Falar connosco", href: "/pt/contact" },
  contact: {
    // Email and phone are not yet confirmed by the client — leave undefined
    // so the UI falls back to "a confirmar" copy instead of showing fake data.
    address: "Angra do Heroísmo, Ilha Terceira, Açores",
  },
  social: [],
  footer: {
    navLabel: "Navegação",
    contactLabel: "Contactos",
    emailPending: "Email a confirmar",
    phonePending: "Contacto a confirmar",
    rights: "Todos os direitos reservados.",
    tagline: "Construção Civil e Obras Públicas — Alvará Classe 4",
  },
};
