export function numeroMasAlto(array) {
    return Math.max(...array);
}

export function numeroImpares(array) {
    return array.filter(num => num % 2 !== 0).length;
}

export function mediaAritmetica(array) {
    const suma = array.reduce((acc, num) => acc + num, 0);
    return suma / array.length;
}

export function moda(array) {
    const frecuencia = {};
    array.forEach(num => frecuencia[num] = (frecuencia[num] || 0) + 1);
    const maxFrecuencia = Math.max(...Object.values(frecuencia));
    return parseInt(Object.keys(frecuencia).find(key => frecuencia[key] === maxFrecuencia));
}

export function numeroPrimos(array) {
    const esPrimo = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    return array.filter(esPrimo).length;
}
