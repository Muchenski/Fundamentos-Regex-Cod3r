// https://unicode-table.com/pt/

const texto = "aʬ c ௵d";

// Para pesquisar caracteres unicodes se utiliza o metacaractere '\u' seguido do hexadecimal representante, de acordo com a tabela.
// [OUT]:
// [ 'ʬ', '௵' ]
console.log(texto.match(/\u0BF5|\u02AC/g));