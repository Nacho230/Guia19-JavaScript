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

console.log(persona);
const aux = JSON.stringify(persona);

objetoP.innerHTML = aux;

}