


document.getElementById("boton").onclick = calcularEdad;

function calcularEdad() {       
    event.preventDefault();
    let valor = document.getElementById("edad").value;
    let texto = document.getElementById("textoP");

    if (valor >= 18) {
        let mensaje =  " El usuario es mayor de edad! "
        texto.innerHTML = mensaje;
    }else{
        let mensaje = " El usuario  NO es mayor de edad! "
        texto.innerHTML = mensaje;
    }


    console.log(texto);

}



/*
document.getElementById("boton").onclick = calcular;


function calcular(){
event.preventDefault();

let aux = document.getElementById("input").value;

let area = (Math.PI * Math.pow(aux,2));
let perimetro = (2 * Math.PI * aux);

let respuestaArea = document.getElementById("areaP");
let respuestaPerimetro = document.getElementById("perimetroP");

 let respuesta1 = ` El resultado del area es 
 ${area}`;
 let respuesta2 = ` El resultado del perimetro es 
 ${perimetro}`;

 
 respuestaArea.textContent = respuesta1;
 respuestaPerimetro.textContent = respuesta2;
*/
