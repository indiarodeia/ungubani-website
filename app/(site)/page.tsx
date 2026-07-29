import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/shared/hero";
import { Cta } from "@/components/shared/cta";
import { CompanyIntro } from "@/components/sections/home/company-intro";
import { ServicesIndex } from "@/components/sections/home/services-index";
import { ExpertiseMarquee } from "@/components/sections/home/expertise-marquee";
import { WhyChoose } from "@/components/sections/home/why-choose";
import { LicenceHighlight } from "@/components/sections/home/licence-highlight";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import { FlagshipProject } from "@/components/sections/home/flagship-project";
import {
  homeMeta,
  homeHero,
  homeAbout,
  homeServicesIntro,
  homeWhyChoose,
  homeLicence,
  homeProjectsIntro,
  homeFlagshipProject,
  homeCta,
} from "@/content/home";
import { services } from "@/content/services";
import { whyChooseUs } from "@/content/strengths";
import { projects } from "@/content/projects";

export const metadata: Metadata = buildMetadata(homeMeta);

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);
  const specialisms = services.map((service) => service.title);

  return (
    <>
      <Hero {...homeHero} size="full" specialisms={specialisms} />
      <CompanyIntro {...homeAbout} />
      <ServicesIndex {...homeServicesIntro} />
      <ExpertiseMarquee items={specialisms} />
      <WhyChoose {...homeWhyChoose} items={whyChooseUs} />
      <FlagshipProject {...homeFlagshipProject} />
      <LicenceHighlight {...homeLicence} />
      <FeaturedProjects {...homeProjectsIntro} projects={featuredProjects} />
      <Cta {...homeCta} variant="navy" />
    </>
  );
}
