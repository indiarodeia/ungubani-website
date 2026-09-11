import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

import { getDictionary } from "@/content/dictionaries";
import { Separator } from "@/components/ui/separator";
import { TechnicalGrid } from "@/components/shared/technical-grid";
import { LanguageSwitch } from "@/components/shared/language-switch";
import type { Locale } from "@/lib/locale";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const { siteConfig } = getDictionary(locale).site;
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-[var(--navy-950)] text-primary-foreground">
      <TechnicalGrid invert className="opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/logo-mark-inverted.png"
                alt=""
                width={28}
                height={32}
                className="h-7 w-auto"
              />
              <span className="font-heading text-base font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="max-w-xs text-sm text-primary-foreground/65">
              {siteConfig.description}
            </p>
            <LanguageSwitch locale={locale} hrefs={{ pt: "/pt", en: "/en" }} variant="dark" />
          </div>

          <nav className="flex flex-col gap-2.5 md:border-l md:border-primary-foreground/10 md:pl-10">
            <span className="text-xs font-medium tracking-[0.12em] text-primary-foreground/45 uppercase">
              {siteConfig.footer.navLabel}
            </span>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5 md:border-l md:border-primary-foreground/10 md:pl-10">
            <span className="text-xs font-medium tracking-[0.12em] text-primary-foreground/45 uppercase">
              {siteConfig.footer.contactLabel}
            </span>
            {siteConfig.contact.email ? (
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                <Mail className="size-4 shrink-0" />
                {siteConfig.contact.email}
              </a>
            ) : (
              <span className="flex items-center gap-2 text-sm text-primary-foreground/45">
                <Mail className="size-4 shrink-0" />
                {siteConfig.footer.emailPending}
              </span>
            )}
            {siteConfig.contact.phone ? (
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                <Phone className="size-4 shrink-0" />
                {siteConfig.contact.phone}
              </a>
            ) : (
              <span className="flex items-center gap-2 text-sm text-primary-foreground/45">
                <Phone className="size-4 shrink-0" />
                {siteConfig.footer.phonePending}
              </span>
            )}
            <span className="flex items-start gap-2 text-sm text-primary-foreground/75">
              <MapPin className="size-4 shrink-0 translate-y-0.5" />
              {siteConfig.contact.address}
            </span>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/10" />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/55">
            © {year} {siteConfig.legalName}. {siteConfig.footer.rights}
          </p>
          <p className="text-xs text-primary-foreground/35">{siteConfig.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
