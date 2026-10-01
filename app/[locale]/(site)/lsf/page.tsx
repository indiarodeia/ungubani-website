import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/metadata";
import { isLocale, type Locale } from "@/lib/locale";
import { getDictionary } from "@/content/dictionaries";
import { Cta } from "@/components/shared/cta";
import { LsfHero } from "@/components/sections/lsf/lsf-hero";
import { LsfIntroduction } from "@/components/sections/lsf/lsf-introduction";
import { LsfSystemDiagram } from "@/components/sections/lsf/lsf-system-diagram";
import { LsfAdvantages } from "@/components/sections/lsf/lsf-advantages";
import { LsfSustainability } from "@/components/sections/lsf/lsf-sustainability";
import { LsfArchitecture } from "@/components/sections/lsf/lsf-architecture";
import { LsfApproach } from "@/components/sections/lsf/lsf-approach";
import { LsfMultidisciplinary } from "@/components/sections/lsf/lsf-multidisciplinary";
import { LsfAzores } from "@/components/sections/lsf/lsf-azores";
import { LsfFaq } from "@/components/sections/lsf/lsf-faq";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "pt";
  return buildMetadata(getDictionary(locale).lsf.lsfMeta, "/lsf", locale);
}

export default async function LsfPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const {
    lsf: {
      lsfHero,
      lsfIntroduction,
      lsfSystemDiagram,
      lsfAdvantagesIntro,
      lsfAdvantages,
      lsfSustainability,
      lsfArchitecture,
      lsfApproach,
      lsfMultidisciplinary,
      lsfAzores,
      lsfFaqIntro,
      lsfFaq,
      lsfCta,
    },
  } = getDictionary(locale);

  return (
    <>
      <LsfHero {...lsfHero} />
      <LsfIntroduction {...lsfIntroduction} />
      <LsfSystemDiagram {...lsfSystemDiagram} />
      <LsfAdvantages {...lsfAdvantagesIntro} items={lsfAdvantages} />
      <LsfSustainability {...lsfSustainability} />
      <LsfArchitecture {...lsfArchitecture} />
      <LsfApproach {...lsfApproach} />
      <LsfMultidisciplinary {...lsfMultidisciplinary} />
      <LsfAzores {...lsfAzores} />
      <LsfFaq {...lsfFaqIntro} items={lsfFaq} />
      <Cta {...lsfCta} variant="navy" />
    </>
  );
}
