//create variables
var monkey , monkey_running
var banana ,bananaImage, stone, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400, 400);
  
  FoodGroup=createGroup(); 
  obstacleGroup=createGroup();
  
monkey=createSprite(80,315,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.09;
  
  ground=createSprite(250,350,500,5);

  survivalTime=0;
  score=0;
}


function draw() {
  background(255);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
   ground.velocityX=-7;
  
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
    }
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);

  spawnBananas();
  obstacle();
  drawSprites();
}

function spawnBananas(){
   if (frameCount % 80 == 0) {
     banana=createSprite(170,165,10,10);
     banana.addImage(bananaImage);
     banana.scale=0.05;
     
     banana.y=Math.round(random(120,200));
     banana.velocityX=-3;
     banana.lifetime=50;
     
     FoodGroup.add(banana);
   }
}

function obstacle(){
  if (frameCount % 300 == 0){
    stone=createSprite(290,339,10,10);
    stone.addImage(obstacleImage);
    stone.scale=0.07;
    stone.velocityX=-12;
    stone.lifetime=300;
    
    obstacleGroup.add(stone);
  }
}