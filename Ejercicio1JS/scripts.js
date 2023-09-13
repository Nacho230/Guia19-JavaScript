

document.getElementById("boton").onclick = mostramesta;

function mostramesta() {
    event.preventDefault();

    /*document.getElementById('container').style.display = "none";*/

    let mensaje = document.getElementById("mensaje");

    var clima = document.getElementById('comoEsta').value;

    let respuesta = `Hoy el clima está ${clima}`;

    mensaje.textContent = respuesta;

    console.log(respuesta);

    
   
};