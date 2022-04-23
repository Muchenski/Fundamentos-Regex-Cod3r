const texto = 'ABC [abc] a-c 1234';

// Intervalos usam a ordem da tabela UNICODE.

// [OUT]:
// [ 'a', 'b', 'c', 'a', 'c' ]
console.log(texto.match(/[a-c]/g));

// Não define um range
// [OUT]:
// [ 'a-c' ]
console.log(texto.match(/a-c/g));

// [OUT]:
// [ 'A', 'B', 'C', '[', 'a', 'b', 'c', ']', 'a', 'c' ]
console.log(texto.match(/[A-z]/g));


// Tem que respeitar a ordem da tabela UNICODE, senão dá erro:

// console.log(texto.match(/[a-Z]/g));
// console.log(texto.match(/[4-1]/g));