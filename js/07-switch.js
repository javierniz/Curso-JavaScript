'user strict'
// switch

var edad= 40;
var imprime= "";

switch (edad) {
    case 18:
        imprime="Acabas de cumplir la mayoria de edad";  
    break;
    case 25:
        imprime="Ya eres adulto";
    case 40:
            imprime="Cirisis de los 40";  
    break;
    case 75:
        imprime="Eres un ancianito";  
    break;
    default:
        imprime= "Tu edad es nuestra";
    break;
}

console.log(imprime);