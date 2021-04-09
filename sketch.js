var soldier;
var soldierImg;
var terrorist;
var terroristImg;
var gun;
var gunImg;
var bullet;

function preload(){
soldierImg = loadImage("Hero Image.jpg");
terroristImg = loadImage("Villian Image.jpg");
gunImg = loadImage("Gun Image.jpg")
}
function setup() {
  createCanvas(1000,800);

  terrorist = createSprite(850,700,20,20);
  terrorist.addImage(terroristImg);

  soldier = createSprite(250,700, 20, 20);
  soldier.addImage(soldierImg);

  gun = createSprite(300,700,20,20);
  gun.addImage(gunImg);

  bullet = createSprite(300,700,20,20);
}

function draw() {
  background("blue");

  


  if(keyDown("space")){
    bullet.velocityX = 25;
    terrorist.destroy();
  }

  drawSprites();
}

function destroy() {
  if(bullet.isTouching(terrorist)){
    terrorist.velocityX = 55;
    fill("black")
    text("Good Job, You killed the villian");
    textSize(30)
}
}