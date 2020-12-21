function maisRepetido(numeros) {
  let contaRepetido = 0;
  let contaNumero = 0;
  let indiceRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contaNumero += 1;
      }
    }
    if (contaNumero > contaRepetido) {
      contaRepetido = contaNumero;
      indiceRepetido = index;
    }
    contaNumero = 0;
  }
  return numeros[indiceRepetido];
};

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
