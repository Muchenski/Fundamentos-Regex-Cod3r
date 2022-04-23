const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador';

// [OUT]:
// [ 'R', 'r', 'r', 'r', 'r' ]
console.log(texto.match(/r/gi));


// Buscando o 'r' que está no início '^' da linha/string.
// [OUT]:
// [ 'R' ]
console.log(texto.match(/^r/gi));


// Buscando o 'r' que está no fim '$' da linha/string.
// [OUT]:
// [ 'r' ]
console.log(texto.match(/r$/gi));


// Não conseguimos pegar do 'r' do início da linha/string até o 'r' do fim da linha/string, pois no meio tem um '\n' e o '.' não consegue representar caracteres espaços.
// [OUT]:
// null
console.log(texto.match(/^r.*r$/gi));


// Usando dotall - [\s\S] tudo que seja espaço ou não espaço:
// [OUT]:
// [ 'Romário era um excelente jogador\n, mas hoje é um político questionador' ]
console.log(texto.match(/^r[\s\S]*r$/gi));