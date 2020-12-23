function verificaFinalDaPalavra(palavra, finalDaPalavra) {
  let palavraAoContrario = palavra.split('').reverse().join('');
  let finalPalavraAoContrario = finalDaPalavra.split('').reverse().join('');

  for (let i = 0; i < palavraAoContrario.length; i += 1) {
    if (palavraAoContrario[i] === finalPalavraAoContrario[i]) {
      return true;
    } else {
      return false;
    }
  }
};

console.log(verificaFinalDaPalavra("trybe", "be")); //true
console.log(verificaFinalDaPalavra("joaofernando", "fernan")); //false