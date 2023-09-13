document.getElementById("boton").onclick = miFuncion;

var array = [];

function miFuncion() {


    var texto = document.getElementById("texto");
    var contenido = texto.textContent;

    array = contenido.split(' ');

    var aux = "";

    for (let i = 0; i < array.length; i++) {

        if (array[i].length > 8) {
            array[i] = "<span class='color'> <strong>" + array[i] + " </strong> </span>";
        }

    }
    aux = array.join(' ');
    texto.innerHTML = aux;

    var color = document.getElementsByClassName("color");

    for (let i = 0; i < color.length; i++) {
        color[i].style.backgroundColor = "#ffff00";
        
    }

}