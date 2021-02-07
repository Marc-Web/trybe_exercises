
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  const reducaoDeMatriz = arrays.reduce((acumulador, atual) => acumulador.concat(atual), []);
  return reducaoDeMatriz;
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
//Dada uma matriz de matrizes, transforme em uma única matriz.
//https://pt.stackoverflow.com/questions/318038/como-transformar-um-array-de-arrays-em-um-%C3%BAnico-array-em-javascript