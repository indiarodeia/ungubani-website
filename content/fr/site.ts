import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "Ungubani",
  legalName: "Ungubani, Lda",
  tagline: "Construction Civile et Travaux Publics",
  description:
    "Ungubani est une entreprise de construction civile et de travaux publics basée à Angra do Heroísmo, sur l'île de Terceira, dédiée à l'excellence technique et à la rigueur dans chaque projet.",
  nav: [
    { label: "Accueil", href: "/fr" },
    { label: "Qui sommes-nous", href: "/fr/about" },
    {
      label: "Services",
      href: "/fr#servicos",
      children: [{ label: "LSF Ingénierie", href: "/fr/lsf" }],
    },
    { label: "Projets", href: "/fr/projects" },
    { label: "Contact", href: "/fr/contact" },
  ],
  primaryCta: { label: "Nous contacter", href: "/fr/contact" },
  contact: {
    // Email and phone are not yet confirmed by the client — leave undefined
    // so the UI falls back to "to be confirmed" copy instead of fake data.
    address: "Angra do Heroísmo, Île de Terceira, Açores",
  },
  social: [],
  footer: {
    navLabel: "Navigation",
    contactLabel: "Contact",
    emailPending: "Email à confirmer",
    phonePending: "Contact à confirmer",
    rights: "Tous droits réservés.",
    tagline: "Construction Civile et Travaux Publics — Licence Classe 4",
  },
};
