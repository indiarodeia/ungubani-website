"use server";

import type {
  ContactFormData,
  ContactFormResult,
} from "@/components/shared/contact-form";

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactFormResult> {
  // TODO: ligar a um serviço de email/CRM real quando estiver disponível.
  console.log("Novo contacto recebido:", data);
  return { success: true };
}
