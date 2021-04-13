var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1000,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(80,200,30,10);
  wall=createSprite(900,200,thickness,height/2);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  wall.shapeColor=80,80,80;
}

function draw() {
  background(0);
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage<10)
    {
      bullet.shapeColor="green";
    }
    if(damage>10)
    {
      bullet.shapeColor="red";
    }
  }
  drawSprites();
}