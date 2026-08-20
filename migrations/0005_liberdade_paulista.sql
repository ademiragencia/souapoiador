update campaigns
set
  title = 'Bolsonaro pelo Brasil',
  goal_cents = 10000000,
  base_raised_cents = 1188000
where id = 'apoie-seu-capitao';

update donations set note = 'Liberdade para o capitão.' where public_alias = 'Mariana' and counted = false;
update donations set note = 'Eu vou na Paulista.' where public_alias = 'Leticia' and counted = false;
update donations set note = 'Do comitê da zona leste, rumo ao MASP.' where public_alias = 'Comitê Leste' and counted = false;
update donations set note = 'Pela cidadania e pela liberdade.' where public_alias = 'Ana Clara' and counted = false;
update donations set note = 'O capitão não caminha sozinho.' where public_alias = 'Cida' and counted = false;
update donations set note = 'Todo real conta no ato.' where public_alias = 'Pedro' and counted = false;
update donations set note = 'Presidente, estamos com você.' where public_alias = 'Comitê da Ponte' and counted = false;
update donations set note = 'Pela frente cívica na Paulista.' where public_alias = 'Sonia' and counted = false;
update donations set note = 'Orgulho de apoiar a liberdade.' where public_alias = 'Camila' and counted = false;
