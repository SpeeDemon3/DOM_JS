/*Clase DATE*/
try {

    // Obtengo la hora actual
    let currentTime = new Date();
    console.log(currentTime);

    // Obtengo el año actual
    console.log(currentTime.getFullYear());

    // Mes actual
    let month = currentTime.getMonth() + 1; // getMonth() empieza a contar desde 0 por eso hay que sumarle 1
    console.log(month);

    // Dia actual
    let day = currentTime.getDate();
    console.log(day)

    // Hora actual
    let hour = currentTime.getHours();
    console.log(hour);


} catch(error) {
    console.log(error);
}