
document.getElementById("boton").onclick = crearCirculo;


var perimetroT = document.getElementById("perimetro");
var areaT = document.getElementById("area");



function Circulo(radio) {
    this.radio = radio;
    this.calcularArea = calcularArea;
    this.calcularPerimetro = calcularPerimetro;
}

function calcularArea() {
    var area = (Math.PI * Math.pow(this.radio, 2));
    areaT.innerHTML = `El area del circulo es ${area}`


}

function calcularPerimetro() {
    var perimetro = (2 * Math.PI * this.radio);
    perimetroT.innerHTML = `El perimetro del circulo es ${perimetro}`
    
}

function crearCirculo() {
    
    var radioInput = document.getElementById("radio");
    var radio = parseFloat(radioInput.value);

    var circulo1 = new Circulo(radio);

    circulo1.calcularArea();
    circulo1.calcularPerimetro();

}

/*
var auto1 = new Auto('Nissan', '300ZX', 1992);

function mostrarAuto() {
    var resultado = `Un hermoso ${this.anio} ${this.marca} ${this.modelo}`;
    console.log(resultado);
   }

   function Auto(marca,modelo,anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.mostrarAuto = mostrarAuto;
    }

    auto1.mostrarAuto();

    console.log("HOLA");

   */