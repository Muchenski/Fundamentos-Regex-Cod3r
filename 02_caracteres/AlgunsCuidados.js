// Javascrip não suporta múltiplas linhas com aspas.
const textoUmaLinha = "..." || '...';

// Javascript só suporta múltiplas linhas com template string.
const textoVariasLinhas = `
    ...
    ...
`;

// '\s' -> para encontrar os espaços/tabs do texto.

// Procurando o tab no texto, porém a tecla tab está configurada na IDE para realizar a indentação com três espaços.
// [OUT]:
// [ ' ', ' ', ' ' ]
console.log("   ".match(/\s/g));

// Agora configuramos o tab para ser um tab mesmo, com 4 espaços, o que é o padrão.

// Procurando o tab no texto:
// [OUT]:
// [ '\t' ]
console.log("	".match(/\s/g));