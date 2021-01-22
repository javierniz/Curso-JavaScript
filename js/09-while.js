'use strict'

//bulce while 

var year =2018;
/*
while(year <= 2051){
    //ejecuta esto 
    //console.log("Estamos en el año: "+ year);// funcion el forma acendente 
    
    year ++;
}*/

while (year != 1991) {
    console.log("Estamos en el año: "+year);//funcion en fomra decendente

    if (year == 2000) {//poniendo un break en el bucle va cortar la expresion dada
        break;
    }
    year--;
}

//DO while 

var years = 20;

do {
    alert ("SOLO CUANDO SEA DIFERENTRE A 20");

    years= 20;
}while (years != 20);