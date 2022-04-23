const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>';

// [OUT]:
// [ '<b>', '<strong>', '<div>' ]
console.log(texto1.match(/<(\w+)>/g));

// OBS:
// O '\1' irá referenciar o que foi obtido na pesquisa unicamente a partir do grupo '(\w+)', e não o que foi obtido na pesquisa em geral, 
// que são os resultados [ 'b', 'strong', 'div' ].

// [OUT]:
// [ '<b>Destaque</b>', '<strong>Forte</strong>', '<div>Conteudo</div>' ]
console.log(texto1.match(/<(\w+)>.*<\/\1>/g));


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const texto2 = 'Lentamente é mente muito lenta.';

// [OUT]:
// [ 'Lentamente' ]
console.log(texto2.match(/(lenta)(mente)/gi));


// Buscando os caracteres, de maneira inclusive:

// de 'lentamente' --> (lenta)(mente) 
// até 'mente' --> .*\2 
// e de 'mente' até 'lenta' --> .*\1 
// finalizando com o ponto --> \.

// [OUT]:
// [ 'Lentamente é mente muito lenta.' ]
console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi));


// '?:' faz com que grupos não sejam 'guardados', então o grupo não pode ser referenciado pelo retrovisor.
// [OUT]:
// [ 'Lentamente é mente' ]
console.log(texto2.match(/(?:lenta)(mente).*\1/gi));


// [OUT]:
// [ 'Lentamente', 'lenta' ]
console.log(texto2.match(/(lenta)(mente)?/gi));


// '$N' irá representar um grupo na string, de acordo com sua posição.
// [OUT]:
// mente é mente muito lenta.
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'));
