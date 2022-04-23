const texto = '1,2,3,4,5,6,a.b c!d?e[f';

// Mesma coisa que /0|2|4|6|8/g
const regexPares = /[02468]/g;

// [OUT]:
// [ '2', '4', '6' ]
console.log(texto.match(regexPares));

const texto2 = 'João não vai passear na moto, porque nao tem carteira.';

const regexComESemAcento = /n[aã]o/g;

// [OUT]:
// [ 'não', 'nao' ]
console.log(texto2.match(regexComESemAcento));