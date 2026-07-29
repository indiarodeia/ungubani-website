"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { useScrollY } from "@/lib/use-scroll-y";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();
  const scrollY = useScrollY();
  const isScrolled = scrollY > 8;
  const isHome = pathname === "/";
  const transparent = isHome && !isScrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/80",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-6 transition-[height] duration-300",
          isScrolled ? "h-14" : "h-16",
        )}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={transparent ? "/brand/logo-mark-inverted.png" : "/brand/logo-mark.png"}
            alt=""
            width={28}
            height={32}
            className={cn(
              "w-auto transition-all duration-300",
              isScrolled ? "h-7" : "h-8",
            )}
            priority
          />
          <span
            className={cn(
              "font-heading text-lg font-semibold tracking-tight transition-colors duration-300",
              transparent ? "text-white" : "text-foreground",
            )}
          >
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                transparent
                  ? "text-white/85 hover:text-white"
                  : "text-foreground/80 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant={transparent ? "outline-invert" : "default"}>
            <Link href="/contact">Contacto</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn("md:hidden", transparent && "text-white hover:bg-white/10 hover:text-white")}
            >
              <Menu />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {siteConfig.nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md px-2 py-3 text-base font-medium text-foreground hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto px-4 pb-4">
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href="/contact">Contacto</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
