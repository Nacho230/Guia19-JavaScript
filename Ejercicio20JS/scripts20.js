var matriz = [];
var array = [];
var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");

for (let i = 0; i < 1; i++) {
    for (let j = 1; j < 6; j++) {
        matriz.push(3*j);
    }

}

console.log(matriz);

for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 5; j++) {
        array.push(matriz[j] + 3);
    }
}

console.log(array);

texto1.innerHTML = "Matriz: <br> " + matriz;
texto2.innerHTML = "Array : <br> " + array;


/*
realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y 
muestre el siguiente array [6, 9, 12, 15, 18]. 
*/