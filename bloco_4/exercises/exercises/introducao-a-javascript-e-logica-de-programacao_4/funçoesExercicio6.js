function somaNumeros(n) {
  let resultado = 0;
  for (let i = 1; i <= n; i += 1) {
    resultado = resultado + i;
  }
  return resultado;
}
console.log(somaNumeros(5));