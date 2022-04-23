const texto = `
123456
cod3r
QUASE123!
#OpA1
#essaSenhaEGrande1234
#OpA1?
Foi123!
`;

// Filtrando por tamanho:
// [OUT]:
// [ '123456', 'QUASE123!', '#OpA1?', 'Foi123!' ]
console.log(texto.match(/^.{6,20}$/gm));

// Filtrando por tamanho e que possua alguma letra maiúscula:
// [OUT]:
// [ 'QUASE123!', '#OpA1?', 'Foi123!' ]
console.log(texto.match(/^(?=.*[A-Z]).{6,20}$/gm));

// Filtrando por tamanho, que possua alguma letra maiúscula, minúscula, número e alguns símbolos.
// [OUT]:
// [ '#OpA1?', 'Foi123!' ]
console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm));