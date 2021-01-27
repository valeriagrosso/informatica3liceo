let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

function loadImages(sources, callback) {
  let images = {};
  let loadedImages = 0;

  let numImages = Object.keys(sources).length;

  for (let src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      loadedImages++;
      if (loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
var sources = {
  balon1:
  "https://assets.stickpng.com/images/580b585b2edbce24c47b2b90.png",
  balon2: 
  "https://www.molten.es/614-xlarge_default/balon-molten-bv5000.jpg",
  balon3:
    "https://assets.stickpng.com/images/580b585b2edbce24c47b2ad6.png",
};
let x = 50;
let y = 300;
let vX = 5;
let v0Y = -40;
let aY = 2;
let t = 0;
let x2 = 0;
let y2 = 400; 
let dx = 10; 
let dy = -10;
function draw(images) {
  t += 1;
  x = 0 + vX * t;
  y = 400 + v0Y * t + (aY * Math.pow(t, 2)) / 2;
  x2 = x2 + dx;
  y2 = y2 + dy;
  ctx.clearRect(0, 0, 400, 400);
  ctx.drawImage(images.balon1, x, y, 70, 70);
  ctx.drawImage(images.balon2, x2, y2, 70, 70);
  ctx.drawImage(images.balon3, 230, 50, 70, 70);
}

function run(images) {
  window.setInterval(function () {
    draw(images);
  }, 30);
}
loadImages(sources, run);