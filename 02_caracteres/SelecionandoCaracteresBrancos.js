// '\s' representa um espaço e também é um shorthand para outros "brancos" como '\t' '\n' '\f'.

const texto = `
ca	r
r	o s!
`;

// \t -> Tab.
// \n -> Quebra de linha.
// \s -> Espaço ou shorthand para '\t' '\n' '\f'.

// [OUT]:
// [
//     'ca\tr\nr\to s!',
//     index: 1,
//     input: '\nca\tr\nr\to s!\n',
//     groups: undefined
// ]
console.log(texto.match(/ca\tr\nr\to\ss!/));
