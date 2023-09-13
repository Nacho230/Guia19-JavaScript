var palabra=prompt("ingrese su palabra");

var invertirPalabra=((palabra)=> palabra.split('').reverse().join(''));

var otraPalabra=invertirPalabra(palabra);
alert(otraPalabra);