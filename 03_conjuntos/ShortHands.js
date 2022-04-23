const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
f_g`;

// '\d' busca todos caracteres numéricos.
// '\d' é igual [0-9]
// [OUT]:
// [ '1', '2', '3', '4', '5', '6' ]
console.log(texto.match(/\d/g));

// '\D' busca todos caracteres não numéricos.
// '\D' é igual [^0-9]
// [OUT]:
// [ ',',  ',',  ',', ',',  ',', ',',  'a',  '.', 'b',  ' ', 'c',  '!',  'd', '?',  'e', '\r', '\t', '-', '\n', 'f', '_',  'g' ]
console.log(texto.match(/\D/g));

// '\w' busca todos caracteres alfanuméricos e underline (Não busca símbolos ou letras com acentos).
// '\w' é igual [a-zA-Z0-9_]
// [OUT]:
// [ '1', '2', '3', '4', '5', '6', 'a', 'b', 'c', 'd', 'e', 'f', '_', 'g' ]
console.log(texto.match(/\w/g));

// '\W' é igual [^a-zA-Z0-9_] (busca símbolos ou letras com acentos).
// [OUT]:
// [ ',', ',',  ',',  ',', ',', ',',  '.',  ' ', '!', '?',  '\r', '\t', '-', '\n' ]
console.log(texto.match(/\W/g));

// '\s' busca todos caracteres de espaço.
// '\s' é igual [ \t\n\r\f]
// [OUT]:
// [ ' ', '\r', '\t', '\n' ]
console.log(texto.match(/\s/g));

// '\S' busca todos caracteres que não são de espaço.
// '\S' é igual [^ \t\n\r\f]
// [OUT]:
// [ '1', ',', '2', ',', '3', ',', '4', ',', '5', ',', '6', ',', 'a', '.', 'b', 'c', '!', 'd', '?', 'e', '-', 'f', '_', 'g' ]
console.log(texto.match(/\S/g));

// Referente a "borda" das palavras.
// \b \B
