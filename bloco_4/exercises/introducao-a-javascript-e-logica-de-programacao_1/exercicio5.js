let anguloA = 60;
let anguloB = 60;
let anguloC = 60;

if (typeof anguloA !== 'number' || typeof anguloB !== 'number' || typeof anguloC !== 'number') {
  console.log('erro');
}

let angulosTotal = (anguloA + anguloB + anguloC);

if (angulosTotal === 180) {
  console.log('Angulos validos');
} else {
  console.log('Angulos invalidos');
}
