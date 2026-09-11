import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-url";
import { locales, localeHref } from "@/lib/locale";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/projects", priority: 0.8 },
  { path: "/contact", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: `${siteUrl}${localeHref(locale, path)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((altLocale) => [altLocale, `${siteUrl}${localeHref(altLocale, path)}`]),
        ),
      },
    })),
  );
}
