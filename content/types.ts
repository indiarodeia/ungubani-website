import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  /** Dropdown entries shown under this item in the main navigation. */
  children?: NavItem[];
};

export type SiteConfig = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  nav: NavItem[];
  primaryCta: NavItem;
  contact: {
    /** Undefined until the client confirms a final email address. */
    email?: string;
    /** Undefined until the client confirms a final phone number. */
    phone?: string;
    address: string;
  };
  social: NavItem[];
  footer: {
    navLabel: string;
    contactLabel: string;
    emailPending: string;
    phonePending: string;
    rights: string;
    tagline: string;
  };
};

export type PageMeta = {
  title: string;
  description: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Link to a dedicated page for this service, when one exists. */
  href?: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type LsfAdvantage = {
  title: string;
  description: string;
};

export type LsfSystemLayer = {
  label: string;
};

export type LsfProcessStage = {
  title: string;
};

export type LsfSustainabilityConcept = {
  title: string;
  description: string;
};

export type LsfFaqItem = {
  question: string;
  answer: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  /** Omit until the completion year is confirmed by the client. */
  year?: number;
  summary: string;
  image: string;
  featured?: boolean;
};
