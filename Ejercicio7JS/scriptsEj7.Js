
document.getElementById("boton").onclick = calcular;

var aux = 0;
var suma = 0;
var num;
var limite = 0;

function calcular() {
    event.preventDefault();

    let texto1 = document.getElementById("primerNum");
    let texto2 = document.getElementById("segundoNum");


    if (aux == 0) {
        limite = document.getElementById("num").value;
        texto1.innerHTML = limite;
        aux++;
        num = 0;
    } else {

        num = parseInt(document.getElementById("num").value);
        suma = num + suma;
        texto2.textContent = suma;

    }
    if (suma > limite) {
        alert("Superaste el limite positivo. Felicidades. Ahora me autodestruiré");
        document.getElementById('num').style.display = "none";
        document.getElementById('boton').style.display = "none";
    }

}

