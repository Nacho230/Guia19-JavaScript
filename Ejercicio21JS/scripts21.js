document.getElementById("boton").onclick = miFuncion;




function miFuncion(){

    var nombreP = document.getElementById("nombre").value;
    var edadP = document.getElementById("edad").value;
    var sexoP = document.getElementById("sexo").value;
    var pesoP = document.getElementById("peso").value;
    var alturaP = document.getElementById("altura").value;
    var objetoP = document.getElementById("objeto");
 


    const persona = {
        nombre : nombreP,
        edad : edadP,
        sexo : sexoP,
        peso : pesoP,
        altura : alturaP
    };

var array = [];
var arrayAux = [];
var arrayUlt = [];

const aux = JSON.stringify(persona);


array = aux.split(",");

for (let i = 0; i < array.length; i++) {
    arrayAux = array[i].split(":");
    arrayUlt.push(arrayAux[1]);
}



//console.log(array);
//console.log(arrayAux);
console.log(arrayUlt);


objetoP.innerHTML = arrayUlt;


}