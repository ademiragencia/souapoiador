import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";
import {
  CAMPAIGN_ID,
  MAX_DONATION_CENTS,
  MIN_DONATION_CENTS,
} from "@/lib/campaign";

export type CampaignSummary = {
  title: string;
  goalCents: number;
  baseRaisedCents: number;
  newCents: number;
  raisedCents: number;
  supporterCount: number;
  percent: number;
};

export type PublicDonation = {
  id: number;
  amountCents: number;
  publicAlias: string | null;
  note: string | null;
  createdAt: string;
};

type CampaignRow = {
  title: string;
  goalCents: number;
  baseRaisedCents: number;
  newCents: number;
  supporterCount: number;
};

type DonationRow = {
  id: number;
  amountCents: number;
  publicAlias: string | null;
  note: string | null;
  createdAt: string | Date;
};

function toIso(value: string | Date) {
  if (value instanceof Date) return value.toISOString();
  const asDate = new Date(value);
  return Number.isNaN(asDate.getTime()) ? String(value) : asDate.toISOString();
}

function toSummary(row: CampaignRow): CampaignSummary {
  const raisedCents = row.baseRaisedCents + row.newCents;
  const percent =
    row.goalCents <= 0
      ? 0
      : Math.min(100, Math.round((raisedCents / row.goalCents) * 1000) / 10);
  return {
    title: row.title,
    goalCents: row.goalCents,
    baseRaisedCents: row.baseRaisedCents,
    newCents: row.newCents,
    raisedCents,
    supporterCount: row.supporterCount,
    percent,
  };
}

async function fetchSummary(): Promise<CampaignSummary> {
  const sql = await getSql();
  const rows = await sql<CampaignRow>`
    select
      c.title,
      c.goal_cents as "goalCents",
      c.base_raised_cents as "baseRaisedCents",
      coalesce((select sum(d.amount_cents)::int from donations d where d.counted = true), 0) as "newCents",
      (select count(*)::int from donations) as "supporterCount"
    from campaigns c
    where c.id = ${CAMPAIGN_ID}
    limit 1
  `;
  const row = rows[0];
  if (!row) throw new Error("Campanha não encontrada.");
  return toSummary(row);
}

export const getCampaignSummary = createServerFn({ method: "GET" }).handler(
  async () => fetchSummary(),
);

export const listDonations = createServerFn({ method: "GET" }).handler(
  async () => {
    const sql = await getSql();
    const rows = await sql<DonationRow>`
      select
        id,
        amount_cents as "amountCents",
        public_alias as "publicAlias",
        note,
        created_at as "createdAt"
      from donations
      order by created_at desc
      limit 40
    `;
    return rows.map(
      (row): PublicDonation => ({
        id: row.id,
        amountCents: row.amountCents,
        publicAlias: row.publicAlias,
        note: row.note,
        createdAt: toIso(row.createdAt),
      }),
    );
  },
);

const donateSchema = z.object({
  amountCents: z
    .number()
    .int()
    .min(MIN_DONATION_CENTS)
    .max(MAX_DONATION_CENTS),
  publicAlias: z.string().max(40).optional().nullable(),
  note: z.string().max(140).optional().nullable(),
});

function cleanText(value: string | null | undefined, max: number) {
  if (!value) return null;
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
}

export const createDonation = createServerFn({ method: "POST" })
  .validator(donateSchema)
  .handler(async ({ data }) => {
    const alias = cleanText(data.publicAlias, 40);
    const note = cleanText(data.note, 140);

    if (alias && /@|\.com|\.br|http/i.test(alias)) {
      throw new Error("Use um nome público, sem e-mail ou link.");
    }
    if (note && /https?:\/\//i.test(note)) {
      throw new Error("O recado não pode ter links.");
    }

    const sql = await getSql();
    const inserted = await sql<{ id: number }>`
      insert into donations (amount_cents, public_alias, note, counted)
      values (${data.amountCents}, ${alias}, ${note}, true)
      returning id
    `;
    if (!inserted[0]) throw new Error("Não foi possível registrar o apoio.");

    return fetchSummary();
  });
