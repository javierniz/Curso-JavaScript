//Programa que pida dos numero y nos diga cual es el mayor, el menor y si son iguales
//Que si los numeros no son un numero o son iguales a cero o menor que nos vuelva a pedir los datos

var numero1 = parseInt(prompt("Introduce el primer numero entero", 0));
var numero2 = parseInt(prompt("Introduce el sugundo numero entero", 0));
//console.log(numero1, numero2);
while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
  numero1 = parseInt(prompt("Introduce el primer numero entero", 0));
  numero2 = parseInt(prompt("Introduce el segundo entero", 0));
}

if (numero1 == numero2) {
  alert("LOS NUMERO SON IGUALES");
} else if (numero1 > numero2) {
  alert("EL NUMERO MAYOR ES:" + numero1);
  alert("EL NUMERO MAYOR ES:" + numero2);
} else if (numero2 > numero1) {
  alert("EL NUMERO MAYOR ES:" + numero2);
  alert("EL NUMERO MAYOR ES:" + numero1);
} else {
  alert("INTRODUSCA UN NUMERO CORRECTO");
}
nunemo = parseInt(prompt("Introduce un numero primer entero para poder modificar todos los datos "))




