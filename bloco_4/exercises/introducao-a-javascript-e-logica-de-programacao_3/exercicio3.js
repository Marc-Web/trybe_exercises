let n = 5;
let indexLinha;
let indexColuna;
let caractere = '*';
let linhaDeEntrada = '';
let posicaoDeEntrada = n;

for (indexLinha = 0; indexLinha < n; indexLinha += 1) {
  for (indexColuna = 0; indexColuna <= n; indexColuna += 1) {
    if (indexColuna < posicaoDeEntrada) {
      linhaDeEntrada = linhaDeEntrada + ' ';
    } else {
      linhaDeEntrada = linhaDeEntrada + caractere;
    }
  }
  console.log(linhaDeEntrada);
  linhaDeEntrada = '';
  posicaoDeEntrada -= 1;
};