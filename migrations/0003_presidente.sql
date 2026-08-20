update campaigns
set title = 'Apoie seu Presidente'
where id = 'apoie-seu-capitao';

update donations set note = 'Pelo Brasil que a gente quer.' where public_alias = 'Mariana' and counted = false;
update donations set note = 'O presidente não caminha sozinho.' where public_alias = 'Leticia' and counted = false;
update donations set note = 'Do comitê da zona leste.' where public_alias = 'Núcleo Leste' and counted = false;
update donations set note = 'Pela cidadania nos interiores.' where public_alias = 'Ana Clara' and counted = false;
update donations set note = 'A presença não pode parar.' where public_alias = 'Cida' and counted = false;
update donations set note = 'Todo real conta.' where public_alias = 'Pedro' and counted = false;
update donations set note = 'Presidente, estamos com você.' where public_alias = 'Time da Ponte' and counted = false;
update donations set note = 'Pela frente cívica.' where public_alias = 'Sonia' and counted = false;
update donations set note = 'Orgulho de apoiar.' where public_alias = 'Camila' and counted = false;
update donations set public_alias = 'Comitê Leste' where public_alias = 'Núcleo Leste' and counted = false;
update donations set public_alias = 'Comitê da Ponte' where public_alias = 'Time da Ponte' and counted = false;
update donations set public_alias = 'Oficina 12' where public_alias = 'Oficina 12' and counted = false;
