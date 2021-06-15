 var fixed ,moving;   
    
    
function setup() {

  createCanvas(1200,800,);


  fixed2=createSprite(600, 300, 50, 50);
  fixed2.shapeColor="orange";

  fixed=createSprite(600, 400, 50, 50);
  fixed.shapeColor="black";

  moving=createSprite(400, 200, 50, 50);
  moving.shapeColor="blue";

  object1=createSprite(300, 100, 50, 50);
  object1.shapeColor="blue";

  object2=createSprite(400, 100, 50, 50);
  object2.shapeColor="blue";

  fixed.velocityY=-5
  fixed2.velocityY=+5
}

function draw() {
  background(255,255,255);  

moving.x=World.mouseX;
moving.y=World.mouseY;

bounceoff(fixed,fixed2);
console.log(bounceoff) 

if(istouching(moving,fixed))
{
fixed.shapeColor="red";
moving.shapeColor="red";

}

else{
  fixed.shapeColor="blue";
  moving.shapeColor="blue";

}

  drawSprites();
}
