import type { PageMeta } from "../types";
import type { ContactFormCopy } from "@/components/shared/contact-form";

export const contactMeta: PageMeta = {
  title: "Contact",
  description:
    "Contactez Ungubani pour parler de votre prochain projet de construction civile ou de travaux publics aux Açores.",
};

export const contactHero = {
  eyebrow: "Contact",
  headline: "Parlons-en",
  subheadline:
    "Partagez-nous les détails de votre projet et nous vous répondrons dans les meilleurs délais.",
};

export const contactMapPendingLabel = "Carte bientôt disponible";

export const contactFormCopy: ContactFormCopy = {
  nameLabel: "Nom",
  nameError: "Indiquez votre nom.",
  emailLabel: "Email",
  emailRequiredError: "Indiquez un email de contact.",
  emailInvalidError: "Saisissez une adresse email valide.",
  phoneLabel: "Téléphone (facultatif)",
  messageLabel: "Message",
  messageError: "Écrivez un message.",
  submitLabel: "Envoyer le message",
  submittingLabel: "Envoi…",
  errorMessage: "Impossible d'envoyer le message. Veuillez réessayer.",
  successTitle: "Message envoyé.",
  successBody: "Merci de nous avoir contactés. Nous vous répondrons dans les meilleurs délais.",
};
