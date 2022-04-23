// O Metacaractere Ponto não resolve para quebra de linha.

// OBS: As buscas do regex são configuradas para serem executadas linha-a-linha.

/////////// Buscando cada caractere do texto, linha-a-linha:

// [OUT]:
// [ 'B', 'o', 'm', 'd', 'i', 'a' ]
console.log('Bom\ndia'.match(/./gi));

// [OUT]:
// [ 'B',  'o', 'm', '\t', 'd', 'i', 'a' ]
console.log('Bom\tdia'.match(/./gi));


/////////// Buscando cada sequência de 3 caracteres do texto, linha-a-linha:

// [OUT]:
// [ 'Bom', 'dia' ]
console.log('Bom\ndia'.match(/.../gi));

// [OUT]:
// [ 'Bom', '\tdi' ]
console.log('Bom\tdia'.match(/.../gi));


/////////// Buscando cada sequência de 4 caracteres do texto, linha-a-linha:

// Não há uma sequência completa de 4 caracteres nas linhas do texto, pois \n é ignorado pelo Metacaractere Ponto.
// [OUT]:
// null
console.log('Bom\ndia'.match(/..../gi));

// Há uma sequência completa de 4 caracteres no texto, e o TAB(\t) é atribuído a sequência.
// [OUT]:
// [ 'Bom\t' ]
console.log('Bom\tdia'.match(/..../gi));