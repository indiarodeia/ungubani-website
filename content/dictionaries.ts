import type { Locale } from "@/lib/locale";

import * as sitePt from "./site";
import * as siteEn from "./en/site";
import * as siteFr from "./fr/site";
import * as homePt from "./home";
import * as homeEn from "./en/home";
import * as homeFr from "./fr/home";
import * as aboutPt from "./about";
import * as aboutEn from "./en/about";
import * as aboutFr from "./fr/about";
import * as contactPt from "./contact";
import * as contactEn from "./en/contact";
import * as contactFr from "./fr/contact";
import * as projectsPt from "./projects";
import * as projectsEn from "./en/projects";
import * as projectsFr from "./fr/projects";
import * as servicesPt from "./services";
import * as servicesEn from "./en/services";
import * as servicesFr from "./fr/services";
import * as strengthsPt from "./strengths";
import * as strengthsEn from "./en/strengths";
import * as strengthsFr from "./fr/strengths";
import * as valuesPt from "./values";
import * as valuesEn from "./en/values";
import * as valuesFr from "./fr/values";
import * as lsfPt from "./lsf";
import * as lsfEn from "./en/lsf";
import * as lsfFr from "./fr/lsf";

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
    lsf: lsfPt,
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
    lsf: lsfEn,
  },
  fr: {
    site: siteFr,
    home: homeFr,
    about: aboutFr,
    contact: contactFr,
    projects: projectsFr,
    services: servicesFr,
    strengths: strengthsFr,
    values: valuesFr,
    lsf: lsfFr,
  },
} satisfies Record<Locale, unknown>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
