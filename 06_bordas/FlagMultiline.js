const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`;

// Selecionando quandos '\n' existem no texto.
// [OUT]:
// 4
console.log(texto.match(/\n/gi).length);


// Tentando selecionar as ocorrências que iniciam e terminam com o mesmo caractere:
// [OUT]:
// null
console.log(texto.match(/^(\w).+\1$/gi));


// Tentando selecionar as ocorrências que iniciam e terminam com o mesmo caractere, de maneira multiline(quebrando as ocorrências onde há '\n'):
// [OUT]:
// [ 'Leo é muito legal', 'Emanuel foi jogar em Sergipe', 'Bianca é casada com Habib' ]
console.log(texto.match(/^(\w).+\1$/gim));