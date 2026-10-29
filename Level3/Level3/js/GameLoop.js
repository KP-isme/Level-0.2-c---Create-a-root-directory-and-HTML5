var canvas;
var context;
var player;
var timer;
var interval = 1000/60;
var p1Wins = 0;
var p2Wins = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

//player = new GameObject(100,canvas.height/2,100,100,"#eeea1e");
//npc1 = new GameObject(300,canvas.height/2,100,100,"#1eaeff");
//npc2 = new GameObject(600,canvas.height/2,100,100,"#df1eaf");
player1 = new GameObject(0,canvas.height/2,30,100,"#00bfff");
player2 = new GameObject(1025,canvas.height/2,30,100,"#00bfff");
ball = new GameObject(50,canvas.height/2,100,100,"#3c00ff");
player1.vx = 0;
player1.vy = 0;
player2.vx = 0;
player2.vy = 0;
ball.vx = 5;
ball.vy = 0;

timer = setInterval(animate, interval);

function animate()
{
    /*
    context.clearRect(0,0,canvas.width,canvas.height);

    if(d)
    {
        player.x += 4;
    }
    if(a)
    {
        player.x -= 4;
    }

    player.move();
    if (player.x > canvas.width + player.width/2)
    {
       // player.vx *= -1;
        player.color = "#40ff00";
    }
    if (player.x < 0 + player.width/2)
    {
       // player.vx = 2;
        player.color = "#ff0000";
    }
    if (player.y > canvas.height + player.height/2)
    {
        //player.vy *= -1;
        player.color = "#ff40b6";
    }
    if (player.y < 0 + player.height/2)
    {
       // player.vy = 2;
        player.color = "#0000ff";
    }

//npc1 collision stuff
if(npc1.collisionCheck(player))
    {
        npc1.color = "yellow";
        npc1.width = 125;
    }
    else
    {
        npc1.color = "green";
        npc1.width = 100;
    }

//npc2 collision stuff
if (npc2.collisionCheck(player))
{
    context.strokeRect(npc2.x-npc2.width/2, npc2.y-npc2.height/2, npc2.width, npc2.height);
}

if (npc3.collisionCheck(player))
{
    player.x = player.prevX;
}
else
{
    player.prevX = player.x;
}
*/
context.clearRect(0,0,canvas.width,canvas.height);
context.font = "40px Arial";
context.fillText("Player 1 Wins: " + p1Wins, 30, 700);
context.fillText("Player 2 Wins: " + p2Wins, 700, 700);

context.strokeStyle = "black";
context.lineWidth = 5;
context.beginPath();
context.moveTo(canvas.width / 2, 0);
context.lineTo(canvas.width / 2, canvas.height);
context.stroke();

ball.move();
    if (ball.x > canvas.width - ball.width/2)
    {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.vx = 25;
        ball.vy = 0;
        p1Wins++;
    }
    if (ball.x < 0 - ball.width/2)
    {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.vx = 25;
        ball.vy = 0;
        p2Wins++;
    }
    if (ball.y > canvas.height - ball.height/2)
    {
        ball.y = canvas.height - ball.height/2;
        ball.vy *= -1;
    }
    if (ball.y < ball.height/2)
    {
        ball.y = ball.height/2;
        ball.vy *= -1;
    }

    if(ball.collisionCheck(player1))
    {
        ball.x = player1.right() + ball.width/2;

    if(ball.y < player1.y - player1.height/6)
    {
        ball.vx = 25;
        ball.vy = -25;
    }
    else if(ball.y > player1.y + player1.height/6)
    {
        ball.vx = 25;
        ball.vy = 25;
    }
    else
    {
        ball.vx = 25;
        ball.vy = 0;
    }
    }

    if(ball.collisionCheck(player2))
    {
    ball.x = player2.left() - ball.width/2;

    if(ball.y < player2.y - player2.height/6)
    {
        ball.vx = -25;
        ball.vy = -25;
    }
    else if(ball.y > player2.y + player2.height/6)
    {
        ball.vx = -25;
        ball.vy = 25;
    }
    else
    {
        ball.vx = -25;
        ball.vy = 0;
    }
    }



    if(w)
    {
        player1.y -= 18;
    }
    if(s)
    {
        player1.y += 18;
    }
    
    if(up)
    {
        player2.y -= 18;
    }
    if(down)
    {
        player2.y += 18;
    }



      if(player1.top() < 0)
    {
        player1.y = player1.height / 2;
    }
        if(player1.bottom() > canvas.height)
    {
        player1.y = canvas.height - player1.height / 2;
    }

    if(player2.top() < 0)
    {
        player2.y = player2.height / 2;
    }
        if(player2.bottom() > canvas.height)
    {
        player2.y = canvas.height - player2.height / 2;
    }
    //player.drawCircle();
    //npc1.drawCircle();
    //npc2.drawCircle();
    //npc3.drawRect();
    player1.drawRect();
    player2.drawRect();
    ball.drawCircle();
}