import type { Metadata } from "next";
import "./globals.css";
import { Geist, Fraunces } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Ungubani — Construção Civil e Obras Públicas",
    template: "%s | Ungubani",
  },
  description:
    "Ungubani é uma empresa de construção civil e obras públicas sediada nos Açores, dedicada à excelência técnica e ao rigor em cada projeto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={cn("font-sans", geist.variable, fraunces.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
