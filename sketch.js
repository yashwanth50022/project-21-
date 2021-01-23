var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1000,400);
  thickness = random(22,83);
  speed = random(55,90);
  weight = random(400,1500);
   bullet = createSprite(50, 200, 50, 50);
   bullet.velocityX = speed;
   bullet.shapeColor = "white";
   wall = createSprite(900,200,48,250);
   wall.shapeColor = "white";

}

function draw() {
  background("black");  

if(bullet.isTouching(wall)){
  if(damage = 3.68){
    bullet.shapeColor = "green";
  }
  if(damage = 12.43){
    bullet.shapeColor = "red";
  }
  bullet.velocityX = 0;
}
  
  drawSprites();
}