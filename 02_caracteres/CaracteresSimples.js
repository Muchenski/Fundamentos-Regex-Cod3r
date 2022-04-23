const texto = '1,2,3,4,5,6,a.b c!d?e';

const regexVirgula = /,/;

// Quebrando todas vírgulas e separando os elementos a partir das vírgulas quebradas.
// [OUT]:
// [ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]
console.log(texto.split(regexVirgula));

// Procurando a primeira ocorrência de vírgula.
// [OUT]:
// [ ',', index: 1, input: '1,2,3,4,5,6,a.b c!d?e', groups: undefined ]
console.log(texto.match(regexVirgula));

// Procurando todas ocorrências de vírgulas.
// [OUT]:
// [ ',', ',', ',', ',', ',', ',' ]
console.log(texto.match(/,/g));

// Procurando todas ocorrências da letra 'A' maiúsculo.
// [OUT]:
// null
console.log(texto.match(/A/g));

// Procurando todas ocorrências da letra 'A' de forma case insensitive.
// [OUT]:
// [ 'a' ]
console.log(texto.match(/A/gi));

// Procurando todas ocorrências do número 2.
// [OUT]:
// [ '2' ]
console.log(texto.match(/2/gi));

// Procurando a primeira ocorrência da sequência "b c!d" de forma case sensitive.
// [OUT]:
// [
//     'b c!d',
//     index: 14,
//     input: '1,2,3,4,5,6,a.b c!d?e',
//     groups: undefined
// ]
console.log(texto.match(/b c!d/));
