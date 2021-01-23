
/*utilizando un bucle mostrar la suma y la media de los numeros introducidos hata introdicir un numero 
negativo
mostrar el resultado*/ 

var numero=0;
var suma=0;//acumulador 
var contador=0; //variable para contar 
do{
    numero = parseInt(prompt("Introduce el primer numero entero", 0));//esta funcion es solo para pedir numeros 

    if (isNaN(numero)){// es una funcion boolean que que nos permite saber si el lo ingresado 
                         //por parametro se trata de un entero en el caso de que no sea un numero 
                         //entero nos va decir que es un false y si se trata de un numero entero va decir true 
         numero =0; 

  }else if (numero >=0){
     suma = suma + numero;//incrementado de numero  
               // suma += numero;//incrementado de numero esto se llama en lenguje un acumulador
      contador ++;
       
  } 
     console.log(suma);//muestro la suma que se va ingresando
     console.log(contador);//muestre la cantidad de veces que se fueron acumulando numeros. 

}while(numero >= 0)//hace todo hasta que el numero sea negativo 

alert("la suma de todos los numero es: " + suma);           
alert("La media de todos los numeros ingresados es: " + (suma / contador));
alert("Mensajde nuevo de todos los datos ");
alert("Mensaje de nuevos para probar")
