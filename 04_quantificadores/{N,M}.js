const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46.';

// Obtendo todas sequências de números que possuam 2 ou 1 caractere(s).
// [OUT]:
// [ '12', '0',  '6', '9',  '21', '23', '45', '46' ]
console.log(texto.match(/\d{1,2}/g));

// Obtendo todas sequências de números que possuam 2 caracteres.
// [OUT]:
// [ '12', '21', '23', '45', '46' ]
console.log(texto.match(/\d{2}/g));

// Obtendo todas sequências de números que possuam algum número indeterminado de caracteres ou 1 caractere.
// [OUT]:
// [ '120', '6', '9', '21', '23', '45', '46' ]
console.log(texto.match(/\d{1,}/g));


// OBS: lembrando que \w ignora símbolos, por isso a sequência 'milhões' foi ignorada no regex abaixo.
// Obtendo todas sequências de 7 caracteres alfanuméricos.
// [OUT]:
// [ 'recebeu', 'apostan' ]
console.log(texto.match(/\w{7}/g));

// Obtendo todas sequências de 7 caracteres alfanuméricos ou com o símbolo 'õ'.
// [OUT]:
// [ 'recebeu', 'milhões', 'apostan' ]
console.log(texto.match(/[\wõ]{7}/g))