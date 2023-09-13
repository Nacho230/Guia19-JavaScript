var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var valor3 = document.getElementById("valor3");
var valor5 = document.getElementById("valor5");

var numero1 = "";
var numero2 = "";
var cont = 0;
var aux = 0;
var operador = "";
var resultado = 0;

document.getElementById("uno").onclick = num1;

document.getElementById("dos").onclick = num2;
document.getElementById("tres").onclick = num3;
document.getElementById("cuatro").onclick = num4;
document.getElementById("cinco").onclick = num5;
document.getElementById("seis").onclick = num6;
document.getElementById("siete").onclick = num7;
document.getElementById("ocho").onclick = num8;
document.getElementById("nueve").onclick = num9;
document.getElementById("cero").onclick = num0;

/* OPERADORES */
document.getElementById("suma").onclick = suma;
document.getElementById("borrar").onclick = borra;
document.getElementById("resta").onclick = resta;
document.getElementById("por").onclick = multiplicacion;
document.getElementById("divis").onclick = division;
document.getElementById("igualar").onclick = calcular;

/*
valor5.addEventListener('mouseenter', function(){
    valor5.textContent = "Aqui se mostrara el resultado";
});
valor5.addEventListener('mouseleave', function(){
    valor5.textContent = "Valor5";
});
*/


function borra() {
    numero1 = "";
    numero2 = "";
    valor1.innerHTML = "";
    valor2.innerHTML = "";
    valor3.innerHTML = "";
    valor5.innerHTML = "";
    aux = 0
    cont = 0;
}

function suma() {
    try {

        if (numero1 === "") {
            throw "EXCEPCION"
        } else {
            numero1 = parseInt(numero1);
            valor2.innerHTML = "+";
            operador = "S";
            cont = 9;
            aux = 0;
        }
    } catch (error) {
        alert("Primero deberias ingresar el primer digito");
        cont = 0;
    }


}

function resta() {
    try {

        if (numero1 === "") {
            throw "EXCEPCION"
        } else {
            numero1 = parseInt(numero1);
            valor2.innerHTML = "-";
            operador = "R";
            cont = 9;
            aux = 0;
        }
    } catch (error) {
        alert("Primero deberias ingresar el primer digito");
        cont = 0;
    }


}

function multiplicacion() {
    try {

        if (numero1 === "") {
            throw "EXCEPCION"
        } else {
            numero1 = parseInt(numero1);
            valor2.innerHTML = "*";
            operador = "M";
            cont = 9;
            aux = 0;
        }
    } catch (error) {
        alert("Primero deberias ingresar el primer digito");
        cont = 0;
    }


}

function division() {
    try {

        if (numero1 === "") {
            throw "EXCEPCION"
        } else {
            numero1 = parseInt(numero1);
            valor2.innerHTML = "/";
            operador = "D";
            cont = 9;
            aux = 0;
        }
    } catch (error) {
        alert("Primero deberias ingresar el primer digito");
        cont = 0;
    }


}

function num1() {

    try {
        cont++; /* CONTADOR DE DIGITOS */
        if (cont < 9) { /* NO SE PUEDEN PONER MAS DE 8 DIGITOS */

            numero1 = numero1 + "1";
            valor1.innerHTML = numero1;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        } else {
            numero2 = numero2 + "1";
            valor3.innerHTML = numero2;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        }

    } catch (e) {
        alert("Sobrepasaste la cantidad de digitos");
        borra();
    }

}
function num2() {

    try {
        cont++; /* CONTADOR DE DIGITOS */
        if (cont < 9) { /* NO SE PUEDEN PONER MAS DE 8 DIGITOS */

            numero1 = numero1 + "2";
            valor1.innerHTML = numero1;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        } else {
            numero2 = numero2 + "2";
            valor3.innerHTML = numero2;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        }

    } catch (e) {
        alert("Sobrepasaste la cantidad de digitos");
        borra();
    }

}

function num3() {

    try {
        cont++; /* CONTADOR DE DIGITOS */
        if (cont < 9) { /* NO SE PUEDEN PONER MAS DE 8 DIGITOS */

            numero1 = numero1 + "3";
            valor1.innerHTML = numero1;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        } else {
            numero2 = numero2 + "3";
            valor3.innerHTML = numero2;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        }

    } catch (e) {
        alert("Sobrepasaste la cantidad de digitos");
        borra();
    }

}

function num4() {

    try {
        cont++; /* CONTADOR DE DIGITOS */
        if (cont < 9) { /* NO SE PUEDEN PONER MAS DE 8 DIGITOS */

            numero1 = numero1 + "4";
            valor1.innerHTML = numero1;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        } else {
            numero2 = numero2 + "4";
            valor3.innerHTML = numero2;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        }

    } catch (e) {
        alert("Sobrepasaste la cantidad de digitos");
        borra();
    }

}

function num5() {

    try {
        cont++; /* CONTADOR DE DIGITOS */
        if (cont < 9) { /* NO SE PUEDEN PONER MAS DE 8 DIGITOS */

            numero1 = numero1 + "5";
            valor1.innerHTML = numero1;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        } else {
            numero2 = numero2 + "5";
            valor3.innerHTML = numero2;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        }

    } catch (e) {
        alert("Sobrepasaste la cantidad de digitos");
        borra();
    }

}

function num6() {

    try {
        cont++; /* CONTADOR DE DIGITOS */
        if (cont < 9) { /* NO SE PUEDEN PONER MAS DE 8 DIGITOS */

            numero1 = numero1 + "6";
            valor1.innerHTML = numero1;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        } else {
            numero2 = numero2 + "6";
            valor3.innerHTML = numero2;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        }

    } catch (e) {
        alert("Sobrepasaste la cantidad de digitos");
        borra();
    }

}

function num7() {

    try {
        cont++; /* CONTADOR DE DIGITOS */
        if (cont < 9) { /* NO SE PUEDEN PONER MAS DE 8 DIGITOS */

            numero1 = numero1 + "7";
            valor1.innerHTML = numero1;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        } else {
            numero2 = numero2 + "7";
            valor3.innerHTML = numero2;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        }

    } catch (e) {
        alert("Sobrepasaste la cantidad de digitos");
        borra();
    }

}

function num8() {

    try {
        cont++; /* CONTADOR DE DIGITOS */
        if (cont < 9) { /* NO SE PUEDEN PONER MAS DE 8 DIGITOS */

            numero1 = numero1 + "8";
            valor1.innerHTML = numero1;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        } else {
            numero2 = numero2 + "8";
            valor3.innerHTML = numero2;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        }

    } catch (e) {
        alert("Sobrepasaste la cantidad de digitos");
        borra();
    }

}

function num9() {

    try {
        cont++; /* CONTADOR DE DIGITOS */
        if (cont < 9) { /* NO SE PUEDEN PONER MAS DE 8 DIGITOS */

            numero1 = numero1 + "9";
            valor1.innerHTML = numero1;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        } else {
            numero2 = numero2 + "9";
            valor3.innerHTML = numero2;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        }

    } catch (e) {
        alert("Sobrepasaste la cantidad de digitos");
        borra();
    }

}

function num0() {

    try {
        cont++; /* CONTADOR DE DIGITOS */
        if (cont < 9) { /* NO SE PUEDEN PONER MAS DE 8 DIGITOS */

            numero1 = numero1 + "0";
            valor1.innerHTML = numero1;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        } else {
            numero2 = numero2 + "0";
            valor3.innerHTML = numero2;
            aux++;
            if (aux > 7) {
                throw "excepcion";
            }
        }

    } catch (e) {
        alert("Sobrepasaste la cantidad de digitos");
        borra();
    }

}

function calcular() {
    try {
        switch (operador) {
            case "S":
                numero2 = parseInt(numero2);
                resultado = (numero1 + numero2);
                valor5.innerHTML = resultado;
                numero1 = "";
                numero2 = "";
                cont = 0;
                aux = 0;
                resultado = 0;
                break;

            case "R":
                numero2 = parseInt(numero2);
                resultado = (numero1 - numero2);
                valor5.innerHTML = resultado;
                numero1 = "";
                numero2 = "";
                cont = 0;
                aux = 0;
                resultado = 0;
                break;
            case "M":
                numero2 = parseInt(numero2);
                resultado = (numero1 * numero2);
                valor5.innerHTML = resultado;
                numero1 = "";
                numero2 = "";
                cont = 0;
                aux = 0;
                resultado = 0;
                break;
            case "D":
                if (numero2 == 0) {
                    throw "Exception"
                }
                numero2 = parseInt(numero2);
                resultado = (numero1 / numero2);
                valor5.innerHTML = resultado;
                numero1 = "";
                numero2 = "";
                cont = 0;
                aux = 0;
                resultado = 0;
                break;
        }
    } catch (e) {
        alert("No puedes dividir por cero BOBO");
        borra();
    }




}





