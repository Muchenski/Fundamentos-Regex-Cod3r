const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';

// ? zero ou um (opcional)
// A letra a esquerda de ? é opcional na pesquisa, e será retornado o texto com sua única ocorrência ou com a ausência.
const regex = /fogo?/gi;

// [OUT]:
// [ 'fogo', 'FOGO' ]
console.log(texto1.match(regex));

// [OUT]:
// [ 'fog' ]
console.log(texto2.match(regex));