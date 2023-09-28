//Solicitar al usuario que ingrese una serie de números separados por comas. Encontrar y
//mostrar el número más grande entre los números ingresados.// Solicitar al usuario que ingrese una serie de números separados por comas
const numerosTexto = prompt("Ingrese una serie de números separados por comas:");
const numeros = numerosTexto.split(",").map(numero => parseFloat(numero.trim()));

if (numeros.some(isNaN)) {
    alert("Por favor, ingrese números válidos.");
} else {
    const numeroMaximo = Math.max(...numeros);
    alert(`El número más grande ingresado es: ${numeroMaximo}`);
}
