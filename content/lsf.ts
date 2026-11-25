import type {
  PageMeta,
  LsfAdvantage,
  LsfSystemLayer,
  LsfProcessStage,
  LsfSustainabilityConcept,
  LsfFaqItem,
} from "./types";

export const lsfMeta: PageMeta = {
  title: "LSF Engenheirado | Construção Light Steel Framing",
  description:
    "Conheça a abordagem da Ungubani ao LSF Engenheirado: construção em estrutura leve de aço, precisão, eficiência, sustentabilidade e liberdade arquitetónica nos Açores.",
};

export const lsfHero = {
  eyebrow: "LSF Engenheirado",
  headline: "Construir com precisão.\nPensar no futuro.",
  subheadline:
    "Uma abordagem à construção que alia precisão, eficiência e liberdade arquitetónica. O Light Steel Framing utiliza uma estrutura leve de aço galvanizado, dimensionada em projeto e preparada para uma execução mais rápida, limpa e controlada.",
  ctaLabel: "Falar com a nossa equipa",
  ctaHref: "/pt/contact",
  secondaryLabel: "Descobrir o sistema",
  secondaryHref: "#sistema",
};

export const lsfIntroduction = {
  eyebrow: "O Sistema",
  title: "Leve na estrutura.\nRigoroso na execução.",
  paragraphs: [
    "Light Steel Framing, ou LSF, é um sistema construtivo baseado numa estrutura de perfis leves de aço galvanizado formados a frio.",
    "Os elementos são dimensionados de acordo com o projeto e montados para constituir a estrutura de paredes, pisos e coberturas, sendo posteriormente combinados com os restantes componentes da envolvente do edifício.",
  ],
};

export const lsfSystemDiagram = {
  eyebrow: "A Envolvente",
  title: "Muito mais do que uma estrutura de aço.",
  description:
    "Uma parede em LSF é um sistema construtivo completo, composto por diferentes camadas que trabalham em conjunto.",
  disclaimer:
    "A composição final da envolvente é definida de acordo com as exigências técnicas de cada projeto.",
  layers: [
    { label: "Acabamento exterior" },
    { label: "Revestimento exterior" },
    { label: "Isolamento térmico" },
    { label: "Perfil estrutural LSF" },
    { label: "Caixa de ar / isolamento interior" },
    { label: "Acabamento interior" },
  ] satisfies LsfSystemLayer[],
};

export const lsfAdvantagesIntro = {
  eyebrow: "Porquê LSF?",
  title: "Uma forma diferente de construir.",
};

export const lsfAdvantages: LsfAdvantage[] = [
  {
    title: "Rapidez",
    description:
      "A montagem predominantemente a seco e o planeamento prévio dos elementos permitem otimizar o processo de execução em obra.",
  },
  {
    title: "Precisão",
    description:
      "Os elementos são dimensionados em projeto, permitindo maior controlo dimensional e consistência durante a execução.",
  },
  {
    title: "Menos desperdício",
    description:
      "O planeamento e fabrico dos componentes permitem otimizar a utilização dos materiais e reduzir operações de corte e transformação no estaleiro.",
  },
  {
    title: "Obra mais limpa",
    description:
      "A utilização de processos predominantemente secos contribui para uma obra mais organizada e com menor dependência de processos húmidos.",
  },
  {
    title: "Eficiência",
    description:
      "O sistema permite integrar diferentes soluções de isolamento e envolvente de acordo com os requisitos térmicos e acústicos definidos para cada projeto.",
  },
  {
    title: "Liberdade arquitetónica",
    description:
      "A tecnologia estrutural adapta-se ao projeto, permitindo desenvolver diferentes linguagens e soluções arquitetónicas.",
  },
];

export const lsfSustainability = {
  eyebrow: "Construir com Responsabilidade",
  title: "Menos desperdício.\nMais futuro.",
  paragraphs: [
    "Para a Ungubani, sustentabilidade começa muito antes da obra estar concluída.",
    "Começa na forma como se projeta, nos materiais que se escolhem e na eficiência com que cada recurso é utilizado.",
    "A precisão associada ao LSF permite otimizar materiais e reduzir operações desnecessárias em obra, enquanto a construção predominantemente a seco contribui para um processo mais limpo e organizado.",
  ],
  concepts: [
    {
      title: "Planeamento",
      description:
        "Decisões tomadas desde o projeto permitem otimizar recursos antes da obra começar.",
    },
    {
      title: "Materiais",
      description:
        "Maior controlo sobre quantidades e componentes ajuda a reduzir desperdícios durante a execução.",
    },
    {
      title: "Longevidade",
      description:
        "Construir com responsabilidade significa também pensar na qualidade, desempenho e durabilidade das soluções adotadas.",
    },
  ] satisfies LsfSustainabilityConcept[],
};

export const lsfArchitecture = {
  eyebrow: "Arquitetura",
  title: "A tecnologia está na estrutura.\nA arquitetura continua a ser sua.",
  paragraphs: [
    "Construir em LSF não significa escolher uma casa pré-definida ou uma linguagem arquitetónica específica.",
    "O sistema pode ser integrado em projetos contemporâneos e personalizados, permitindo que arquitetura, materiais e acabamentos sejam definidos de acordo com a visão de cada projeto.",
  ],
  image: "/images/projects/prime-infinity-residence.jpg",
  imageAlt: "Prime Infinity Residence, Ilha Terceira, Açores",
  focalPoint: "68% 55%",
};

export const lsfApproach = {
  eyebrow: "A Nossa Forma de Construir",
  title: "O cliente é a peça principal.",
  paragraphs: [
    "Na Ungubani, cada projeto começa antes da obra.",
    "Acompanhamos o cliente desde as primeiras decisões, reunindo diferentes competências e especialidades para encontrar soluções adequadas aos objetivos, arquitetura e contexto de cada projeto.",
  ],
  stages: [
    { title: "Conceito" },
    { title: "Projeto" },
    { title: "Engenharia" },
    { title: "Planeamento" },
    { title: "Produção" },
    { title: "Montagem" },
    { title: "Acabamentos" },
    { title: "Entrega" },
  ] satisfies LsfProcessStage[],
};

export const lsfMultidisciplinary = {
  title: "Diferentes especialidades.\nUm único projeto.",
  description:
    "Cada projeto reúne competências de arquitetura, engenharia, gestão de obra, construção e especialistas técnicos, coordenadas desde o primeiro momento para que todas as decisões — arquitetónicas, estruturais e construtivas — avancem em conjunto.",
};

export const lsfAzores = {
  eyebrow: "Construir nos Açores",
  title: "Cada território exige respostas próprias.",
  paragraphs: [
    "Construir nos Açores implica considerar condições específicas de localização, exposição, clima, arquitetura e utilização.",
    "Por isso, cada solução em LSF deve ser dimensionada e especificada de acordo com as características concretas do projeto.",
  ],
};

export const lsfFaqIntro = {
  eyebrow: "Perguntas Frequentes",
  title: "O que precisa de saber.",
};

export const lsfFaq: LsfFaqItem[] = [
  {
    question: "O que é LSF?",
    answer:
      "LSF, ou Light Steel Framing, é um sistema construtivo baseado numa estrutura de perfis leves de aço galvanizado formados a frio, dimensionados em projeto e combinados com os restantes componentes da envolvente do edifício.",
  },
  {
    question: "Uma casa em LSF é uma casa pré-fabricada?",
    answer:
      "Não necessariamente. O LSF é um sistema estrutural, não um modelo de casa fechado. Pode ser aplicado a projetos de arquitetura totalmente personalizados, tal como a construção tradicional.",
  },
  {
    question: "É possível criar uma arquitetura totalmente personalizada?",
    answer:
      "Sim. A estrutura em LSF adapta-se ao projeto de arquitetura, e não o contrário. Volumetria, materiais e acabamentos são definidos de acordo com a visão de cada cliente e arquiteto.",
  },
  {
    question: "Como funciona o isolamento térmico?",
    answer:
      "O sistema permite integrar diferentes soluções de isolamento térmico, escolhidas de acordo com os requisitos definidos para cada projeto. O desempenho depende sempre da solução construtiva completa, não apenas da estrutura.",
  },
  {
    question: "E o isolamento acústico?",
    answer:
      "Tal como no isolamento térmico, a resposta acústica depende da composição completa da envolvente — estrutura, isolamento e acabamentos — definida de acordo com as exigências de cada projeto.",
  },
  {
    question: "Quanto tempo demora uma construção em LSF?",
    answer:
      "Os prazos dependem da dimensão, complexidade e características de cada projeto. Uma das vantagens do LSF é permitir uma elevada preparação prévia e uma montagem predominantemente a seco, o que pode contribuir para otimizar os tempos de execução.",
  },
  {
    question: "O LSF é adequado aos Açores?",
    answer:
      "O LSF pode ser uma solução adequada ao contexto açoriano, desde que dimensionado e especificado de acordo com as condições concretas de cada localização e projeto. Essa responsabilidade de engenharia está sempre presente no nosso trabalho.",
  },
  {
    question: "Que manutenção exige uma estrutura LSF?",
    answer:
      "As necessidades de manutenção dependem da envolvente, dos acabamentos e da exposição de cada edifício, tal como acontece noutros sistemas construtivos. Não existe uma resposta única, independente do projeto.",
  },
  {
    question: "É possível combinar LSF com outros sistemas construtivos?",
    answer:
      "Sim. O LSF pode ser combinado com outras soluções construtivas — como betão celular ou sistemas de isolamento específicos — de acordo com as necessidades técnicas e arquitetónicas de cada projeto.",
  },
];

export const lsfCta = {
  eyebrow: "Tem um Projeto?",
  heading: "Vamos perceber se o LSF é a solução certa.",
  description:
    "Fale com a nossa equipa sobre o seu projeto. Analisamos consigo os objetivos, arquitetura e requisitos para encontrar a solução construtiva mais adequada.",
  buttonLabel: "Falar com a nossa equipa",
  buttonHref: "/pt/contact",
  secondaryLabel: "Contactos",
  secondaryHref: "/pt/contact",
};
