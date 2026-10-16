// var circle;



// circle = new GameObject(50, canvas.height/2, 100, 100, "#ffff00");
// circle.vx = 0;
// circle.vy = 0;

// circle.drawCircle();

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 75, 50, 0, 2 * Math.PI);
ctx.stroke();