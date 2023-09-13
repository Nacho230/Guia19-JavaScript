
var datos = [];


function getFormValores(){
    event.preventDefault();
   let form = document.getElementById("form1");

   let apellido =  form.elements["apellido"].value;
   var nombre = document.getElementsByName("nombre")[0].value;
   alert("El nombre y apellido es: " + nombre + " " + apellido);
  
   
}

