import {ctx, drawObj, run, start, dT} from './initialize.js'

let lapiz = {
    x:150,
    y:100,
    dX: 0,
    dY: 0,

    dibujarse:function(){
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 100, 200);
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + 200);
        ctx.lineTo(this.x + 100, this.y + 200);
        ctx.lineTo(this.x + 100, this.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        //tirangulo de la punta
        ctx.fillStyle = "beige";
        ctx.beginPath();
        ctx.moveTo(this.x, this.y + 200);
        ctx.lineTo(this.x + 50, this.y + 250);
        ctx.lineTo(this.x + 100, this.y + 200);
        ctx.stroke();
        ctx.fill();

        //triangulo grafito
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.moveTo(this.x + 25, this.y + 225);
        ctx.lineTo(this.x + 50, this.y + 250);
        ctx.lineTo(this. x + 75, this.y + 225);
        ctx.lineTo(this.x + 25, this.y + 225);
        ctx.stroke();
        ctx.fill();

        //borde de arriba
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, 100, 25);

        //borrador 
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x + 50, this.y, 50, 0, Math.PI, true);
        ctx.stroke();
        ctx.fill();
    },
    moverse:function(){
        this.x = this.x + this.dX;
        this.y = this.y + this.dY;
    }
}

let lapiz2 = Object.create(lapiz)
lapiz2.x = 0;
lapiz2.y = 300;
lapiz2.dX = 2;
lapiz2.dY = -2;

let lapiz3 = Object.create(lapiz)
lapiz3.x = 0;
lapiz3.y = 0;
lapiz3.dX = 2;
lapiz3.dY = 0.5;

drawObj.draw =  function(){
    ctx.clearRect(0, 0, 400, 400);
    lapiz.dibujarse();
    lapiz2.dibujarse();
    lapiz3.dibujarse();
    lapiz2.moverse();
    lapiz3.moverse();
}
run()