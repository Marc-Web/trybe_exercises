let salarioBruto = 3500.00;
let aliquotaInss;
let aliquotaIr;

if (salarioBruto <= 1556.94) {
  aliquotaInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaInss = salarioBruto * 0.11;
} else {
  aliquotaInss = 570.88;
};

let salarioLiquido = salarioBruto - aliquotaInss;

if (salarioLiquido <= 1903.98) {
  aliquotaIr = 0;
} else if (salarioLiquido <= 1826.66) {
  aliquotaIr = salarioLiquido * 0.075 - 142.80;
} else if (salarioLiquido <= 3751.05) {
  aliquotaIr = salarioLiquido * 0.15 - 354.80;
} else if (salarioLiquido <= 4664.68) {
  aliquotaIr = salarioLiquido * 0.225 - 636.13;
} else {
  aliquotaIr = salarioLiquido * 0.275 - 869.36;
};

let salarioDescontado = salarioLiquido - aliquotaIr;

console.log(`Salário: ${salarioDescontado}`);
