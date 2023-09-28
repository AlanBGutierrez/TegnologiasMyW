//Realizar un programa que permita al usuario ingresar su estatura y peso, para que se
//muestre en el navegador su IMC correspondiente. Además de mostrar el IMC, indicar si está
//en la categoría de: “Bajo Peso”, “Peso Normal” o “Sobrepeso”.
//IMC Estado
//Menor a 18.5 Bajo Peso
//18.5 - 24.9 Normal
//Mayor 24.9 Sobrepeso
const estatura = parseFloat(prompt("ingrese estatura en metros :"));
const peso = parseFloat(prompt("ingrese su peso en kilogramos"));
const imc = peso / (estatura * estatura);
let categoria = "";
if (imc < 18.5)  {
  categoria = "bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
  categoria = "peso normal";
} else {
  categoria = "sobrepeso";
}
alert(`su indice de masa corporal es ${imc} lo cual usted esta ${categoria} `);
