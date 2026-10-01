import type {
  PageMeta,
  LsfAdvantage,
  LsfSystemLayer,
  LsfProcessStage,
  LsfSustainabilityConcept,
  LsfFaqItem,
} from "../types";

export const lsfMeta: PageMeta = {
  title: "LSF Ingénierie | Construction Light Steel Framing",
  description:
    "Découvrez l'approche d'Ungubani de l'LSF Ingénierie : construction en ossature légère d'acier, précision, efficacité, durabilité et liberté architecturale aux Açores.",
};

export const lsfHero = {
  eyebrow: "LSF Ingénierie",
  headline: "Construire avec précision.\nPenser l'avenir.",
  subheadline:
    "Une approche de la construction qui allie précision, efficacité et liberté architecturale. Le Light Steel Framing utilise une ossature légère en acier galvanisé, dimensionnée en projet et préparée pour une exécution plus rapide, plus propre et mieux maîtrisée.",
  ctaLabel: "Parler à notre équipe",
  ctaHref: "/fr/contact",
  secondaryLabel: "Découvrir le système",
  secondaryHref: "#sistema",
};

export const lsfIntroduction = {
  eyebrow: "Le Système",
  title: "Légère dans sa structure.\nRigoureuse dans son exécution.",
  paragraphs: [
    "Le Light Steel Framing, ou LSF, est un système constructif basé sur une ossature de profilés légers en acier galvanisé formés à froid.",
    "Les éléments sont dimensionnés selon le projet et assemblés pour constituer l'ossature des murs, planchers et toitures, puis combinés avec les autres composants de l'enveloppe du bâtiment.",
  ],
};

export const lsfSystemDiagram = {
  eyebrow: "L'Enveloppe",
  title: "Bien plus qu'une ossature en acier.",
  description:
    "Un mur en LSF est un système constructif complet, composé de différentes couches qui travaillent ensemble.",
  disclaimer:
    "La composition finale de l'enveloppe est définie selon les exigences techniques de chaque projet.",
  layers: [
    { label: "Finition extérieure" },
    { label: "Revêtement extérieur" },
    { label: "Isolation thermique" },
    { label: "Profilé structurel LSF" },
    { label: "Lame d'air / isolation intérieure" },
    { label: "Finition intérieure" },
  ] satisfies LsfSystemLayer[],
};

export const lsfAdvantagesIntro = {
  eyebrow: "Pourquoi le LSF ?",
  title: "Une autre façon de construire.",
};

export const lsfAdvantages: LsfAdvantage[] = [
  {
    title: "Rapidité",
    description:
      "Le montage, majoritairement à sec, et la préparation préalable des éléments permettent d'optimiser le processus d'exécution sur le chantier.",
  },
  {
    title: "Précision",
    description:
      "Les éléments sont dimensionnés dès le projet, ce qui permet un meilleur contrôle dimensionnel et une plus grande cohérence durant l'exécution.",
  },
  {
    title: "Moins de gaspillage",
    description:
      "La planification et la fabrication des composants permettent d'optimiser l'utilisation des matériaux et de réduire les opérations de découpe et de transformation sur le chantier.",
  },
  {
    title: "Un chantier plus propre",
    description:
      "Le recours à des processus majoritairement secs contribue à un chantier plus organisé et moins dépendant des processus humides.",
  },
  {
    title: "Efficacité",
    description:
      "Le système permet d'intégrer différentes solutions d'isolation et d'enveloppe selon les exigences thermiques et acoustiques définies pour chaque projet.",
  },
  {
    title: "Liberté architecturale",
    description:
      "La technologie structurelle s'adapte au projet, permettant de développer différents langages et solutions architecturales.",
  },
];

export const lsfSustainability = {
  eyebrow: "Construire avec Responsabilité",
  title: "Moins de gaspillage.\nPlus d'avenir.",
  paragraphs: [
    "Pour Ungubani, la durabilité commence bien avant l'achèvement du chantier.",
    "Elle commence dans la façon dont on conçoit, dans les matériaux que l'on choisit et dans l'efficacité avec laquelle chaque ressource est utilisée.",
    "La précision associée au LSF permet d'optimiser les matériaux et de réduire les opérations inutiles sur le chantier, tandis que la construction majoritairement à sec contribue à un processus plus propre et plus organisé.",
  ],
  concepts: [
    {
      title: "Planification",
      description:
        "Les décisions prises dès le projet permettent d'optimiser les ressources avant même le début du chantier.",
    },
    {
      title: "Matériaux",
      description:
        "Un meilleur contrôle des quantités et des composants aide à réduire le gaspillage durant l'exécution.",
    },
    {
      title: "Longévité",
      description:
        "Construire avec responsabilité, c'est aussi penser à la qualité, à la performance et à la durabilité des solutions adoptées.",
    },
  ] satisfies LsfSustainabilityConcept[],
};

export const lsfArchitecture = {
  eyebrow: "Architecture",
  title: "La technologie est dans la structure.\nL'architecture reste la vôtre.",
  paragraphs: [
    "Construire en LSF ne signifie pas choisir une maison préconçue ou un langage architectural imposé.",
    "Le système peut s'intégrer à des projets contemporains et sur mesure, permettant de définir l'architecture, les matériaux et les finitions selon la vision de chaque projet.",
  ],
  image: "/images/projects/prime-infinity-residence.jpg",
  imageAlt: "Prime Infinity Residence, Île de Terceira, Açores",
  focalPoint: "68% 55%",
};

export const lsfApproach = {
  eyebrow: "Notre Façon de Construire",
  title: "Le client est la pièce maîtresse.",
  paragraphs: [
    "Chez Ungubani, chaque projet commence avant le chantier.",
    "Nous accompagnons le client dès les premières décisions, en réunissant différentes compétences et spécialités pour trouver des solutions adaptées aux objectifs, à l'architecture et au contexte de chaque projet.",
  ],
  stages: [
    { title: "Concept" },
    { title: "Projet" },
    { title: "Ingénierie" },
    { title: "Planification" },
    { title: "Production" },
    { title: "Montage" },
    { title: "Finitions" },
    { title: "Livraison" },
  ] satisfies LsfProcessStage[],
};

export const lsfMultidisciplinary = {
  title: "Des spécialités différentes.\nUn seul projet.",
  description:
    "Chaque projet réunit des compétences en architecture, ingénierie, gestion de chantier, construction et spécialistes techniques, coordonnées dès le premier instant afin que toutes les décisions — architecturales, structurelles et constructives — avancent ensemble.",
};

export const lsfAzores = {
  eyebrow: "Construire aux Açores",
  title: "Chaque territoire exige ses propres réponses.",
  paragraphs: [
    "Construire aux Açores implique de prendre en compte des conditions spécifiques de localisation, d'exposition, de climat, d'architecture et d'usage.",
    "C'est pourquoi chaque solution en LSF doit être dimensionnée et spécifiée selon les caractéristiques concrètes du projet.",
  ],
};

export const lsfFaqIntro = {
  eyebrow: "Questions Fréquentes",
  title: "Ce qu'il faut savoir.",
};

export const lsfFaq: LsfFaqItem[] = [
  {
    question: "Qu'est-ce que le LSF ?",
    answer:
      "Le LSF, ou Light Steel Framing, est un système constructif basé sur une ossature de profilés légers en acier galvanisé formés à froid, dimensionnés dès le projet et combinés avec les autres composants de l'enveloppe du bâtiment.",
  },
  {
    question: "Une maison en LSF est-elle une maison préfabriquée ?",
    answer:
      "Pas nécessairement. Le LSF est un système structurel, pas un modèle de maison figé. Il peut s'appliquer à des projets architecturaux entièrement personnalisés, au même titre que la construction traditionnelle.",
  },
  {
    question: "Est-il possible de créer une architecture entièrement personnalisée ?",
    answer:
      "Oui. L'ossature en LSF s'adapte au projet architectural, et non l'inverse. Les volumes, les matériaux et les finitions sont définis selon la vision de chaque client et architecte.",
  },
  {
    question: "Comment fonctionne l'isolation thermique ?",
    answer:
      "Le système permet d'intégrer différentes solutions d'isolation thermique, choisies selon les exigences définies pour chaque projet. La performance dépend toujours de la solution constructive complète, pas uniquement de l'ossature.",
  },
  {
    question: "Et l'isolation acoustique ?",
    answer:
      "Comme pour l'isolation thermique, la réponse acoustique dépend de la composition complète de l'enveloppe — ossature, isolation et finitions — définie selon les exigences de chaque projet.",
  },
  {
    question: "Combien de temps dure une construction en LSF ?",
    answer:
      "Les délais dépendent de la taille, de la complexité et des caractéristiques de chaque projet. L'un des avantages du LSF est de permettre une préparation préalable poussée et un montage majoritairement à sec, ce qui peut contribuer à optimiser les temps d'exécution.",
  },
  {
    question: "Le LSF est-il adapté aux Açores ?",
    answer:
      "Le LSF peut être une solution adaptée au contexte açorien, à condition d'être dimensionné et spécifié selon les conditions concrètes de chaque emplacement et projet. Cette responsabilité d'ingénierie est toujours présente dans notre travail.",
  },
  {
    question: "Quel entretien exige une ossature LSF ?",
    answer:
      "Les besoins d'entretien dépendent de l'enveloppe, des finitions et de l'exposition de chaque bâtiment, comme pour d'autres systèmes constructifs. Il n'existe pas de réponse unique, indépendante du projet.",
  },
  {
    question: "Est-il possible de combiner le LSF avec d'autres systèmes constructifs ?",
    answer:
      "Oui. Le LSF peut être combiné à d'autres solutions constructives — comme le béton cellulaire ou des systèmes d'isolation spécifiques — selon les besoins techniques et architecturaux de chaque projet.",
  },
];

export const lsfCta = {
  eyebrow: "Vous avez un Projet ?",
  heading: "Déterminons ensemble si le LSF est la bonne solution.",
  description:
    "Parlez à notre équipe de votre projet. Nous analysons avec vous les objectifs, l'architecture et les exigences pour trouver la solution constructive la plus adaptée.",
  buttonLabel: "Parler à notre équipe",
  buttonHref: "/fr/contact",
  secondaryLabel: "Contact",
  secondaryHref: "/fr/contact",
};
