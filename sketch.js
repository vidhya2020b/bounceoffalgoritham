var wall, car;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color=(80,80,80);
  wall.debug = true;

  car = createSprite(50, 200,50,50);
  car.shapeColor = "green";
  car.debug = true;

  car.velocityY = -5;
 
}

function draw() {
  background(0,0,0);  

  bounceOff(car,wall);
  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}