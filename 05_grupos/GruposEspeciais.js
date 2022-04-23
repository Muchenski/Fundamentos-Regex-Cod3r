const texto = 'João é calmo, mas no transito fica nervoso.';

console.log(texto.match(/[\wÀ-ú]+/gi));

// Positive lookahead:

// Procurando os resultados da pesquisa [\wÀ-ú] que possuam ',' a frente.
// [OUT]:
// [ 'calmo' ]
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi));


// Procurando os resultados da pesquisa [\wÀ-ú] que possuam '.' a frente.
// [OUT]:
// [ 'nervoso' ]
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi));


// Procurando os resultados da pesquisa [\wÀ-ú] que possuam ', mas' a frente.
// [OUT]:
// [ 'calmo' ]
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi));


/////////////////////////////////////////////////////////


// Negative lookahead

// Procurando os resultados da pesquisa [\wÀ-ú]+\b que não possuam ',' a frente.
// [OUT]:
// [ 'João', 'mas', 'no', 'transito', 'fica', 'nervoso' ]
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi));

// Procurando os resultados da pesquisa [\wÀ-ú]+[\s|\.] que não possuam ',' a frente.
// [OUT]:
// [ 'João ', 'é ', 'mas ', 'no ', 'transito ', 'fica ', 'nervoso.' ]
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi));