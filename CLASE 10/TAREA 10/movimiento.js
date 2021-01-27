let valeria = document.querySelector("#valeria");
let valeria2 = document.querySelector("#valeria2");


function cambiarColor() {
    valeria.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  function cambiarColor2() {
    valeria2.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  window.setInterval(cambiarColor, 100);
  window.setInterval(cambiarColor2, 100);

  let x = 0;
  let dX = 10;
  let y = 0;
  let dY = 10;
  let angle = 0;
  let dAngle = 5;

  function mover() {
    x = x + dX;
    y = y + dY;
    angle = angle + dAngle;
    valeria.style.transform = `translate(${x}px,${y}px)  rotate(${angle}deg)`;
  }
  let x2 = 0;
  let y2 = 450;
  let vX = 5;
  let v0Y = -40;
  let aY = 2;
  let t = 0;
  let angle2 = 0;
  let dAngle2 = 5;
  function mover2() {
    t += 1;
    x2 = 0 + vX * t;
    y2 = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
    angle2 = angle2 + dAngle2;
    valeria2.style.transform = `translate(${x2}px,${y2}px)  rotate(${angle2}deg)`;
  }
  window.setInterval(mover2, 100);
  
    let idMovimiento;
    let idColor;
    let corriendo = false;
    function start() {
    corriendo = true;
    idMovimiento = window.setInterval(mover, 100);
    idColor = window.setInterval(cambiarColor, 30);
  }
  function stop() {
    corriendo = false;
    window.clearInterval(idMovimiento);
    window.clearInterval(idColor);
  }
  window.onkeydown = function (evento) {
      if (evento.key == "w") {
      if (corriendo) stop();
      else start();
    }
  };
