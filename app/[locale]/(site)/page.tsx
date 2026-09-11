import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/metadata";
import { isLocale, type Locale } from "@/lib/locale";
import { getDictionary } from "@/content/dictionaries";
import { Hero } from "@/components/shared/hero";
import { Cta } from "@/components/shared/cta";
import { CompanyIntro } from "@/components/sections/home/company-intro";
import { ServicesIndex } from "@/components/sections/home/services-index";
import { ExpertiseMarquee } from "@/components/sections/home/expertise-marquee";
import { WhyChoose } from "@/components/sections/home/why-choose";
import { LicenceHighlight } from "@/components/sections/home/licence-highlight";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import { FlagshipProject } from "@/components/sections/home/flagship-project";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "pt";
  return buildMetadata(getDictionary(locale).home.homeMeta, "/", locale);
}

export default async function Home({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const {
    home: {
      homeHero,
      homeAbout,
      homeServicesIntro,
      homeWhyChoose,
      homeLicence,
      homeProjectsIntro,
      homeFlagshipProject,
      homeCta,
    },
    services: { services },
    strengths: { whyChooseUs },
    projects: { projects },
  } = getDictionary(locale);

  // Prime Infinity Residence already gets its own cinematic section below,
  // so the grid only needs to surface *other* featured projects.
  const gridProjects = projects.filter(
    (project) => project.featured && project.name !== homeFlagshipProject.name,
  );
  const specialisms = services.map((service) => service.title);

  return (
    <>
      <Hero {...homeHero} size="full" specialisms={specialisms} />
      <CompanyIntro {...homeAbout} />
      <ServicesIndex {...homeServicesIntro} locale={locale} />
      <ExpertiseMarquee
        items={specialisms}
        srLabel={locale === "pt" ? "Áreas de especialização" : "Areas of expertise"}
      />
      <WhyChoose {...homeWhyChoose} items={whyChooseUs} />
      <FlagshipProject {...homeFlagshipProject} />
      <LicenceHighlight {...homeLicence} />
      <FeaturedProjects {...homeProjectsIntro} projects={gridProjects} locale={locale} />
      <Cta {...homeCta} variant="navy" />
    </>
  );
}
