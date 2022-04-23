const texto = '1,2,3,a.b c!d?e[f';

// [OUT]:
// [ ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd', '?', 'e', '[', 'f' ]
console.log(texto.match(/\D/g));

// É o mesmo que:

// [OUT]:
// [ ',', ',', ',', 'a', '.', 'b', ' ', 'c', '!', 'd', '?', 'e', '[', 'f' ]
console.log(texto.match(/[^0-9]/g));


// Nenhum numérico, espaços nem _,!?[.
// [OUT]:
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(texto.match(/[^\d,!\?\[\s\.]/g));

/////////////////////////////////////////////////////////////

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@';

// Aqui temos dois intervalos negados:
// De ! até /
// De : até @
// Também estamos negando os espaços.
// [OUT]:
// [ '1', '2' ]
console.log(texto2.match(/[^!-/:-@\s]/g));
