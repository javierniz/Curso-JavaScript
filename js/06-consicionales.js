'use strict'

//condicionales 
// Nos permite compara algo ejemplo si A es iual a B haz algo la condicion del igual se puede cambiar por un distinto o mayor, menor que
// son instrucciones que nos permite comparar o hacer una condicion concreta y si sucede esa condicion que el codigo ejecute algo

/*var edad1= 30;
var edad2= 12;

// si paasa esto 
if (edad1> edad2){
    // ejecuta esto
    console.log("Edad uno es mayor que edad 2");
}else{
    console.log("la edad uno es inferior");
    } */

/*
//operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    igual: ==
    distinti: !=
*/

var edad = 74   ;
var nombre = 'Nuria Niz';

if (edad>= 18){
    // Es mayor de edad 
    console.log(nombre+" tiene "+edad+" años, es mayor de edad");
    if (edad == 33){
        console.log("Todavia eres milenial");
    }else if (edad >= 70){
        console.log('Eres anciano')
    }else{
        console.log("Ya on eres milenial");
    }

}else{
     // Es menor de edad
     console.log(nombre+" tiene "+edad+" años, es menor de edad");
}
/*
//operadores logicos 
    AND(Y): &&
    OR (O): ||
    Negacion: !
*/

var year = 2018;

//Negacion
if (year!= 2016){
    console.log("El año no es 2016 realmente es:"+year);
}

//AND
if (year >= 2000 && year <= 2020 && year != 2018){
    console.log("Estamos en año actual");
}else{
    console.log("Estamos en la era post moderna");
}

//OR 
if ( year == 2008 || year == 2018 && year == 2028){
    console.log("El año acaba en 8");
}else{
    console.log("AÑO NO REGISTRADO");
}


