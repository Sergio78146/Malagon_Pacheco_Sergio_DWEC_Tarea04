import { numeroMasAlto, numeroImpares, mediaAritmetica, moda, numeroPrimos } from './funcionesTrabajoArray.mjs';

const array = [2, 3, 5, 3, 7, 9, 2, 3, 5];

console.log("Número más alto:", numeroMasAlto(array));
console.log("Cantidad de números impares:", numeroImpares(array));
console.log("Media aritmética:", mediaAritmetica(array));
console.log("Moda:", moda(array));
console.log("Cantidad de números primos:", numeroPrimos(array));
