
let arrayA = [];
let arrayB = [];
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");

for (let i = 0; i < 50; i++) {
    arrayA.push(Math.floor(Math.random()*100));
    
}

console.log("Primer Array", arrayA);

arrayA.sort(ordenador);

console.log(arrayA);



function ordenador(a,b) {
    if (a > b) return 1; 
    if (a == b) return 0; 
    if (a < b) return -1;
}

/*for (let i = 0; i < 10; i++) {
    arrayB.push(arrayA[i]);
    
}*/
arrayB.push(...arrayA.slice(0,10));

for (let i = 0; i < 10; i++) {
    arrayB.push(0.5);
    
}

console.log(arrayB);

texto1.innerHTML = "Array A: <br> " + arrayA;
texto2.innerHTML = "Array B: <br> " + arrayB;


/*arrayA.sort(Function =>(arrayA,arrayB)){
return arrayA - arrayB
});
/*

/**
 *  Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A 
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El 
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla. 
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números 
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor 
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado 
de 20
 */