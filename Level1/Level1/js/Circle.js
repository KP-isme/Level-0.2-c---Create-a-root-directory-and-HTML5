
 var mainTimer = setInterval(animate, 1000/60);


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

var posX = 100;
var posY = 205;

function animate()
{
 context.clearRect(0, 0, canvas.width, canvas.height);
 context.beginPath();
context.arc(posX, posY, 50, 0, 2 * Math.PI);
context.stroke();
context.fill()  

posX += 1;

}