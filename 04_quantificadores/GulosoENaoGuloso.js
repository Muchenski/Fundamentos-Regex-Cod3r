const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>';

// OBS: Os quantificadores são gulosos(greedy) por padrão.

////////////////////////////// GULOSOS: //////////////////////////////

// [OUT]:
// [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.+<\/div>/g)); // + um ou mais.

// [OUT]:
// [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.*<\/div>/g)); // * zero ou mais.

// [OUT]:
// [ '<div>Conteudo 01</div><div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.{0,}<\/div>/g)); // {0,} zero ou mais.



//////////////////////////// NÃO GULOSOS: ////////////////////////////

// [OUT]:
// [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.+?<\/div>/g)); // + um ou mais.

// [OUT]:
// [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.*?<\/div>/g)); // * zero ou mais.

// [OUT]:
// [ '<div>Conteudo 01</div>', '<div>Conteudo 02</div>' ]
console.log(texto.match(/<div>.{0,}?<\/div>/g)); // {0,} zero ou mais.