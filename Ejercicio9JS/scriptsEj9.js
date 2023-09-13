document.getElementById("boton").onclick = separar;

var nuevaFrase = "";

function separar(){
event.preventDefault();

    var texto = document.getElementById("texto").value;
    
    
for (let i = 0; i < texto.length; i++) {
    nuevaFrase += texto.substring(i,i+1) + " ";
    
}

let frase = document.getElementById("frase");
frase.innerHTML =  nuevaFrase;

}