import { Propietarios } from './Propietarios.mjs';

export class Edificio {
    #calle;
    #numero;
    #localidad;
    #codigoPostal;
    #numPisos;
    #numPuertasPorPiso;
    #pisos;

    constructor(calle, numero, localidad, codigoPostal, numPisos, numPuertasPorPiso) {
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
        this.numPisos = numPisos;
        this.numPuertasPorPiso = numPuertasPorPiso;
        this.#pisos = new Map();
    }

    get calle() {
        return this.#calle;
    }

    set calle(nombreCalle) {
        if (typeof nombreCalle !== 'string') {
            throw new Error("El nombre de la calle debe ser una cadena de texto.");
        }
        this.#calle = nombreCalle;
    }

    get numero() {
        return this.#numero;
    }

    set numero(numCalle) {
        if (!Number.isInteger(numCalle)) {
            throw new Error("El número de la calle debe ser un entero.");
        }
        this.#numero = numCalle;
    }

    get localidad() {
        return this.#localidad;
    }

    set localidad(nuevaLocalidad) {
        if (typeof nuevaLocalidad !== 'string') {
            throw new Error("La localidad debe ser una cadena de texto.");
        }
        this.#localidad = nuevaLocalidad;
    }

    get codigoPostal() {
        return this.#codigoPostal;
    }

    set codigoPostal(codigo) {
        if (!/^\d{5}$/.test(codigo)) {
            throw new Error("El código postal debe ser un número de 5 dígitos.");
        }
        this.#codigoPostal = codigo;
    }

    get numPisos() {
        return this.#numPisos;
    }

    set numPisos(num) {
        if (!Number.isInteger(num) || num <= 0) {
            throw new Error("El número de pisos debe ser un entero positivo.");
        }
        this.#numPisos = num;
    }

    get numPuertasPorPiso() {
        return this.#numPuertasPorPiso;
    }

    set numPuertasPorPiso(num) {
        if (!Number.isInteger(num) || num <= 0) {
            throw new Error("El número de puertas por piso debe ser un entero positivo.");
        }
        this.#numPuertasPorPiso = num;
    }

    getPropietariosPiso(planta, puerta) {
        const clave = `${planta}-${puerta}`;
        return this.#pisos.get(clave)?.toString() || "No hay propietarios registrados.";
    }

    cambiarPropietarios(planta, puerta, nombres) {
        if (planta < 1 || planta > this.#numPisos || puerta < 1 || puerta > this.#numPuertasPorPiso) {
            throw new Error("Planta o puerta fuera de rango.");
        }
        const clave = `${planta}-${puerta}`;
        this.#pisos.set(clave, new Propietarios(nombres));
    }

    actualizarDireccion(calle, numero, localidad, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
    }

    toString() {
        return `Edificio en ${this.#calle} ${this.#numero}, ${this.#localidad} (${this.#codigoPostal}). Total de pisos: ${this.#numPisos}, puertas por piso: ${this.#numPuertasPorPiso}.`;
    }
}
