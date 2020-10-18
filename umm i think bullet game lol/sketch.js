var bullet,wall;
var speed,weight;
var thickness;
var dam;

function setup() {
  createCanvas(1600,200);
  bullet=createSprite(50, 100, 50, 20);
  thickness=random(22,83)
  wall=createSprite(1500,100,thickness,height/2)
  speed=random(223,321);
  weight=random(30,52);
 
bullet.velocityX=speed;
bullet.shapeColor="	white";
}

function draw() {
  background("#347685");  
 
 
wall.shapeColor="black";

console.log(dam);
if(bullet.isTouching(wall)){
bullet.velocityX=0;
dam=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(dam<10){
  wall.shapeColor=color(0,255,0);

}
if(dam>10){
  wall.shapeColor=color(255,0,0);
}
}
  drawSprites();
}
