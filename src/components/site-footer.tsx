import { PresidentMark } from "@/components/president-mark";
import { APP_NAME } from "@/lib/campaign";

export function SiteFooter() {
  return (
    <footer className="bg-hero pb-24 text-primary-foreground sm:pb-0">
      <div className="h-1 bg-accent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-3">
          <PresidentMark className="size-9" />
          <div>
            <p className="font-display text-lg font-semibold uppercase tracking-wide">
              {APP_NAME}
            </p>
            <p className="mt-1 max-w-sm text-sm text-primary-foreground/75">
              Último ato antes das eleições. Vamos libertar nosso presidente.
              Vaquinha para 15 de setembro na Avenida Paulista, ponto de
              encontro no MASP. Doação mínima de R$ 10. Os R$ 11.880 já
              arrecadados continuam na conta.
            </p>
          </div>
        </div>
        <p className="text-xs text-primary-foreground/55">
          Campanha de apoio popular, não oficial. O PIX desta prévia registra o
          apoio na hora, sem cobrança bancária real. Total público, gravado no
          banco.
        </p>
      </div>
    </footer>
  );
}
