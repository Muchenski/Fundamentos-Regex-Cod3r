const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.';

// Regex para bucar o texto "casa", de maneira global e case insensitive.
const casaRegexGlobalCaseInsensitive = /casa/gi;

// Regex para bucar o texto "casa", de maneira local e case sensitive.
const casaRegexLocalCaseSensitive = /casa/;

// [OUT]:
// [ 'Casa', 'casa', 'CASA' ]
console.log(texto.match(casaRegexGlobalCaseInsensitive));

// [OUT]:
// [
//     'casa',
//     index: 14,
//     input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
//     groups: undefined
// ]
console.log(texto.match(casaRegexLocalCaseSensitive));

// OBS: Quando realizamos uma busca local, recebemos o valor procurado e dados a respeito do memso, como retorno do método "match".

// Regex considera o espaço também:
// [OUT]:
// [
//     'a b',
//     index: 3,
//     input: 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.',
//     groups: undefined
// ]
console.log(texto.match(/a b/));