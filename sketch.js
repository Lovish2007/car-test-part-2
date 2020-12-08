var bullets;
var stick;
var wall;

function setup() {
  createCanvas(1600,600);

bullet1 = createSprite(30, 200, 50,5);
bullet1.velocity = -4;

bullet2 = createSprite(30, 320, 50,5);
bullet1.velocity = -4;

bullet3 = createSprite(30, 450, 50,5);
bullet1.velocity = -4;
}

function draw() {
  background("black"); 

  fill("yellow");
  text("Bullet Test", 660,30);

  text("* IF (collision<80) then colour = blue", 100,550);
  text("* IF collision is in between (80-180) then colour = Red", 600,550);
  text("* IF (collision>180) then colour = Green", 1200,550);

  fill("white")

  rect(630, 2, 5, 55);
  rect(750, 2, 5, 55);
  rect(630, 52, 125, 5);

  rect(1, 500, 1800, 5);
  rect(1, 230, 1800, 5);
  rect(1, 370, 1800, 5);

  rect(400, 500, 10, 140);
  rect(1590, 500, 10, 110);
  rect(1000, 500, 10, 110);

  rect(1580, 430, 20, 70);
  rect(1580, 170, 20, 65);
  rect(1580, 300, 20, 70);
 
  drawSprites();
}