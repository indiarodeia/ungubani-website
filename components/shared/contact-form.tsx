"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormResult = { success: boolean; error?: string };

export type ContactFormAction = (
  data: ContactFormData,
) => Promise<ContactFormResult>;

const defaultAction: ContactFormAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { success: true };
};

export type ContactFormCopy = {
  nameLabel: string;
  nameError: string;
  emailLabel: string;
  emailRequiredError: string;
  emailInvalidError: string;
  phoneLabel: string;
  messageLabel: string;
  messageError: string;
  submitLabel: string;
  submittingLabel: string;
  errorMessage: string;
  successTitle: string;
  successBody: string;
};

const defaultCopy: ContactFormCopy = {
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

type Errors = Partial<Record<keyof ContactFormData, string>>;

function validate(data: ContactFormData, copy: ContactFormCopy): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = copy.nameError;
  if (!data.email.trim()) {
    errors.email = copy.emailRequiredError;
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = copy.emailInvalidError;
  }
  if (!data.message.trim()) errors.message = copy.messageError;
  return errors;
}

type ContactFormProps = {
  action?: ContactFormAction;
  copy?: ContactFormCopy;
};

export function ContactForm({ action = defaultAction, copy = defaultCopy }: ContactFormProps) {
  const [data, setData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );

  function update<K extends keyof ContactFormData>(key: K, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(data, copy);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    const result = await action(data);
    if (result.success) {
      setStatus("success");
      setData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border border-border bg-muted px-6 py-8 text-foreground"
      >
        <p className="font-medium">{copy.successTitle}</p>
        <p className="mt-1 text-sm text-muted-foreground">{copy.successBody}</p>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name">{copy.nameLabel}</Label>
        <Input
          id="contact-name"
          value={data.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-email">{copy.emailLabel}</Label>
        <Input
          id="contact-email"
          type="email"
          value={data.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className="text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-phone">{copy.phoneLabel}</Label>
        <Input
          id="contact-phone"
          type="tel"
          value={data.phone}
          onChange={(event) => update("phone", event.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">{copy.messageLabel}</Label>
        <Textarea
          id="contact-message"
          rows={5}
          value={data.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errors.message && (
          <p id="contact-message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {copy.errorMessage}
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? copy.submittingLabel : copy.submitLabel}
      </Button>
    </form>
  );
}
