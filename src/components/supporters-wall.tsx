import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { PublicDonation } from "@/lib/donations";
import { formatBRL } from "@/lib/money";

function displayName(alias: string | null) {
  return alias?.trim() || "Apoiador anônimo";
}

function RelativeTime({ iso }: { iso: string }) {
  const [text, setText] = useState("");
  useEffect(() => {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return;
    setText(formatDistanceToNow(date, { addSuffix: true, locale: ptBR }));
  }, [iso]);
  if (!text) return <span className="inline-block min-h-4" />;
  return <>{text}</>;
}

export function SupportersWall({ donations }: { donations: PublicDonation[] }) {
  return (
    <section id="apoiadores" className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Mural
          </p>
          <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight">
            Quem já apoiou
          </h2>
        </div>
        <p className="hidden text-sm text-muted-foreground sm:block">
          {donations.length} apoios recentes
        </p>
      </div>

      {donations.length === 0 ? (
        <p className="mt-8 text-sm text-muted-foreground">
          Seja o primeiro a somar nesta etapa da campanha.
        </p>
      ) : (
        <ul className="mt-8 divide-y divide-border overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-lift)]">
          {donations.map((donation) => (
            <li
              key={donation.id}
              className="flex items-start justify-between gap-4 px-5 py-4 sm:px-6"
            >
              <div className="min-w-0">
                <p className="truncate font-medium text-foreground">
                  {displayName(donation.publicAlias)}
                </p>
                {donation.note ? (
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {donation.note}
                  </p>
                ) : null}
                <p className="mt-1 text-xs text-muted-foreground">
                  <RelativeTime iso={donation.createdAt} />
                </p>
              </div>
              <p className="shrink-0 font-medium tabular-nums text-foreground">
                {formatBRL(donation.amountCents)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
