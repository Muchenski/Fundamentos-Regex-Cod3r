const texto = 'supermercado hipermercado minimercado mercado';

// [OUT]:
// [ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]
console.log(texto.match(/(super|hiper|mini)?mercado/g));

// Grupos aninhados:

// [OUT]:
// [ 'supermercado', 'hipermercado', 'minimercado', 'mercado' ]
console.log(texto.match(/((su|hi|)per|mini)?mercado/g));