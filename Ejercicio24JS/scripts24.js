document.getElementById("boton").onclick = calcular;


function calcular(){
event.preventDefault();

let diametro = document.getElementById("input").value;

let radio = (diametro/2);

let respuestaArea = document.getElementById("areaP");

 let respuesta1 = ` El radio del Circulo es: 
 ${radio}m` ;
 
 respuestaArea.textContent = respuesta1;



}