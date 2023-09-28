///Crear un algoritmo que solicite al usuario un número entero positivo. Luego, utilizar un ciclo
//para calcular la suma de todos los números pares desde 1 hasta el número ingresado por el
//usuario. Mostrar el resultado de la operación en el navegador.
const numero = parseInt(prompt("ingrese un numero positiivo mayor a 0 "));
if (isNaN(numero) || numero <= 0) {
  alert("ingresa un numero positivo mayor o igual a 0.");
} else {
  let pares = 0;
  for (let i = 2; i <= numero; i += 2) {
    pares += i;
  }
  alert(`la suma de los numeros pares desde 1 hasta ${numero} es : ${pares}`);
}
