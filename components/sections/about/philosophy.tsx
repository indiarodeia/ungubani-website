import { SectionTitle } from "@/components/shared/section-title";

type PhilosophyProps = {
  eyebrow: string;
  title: string;
  mission: string;
  philosophy: string;
};

export function Philosophy({ eyebrow, title, mission, philosophy }: PhilosophyProps) {
  return (
    <section className="bg-muted px-6 py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionTitle eyebrow={eyebrow} title={title} align="center" />
        <div className="grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
              Missão
            </h3>
            <p className="text-muted-foreground">{mission}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
              Filosofia de Construção
            </h3>
            <p className="text-muted-foreground">{philosophy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
