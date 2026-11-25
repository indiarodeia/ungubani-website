import { HardHat, Building2, Layers, Blocks, Waves, Droplets } from "lucide-react";
import type { Service } from "../types";

export const services: Service[] = [
  {
    icon: HardHat,
    title: "Construction Civile",
    description:
      "Réalisation d'ouvrages résidentiels, commerciaux et industriels, garantissant des normes élevées de qualité, de sécurité et d'efficacité.",
  },
  {
    icon: Building2,
    title: "Travaux Publics",
    description:
      "Réalisation d'infrastructures et d'équipements publics avec une rigueur technique élevée.",
  },
  {
    icon: Layers,
    title: "LSF Ingénierie",
    description: "Solutions constructives modernes, efficaces et durables.",
    href: "/fr/lsf",
  },
  {
    icon: Blocks,
    title: "Béton Cellulaire",
    description: "Fabrication et pose de panneaux et de blocs en béton cellulaire.",
  },
  {
    icon: Waves,
    title: "Projection de Mousse",
    description: "Systèmes d'isolation thermique et acoustique.",
  },
  {
    icon: Droplets,
    title: "Étanchéité",
    description: "Pose de membranes et solutions techniques d'étanchéité.",
  },
];
