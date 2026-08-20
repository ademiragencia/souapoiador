const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 2,
});

const brlCompact = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function formatBRL(cents: number, opts?: { compact?: boolean }) {
  const value = cents / 100;
  return (opts?.compact ? brlCompact : brl).format(value);
}

export function reaisToCents(reais: number) {
  return Math.round(reais * 100);
}

export function centsToReais(cents: number) {
  return cents / 100;
}
