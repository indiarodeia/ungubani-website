import type { Metadata } from "next";

import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/shared/hero";
import { SectionTitle } from "@/components/shared/section-title";
import { ValuesGrid } from "@/components/shared/values-grid";
import { Presentation } from "@/components/sections/about/presentation";
import { Philosophy } from "@/components/sections/about/philosophy";
import { Expertise } from "@/components/sections/about/expertise";
import {
  aboutMeta,
  aboutHero,
  aboutPresentation,
  aboutPhilosophy,
  aboutExpertiseIntro,
  aboutValuesIntro,
} from "@/content/about";
import { services } from "@/content/services";
import { companyValues } from "@/content/values";

export const metadata: Metadata = buildMetadata(aboutMeta);

export default function AboutPage() {
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
