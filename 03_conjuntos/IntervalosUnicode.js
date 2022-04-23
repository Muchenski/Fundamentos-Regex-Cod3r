const texto = 'áéíóú àèìòù âêîôû ç ãõ ü';

// Seleciona todo o texto seguindo o intervalo da tabela UNICODE:
console.log(texto.match(/[À-ü]/g));