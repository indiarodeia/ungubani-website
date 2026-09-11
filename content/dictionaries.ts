import type { Locale } from "@/lib/locale";

import * as sitePt from "./site";
import * as siteEn from "./en/site";
import * as homePt from "./home";
import * as homeEn from "./en/home";
import * as aboutPt from "./about";
import * as aboutEn from "./en/about";
import * as contactPt from "./contact";
import * as contactEn from "./en/contact";
import * as projectsPt from "./projects";
import * as projectsEn from "./en/projects";
import * as servicesPt from "./services";
import * as servicesEn from "./en/services";
import * as strengthsPt from "./strengths";
import * as strengthsEn from "./en/strengths";
import * as valuesPt from "./values";
import * as valuesEn from "./en/values";

export const dictionaries = {
  pt: {
    site: sitePt,
    home: homePt,
    about: aboutPt,
    contact: contactPt,
    projects: projectsPt,
    services: servicesPt,
    strengths: strengthsPt,
    values: valuesPt,
  },
  en: {
    site: siteEn,
    home: homeEn,
    about: aboutEn,
    contact: contactEn,
    projects: projectsEn,
    services: servicesEn,
    strengths: strengthsEn,
    values: valuesEn,
  },
} satisfies Record<Locale, unknown>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
