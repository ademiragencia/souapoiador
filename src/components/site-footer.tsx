import { PresidentMark } from "@/components/president-mark";

export function SiteFooter() {
  return (
    <footer className="bg-hero pb-24 text-primary-foreground sm:pb-0">
      <div className="h-1 bg-accent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-3">
          <PresidentMark className="size-9" />
          <div>
            <p className="font-display text-lg font-semibold">
              Comitê Apoie seu Presidente
            </p>
            <p className="mt-1 max-w-sm text-sm text-primary-foreground/75">
              Campanha patriota para as eleições. Meta de R$ 5 milhões. Doação
              mínima de R$ 10. Cada novo apoio soma aos R$ 215 mil já
              arrecadados. Pelo Brasil.
            </p>
          </div>
        </div>
        <p className="text-xs text-primary-foreground/55">
          Campanha de apoio popular, não oficial. O PIX desta prévia registra o
          apoio na hora, sem cobrança bancária real.
        </p>
      </div>
    </footer>
  );
}
