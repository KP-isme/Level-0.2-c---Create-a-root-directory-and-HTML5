

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

context.beginPath();
context.arc(100, 75, 50, 0, 2 * Math.PI);
context.stroke();
context.fill()   

 