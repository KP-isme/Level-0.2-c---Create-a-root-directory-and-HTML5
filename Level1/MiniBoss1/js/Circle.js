
 var mainTimer = setInterval(animate, 1000/60);


canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

var posX = 100;
var posY = 205;
var ballSp = 20;
var ballY = 10;
var ballSi = 50
function animate()
{
context.clearRect(0, 0, canvas.width, canvas.height);

context.beginPath();
context.arc(posX, posY, ballSi, 0, 2 * Math.PI);
context.stroke();
context.fill(); 

posX += ballSp;
posY += ballY;
if(posX >= canvas.width - ballSi) //subtracting so it stays inside
{
    ballSp = -ballSp
}

if(posX <= 0 + ballSi)  //adding so it stays inside
{
    ballSp = -ballSp
}

if(posY >= canvas.height - ballSi) //subtracting so it stays inside
{
    ballY = -ballY
}

if(posY <= 0 + ballSi)  //adding so it stays inside
{
    ballY = -ballY
}

}