/*Desarrollar un contador de palabras, solicitando al usuario que ingrese una oración, para
luego contar cuántas palabras hay en la oración. Mostrar la oración ingresada y el número
de palabras en el navegador */
const oracion = prompt("Por favor, ingrese una oración:");

if (oracion !== null && oracion !== "") {
    const palabras = oracion.split(" ");

    const cantidadPalabras = palabras.length;

    alert(`Oración ingresada: ${oracion}\nNúmero de palabras: ${cantidadPalabras}`);
} else {
    alert("No ha ingresado una oración válida.");
}
