
var movingRect, fixedRect, rect1;

var leftRect, rightRect;

function setup() {
  createCanvas(800,400);

  movingRect = createSprite(100,100,80,50);
  movingRect.shapeColor = "orange";

  fixedRect = createSprite(400,200,50,80);
  fixedRect.shapeColor = "yellow";

  rect1 = createSprite(200,200,50,80);
  rect1.shapeColor = "peach";

  leftRect = createSprite(10,50,80,50);
  leftRect.shapeColor = "blue";

  rightRect = createSprite(780,50,80,50);
  rightRect.shapeColor = "pink";

  leftRect.velocityX =  2;
  rightRect.velocityX = -2;
 
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,fixedRect)){
    fixedRect.shapeColor = "cyan";
  }else{
    fixedRect.shapeColor = "yellow";
  }

  if(isTouching(movingRect,rect1)){
     rect1.shapeColor = "cyan";
  }else{
      rect1.shapeColor = "Peach";
  }
  
 bounceOff(leftRect,rightRect);
 
  drawSprites();
}

