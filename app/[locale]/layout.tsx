import type { Metadata } from "next";
import "../globals.css";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";

import { cn } from "@/lib/utils";
import { siteUrl } from "@/lib/site-url";
import { locales, isLocale, type Locale } from "@/lib/locale";
import { getDictionary } from "@/content/dictionaries";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600"],
  variable: "--font-display",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "pt";
  const { siteConfig } = getDictionary(locale).site;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteConfig.name} — ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
  };
}

function buildStructuredData(locale: Locale) {
  const { siteConfig } = getDictionary(locale).site;

  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: locale === "pt" ? `${siteUrl}/pt` : `${siteUrl}/en`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Angra do Heroísmo",
      addressRegion: locale === "pt" ? "Ilha Terceira, Açores" : "Terceira Island, Azores",
      addressCountry: "PT",
    },
    areaServed: locale === "pt" ? "Açores, Portugal" : "Azores, Portugal",
  };
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const structuredData = buildStructuredData(locale);

  return (
    <html
      lang={locale === "pt" ? "pt-PT" : "en"}
      className={cn("font-sans", plexSans.variable, sourceSerif.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
