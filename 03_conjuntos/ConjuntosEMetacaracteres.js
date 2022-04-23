const texto = '.$+*?-';

// Dentro do conjunto, a maioria dos metacaracteres serão resolvidos para o literal, sem necessitar do escape '\'.
// Pode precisar de escape '\' dentro do conjunto: - [ ] ^
// De qualquer maneira, podemos utilizar o escape '\' para todos metacaracteres que desejamos utilizar de maneira literal dentro do conjunto.
// Intervalos usam a ordem da tabela UNICODE.

// SÃO intervalos (range):

// [OUT]:
// [ '.$', '+*', '?-' ]
console.log(texto.match(/[+.?*$]./g));

// Traz todos símbolos.
// [OUT]:
// [ '.', '$', '+', '*', '?', '-' ]
console.log(texto.match(/[$-?]/g));


// NÃO são intervalos (range):

// [OUT]:
// [ '$', '?', '-' ]
console.log(texto.match(/[$\-?]/g));

// [OUT]:
// [ '?', '-' ]
console.log(texto.match(/[-?]/g));
