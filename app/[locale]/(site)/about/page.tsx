import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/metadata";
import { isLocale, type Locale } from "@/lib/locale";
import { getDictionary } from "@/content/dictionaries";
import { Hero } from "@/components/shared/hero";
import { SectionTitle } from "@/components/shared/section-title";
import { ValuesGrid } from "@/components/shared/values-grid";
import { Presentation } from "@/components/sections/about/presentation";
import { Philosophy } from "@/components/sections/about/philosophy";
import { Expertise } from "@/components/sections/about/expertise";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "pt";
  return buildMetadata(getDictionary(locale).about.aboutMeta, "/about", locale);
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const {
    about: {
      aboutHero,
      aboutPresentation,
      aboutPhilosophy,
      aboutExpertiseIntro,
      aboutValuesIntro,
    },
    services: { services },
    values: { companyValues },
  } = getDictionary(locale);

  return (
    <>
      <Hero {...aboutHero} size="compact" />
      <Presentation {...aboutPresentation} />
      <Philosophy {...aboutPhilosophy} />
      <Expertise {...aboutExpertiseIntro} services={services} />
      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <SectionTitle {...aboutValuesIntro} align="center" />
          <ValuesGrid values={companyValues} />
        </div>
      </section>
    </>
  );
}
