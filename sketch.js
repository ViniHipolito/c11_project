var jaxon, jaxon_running;
var street, street_image;
var invisible_wall1;
var invisiblewall1;

function preload() {
  //jaxon_running = loadAnimation("Runner_1.png", "Runner_1.png", "Runner_1.png", "Runner_2.png", "Runner_2.png", "Runner_2.png");
  jaxon_running = loadAnimation("Sonic_run.gif");
  //street_image = loadImage("path.png");
  street_image = loadImage("GreenHill.jpg");
}

function setup() {
  createCanvas(1000, 600);
  
invisible_wall1 = createSprite(0,200,10,400);
invisible_wall1.visible = false;

invisiblewall1 = createSprite(999,200,10,400);
invisiblewall1.visible = false;

  street = createSprite(500, 300, 400, 200);
  street.addImage("street", street_image);
  street.scale = 1;

  jaxon = createSprite(200, 425, 50, 50);
  jaxon.addAnimation("running", jaxon_running);
  jaxon.scale = 2.5;
  jaxon.visible = true;
  
}

function draw() {
  background('black');
  
  street.velocityX = -5;
  if (street.x > 400){
    street.x = width/1.75;
  }
if (keyDown("RIGHT_ARROW")){
  jaxon.velocityX = +9;
}
if (keyDown("LEFT_ARROW")){
  jaxon.velocityX = -9;
}

jaxon.collide(invisible_wall1);
jaxon.collide(invisiblewall1);

 drawSprites();
}
