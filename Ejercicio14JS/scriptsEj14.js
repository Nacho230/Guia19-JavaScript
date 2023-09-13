document.getElementById("boton").onclick = crearLibro;


var isbnT = document.getElementById("isbnT");
var tituloT = document.getElementById("tituloT");
var autorT = document.getElementById("autorT");
var paginasT = document.getElementById("paginasT");



function crearLibro() {

event.preventDefault();
    var isbnL = document.getElementById("isbn").value;
    var tituloL = document.getElementById("titulo").value;
    var autorL = document.getElementById("autor").value;
    var paginasL = document.getElementById("paginas").value;



    const libro = {
        isbn: isbnL,
        titulo: tituloL,
        autor: autorL,
        paginas: paginasL,
    };

    mostrarLibro(libro);
    
}



function mostrarLibro(libro){

isbnT.innerHTML = `El ISBN del libro es: ${libro.isbn}`;
tituloT.innerHTML = `El titulo del libro es: ` + libro.titulo;
autorT.innerHTML = `El Autor del libro es: ` + libro.autor;
paginasT.innerHTML = `La cantidad de paginas del libro es: ` + libro.paginas;


}