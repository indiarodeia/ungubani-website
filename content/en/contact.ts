import type { PageMeta } from "../types";
import type { ContactFormCopy } from "@/components/shared/contact-form";

export const contactMeta: PageMeta = {
  title: "Contact",
  description:
    "Contact Ungubani to talk about your next civil construction or public works project in the Azores.",
};

export const contactHero = {
  eyebrow: "Contact",
  headline: "Talk to us",
  subheadline:
    "Tell us about your project and we'll get back to you as soon as possible.",
};

export const contactMapPendingLabel = "Map coming soon";

export const contactFormCopy: ContactFormCopy = {
  nameLabel: "Name",
  nameError: "Please enter your name.",
  emailLabel: "Email",
  emailRequiredError: "Please enter a contact email.",
  emailInvalidError: "Please enter a valid email address.",
  phoneLabel: "Phone (optional)",
  messageLabel: "Message",
  messageError: "Please write a message.",
  submitLabel: "Send message",
  submittingLabel: "Sending…",
  errorMessage: "We couldn't send your message. Please try again.",
  successTitle: "Message sent.",
  successBody: "Thanks for reaching out. We'll get back to you as soon as possible.",
};
