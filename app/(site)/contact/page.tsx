import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/shared/hero";
import { ContactForm } from "@/components/shared/contact-form";
import { siteConfig } from "@/content/site";
import { contactMeta, contactHero } from "@/content/contact";
import { submitContactForm } from "./actions";

export const metadata: Metadata = buildMetadata(contactMeta);

export default function ContactPage() {
  return (
    <>
      <Hero {...contactHero} size="compact" />
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <ContactForm action={submitContactForm} />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium tracking-wide text-accent uppercase">
                {siteConfig.name}
              </span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex w-fit items-center gap-2 text-foreground hover:text-primary"
              >
                <Mail className="size-4 shrink-0" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex w-fit items-center gap-2 text-foreground hover:text-primary"
              >
                <Phone className="size-4 shrink-0" />
                {siteConfig.contact.phone}
              </a>
              <span className="flex items-start gap-2 text-foreground">
                <MapPin className="size-4 shrink-0 translate-y-0.5" />
                {siteConfig.contact.address}
              </span>
            </div>

            <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-md border border-border bg-muted text-muted-foreground">
              <MapPin className="size-6" />
              <span className="text-sm">Mapa em breve</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
