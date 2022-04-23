// . é um coringa, válido para uma posição
// O coringa representa qualquer caractere(ou espaço, menos quebra de linha) entre os caracteres definidos no texto.

const texto = '1,2,3,4,5,6,7,8,9,0';

// [OUT]:
// [ '1 2' ]
console.log("1 2".match(/1.2/g));

// [OUT]:
// [ '1,2' ]
console.log(texto.match(/1.2/g));

// [OUT]:
// null
console.log(texto.match(/1..2/g));

// [OUT]:
// [ '1,2,' ]
console.log(texto.match(/1..,/g));


const notas = '8.3,7.1,8.8,10.0';

// [OUT]:
// [ '8.3', '8.8' ]
console.log(notas.match(/8../g));

// [OUT]:
// [ '8.3', '7.1', '8.8', '0.0' ]
console.log(notas.match(/.\../g));