document.getElementById("boton").onclick = rellenarArray;

var texto1 = document.getElementById("array1");
var texto2 = document.getElementById("array2");

function rellenarArray(){

    var array1 = [];
    var array2 = [];

    for (let i = 0; i < 5; i++) {
        array1.push(Math.round(Math.random()*20));
        array2.push(Math.round(Math.random()*20));
        //array1[i].push(Math.random()*10);
        //console.log(array1[i]);
        //console.log(array2[i]);
            
    }

    texto1.innerHTML = `Los valores del Array 1 son: ${array1}`;
    texto2.innerHTML = `Los valores del Array 2 son: ${array2}`;

}



/*
    Realizar un programa que rellene dos Arrays al mismo tiempo, con 5 valores aleatorios 
y los muestre por pantalla. 
*/