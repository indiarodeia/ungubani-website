import type { MetadataRoute } from "next";

import { siteUrl, allowIndexing } from "@/lib/site-url";
import { locales } from "@/lib/locale";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: locales.map((locale) => `/${locale}/preview`),
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
