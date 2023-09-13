document.getElementById("boton").onclick = calculo;


var numeros = [];


function calculo() {
    event.preventDefault();
    let num = parseInt(document.getElementById("num").value);
    var numerosP = document.getElementById("numeros");

    if (num == 0) {
        resultado();

    } else {
        numeros.push(num);
        numerosP.innerHTML = `Los numeros del Array son: ${numeros}`;
        document.getElementById("num").value = "";
    }


}


function resultado() {

    var max = document.getElementById("numMaximo");
    var min = document.getElementById("numMinimo");
    var prome = document.getElementById("promedio");

    maximo = Math.max(...numeros);
    minimo = Math.min(...numeros);

    var suma = numeros.reduce((a, b) => a + b, 0);
    var promedio = ((suma) / (numeros.length));

    max.textContent = `El numero Maximo es: ${maximo}`;
    min.innerHTML = `El numero Minimo es: ${minimo}`;
    prome.textContent = `El Promedio es: ${promedio}`;

}

