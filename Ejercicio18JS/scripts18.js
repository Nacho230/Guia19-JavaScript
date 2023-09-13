document.getElementById("boton").onclick = calculacion;

var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");
var texto3 = document.getElementById("texto3");

var valores = [true, 5, false, "hola", "adios", 2];
console.log("valores", valores);
var auxMayor = "";

function calculacion() {

    /** 
    * a) Determinar cual de los dos elementos de texto es mayor*/

    var string = valores.filter((Element) => typeof Element === "string");

    console.log("string", string);


    for (let i = 0; i < string.length; i++) {
        if (string[i].length > auxMayor.length) {
            auxMayor = string[i];
        }

    }

    texto1.innerHTML = auxMayor;
    console.log(auxMayor);
//*********************************************************************************** */

/**b) Utilizando exclusivamente los dos valores booleanos del array, determinar los 
operadores necesarios para obtener un resultado true y otro resultado false */

var booleano = valores.filter(( Element ) => typeof Element === "boolean");
console.log("Booleano", booleano);
console.log(booleano[0] == booleano[1]);
console.log(booleano[0] != booleano[1]);

texto2.innerHTML = booleano;

//************************************************************************************* */
/**c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los 
dos elementos numéricos */

var numero = valores.filter((Element) => typeof Element === "number");
console.log("numero", numero);
console.log("Suma", numero[0] + numero[1]);
console.log("Resta", numero[0] - numero[1]);
console.log("Multiplicacion", numero[0] * numero[1]);
console.log("Division", numero[0] / numero[1]);
console.log("Potencicacion", Math.pow(numero[0],numero[1] ));


}



/*
 A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los 
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los 
dos elementos numéricos
*/