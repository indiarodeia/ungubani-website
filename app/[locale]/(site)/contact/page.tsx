import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { notFound } from "next/navigation";

import { buildMetadata } from "@/lib/metadata";
import { isLocale, type Locale } from "@/lib/locale";
import { getDictionary } from "@/content/dictionaries";
import { Hero } from "@/components/shared/hero";
import { ContactForm } from "@/components/shared/contact-form";
import { submitContactForm } from "./actions";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "pt";
  return buildMetadata(getDictionary(locale).contact.contactMeta, "/contact", locale);
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;

  const {
    contact: { contactHero, contactFormCopy, contactMapPendingLabel },
    site: { siteConfig },
  } = getDictionary(locale);

  return (
    <>
      <Hero {...contactHero} size="compact" />
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <ContactForm action={submitContactForm} copy={contactFormCopy} />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium tracking-wide text-accent uppercase">
                {siteConfig.name}
              </span>
              {siteConfig.contact.email ? (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex w-fit items-center gap-2 text-foreground hover:text-primary"
                >
                  <Mail className="size-4 shrink-0" />
                  {siteConfig.contact.email}
                </a>
              ) : (
                <span className="flex w-fit items-center gap-2 text-muted-foreground">
                  <Mail className="size-4 shrink-0" />
                  {siteConfig.footer.emailPending}
                </span>
              )}
              {siteConfig.contact.phone ? (
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="flex w-fit items-center gap-2 text-foreground hover:text-primary"
                >
                  <Phone className="size-4 shrink-0" />
                  {siteConfig.contact.phone}
                </a>
              ) : (
                <span className="flex w-fit items-center gap-2 text-muted-foreground">
                  <Phone className="size-4 shrink-0" />
                  {siteConfig.footer.phonePending}
                </span>
              )}
              <span className="flex items-start gap-2 text-foreground">
                <MapPin className="size-4 shrink-0 translate-y-0.5" />
                {siteConfig.contact.address}
              </span>
            </div>

            <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-md border border-border bg-muted text-muted-foreground">
              <MapPin className="size-6" />
              <span className="text-sm">{contactMapPendingLabel}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
