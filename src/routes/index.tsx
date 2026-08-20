import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, HeartHandshake, Landmark, Map, ShieldCheck, Users } from "lucide-react";
import { DonateCard } from "@/components/donate-card";
import { FaqList } from "@/components/faq-list";
import { RaisedCounter } from "@/components/raised-counter";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SupportersWall } from "@/components/supporters-wall";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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

const impacts = [
  {
    icon: Map,
    label: "Estados com comitê",
    value: "27",
    detail: "presença em todo o país",
  },
  {
    icon: Users,
    label: "Núcleos locais",
    value: "1.400",
    detail: "voluntários na ponta",
  },
  {
    icon: Landmark,
    label: "Atos cívicos",
    value: "186",
    detail: "neste semestre",
  },
];

function Home() {
  const { campaign, donations } = Route.useLoaderData();
  const overGoal = campaign.raisedCents >= campaign.goalCents;
  const remaining = Math.max(0, campaign.goalCents - campaign.raisedCents);

  return (
    <div id="topo" className="min-h-dvh bg-background text-foreground">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden bg-hero text-primary-foreground">
          <img
            src="/images/hero.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover object-center opacity-70"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-hero/40" />

          <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-6 sm:px-6 sm:pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10 lg:pb-16 lg:pt-12">
            <div className="reveal max-lg:pb-2">
              <div className="sash sash-flag" aria-hidden="true">
                <span />
                <span />
              </div>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Eleições · pelo Brasil
              </p>
              <h1 className="mt-3 max-w-xl font-display text-display">
                Pelo Brasil. Pelo presidente.
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Campanha patriota. Meta de R$ 5 milhões. Os{" "}
                {formatBRL(campaign.baseRaisedCents, { compact: true })} já
                arrecadados continuam na conta. Cada apoio novo soma — a partir
                de R$ 10.
              </p>

              <div className="mt-6">
                <p className="flex items-center gap-2 text-sm text-primary-foreground/70">
                  <span className="live-dot text-accent" aria-hidden="true" />
                  Arrecadado até agora
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

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-1.5">
                  <ShieldCheck className="size-4" strokeWidth={1.75} />
                  PIX na hora
                </li>
                <li>Doação mínima R$ 10</li>
                <li>Total público</li>
              </ul>
            </div>

            <div className="lg:sticky lg:top-24 max-lg:mb-16">
              <DonateCard />
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
            {impacts.map((item) => (
              <div
                key={item.label}
                className="flex gap-3 border-t border-primary-foreground/10 px-4 py-8 sm:border-t-0 sm:border-l sm:px-8 first:border-l-0"
              >
                <item.icon
                  className="mt-0.5 size-5 text-primary-foreground/80"
                  strokeWidth={1.75}
                />
                <div>
                  <p className="font-display text-3xl font-semibold tabular-nums">
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
          id="historia"
          className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24"
        >
          <div className="overflow-hidden rounded-2xl bg-hero shadow-[var(--shadow-lift)]">
            <img
              src="/images/still.jpg"
              alt="Bandeira do Brasil dobrada ao lado da faixa presidencial"
              className="aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-foreground/15"
              width={1200}
              height={900}
            />
          </div>
          <div>
            <div className="sash sash-flag" aria-hidden="true">
              <span />
              <span />
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              O comitê
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              A pátria se faz com quem está na rua.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Com as eleições à porta, o comitê precisa bancar deslocamento,
                material e a presença em cada estado. Por isso a meta vai a
                R$ 5 milhões. Pelo Brasil.
              </p>
              <p>
                Os {formatBRL(campaign.baseRaisedCents, { compact: true })} já
                arrecadados não foram zerados. O que entra daqui para frente
                soma a esse total. Doação mínima de R$ 10. Campanha de apoio
                popular, não oficial.
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

        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:pb-24">
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
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
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
                  <dt className="text-muted-foreground">Total público</dt>
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
                Destino: comitê de apoio popular, com prestação de contas
                trimestral. Não é conta de governo.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
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
