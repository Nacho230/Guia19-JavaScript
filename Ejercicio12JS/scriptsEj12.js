var argumento = prompt("Ingrese lo que quiera... Yo retorno tipo de dato");


var verificarDato=((argumento) => (isNaN (argumento) ? "String" : "Number" ));

var datoVerificado = verificarDato(argumento);

alert(datoVerificado);









