const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';

// Métodos da RegExp:
const regexNove = new RegExp('9');

// Verificando se o padrão existe no texto.
// [OUT]:
// true
console.log(regexNove.test(texto));

// Verificando os dados da pesquisa.
// [OUT]:
// [
//   '9',
//   index: 18,
//   input: '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f',
//   groups: undefined
// ]
console.log(regexNove.exec(texto));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Métodos da String:
const regexLetras = /[a-f]/g; // buscando as letras de "a" até "f" globalmente e case sensitive. 

// Obtendo um Array com os valores que são compatíveis com o regex passado como argumento.
// [OUT]:
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(regexLetras));

// Obtendo o índice do primeiro valor que é compatível com o regex passado como argumento.
// [OUT]:
// 20
console.log(texto.search(regexLetras));

// Substituindo todas letras por "Achei".
// [OUT]:
// 0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,Achei,Achei
console.log(texto.replace(regexLetras, "Achei"));

// Quebrando todos lugares que contem letras.
// [OUT]:
// [ '0,1,2,3,4,5,6,7,8,9,', ',', ',', ',', ',', ',', '' ]
console.log(texto.split(regexLetras));