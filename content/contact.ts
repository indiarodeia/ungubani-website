import type { PageMeta } from "./types";
import type { ContactFormCopy } from "@/components/shared/contact-form";

export const contactMeta: PageMeta = {
  title: "Contactos",
  description:
    "Contacta a Ungubani para falar sobre o teu próximo projeto de construção civil ou obra pública nos Açores.",
};

export const contactHero = {
  eyebrow: "Contactos",
  headline: "Fala connosco",
  subheadline:
    "Conta-nos os detalhes do teu projeto e entramos em contacto o mais rápido possível.",
};

export const contactMapPendingLabel = "Mapa em breve";

export const contactFormCopy: ContactFormCopy = {
  nameLabel: "Nome",
  nameError: "Indica o teu nome.",
  emailLabel: "Email",
  emailRequiredError: "Indica um email de contacto.",
  emailInvalidError: "Introduz um email válido.",
  phoneLabel: "Telefone (opcional)",
  messageLabel: "Mensagem",
  messageError: "Escreve uma mensagem.",
  submitLabel: "Enviar mensagem",
  submittingLabel: "A enviar…",
  errorMessage: "Não foi possível enviar a mensagem. Tenta novamente.",
  successTitle: "Mensagem enviada.",
  successBody: "Obrigado pelo contacto. Vamos responder assim que possível.",
};
