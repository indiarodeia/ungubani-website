import type { Metadata } from "next";
import { Building2, HardHat, Ruler, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Hero } from "@/components/shared/hero";
import { SectionTitle } from "@/components/shared/section-title";
import { Cta } from "@/components/shared/cta";
import { ProjectCard } from "@/components/shared/project-card";
import { ServiceCard } from "@/components/shared/service-card";
import { ContactForm } from "@/components/shared/contact-form";
import type { Project, Service } from "@/content/types";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const mockProjects: Project[] = [
  {
    slug: "edificio-marina",
    name: "Edifício Marina",
    category: "Residencial",
    location: "Ponta Delgada",
    year: 2024,
    summary: "",
    image: "/images/projects/edificio-marina.jpg",
  },
  {
    slug: "centro-tecnico-acores",
    name: "Centro Técnico Açores",
    category: "Industrial",
    location: "Lagoa",
    year: 2023,
    summary: "",
    image: "/images/projects/centro-tecnico-acores.jpg",
  },
  {
    slug: "requalificacao-orla",
    name: "Requalificação da Orla",
    category: "Obra Pública",
    location: "Vila Franca do Campo",
    year: 2022,
    summary: "",
    image: "/images/projects/requalificacao-orla.jpg",
  },
];

const mockServices: Service[] = [
  {
    icon: HardHat,
    title: "Construção Civil",
    description: "Execução de obra com rigor técnico do início ao fim.",
  },
  {
    icon: Ruler,
    title: "Projeto e Planeamento",
    description: "Estudos e planeamento de obra alinhados com o terreno açoriano.",
  },
  {
    icon: Building2,
    title: "Obras Públicas",
    description: "Infraestrutura e requalificação de espaços públicos.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade e Segurança",
    description: "Processos certificados e acompanhamento contínuo em obra.",
  },
];

export default function ComponentPreviewPage() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      <div className="mx-auto w-full max-w-6xl px-6 pt-16">
        <p className="text-sm text-muted-foreground">
          Rota temporária de pré-visualização dos 9 componentes reutilizáveis
          — apagar antes do lançamento.
        </p>
      </div>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6">
        <h2 className="text-sm font-medium tracking-wide text-accent uppercase">
          Button
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <div className="rounded-md bg-primary p-4">
            <Button variant="outline-invert">Outline invert</Button>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="mx-auto w-full max-w-6xl px-6 text-sm font-medium tracking-wide text-accent uppercase">
          Hero — size=&quot;full&quot;
        </h2>
        <Hero
          eyebrow="Construção Civil e Obras Públicas"
          headline="Excelência técnica em cada projeto"
          subheadline="Construímos com rigor, precisão e atenção ao detalhe nos Açores."
          ctaLabel="Ver projetos"
          ctaHref="/projects"
        />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="mx-auto w-full max-w-6xl px-6 text-sm font-medium tracking-wide text-accent uppercase">
          Hero — size=&quot;compact&quot;
        </h2>
        <Hero
          eyebrow="Quem Somos"
          headline="Uma equipa dedicada à construção"
          size="compact"
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <SectionTitle
          eyebrow="Serviços"
          title="O que fazemos"
          description="Da conceção à entrega, acompanhamos cada fase do projeto."
          align="center"
        />
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {mockServices.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </section>

      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>

      <Cta
        heading="Vamos construir o teu próximo projeto"
        description="Fala com a nossa equipa e conta-nos os detalhes da tua obra."
        buttonLabel="Contactar"
        buttonHref="/contact"
        variant="navy"
      />

      <Cta
        heading="Conhece o nosso portefólio"
        buttonLabel="Ver projetos"
        buttonHref="/projects"
        variant="light"
      />

      <section className="mx-auto w-full max-w-xl px-6">
        <h2 className="mb-6 text-sm font-medium tracking-wide text-accent uppercase">
          Contact Form
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}
