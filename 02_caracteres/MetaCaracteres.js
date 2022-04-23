// . [ ] ? * + { } - ^ $ | ( ) \ :    =>    Caracteres que são Metacaracteres

//////////////////////////////////////////////////////////////////////////////

// Metacaracteres Representantes:

// (Ponto) . => Pode representar qualquer caractere.
// (Conjunto) [] => Conjunto de caracteres permitidos.
// (Conjunto negado) [^] => Conjunto de caracteres restritos.

//////////////////////////////////////////////////////////////////////////////

// Metacaracteres Quantificadores:

// (Opcional) ? => Zero ou Um.
// (Asterisco) * => Zero ou Mais.
// (Mais) + => Um ou Mais.
// (Chaves) {n,m} => De n até m.

//////////////////////////////////////////////////////////////////////////////

// Metacaracteres Ancoras:

// (Circunflexo) ^ => Início da linha.
// (Cifrão) $ => Fim de linha.
// (Borda) \b => Início ou fim da palavra.

//////////////////////////////////////////////////////////////////////////////

// Outros Metacaracteres:

// (Escape) \ => Para utilizar metacaracteres de maneira literal.
// (OU) | => Ou lógico.
// (Grupo) () => Define um grupo.
// (Retrovisor) \x...\y => Resgata grupos já definidos.

//////////////////////////////////////////////////////////////////////////////

// Quando pesquisarmos um caractere que é um metacaractere, para que o regex o entenda como um metacaractere devemos utilizar '\'.

const texto = '1,2,3,4,5,6,a.b c!d?e';

// [OUT]:
// [ '1,2,3,4,5,6,a', 'b c!d?e' ]
const regexPonto = /\./g;
console.log(texto.split(regexPonto));

// [OUT]:
// [ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e' ]
const regexSimbolos = /,|\.|\?|!| /g;
console.log(texto.split(regexSimbolos));