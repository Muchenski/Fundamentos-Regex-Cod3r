const texto = 'Você precisa responder sim, não ou não sei!';

// [OUT]:
// [ 'sim', 'não', 'não', 'sei' ]
console.log(texto.match(/sim|não|sei/g));

// [OUT]:
// [ 'sim', 'não', 'não sei' ]
console.log(texto.match(/sim|não sei|não/g));

// Não traz o 'não sei' pois a pesquisa 'não' já trouxe a palavra.
// [OUT]:
// [ 'sim', 'não', 'não' ]
console.log(texto.match(/sim|não|não sei/g));