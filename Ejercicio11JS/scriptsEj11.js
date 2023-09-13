var palabra=prompt("Ingrese la palabra");

calcularLongitud(palabra);

function calcularLongitud(palabra){
   
    var Array = palabra.split(' ');

    var aux=" ";

    for (let i = 0; i < Array.length; i++) {

       if(Array[i].length > aux.length){
       aux= Array[i];
       }        
    }
    alert(aux);
}
