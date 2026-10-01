import type { Metadata } from "next";
import type { PageMeta } from "@/content/types";
import { getDictionary } from "@/content/dictionaries";
import { locales, localeHref, type Locale } from "@/lib/locale";

const ogLocaleByLocale: Record<Locale, string> = {
  pt: "pt_PT",
  en: "en_US",
  fr: "fr_FR",
};

export function buildMetadata(meta: PageMeta, path: string, locale: Locale): Metadata {
  const { siteConfig } = getDictionary(locale).site;
  const canonical = localeHref(locale, path);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, localeHref(l, path)])),
        "x-default": localeHref("pt", path),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: ogLocaleByLocale[locale],
      type: "website",
      images: ["/images/projects/prime-infinity-residence.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/images/projects/prime-infinity-residence.jpg"],
    },
  };
}
