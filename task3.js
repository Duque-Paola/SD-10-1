export function ageCalculator(ano,mes,dia) {
    const fechaAlDia = new Date();
    const fechaNacimiento = new Date(ano,mes - 1,dia);

    //Este dato que  se mueve, fecha de nacimiento.
    let edad = fechaAlDia.getFullYear() - fechaNacimiento.getFullYear();

    const diferenciaMeses = fechaAlDia.getMonth() - fechaNacimiento.getMonth();
    const diferenciaDias = fechaAlDia.getDate() - fechaNacimiento.getDate();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && diferenciaDias < 0)) {
        edad--;
    }

    return `Tu edad es de ${edad} años.`
}