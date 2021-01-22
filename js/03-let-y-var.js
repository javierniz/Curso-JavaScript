'user strict'
//pruebas con var 
//var permite crear una varible global y local en una funcion sin importar el ambito del bloque 
var numero = 40;
console.log(numero);//valor de la salida por consola 40

if (true){
    var numero = 50;
    console.log(numero);//valor de la salida por consola 50
}

console.log(numero); //valor de la salida por consola 50 

//prueba con let 

var texto = "Curso de JS javier Niz";
console.log(texto);//valor de la salida por consola ("Curso de JS javier Niz") 

if (true){
    let texto = "Curso laravel 5";//valor de la salida por consola  "Curso laravel 5"(solo funciona la varible para ese bloque) 
}

console.log(texto);//valor de la salida por consola ("Curso de JS javier Niz")