import type { PageMeta } from "./types";

export const homeMeta: PageMeta = {
  title: "Construção Civil e Obras Públicas nos Açores",
  description:
    "A Ungubani projeta e executa obras de construção civil e obras públicas nos Açores, com foco na qualidade, no detalhe e no cumprimento de prazos.",
};

export const homeHero = {
  eyebrow: "Construção Civil e Obras Públicas",
  headline: "Construímos com visão.\nExecutamos com rigor.",
  subheadline:
    "Da ideia à obra concluída, desenvolvemos projetos com qualidade, precisão técnica e conhecimento do território açoriano.",
  ctaLabel: "Conhecer a Ungubani",
  ctaHref: "/pt/about",
  secondaryLabel: "Ver projetos",
  secondaryHref: "/pt/projects",
  image: "/images/projects/prime-infinity-residence.jpg",
  focalPoint: "70% 46%",
};

export const homeAbout = {
  eyebrow: "Quem Somos",
  title: "Construímos com experiência, inovação e compromisso.",
  paragraphs: [
    "A Ungubani é uma empresa açoriana especializada em construção civil e obras públicas, desenvolvendo soluções técnicas para projetos residenciais, comerciais, industriais e infraestruturas.",
    "Com uma abordagem baseada no rigor, na inovação e na qualidade de execução, acompanhamos cada projeto desde o planeamento até à sua conclusão, garantindo soluções duradouras e adaptadas às necessidades de cada cliente.",
  ],
  ctaLabel: "Conhecer a equipa",
  ctaHref: "/pt/about",
  // TEMPORARY — stock jobsite photo, not a real Ungubani site. Replace with
  // a real Ungubani work-in-progress image (tall crop) when available.
  image: "/images/projects/residencial-fajazinha.jpg",
  imageAlt: "Trabalhador em obra — imagem temporária, a substituir",
  focalPoint: "26% 30%",
};

export const homeServicesIntro = {
  eyebrow: "Serviços",
  title: "O que fazemos",
  description: "Da conceção à entrega, acompanhamos cada fase do projeto.",
};

export const homeWhyChoose = {
  eyebrow: "Porque Escolher a Ungubani",
  title: "Construir bem, do início ao fim",
  description:
    "Seis razões que distinguem a forma como trabalhamos em cada obra.",
};

export const homeLicence = {
  classNumber: "4",
  heading: "Alvará de Construção",
  label: "Classe 4",
  text: "A Ungubani possui Alvará de Construção Classe 4, demonstrando capacidade técnica, financeira e organizacional para executar obras de elevada exigência, em conformidade com os requisitos legais e elevados padrões de qualidade.",
};

export const homeProjectsIntro = {
  eyebrow: "Projetos",
  title: "Projetos que refletem a nossa forma de construir",
  description:
    "Cada obra representa o compromisso da Ungubani com a qualidade, inovação e confiança dos seus clientes.",
  viewAllLabel: "Ver todos os projetos",
  placeholderLabel: "Projeto a adicionar",
};

export const homeFlagshipProject = {
  eyebrow: "Projeto em destaque",
  name: "Prime Infinity Residence",
  location: "Ilha Terceira, Açores",
  description:
    "A Ungubani é responsável pela construção de um empreendimento residencial que alia arquitetura contemporânea, qualidade construtiva e integração com a paisagem açoriana.",
  ctaLabel: "Ver projeto",
  ctaHref: "/pt/projects",
  image: "/images/projects/prime-infinity-residence.jpg",
  focalPoint: "68% 55%",
};

export const homeCta = {
  heading: "Vamos construir o próximo projeto juntos.",
  description:
    "Estamos preparados para transformar ideias em obras executadas com rigor, qualidade e compromisso.",
  buttonLabel: "Falar connosco",
  buttonHref: "/pt/contact",
};
