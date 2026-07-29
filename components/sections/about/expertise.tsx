import { SectionTitle } from "@/components/shared/section-title";
import type { Service } from "@/content/types";

type ExpertiseProps = {
  eyebrow: string;
  title: string;
  description: string;
  services: Service[];
};

export function Expertise({ eyebrow, title, description, services }: ExpertiseProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="flex flex-col divide-y divide-border border-t border-border">
          {services.map(({ icon: Icon, title: serviceTitle, description: serviceDescription }) => (
            <div
              key={serviceTitle}
              className="flex flex-col gap-3 py-8 sm:flex-row sm:items-start sm:gap-8"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-primary">
                <Icon className="size-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-lg font-medium text-foreground">
                  {serviceTitle}
                </h3>
                <p className="text-muted-foreground">{serviceDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
