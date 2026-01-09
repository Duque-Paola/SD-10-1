export function costCalculator(n) {
    const tarifa = n + (n * .01) + 3
    return tarifa;
}

let cantidadIngresada = 2500;
//costCalculator(cantidadIngresada);
console.log("El monto total de la cantidad ingresada es: $" + costCalculator(cantidadIngresada));