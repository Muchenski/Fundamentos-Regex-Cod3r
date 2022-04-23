/////////////////////////////////////////////////////////////////////////////
// Sem acento:

const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial';


// Obtendo as sequências que possuem 'dia' como borda inicial.
// [OUT]:
// [ 'diatonico', 'diafragma' ]
console.log(texto1.match(/\bdia\w+/gi));


// Obtendo as sequências que possuem 'dia' como borda final.
// [OUT]:
// [ 'media', 'wikipedia', 'bom_dia', 'melodia' ]
console.log(texto1.match(/\w+dia\b/gi));


// Obtendo as sequências que possuem 'dia' no meio.
// [OUT]:
// [ 'radial' ]
console.log(texto1.match(/\w+dia\w+/g));


// [OUT]:
// [ 'dia' ]
console.log(texto1.match(/\bdia\b/gi));


/////////////////////////////////////////////////////////////////////////////
// Com acento:

// OBS:
// borda é não \w, que é [^A-Za-z0-9_]... temos problemas com acentos!

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial';


// Selecionou:
// '[dia ]diatônico diafragma, m[édia ]wikip[édia ]bom[-dia ]melodia radial';
// [OUT]:
// [ 'dia', 'dia', 'dia', 'dia' ]
console.log(texto2.match(/\bdia\b/gi));


// Selecionou vírgulas (não desejado).
// [OUT]:
// [ 'dia', 'diatônico', 'diafragma,', 'média', 'wikipédia', 'bom-dia', 'melodia', 'radial' ]
console.log(texto2.match(/(\S*)?dia(\S*)?/gi));


// Selecionando as sequências que possuem "dia":
// [OUT]:
// [ 'dia', 'diatônico', 'diafragma', 'média', 'wikipédia', 'bom-dia', 'melodia',   'radial' ]
console.log(texto2.match(/([\wÁ-ú-]*)?dia([\wÁ-ú-]*)?/gi));
// ou:
console.log(texto2.match(/[\wÁ-ú-]*dia[\wÁ-ú-]*/gi));