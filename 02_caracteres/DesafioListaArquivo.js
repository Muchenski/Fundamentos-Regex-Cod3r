const texto = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3';

// Desafio para saber quantos arquivos .mp3 existem:
// [OUT]:
// 4
console.log(texto.match(/\.mp3/g).length);

// OBS: '\w' é um shorthang que representa um caractere de a-z, A-Z, 0-9, e underline, podendo representar mais do que um caractere
// quando adicionado após ele quantificadores.

// Desafio para saber quais arquivos são .mp3:
// [OUT]:
// [ 'jazz.mp3', 'rock.mp3', 'podcast.mp3', 'blues.mp3' ]
console.log(texto.match(/\w+\.mp3/g)); // buscando um ou mais caracteres que vem antes da sequência '.mp3'