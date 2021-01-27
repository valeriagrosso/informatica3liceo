let notas = [];
function Estudiante(nombre, edad, curso, notas) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
    this.notas = notas;
    (this.añadirNota = function (nota) {
        this.notas.push (nota);
        console.log (notas);
    }),
    (this.mostrarInformacion = function (){
        console.log (this.nombre, this.edad, this.curso);
    }),
    (this.promedio = function (){
        let total = 0; 
        for (nota of this.notas){
            total = total + nota; 
        }
        let promedio = total/this.notas.length;
        console.log (promedio);
        return promedio
    })
}

function Carro(marca, modelo, año, kilometraje, kpg) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.kilometraje = kilometraje;
    this.kpg = kpg; 
(this.añadirRecorrido = function(recorrido){
    kilometraje = kilometraje + recorrido;
    console.log (kilometraje);
}),
(this.calcularConsumo = function(kilometros){
    let consumo;
    consumo = kilometros/kpg;
    console.log (consumo);
}),
(this.mostrarRecorrido = function(){
    console.log (this.marca, this.modole, this.año, this.kilometraje);
})
}

let estudiante1 = new Estudiante("Valeria", 16, "Terza liceo", [9, 5, 7, 10, 8]);
let estudiante2 = new Estudiante("Pablo", 16, "Terza liceo", [4, 7, 7, 8, 8]);
let estudiante3 = new Estudiante("Cecilia", 16, "Terza liceo", [8, 9, 7, 10, 8]);
let carro1 = new Carro("Jeep", "Grand Cherokee", 2020, 620, 25);
let carro2 = new Carro("Ford", "Edge", 2016, 46320, 35);
let carro3 = new Carro("Mitsubishi", "Montero", 2011, 98000, 30);