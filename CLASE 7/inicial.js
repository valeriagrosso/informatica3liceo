let canvas = document.querySelector("#inicial");
let ctx = canvas.getContext("2d");

//rectángulos
// ctx.fillStyle = "red";
// rgba> red, green, blue, alpha. alpha quiere decir transparencia
ctx.fillStyle = "rgba(0,0,200, 0.5)";
// ctx.strokeStyle = "black";
// Los dos primeros parámetros son las coordenadas x y y de la esquina superior izquierda del rectángulo. Los otros dos son el ancho y el alto del rectángulo

ctx.fillRect(100, 200, 200, 100);
ctx.fillRect(200, 100, 100, 200);

// Para borrar se usa clearRect
ctx.clearRect(150, 225, 100, 50);

// paths: conjuntos de líneas
// Triangulo
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(300, 100);
ctx.lineTo(200, 0);
ctx.lineTo(200, 200);
ctx.stroke();

// Arco de circunferencia
ctx.beginPath();
ctx.arc(100, 100, 100, 0, Math.PI, true);
ctx.lineTo(300, 100);
ctx.stroke();
ctx.fill();