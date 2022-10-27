let numeroTarjetas = prompt("Ingrese el números de tarjetas", '');
numeroTarjetas = parseInt(numeroTarjetas);


let nombreEntidad = [];
let tipoDeTarjeta = [];
let numeroTarjeta = [];
let fechaCaducidad = [];
let fechaDeCorte = [];
let monto = [];


for(let indice = 1; indice<=numeroTarjetas; indice++){
    nombreEntidad[indice] = prompt("Ingrese el nombre del propietario de la tarjeta",'');
    tipoDeTarjeta[indice] = prompt("Ingrese el tipo de tarjeta");
    numeroTarjeta[indice] = prompt("Ingrese el número de tarjeta");
    fechaCaducidad[indice] = prompt("Ingrese la fecha de caducidad");
    fechaDeCorte[indice] = prompt("Ingrese la fecha de corte de su tarjeta");
    monto[indice] = prompt("Ingrese el monto Final");
}


for(let indice = 1; indice<=numeroTarjetas; indice++){
    document.writeln("Nombre: " + nombreEntidad[indice] + "<br>");
    document.writeln("Tipo de Tarjeta: " + tipoDeTarjeta[indice] + "<br>");
    document.writeln("Número de la tarjeta de crédito: " + numeroTarjeta[indice]+ "<br>");
    document.writeln("Fecha de Caducidad: " + fechaCaducidad[indice]+ "<br>");
    document.writeln("Fecha de corte: " + fechaDeCorte[indice]+ "<br>");
    docuemnt.writeln("Monto Final:" +monto[indice]+ "<br>");
}
















































































