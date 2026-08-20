import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { n as MAX_DONATION_CENTS, r as MIN_DONATION_CENTS, t as CAMPAIGN_ID } from "./campaign-C8xvh2Oh.mjs";
import { i as string, n as number, r as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/donations-BQJZ6rnb.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var _0002_campaign_default = "create table if not exists campaigns (\n  id text primary key,\n  title text not null,\n  goal_cents integer not null,\n  base_raised_cents integer not null,\n  created_at timestamptz not null default now()\n);\n\ncreate table if not exists donations (\n  id serial primary key,\n  amount_cents integer not null,\n  public_alias text,\n  note text,\n  counted boolean not null default true,\n  created_at timestamptz not null default now()\n);\n\ncreate index if not exists donations_created_at_idx on donations (created_at desc);\n\ninsert into campaigns (id, title, goal_cents, base_raised_cents)\nvalues (\n  'apoie-seu-capitao',\n  'Apoie seu Capitão',\n  50000000,\n  21500000\n)\non conflict (id) do nothing;\n\ninsert into donations (amount_cents, public_alias, note, counted, created_at)\nselect v.amount_cents, v.public_alias, v.note, v.counted, v.created_at\nfrom (\n  values\n    (10000, 'Mariana'::text, 'Pelo campinho do bairro.'::text, false, now() - interval '2 days'),\n    (2500, 'João', null::text, false, now() - interval '3 days'),\n    (5000, 'Leticia', 'Que o capitão nunca jogue sozinho.', false, now() - interval '5 days'),\n    (100000, 'Núcleo Leste', 'Do time da fábrica.', false, now() - interval '6 days'),\n    (3000, 'Rafael', null, false, now() - interval '8 days'),\n    (2000, 'Ana Clara', 'Pelas crianças da várzea.', false, now() - interval '9 days'),\n    (15000, 'Cida', 'A merenda não pode parar.', false, now() - interval '12 days'),\n    (50000, 'Oficina 12', null, false, now() - interval '14 days'),\n    (1000, 'Pedro', 'Todo real conta.', false, now() - interval '16 days'),\n    (8000, 'Helena', null, false, now() - interval '18 days'),\n    (25000, 'Time da Ponte', 'Capitão, estamos com você.', false, now() - interval '21 days'),\n    (4000, 'Bruno', null, false, now() - interval '24 days'),\n    (20000, 'Sonia', 'Pelo reforço escolar.', false, now() - interval '28 days'),\n    (1500, 'Diego', null, false, now() - interval '32 days'),\n    (7000, 'Camila', 'Orgulho do nosso capitão.', false, now() - interval '36 days')\n) as v(amount_cents, public_alias, note, counted, created_at)\nwhere not exists (select 1 from donations limit 1);\n";
var _0003_presidente_default = "update campaigns\nset title = 'Apoie seu Presidente'\nwhere id = 'apoie-seu-capitao';\n\nupdate donations set note = 'Pelo Brasil que a gente quer.' where public_alias = 'Mariana' and counted = false;\nupdate donations set note = 'O presidente não caminha sozinho.' where public_alias = 'Leticia' and counted = false;\nupdate donations set note = 'Do comitê da zona leste.' where public_alias = 'Núcleo Leste' and counted = false;\nupdate donations set note = 'Pela cidadania nos interiores.' where public_alias = 'Ana Clara' and counted = false;\nupdate donations set note = 'A presença não pode parar.' where public_alias = 'Cida' and counted = false;\nupdate donations set note = 'Todo real conta.' where public_alias = 'Pedro' and counted = false;\nupdate donations set note = 'Presidente, estamos com você.' where public_alias = 'Time da Ponte' and counted = false;\nupdate donations set note = 'Pela frente cívica.' where public_alias = 'Sonia' and counted = false;\nupdate donations set note = 'Orgulho de apoiar.' where public_alias = 'Camila' and counted = false;\nupdate donations set public_alias = 'Comitê Leste' where public_alias = 'Núcleo Leste' and counted = false;\nupdate donations set public_alias = 'Comitê da Ponte' where public_alias = 'Time da Ponte' and counted = false;\nupdate donations set public_alias = 'Oficina 12' where public_alias = 'Oficina 12' and counted = false;\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({
			"/migrations/0002_campaign.sql": _0002_campaign_default,
			"/migrations/0003_presidente.sql": _0003_presidente_default
		});
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
function toIso(value) {
	if (value instanceof Date) return value.toISOString();
	const asDate = new Date(value);
	return Number.isNaN(asDate.getTime()) ? String(value) : asDate.toISOString();
}
function toSummary(row) {
	const raisedCents = row.baseRaisedCents + row.newCents;
	const percent = row.goalCents <= 0 ? 0 : Math.min(100, Math.round(raisedCents / row.goalCents * 1e3) / 10);
	return {
		title: row.title,
		goalCents: row.goalCents,
		baseRaisedCents: row.baseRaisedCents,
		newCents: row.newCents,
		raisedCents,
		supporterCount: row.supporterCount,
		percent
	};
}
async function fetchSummary() {
	const row = (await (await getSql())`
    select
      c.title,
      c.goal_cents as "goalCents",
      c.base_raised_cents as "baseRaisedCents",
      coalesce((select sum(d.amount_cents)::int from donations d where d.counted = true), 0) as "newCents",
      (select count(*)::int from donations) as "supporterCount"
    from campaigns c
    where c.id = ${CAMPAIGN_ID}
    limit 1
  `)[0];
	if (!row) throw new Error("Campanha não encontrada.");
	return toSummary(row);
}
var getCampaignSummary_createServerFn_handler = createServerRpc({
	id: "d073e5de66e751c8c23d0e184a9e860a97becc79575929878ae77f9f2574238b",
	name: "getCampaignSummary",
	filename: "src/lib/donations.ts"
}, (opts) => getCampaignSummary.__executeServer(opts));
var getCampaignSummary = createServerFn({ method: "GET" }).handler(getCampaignSummary_createServerFn_handler, async () => fetchSummary());
var listDonations_createServerFn_handler = createServerRpc({
	id: "a8921e413081ebf94e456addcbec78f6ac2050cc544e73baf968a33c6327dc0d",
	name: "listDonations",
	filename: "src/lib/donations.ts"
}, (opts) => listDonations.__executeServer(opts));
var listDonations = createServerFn({ method: "GET" }).handler(listDonations_createServerFn_handler, async () => {
	return (await (await getSql())`
      select
        id,
        amount_cents as "amountCents",
        public_alias as "publicAlias",
        note,
        created_at as "createdAt"
      from donations
      order by created_at desc
      limit 40
    `).map((row) => ({
		id: row.id,
		amountCents: row.amountCents,
		publicAlias: row.publicAlias,
		note: row.note,
		createdAt: toIso(row.createdAt)
	}));
});
var donateSchema = object({
	amountCents: number().int().min(MIN_DONATION_CENTS).max(MAX_DONATION_CENTS),
	publicAlias: string().max(40).optional().nullable(),
	note: string().max(140).optional().nullable()
});
function cleanText(value, max) {
	if (!value) return null;
	const trimmed = value.replace(/\s+/g, " ").trim();
	if (!trimmed) return null;
	return trimmed.slice(0, max);
}
var createDonation_createServerFn_handler = createServerRpc({
	id: "6b22755f49a0228903d7a64f2d03c6a9fde48244706c018b768ecb599be09ccc",
	name: "createDonation",
	filename: "src/lib/donations.ts"
}, (opts) => createDonation.__executeServer(opts));
var createDonation = createServerFn({ method: "POST" }).validator(donateSchema).handler(createDonation_createServerFn_handler, async ({ data }) => {
	const alias = cleanText(data.publicAlias, 40);
	const note = cleanText(data.note, 140);
	if (alias && /@|\.com|\.br|http/i.test(alias)) throw new Error("Use um nome público, sem e-mail ou link.");
	if (note && /https?:\/\//i.test(note)) throw new Error("O recado não pode ter links.");
	if (!(await (await getSql())`
      insert into donations (amount_cents, public_alias, note, counted)
      values (${data.amountCents}, ${alias}, ${note}, true)
      returning id
    `)[0]) throw new Error("Não foi possível registrar o apoio.");
	return fetchSummary();
});
//#endregion
export { createDonation_createServerFn_handler, getCampaignSummary_createServerFn_handler, listDonations_createServerFn_handler };
