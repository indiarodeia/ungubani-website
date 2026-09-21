import { SectionTitle } from "@/components/shared/section-title";

type PhilosophyProps = {
  eyebrow: string;
  title: string;
  missionLabel: string;
  mission: string;
  philosophyLabel: string;
  philosophy: string;
};

export function Philosophy({
  eyebrow,
  title,
  missionLabel,
  mission,
  philosophyLabel,
  philosophy,
}: PhilosophyProps) {
  return (
    <section className="bg-muted px-6 py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionTitle eyebrow={eyebrow} title={title} align="center" />
        <div className="grid grid-cols-1 gap-12 border-t border-border pt-12 sm:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
              {missionLabel}
            </h3>
            <p className="text-muted-foreground">{mission}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-medium tracking-wide text-foreground uppercase">
              {philosophyLabel}
            </h3>
            <p className="text-muted-foreground">{philosophy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
