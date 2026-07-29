import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  nav: NavItem[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: NavItem[];
};

export type PageMeta = {
  title: string;
  description: string;
};

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  year: number;
  summary: string;
  image: string;
  featured?: boolean;
};
