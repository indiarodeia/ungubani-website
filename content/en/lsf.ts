import type {
  PageMeta,
  LsfAdvantage,
  LsfSystemLayer,
  LsfProcessStage,
  LsfSustainabilityConcept,
  LsfFaqItem,
} from "../types";

export const lsfMeta: PageMeta = {
  title: "Engineered LSF | Light Steel Framing Construction",
  description:
    "Discover Ungubani's approach to Engineered LSF: light steel frame construction, precision, efficiency, sustainability and architectural freedom in the Azores.",
};

export const lsfHero = {
  eyebrow: "Engineered LSF",
  headline: "Building with precision.\nDesigned for the future.",
  subheadline:
    "An approach to construction that combines precision, efficiency and architectural freedom. Light Steel Framing uses a light galvanised steel structure, sized in the design stage and prepared for faster, cleaner and more controlled execution.",
  ctaLabel: "Talk to our team",
  ctaHref: "/en/contact",
  secondaryLabel: "Discover the system",
  secondaryHref: "#sistema",
};

export const lsfIntroduction = {
  eyebrow: "The System",
  title: "Light in structure.\nRigorous in execution.",
  paragraphs: [
    "Light Steel Framing, or LSF, is a construction system based on a structure of light, cold-formed galvanised steel profiles.",
    "The elements are sized according to the project and assembled to form the structure of walls, floors and roofs, later combined with the building's other envelope components.",
  ],
};

export const lsfSystemDiagram = {
  eyebrow: "The Envelope",
  title: "Far more than a steel structure.",
  description:
    "An LSF wall is a complete construction system, made up of different layers working together.",
  disclaimer:
    "The final composition of the envelope is defined according to the technical requirements of each project.",
  layers: [
    { label: "Exterior finish" },
    { label: "Exterior sheathing" },
    { label: "Thermal insulation" },
    { label: "LSF structural profile" },
    { label: "Cavity / interior insulation" },
    { label: "Interior finish" },
  ] satisfies LsfSystemLayer[],
};

export const lsfAdvantagesIntro = {
  eyebrow: "Why LSF?",
  title: "A different way of building.",
};

export const lsfAdvantages: LsfAdvantage[] = [
  {
    title: "Speed",
    description:
      "Predominantly dry assembly and the advance planning of components help optimise the execution process on site.",
  },
  {
    title: "Precision",
    description:
      "Elements are sized at the design stage, allowing greater dimensional control and consistency during execution.",
  },
  {
    title: "Less waste",
    description:
      "Planning and manufacturing components ahead of time helps optimise material use and reduce cutting and processing operations on site.",
  },
  {
    title: "A cleaner site",
    description:
      "The use of predominantly dry processes contributes to a more organised site with less reliance on wet trades.",
  },
  {
    title: "Efficiency",
    description:
      "The system allows different insulation and envelope solutions to be integrated according to the thermal and acoustic requirements set for each project.",
  },
  {
    title: "Architectural freedom",
    description:
      "The structural technology adapts to the project, allowing different architectural languages and solutions to be developed.",
  },
];

export const lsfSustainability = {
  eyebrow: "Building Responsibly",
  title: "Less waste.\nMore future.",
  paragraphs: [
    "For Ungubani, sustainability begins long before a build is finished.",
    "It begins in how a project is designed, the materials chosen, and how efficiently every resource is used.",
    "The precision associated with LSF helps optimise materials and reduce unnecessary operations on site, while predominantly dry construction contributes to a cleaner, more organised process.",
  ],
  concepts: [
    {
      title: "Planning",
      description:
        "Decisions made from the design stage help optimise resources before the build even begins.",
    },
    {
      title: "Materials",
      description:
        "Greater control over quantities and components helps reduce waste during execution.",
    },
    {
      title: "Longevity",
      description:
        "Building responsibly also means thinking about the quality, performance and durability of the solutions adopted.",
    },
  ] satisfies LsfSustainabilityConcept[],
};

export const lsfArchitecture = {
  eyebrow: "Architecture",
  title: "The technology is in the structure.\nThe architecture is still yours.",
  paragraphs: [
    "Building in LSF does not mean choosing a pre-defined house or a specific architectural language.",
    "The system can be integrated into contemporary, bespoke projects, letting architecture, materials and finishes be defined according to the vision of each project.",
  ],
  image: "/images/projects/prime-infinity-residence.jpg",
  imageAlt: "Prime Infinity Residence, Terceira Island, Azores",
  focalPoint: "68% 55%",
};

export const lsfApproach = {
  eyebrow: "Our Way of Building",
  title: "The client is the central piece.",
  paragraphs: [
    "At Ungubani, every project begins before the build.",
    "We follow the client from the first decisions onward, bringing together different skills and specialisms to find solutions suited to the goals, architecture and context of each project.",
  ],
  stages: [
    { title: "Concept" },
    { title: "Design" },
    { title: "Engineering" },
    { title: "Planning" },
    { title: "Production" },
    { title: "Assembly" },
    { title: "Finishes" },
    { title: "Handover" },
  ] satisfies LsfProcessStage[],
};

export const lsfMultidisciplinary = {
  title: "Different specialisms.\nOne single project.",
  description:
    "Every project brings together skills in architecture, engineering, site management, construction and technical specialists, coordinated from the very first moment so that every decision — architectural, structural and constructive — moves forward together.",
};

export const lsfAzores = {
  eyebrow: "Building in the Azores",
  title: "Every territory calls for its own answers.",
  paragraphs: [
    "Building in the Azores means accounting for specific conditions of location, exposure, climate, architecture and use.",
    "That's why every LSF solution must be sized and specified according to the concrete characteristics of the project.",
  ],
};

export const lsfFaqIntro = {
  eyebrow: "Frequently Asked Questions",
  title: "What you need to know.",
};

export const lsfFaq: LsfFaqItem[] = [
  {
    question: "What is LSF?",
    answer:
      "LSF, or Light Steel Framing, is a construction system based on a structure of light, cold-formed galvanised steel profiles, sized at the design stage and combined with the building's other envelope components.",
  },
  {
    question: "Is an LSF house a prefabricated house?",
    answer:
      "Not necessarily. LSF is a structural system, not a closed house model. It can be applied to fully bespoke architectural projects, just like traditional construction.",
  },
  {
    question: "Is it possible to create a fully bespoke architecture?",
    answer:
      "Yes. The LSF structure adapts to the architectural project, not the other way around. Volume, materials and finishes are defined according to the vision of each client and architect.",
  },
  {
    question: "How does thermal insulation work?",
    answer:
      "The system allows different thermal insulation solutions to be integrated, chosen according to the requirements set for each project. Performance always depends on the complete construction solution, not the structure alone.",
  },
  {
    question: "What about acoustic insulation?",
    answer:
      "As with thermal insulation, acoustic performance depends on the complete envelope build-up — structure, insulation and finishes — defined according to the requirements of each project.",
  },
  {
    question: "How long does an LSF build take?",
    answer:
      "Timelines depend on the size, complexity and characteristics of each project. One of the advantages of LSF is that it allows for extensive advance preparation and predominantly dry assembly, which can help optimise execution times.",
  },
  {
    question: "Is LSF suitable for the Azores?",
    answer:
      "LSF can be a suitable solution for the Azorean context, provided it is sized and specified according to the concrete conditions of each location and project. That engineering responsibility is always present in our work.",
  },
  {
    question: "What maintenance does an LSF structure require?",
    answer:
      "Maintenance needs depend on the envelope, finishes and exposure of each building, as with other construction systems. There is no single answer independent of the project.",
  },
  {
    question: "Can LSF be combined with other construction systems?",
    answer:
      "Yes. LSF can be combined with other construction solutions — such as cellular concrete or specific insulation systems — according to the technical and architectural needs of each project.",
  },
];

export const lsfCta = {
  eyebrow: "Have a Project?",
  heading: "Let's find out if LSF is the right solution.",
  description:
    "Talk to our team about your project. We'll go through the goals, architecture and requirements with you to find the most suitable construction solution.",
  buttonLabel: "Talk to our team",
  buttonHref: "/en/contact",
  secondaryLabel: "Contact",
  secondaryHref: "/en/contact",
};
