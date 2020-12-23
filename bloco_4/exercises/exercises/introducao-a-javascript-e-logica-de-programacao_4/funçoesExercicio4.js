function maiorQuantidadeDeCaracteres(arr) {
  let maiorNome = arr[0];
  for (let i in arr) {
    if (maiorNome.length < arr[i].length) {
      maiorNome = arr[i];
    }
  }
  return maiorNome;
};

console.log(maiorQuantidadeDeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
