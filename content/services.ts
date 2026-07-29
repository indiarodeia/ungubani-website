import { HardHat, Building2, Layers, Blocks, Waves, Droplets } from "lucide-react";
import type { Service } from "./types";

export const services: Service[] = [
  {
    icon: HardHat,
    title: "Construção Civil",
    description:
      "Execução de obras residenciais, comerciais e industriais, garantindo elevados padrões de qualidade, segurança e eficiência.",
  },
  {
    icon: Building2,
    title: "Obras Públicas",
    description:
      "Execução de infraestruturas e equipamentos públicos com elevado rigor técnico.",
  },
  {
    icon: Layers,
    title: "LSF Engenheirado",
    description: "Soluções construtivas modernas, eficientes e sustentáveis.",
  },
  {
    icon: Blocks,
    title: "Betão Celular",
    description: "Fabrico e aplicação de placas e blocos em betão celular.",
  },
  {
    icon: Waves,
    title: "Projeção de Espumas",
    description: "Sistemas de isolamento térmico e acústico.",
  },
  {
    icon: Droplets,
    title: "Impermeabilizações",
    description: "Aplicação de telas e soluções técnicas de impermeabilização.",
  },
];
