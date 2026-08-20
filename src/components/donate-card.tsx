import { useMemo, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { Check, Copy, Loader2, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PixMark } from "@/components/pix-mark";
import {
  MAX_DONATION_CENTS,
  MIN_DONATION_CENTS,
  PRESET_REAIS,
} from "@/lib/campaign";
import { createDonation } from "@/lib/donations";
import { formatBRL, reaisToCents } from "@/lib/money";
import { cn } from "@/lib/utils";

function parseReais(raw: string) {
  const normalized = raw.replace(/\s/g, "").replace(",", ".");
  if (!normalized) return null;
  const value = Number(normalized);
  if (!Number.isFinite(value)) return null;
  return value;
}

export function DonateCard() {
  const router = useRouter();
  const [preset, setPreset] = useState<number | null>(50);
  const [custom, setCustom] = useState("");
  const [alias, setAlias] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<"pix" | "success">("pix");
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const amountReais = custom ? parseReais(custom) : preset;
  const amountCents =
    amountReais != null ? reaisToCents(amountReais) : null;

  const pixPayload = useMemo(() => {
    if (!amountCents) return "BOLSONARO-PELO-BRASIL";
    return `0002012636BR.GOV.BCB.PIX|BOLSONAROPELOBRASIL|${amountCents}|MASP`;
  }, [amountCents]);

  function validate() {
    if (amountCents == null || amountReais == null) {
      return "Escolha ou digite um valor.";
    }
    if (amountCents < MIN_DONATION_CENTS) {
      return "A doação mínima é de R$ 10.";
    }
    if (amountCents > MAX_DONATION_CENTS) {
      return "O valor máximo por doação é R$ 50.000.";
    }
    return null;
  }

  function startPix() {
    const message = validate();
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setPhase("pix");
    setCopied(false);
    setOpen(true);
  }

  async function confirmDonation() {
    const message = validate();
    if (message || amountCents == null) {
      setError(message ?? "Valor inválido.");
      return;
    }
    setSubmitting(true);
    try {
      await createDonation({
        data: {
          amountCents,
          publicAlias: alias.trim() || null,
          note: note.trim() || null,
        },
      });
      await router.invalidate();
      setPhase("success");
      setCustom("");
      setPreset(50);
      setAlias("");
      setNote("");
    } catch (err) {
      const text =
        err instanceof Error ? err.message : "Não foi possível registrar o apoio.";
      toast.error(text);
    } finally {
      setSubmitting(false);
    }
  }

  async function copyPix() {
    try {
      await navigator.clipboard.writeText(pixPayload);
      setCopied(true);
      toast.success("Código PIX copiado.");
    } catch {
      toast.error("Não foi possível copiar. Selecione o código manualmente.");
    }
  }

  const cta =
    amountCents != null && amountCents >= MIN_DONATION_CENTS
      ? `Somar ${formatBRL(amountCents)} na Paulista`
      : "Continuar para o PIX";

  return (
    <section
      id="doar"
      className="scroll-mt-24 overflow-hidden rounded-2xl bg-card text-card-foreground shadow-[var(--shadow-lift)]"
    >
      <div className="bg-primary px-5 py-3.5 text-primary-foreground sm:px-6">
        <div className="sash sash-flag" aria-hidden="true">
          <span />
          <span />
        </div>
        <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-accent">
          Último ato · a partir de R$ 10
        </p>
        <h2 className="mt-1 font-display text-xl font-semibold uppercase tracking-wide sm:text-2xl">
          Quanto você soma?
        </h2>
      </div>

      <div className="p-4 sm:p-5">
        <div className="grid grid-cols-3 gap-1.5">
          {PRESET_REAIS.map((value) => {
            const selected = !custom && preset === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => {
                  setPreset(value);
                  setCustom("");
                  setError(null);
                }}
                className={cn(
                  "h-11 rounded-lg border text-sm font-medium tabular-nums transition-[background-color,border-color,color,transform] duration-150 ease-out active:scale-[0.96]",
                  selected
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-background text-foreground hover:bg-muted",
                )}
              >
                R$ {value}
              </button>
            );
          })}
        </div>

        <div className="mt-4 space-y-1.5">
          <Label htmlFor="valor-custom">Outro valor</Label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              R$
            </span>
            <Input
              id="valor-custom"
              inputMode="decimal"
              placeholder="10,00"
              value={custom}
              onChange={(event) => {
                setCustom(event.target.value);
                setPreset(null);
                setError(null);
              }}
              className="pl-10 tabular-nums"
            />
          </div>
        </div>

        <div className="mt-4 space-y-1.5">
          <Label htmlFor="alias">Nome no mural (opcional)</Label>
          <Input
            id="alias"
            maxLength={40}
            placeholder="Como você quer aparecer"
            value={alias}
            onChange={(event) => setAlias(event.target.value)}
            autoComplete="nickname"
          />
        </div>

        <div className="mt-4 space-y-1.5">
          <Label htmlFor="note">Recado ao presidente (opcional)</Label>
          <Textarea
            id="note"
            maxLength={140}
            placeholder="Vamos libertar nosso presidente"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </div>

        {error ? (
          <p className="mt-3 text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : null}

        <Button type="button" className="mt-5 w-full" size="lg" onClick={startPix}>
          {cta}
        </Button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="size-3.5" />
          PIX único · a partir de {formatBRL(MIN_DONATION_CENTS)} · total no banco
        </p>
      </div>

      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setPhase("pix");
        }}
      >
        <DialogContent>
          {phase === "pix" && amountCents != null ? (
            <>
              <DialogHeader>
                <DialogTitle>PIX da vaquinha</DialogTitle>
                <DialogDescription>
                  Confirme {formatBRL(amountCents)} para o ato no MASP. Nesta
                  prévia, o apoio entra no total na hora — e fica gravado.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col items-center gap-4">
                <PixMark seed={pixPayload} />
                <p className="font-display text-2xl font-semibold tabular-nums">
                  {formatBRL(amountCents)}
                </p>
                <button
                  type="button"
                  onClick={copyPix}
                  className="flex w-full items-center justify-between gap-3 rounded-xl bg-muted px-3 py-3 text-left text-xs text-muted-foreground"
                >
                  <span className="min-w-0 truncate font-mono">{pixPayload}</span>
                  {copied ? (
                    <Check className="size-4 shrink-0 text-foreground" />
                  ) : (
                    <Copy className="size-4 shrink-0 text-foreground" />
                  )}
                </button>
              </div>
              <Button
                type="button"
                size="lg"
                className="w-full"
                onClick={confirmDonation}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin" />
                    Registrando
                  </>
                ) : (
                  "Já paguei · registrar apoio"
                )}
              </Button>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Obrigado. O presidente conta com você.</DialogTitle>
                <DialogDescription>
                  Seu valor já entrou no último ato antes das eleições. No dia
                  15, no MASP, isso vira som, faixa e presença.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center py-2">
                <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-7" strokeWidth={2.2} />
                </span>
              </div>
              <Button type="button" className="w-full" onClick={() => setOpen(false)}>
                Fechar
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
