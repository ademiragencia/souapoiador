create table if not exists campaigns (
  id text primary key,
  title text not null,
  goal_cents integer not null,
  base_raised_cents integer not null,
  created_at timestamptz not null default now()
);

create table if not exists donations (
  id serial primary key,
  amount_cents integer not null,
  public_alias text,
  note text,
  counted boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists donations_created_at_idx on donations (created_at desc);

insert into campaigns (id, title, goal_cents, base_raised_cents)
values (
  'apoie-seu-capitao',
  'Apoie seu Capitão',
  50000000,
  21500000
)
on conflict (id) do nothing;

insert into donations (amount_cents, public_alias, note, counted, created_at)
select v.amount_cents, v.public_alias, v.note, v.counted, v.created_at
from (
  values
    (10000, 'Mariana'::text, 'Pelo campinho do bairro.'::text, false, now() - interval '2 days'),
    (2500, 'João', null::text, false, now() - interval '3 days'),
    (5000, 'Leticia', 'Que o capitão nunca jogue sozinho.', false, now() - interval '5 days'),
    (100000, 'Núcleo Leste', 'Do time da fábrica.', false, now() - interval '6 days'),
    (3000, 'Rafael', null, false, now() - interval '8 days'),
    (2000, 'Ana Clara', 'Pelas crianças da várzea.', false, now() - interval '9 days'),
    (15000, 'Cida', 'A merenda não pode parar.', false, now() - interval '12 days'),
    (50000, 'Oficina 12', null, false, now() - interval '14 days'),
    (1000, 'Pedro', 'Todo real conta.', false, now() - interval '16 days'),
    (8000, 'Helena', null, false, now() - interval '18 days'),
    (25000, 'Time da Ponte', 'Capitão, estamos com você.', false, now() - interval '21 days'),
    (4000, 'Bruno', null, false, now() - interval '24 days'),
    (20000, 'Sonia', 'Pelo reforço escolar.', false, now() - interval '28 days'),
    (1500, 'Diego', null, false, now() - interval '32 days'),
    (7000, 'Camila', 'Orgulho do nosso capitão.', false, now() - interval '36 days')
) as v(amount_cents, public_alias, note, counted, created_at)
where not exists (select 1 from donations limit 1);
