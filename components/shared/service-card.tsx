import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="rounded-md ring-1 ring-border">
      <CardContent className="flex flex-col gap-4 px-6">
        <div className="flex size-10 items-center justify-center rounded-md bg-muted text-primary">
          <Icon className="size-5" />
        </div>
        <h3 className="font-heading text-base font-medium text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
