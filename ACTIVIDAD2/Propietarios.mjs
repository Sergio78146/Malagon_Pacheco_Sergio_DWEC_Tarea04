export class Propietarios {
    #propietarios;

    constructor(propietarios = []) {
        this.propietarios = propietarios;
    }

    get propietarios() {
        return this.#propietarios;
    }

    set propietarios(listaNombres) {
        if (!Array.isArray(listaNombres)) {
            throw new Error("Los propietarios deben ser una lista.");
        }
        if (!listaNombres.every(nombre => typeof nombre === 'string')) {
            throw new Error("Todos los nombres deben ser cadenas de texto.");
        }
        this.#propietarios = listaNombres;
    }

    toString() {
        return this.#propietarios.join(", ");
    }
}
