const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!';

// Não é um grupo.
// Dentro de um conjunto não conseguimos definir um grupo.
// [OUT]:
// [ '(', 'a', ')', 'A', 'B', 'C', 'a', 'b', 'c' ]
console.log(texto.match(/[(abc)]/gi));

// Dentro de um grupo conseguimos definir um conjunto.
// [OUT]:
// [ 'a', 'A', 'B', 'C', 'a', 'b', 'c' ]
console.log(texto.match(/([abc])/gi));

// [OUT]:
// [ 'ABCabc' ]
console.log(texto.match(/(abc)+/gi));
