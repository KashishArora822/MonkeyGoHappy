var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var survivalTime


function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup= new Group()
  obstacleGroup=new Group()
 
}

function setup() {
  createCanvas(700,400);
  survivalTime=0
  
  monkey=createSprite(50,355,20,20);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(0,400,1500,30);
  
}


function draw() {
  background("black")
  
  spawnFood()
  spawnObstacle()
  
  
  
  
  ground.velocityX=-4
  ground.x=ground.width/2
  
  
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach()
    survivalTime=survivalTime+1
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground)
  
  if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY=-13
  }
  

drawSprites()
  
 stroke("black"); 
  textSize(20); 
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0; 
    monkey.velocityY = 0;
    obstacleGroup.setVelocityXEach(0); FoodGroup.setVelocityXEach(0); 
  obstacleGroup.setLifetimeEach(-1); FoodGroup.setLifetimeEach(-1);
  
}
}
function spawnFood() { 
     if (frameCount % 80 === 0) {
       banana = createSprite(600,250,40,10);
       banana.y =Math.round(random(120,200)); 
       banana.velocityX = -5; 
       banana.lifetime = 300; 
       banana.depth=monkey.deth
       monkey.depth = monkey.depth + 1;
       banana.addImage(bananaImage);
       banana.scale=0.1; 
       FoodGroup.add(banana); } }
   
  function spawnObstacle() {
    if(frameCount % 100 === 0) {
      obstacle = createSprite(800,380,10,40);
      obstacle.velocityX = -6;
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.2; 
      obstacle.lifetime = 300;
      obstacleGroup.add(obstacle); } }
