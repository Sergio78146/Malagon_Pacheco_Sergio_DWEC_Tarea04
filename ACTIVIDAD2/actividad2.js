import { Edificio } from './Edificio.mjs';

const edificio = new Edificio("Gran Vía", 10, "Madrid", "28013", 3, 2);

console.log(edificio.toString());

edificio.cambiarPropietarios(1, 1, ["Ana", "Carlos"]);
edificio.cambiarPropietarios(2, 2, ["Beatriz"]);

console.log("Propietarios del piso 1-1:", edificio.getPropietariosPiso(1, 1));
console.log("Propietarios del piso 2-2:", edificio.getPropietariosPiso(2, 2));
console.log("Propietarios del piso 3-1:", edificio.getPropietariosPiso(3, 1));

edificio.actualizarDireccion("Paseo del Prado", 20, "Madrid", "28014");
console.log(edificio.toString());
