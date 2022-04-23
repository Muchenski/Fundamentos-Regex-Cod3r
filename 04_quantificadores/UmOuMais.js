const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// + um ou mais
// A letra a esquerda de + é obrigatória na pesquisa, e será retornado o texto com sua única ou várias ocorrências.
const regex = /fogo+/gi;

// [OUT]:
// [ 'fogo', 'FOGOOOOOO' ]
console.log(texto1.match(regex));

// [OUT]:
// null
console.log(texto2.match(regex));

///////////////////////////////////////////

const texto3 = 'Os números: 0123456789. aaaa 654646';

// Obtem o resultado por cada caractere.
// [OUT]:
// [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '6', '5', '4', '6', '4', '6' ]
console.log(texto3.match(/[0-9]/g));


// Obtem o resultado por cada sequência.
// [OUT]:
// [ '0123456789', '654646' ]
console.log(texto3.match(/[0-9]+/g));