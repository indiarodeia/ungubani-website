import type { SiteConfig } from "../types";

export const siteConfig: SiteConfig = {
  name: "Ungubani",
  legalName: "Ungubani, Lda",
  tagline: "Civil Construction & Public Works",
  description:
    "Ungubani is a construction company based in Angra do Heroísmo, Terceira Island, dedicated to technical excellence and rigour in every project.",
  nav: [
    { label: "Home", href: "/en" },
    { label: "About", href: "/en/about" },
    { label: "Services", href: "/en#servicos" },
    { label: "Projects", href: "/en/projects" },
    { label: "Contact", href: "/en/contact" },
  ],
  primaryCta: { label: "Get in touch", href: "/en/contact" },
  contact: {
    // Email and phone are not yet confirmed by the client — leave undefined
    // so the UI falls back to "to be confirmed" copy instead of fake data.
    address: "Angra do Heroísmo, Terceira Island, Azores",
  },
  social: [],
  footer: {
    navLabel: "Navigation",
    contactLabel: "Contact",
    emailPending: "Email to be confirmed",
    phonePending: "Contact to be confirmed",
    rights: "All rights reserved.",
    tagline: "Civil Construction & Public Works — Class 4 Licence",
  },
};
