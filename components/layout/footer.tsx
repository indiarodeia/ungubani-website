import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

import { siteConfig } from "@/content/site";
import { Separator } from "@/components/ui/separator";
import { TechnicalGrid } from "@/components/shared/technical-grid";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-primary text-primary-foreground">
      <TechnicalGrid invert className="opacity-[0.04]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/logo-mark-inverted.png"
                alt=""
                width={28}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-heading text-lg font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="max-w-xs text-sm text-primary-foreground/70">
              {siteConfig.description}
            </p>
          </div>

          <nav className="flex flex-col gap-3 md:border-l md:border-primary-foreground/10 md:pl-10">
            <span className="text-sm font-medium tracking-wide text-primary-foreground/50 uppercase">
              Navegação
            </span>
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 md:border-l md:border-primary-foreground/10 md:pl-10">
            <span className="text-sm font-medium tracking-wide text-primary-foreground/50 uppercase">
              Contactos
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <Mail className="size-4 shrink-0" />
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              <Phone className="size-4 shrink-0" />
              {siteConfig.contact.phone}
            </a>
            <span className="flex items-start gap-2 text-sm text-primary-foreground/80">
              <MapPin className="size-4 shrink-0 translate-y-0.5" />
              {siteConfig.contact.address}
            </span>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/15" />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/60">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Construção Civil e Obras Públicas — Açores
          </p>
        </div>
      </div>
    </footer>
  );
}
