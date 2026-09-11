import type { Metadata } from "next";
import type { PageMeta } from "@/content/types";
import { getDictionary } from "@/content/dictionaries";
import { localeHref, type Locale } from "@/lib/locale";

export function buildMetadata(meta: PageMeta, path: string, locale: Locale): Metadata {
  const { siteConfig } = getDictionary(locale).site;
  const canonical = localeHref(locale, path);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: {
        pt: localeHref("pt", path),
        en: localeHref("en", path),
        "x-default": localeHref("pt", path),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "pt" ? "pt_PT" : "en_US",
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
