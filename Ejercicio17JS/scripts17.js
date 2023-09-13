document.getElementById("boton").onclick = borrarArray;
//document.getElementById("botonReset").onclick = resetear;

var texto1 = document.getElementById("texto1");

var array = ["Hola", "como", "estas", "hijo", "de", "puta"];

texto1.innerHTML = array;

function borrarArray() {
    array.splice(4, 5);
    texto1.innerHTML = array;
}


/*function resetear(){
   
        array.push("de" , "puta");
        texto1.innerHTML = array;
    
    
    
}
/*

/*
. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el 
resultado 
*/