var wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  thickness= random(22,83)

  bullet=createSprite(50,200,50,5)
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thicknessb * thickness * thickness);

if(damage>10){
wall.shapeColor=color(255,0,0)
}

if(damage<10){
wall.shapeColor=color(0,255,0);
}







  background(255,255,255);  
  drawSprites();
}

