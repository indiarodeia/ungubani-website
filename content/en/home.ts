import type { PageMeta } from "../types";

export const homeMeta: PageMeta = {
  title: "Civil Construction & Public Works in the Azores",
  description:
    "Ungubani designs and builds civil construction and public works projects across the Azores, with a focus on quality, detail and on-time delivery.",
};

export const homeHero = {
  eyebrow: "Civil Construction & Public Works",
  headline: "We build with vision.\nWe execute with rigour.",
  subheadline:
    "From concept to completed build, we develop projects with quality, technical precision and knowledge of the Azorean territory.",
  ctaLabel: "View projects",
  ctaHref: "/en/projects",
  secondaryLabel: "Get to know Ungubani",
  secondaryHref: "/en/about",
  // TEMPORARY — stock image. Replace with a real Ungubani project photo
  // (wide, landscape-friendly crop) as soon as the client supplies one.
  image: "/images/hero-home.jpg",
  focalPoint: "42% 45%",
  licence: {
    value: "Class 4",
  },
  licenceLabel: "Licence",
  panelLabel: "Technical Information",
  location: "Azores, Portugal",
};

export const homeAbout = {
  eyebrow: "About Us",
  title: "We build with experience, innovation and commitment.",
  paragraphs: [
    "Ungubani is an Azorean company specialising in civil construction and public works, developing technical solutions for residential, commercial, industrial and infrastructure projects.",
    "With an approach grounded in rigour, innovation and quality of execution, we follow each project from planning through to completion, delivering durable solutions tailored to every client's needs.",
  ],
  ctaLabel: "Meet the team",
  ctaHref: "/en/about",
  // TEMPORARY — reused stock construction-detail photo, not a real Ungubani
  // site. Replace with a real Ungubani image (tall crop) when available.
  image: "/images/projects/centro-tecnico-acores.jpg",
  imageAlt: "Construction detail — temporary placeholder image, to be replaced",
};

export const homeServicesIntro = {
  eyebrow: "Services",
  title: "What we do",
  description: "From design to delivery, we support every phase of the project.",
};

export const homeWhyChoose = {
  eyebrow: "Why Choose Ungubani",
  title: "Building it right, from start to finish",
  description: "Six principles that guide the way we work on every site.",
};

export const homeLicence = {
  classNumber: "4",
  heading: "Construction Licence",
  label: "Class 4",
  text: "Ungubani holds a Class 4 Construction Licence (Alvará de Construção Classe 4), demonstrating the technical, financial and organisational capacity to execute demanding works in compliance with legal requirements and the highest quality standards.",
};

export const homeProjectsIntro = {
  eyebrow: "Projects",
  title: "Projects that reflect the way we build",
  description:
    "Every site reflects Ungubani's commitment to quality, innovation and the confidence of our clients.",
  viewAllLabel: "View all projects",
  placeholderLabel: "Project coming soon",
};

export const homeFlagshipProject = {
  eyebrow: "Featured project",
  name: "Prime Infinity Residence",
  location: "Terceira Island, Azores",
  description:
    "Ungubani is responsible for the construction of this residential development, combining contemporary architecture, construction quality and integration with the Azorean landscape.",
  ctaLabel: "View project",
  ctaHref: "/en/projects",
  image: "/images/projects/prime-infinity-residence.jpg",
  focalPoint: "68% 55%",
};

export const homeCta = {
  heading: "Let's build the next project together.",
  description:
    "We're ready to turn ideas into buildings executed with rigour, quality and commitment.",
  buttonLabel: "Get in touch",
  buttonHref: "/en/contact",
};
