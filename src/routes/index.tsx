import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Bus,
  Flag,
  HeartHandshake,
  Landmark,
  Megaphone,
  ShieldCheck,
  Tv,
} from "lucide-react";
import { DonateCard } from "@/components/donate-card";
import { EventCountdown } from "@/components/event-countdown";
import { FaqList } from "@/components/faq-list";
import { FlagBackdrop } from "@/components/flag-backdrop";
import { RaisedCounter } from "@/components/raised-counter";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SupportersWall } from "@/components/supporters-wall";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useCampaignLive } from "@/components/use-campaign-live";
import { getCampaignSummary, listDonations } from "@/lib/donations";
import { formatBRL } from "@/lib/money";

export const Route = createFileRoute("/")({
  loader: async () => {
    const [campaign, donations] = await Promise.all([
      getCampaignSummary(),
      listDonations(),
    ]);
    return { campaign, donations };
  },
  component: Home,
});

const facts = [
  {
    icon: Flag,
    label: "15 de setembro",
    value: "O dia",
    detail: "ato na Paulista",
  },
  {
    icon: Landmark,
    label: "Ponto de encontro",
    value: "MASP",
    detail: "Avenida Paulista",
  },
  {
    icon: Tv,
    label: "Cobertura",
    value: "SBT · Record",
    detail: "o Brasil vai ver",
  },
];

const spends = [
  {
    icon: Megaphone,
    title: "Som, palco e telão",
    text: "Para a Paulista ouvir o pedido de liberdade — e a TV enxergar o MASP lotado.",
  },
  {
    icon: Flag,
    title: "Faixas e bandeiras",
    text: "Material de quem vai a pé. Verde e amarelo de ponta a ponta.",
  },
  {
    icon: Bus,
    title: "Ônibus dos comitês",
    text: "Trazer gente do interior e da periferia até o ponto de encontro.",
  },
];

function Home() {
  const { campaign, donations } = Route.useLoaderData();
  useCampaignLive();
  const overGoal = campaign.raisedCents >= campaign.goalCents;
  const remaining = Math.max(0, campaign.goalCents - campaign.raisedCents);

  return (
    <div id="topo" className="min-h-dvh bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden bg-hero text-primary-foreground">
          <FlagBackdrop />

          <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-6 sm:px-6 sm:pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10 lg:pb-16 lg:pt-12">
            <div className="reveal max-lg:pb-2">
              <div className="sash sash-flag" aria-hidden="true">
                <span />
                <span />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-accent">
                Bolsonaro pelo Brasil · petição popular
              </p>
              <h1 className="mt-3 max-w-xl font-display text-display uppercase">
                Liberte o capitão.
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Ele não pode ficar sozinho. No dia 15 de setembro a Paulista
                pede a liberdade do nosso capitão. Ponto de encontro:{" "}
                <strong className="font-medium text-primary-foreground">
                  MASP
                </strong>
                . SBT e Record no local. Esta vaquinha banca o ato — a partir de
                R$ 10.
              </p>

              <div className="mt-6">
                <p className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <span className="live-dot text-accent" aria-hidden="true" />
                  Arrecadado no banco · ao vivo
                </p>
                <RaisedCounter
                  cents={campaign.raisedCents}
                  tone="onDark"
                  className="mt-2"
                />
                <div className="mt-5 flex items-end justify-between gap-4 text-sm">
                  <p className="text-primary-foreground/70">
                    Meta {formatBRL(campaign.goalCents, { compact: true })}
                    {overGoal ? " · meta superada" : ""}
                  </p>
                  <p className="tabular-nums text-primary-foreground">
                    {campaign.percent}%
                  </p>
                </div>
                <Progress
                  value={campaign.percent}
                  className="mt-2 h-2.5 bg-primary-foreground/15 [&>div]:bg-accent"
                />
                <p className="mt-3 text-sm text-primary-foreground/70">
                  {campaign.supporterCount} pessoas no mural
                  {overGoal
                    ? ""
                    : ` · faltam ${formatBRL(remaining, { compact: true })}`}
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-primary-foreground/15 bg-hero/40 px-4 py-3 backdrop-blur-sm">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-accent">
                  Faltam para o ato
                </p>
                <div className="mt-2">
                  <EventCountdown />
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4" strokeWidth={1.75} />
                  PIX na hora
                </li>
                <li>Doação mínima R$ 10</li>
                <li>Total público no banco</li>
              </ul>
            </div>

            <div className="lg:sticky lg:top-24 max-lg:mb-16">
              <DonateCard />
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
            {facts.map((item) => (
              <div
                key={item.label}
                className="flex gap-3 border-t border-primary-foreground/10 px-4 py-8 sm:border-t-0 sm:border-l sm:px-8 first:border-l-0"
              >
                <item.icon
                  className="mt-0.5 size-5 text-accent"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-display text-3xl font-semibold uppercase tracking-wide">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-medium">{item.label}</p>
                  <p className="text-sm text-primary-foreground/65">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="ato"
          className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24"
        >
          <div className="overflow-hidden rounded-2xl bg-hero shadow-[var(--shadow-lift)]">
            <img
              src="/images/paulista.jpg"
              alt="Avenida Paulista tomada de verde e amarelo no ponto de encontro do MASP"
              className="aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/15"
              width={1600}
              height={900}
            />
          </div>
          <div>
            <div className="sash sash-flag" aria-hidden="true">
              <span />
              <span />
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              O ato
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
              A liberdade se pede na rua.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Dia 15 de setembro, Avenida Paulista. Ponto de encontro no MASP.
                Não é passeata solta: é um pedido nacional pela liberdade do
                nosso capitão, com câmera da SBT e da Record apontada para o
                povo.
              </p>
              <p>
                Os {formatBRL(campaign.baseRaisedCents, { compact: true })} já
                arrecadados não foram zerados. O que entra daqui para frente
                soma nesse total, fica no banco e aparece no site na hora.
                Doação mínima de R$ 10. Campanha de apoio popular, não oficial.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-7">
              <a href="#doar">
                Somar o meu apoio
                <ArrowDown className="size-4" />
              </a>
            </Button>
          </div>
        </section>

        <section className="border-y border-border bg-card/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:py-24">
            <div>
              <div className="sash sash-flag" aria-hidden="true">
                <span />
                <span />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Para onde vai cada real
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
                R$ 100 mil para o capitão não ficar só.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Sem som, sem faixa, sem ônibus, o ato some na avenida. Esta
                vaquinha existe para o MASP ficar cheio — e o Brasil inteiro ver.
              </p>
              <ul className="mt-8 space-y-5">
                {spends.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <item.icon className="size-4" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl bg-hero shadow-[var(--shadow-lift)]">
              <img
                src="/images/masp.jpg"
                alt="MASP na Avenida Paulista, ponto de encontro do ato de 15 de setembro"
                className="aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/15"
                width={1600}
                height={1200}
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SupportersWall donations={donations} />
        </section>

        <section
          id="transparencia"
          className="border-t border-border bg-card/50"
        >
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <div className="sash sash-flag" aria-hidden="true">
                <span />
                <span />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Transparência
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-wide">
                Como o total é composto
              </h2>
              <dl className="mt-8 space-y-4 text-sm">
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Já arrecadado (base)</dt>
                  <dd className="font-medium tabular-nums">
                    {formatBRL(campaign.baseRaisedCents)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Novos apoios desta etapa</dt>
                  <dd className="font-medium tabular-nums">
                    {formatBRL(campaign.newCents)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Total público no banco</dt>
                  <dd className="font-display text-lg font-semibold tabular-nums">
                    {formatBRL(campaign.raisedCents)}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-muted-foreground">Doação mínima</dt>
                  <dd className="font-medium tabular-nums">R$ 10</dd>
                </div>
              </dl>
              <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                <HeartHandshake className="mt-0.5 size-4 shrink-0 text-primary" />
                Destino: comitê popular do ato no MASP. Prestação de contas
                depois do dia 15. Não é conta de governo.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">
                Perguntas frequentes
              </h3>
              <div className="mt-6">
                <FaqList />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <a
        href="#doar"
        className="fixed inset-x-4 bottom-4 z-40 flex h-12 items-center justify-center rounded-xl bg-accent text-sm font-medium text-accent-foreground shadow-[var(--shadow-lift)] sm:hidden"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        Apoiar agora · a partir de R$ 10
      </a>
    </div>
  );
}
