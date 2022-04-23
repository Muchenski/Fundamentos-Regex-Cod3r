const texto = '1,2,3,4,5,6,a.b c!d?e[f';

// Conjuntos com intervalos de x até(-) y.


// [OUT]:
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[a-z]/g));

// [OUT]:
// [ 'b', 'c', 'd' ]
console.log(texto.match(/[b-d]/g)); 

// [OUT]:
// [ '2', '3', '4' ]
console.log(texto.match(/[2-4]/g)); 

// Pesquisando com dois conjuntos:
// [OUT]:
// [ '1', '2', '3', 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[A-Z1-3]/gi)); 