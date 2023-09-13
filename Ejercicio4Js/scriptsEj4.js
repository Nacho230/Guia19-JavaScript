
document.getElementById("boton").onclick = validacion;


function validacion(){
    event.preventDefault();

    let caracter = document.getElementById("caracter").value;
    let texto = document.getElementById("texto");

    if( (caracter === "s" || caracter ==="S") || ( caracter ==="n" || caracter ==="N")  ){
        texto.innerHTML = "Correcto!! 🥰🥰";
    }else{
        texto.innerHTML = "INCORRECTO BASURA";
    }



}