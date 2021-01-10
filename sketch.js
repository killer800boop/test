var fixedRect, movingRect,box1,box2

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 300, 50, 50);
  fixedRect.shapeColor= "Red"
  movingRect = createSprite(200,200,40,100)
  movingRect.shapeColor="Yellow"
  box1 = createSprite(400,100,50,50)
  box1.shapeColor = "green"
  box2 = createSprite(400,350,50,20)
  box2.shapeColor = "blue"
  box1.velocityY = 1
  box2.velocityY = -1
}

function draw() {
  background("Black");  
  movingRect.x = mouseX
  movingRect.y = mouseY
  textSize(30)
  text(movingRect.width/2 + fixedRect.width/2 , 50,50)
  text(movingRect.x - fixedRect.x , 50,100)
  
  if (movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
      fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
      movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
      && fixedRect.y - movingRect.y <fixedRect.height/2 + movingRect.height/2){
        movingRect.shapeColor = "Pink"
        fixedRect.shapeColor = "Purple"
      }
      else{
        fixedRect.shapeColor= "Red"
        movingRect.shapeColor="Yellow"
      }
      if (box1.x - box2.x < box1.width/2+box2.width/2 &&
        box1.x - box2.x < box1.width/2 + box2.width/2){
          box1.velocityX = box1.velocityX * (-1)
          box2.velocityX = box2.velocityX * (-1)
        }
        if ( box1.y - box2.y < box1.height/2 + box2.height/2
          && box2.y - box1.y <box2.height/2 + box1.height/2){
            box1.velocityY = box1.velocityY * (-1)
            box2.velocityY = box2.velocityY * (-1)
          }
  drawSprites();
}