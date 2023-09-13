document.getElementById("boton").onclick = numPar;



function numPar() {
    event.preventDefault();
    var num = document.getElementById("num").value;
    var texto = document.getElementById("texto");

    if (num == 0) {
        texto.innerHTML = "Ingresaste el numero 0 boludaso"
    } else if (num % 2 == 0) {
        texto.innerHTML = "El numero es PAR"
    } else {
        texto.innerHTML = "El numero es IMPAR"
    }

}


