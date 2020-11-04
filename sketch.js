var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(50, 100);
  weight = random(500, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;


  wall = createSprite(1500, 200, 10, 400);
  wall.shapeColor = color(255,255,255);
}

function draw() {
  background(0, 0, 0); 

  maximumDistance = wall.width/2 + car.width/2;
  distanceBetween = wall.x - car.x;

  if(distanceBetween < maximumDistance){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed / 22500
    if(deformation > 180){
      fill("White");
      textSize(40);
      text("Lethal!", 700, 50);
      car.shapeColor = color(255, 0, 0);
    }
    if(deformation < 180 && deformation > 100){
      fill("White");
      textSize(40);
      text("Okay...", 700, 50);
      car.shapeColor = color(230, 230, 0);
    }
    if(deformation < 100){
      fill("White");
      textSize(40);
      text("Safe!", 700, 50);
      car.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}