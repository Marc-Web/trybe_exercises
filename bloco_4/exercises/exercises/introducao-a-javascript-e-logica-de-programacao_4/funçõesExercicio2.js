function indiceMaiorValor(array) {
  let indiceMaior = 0;
  for (let index in array) {
    if (array[indiceMaior] < array[index]) {
      indiceMaior = index;
    }
  }
  return indiceMaior;
}

console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));