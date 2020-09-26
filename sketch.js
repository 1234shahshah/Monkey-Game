var ground
var monkey , monkey_running
var fruit ,bananaImage, obs, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
 monkey=createSprite(50,350,20,20);
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1
  ground=createSprite(200,385,400,10);
  ground.velocityX=-5/ground.width/2
}
  



function draw() {
background("white")
    FoodGroup = createGroup();
  fruit();
  if(keyDown("space") && monkey.collide(ground))
  {
    monkey.velocityY=-10;
  }
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival time:"+ survivaltime,100,50)
 
  monkey.velocityY = monkey.velocityY + 0.6
  monkey.collide(ground);


  obs();
 drawSprites();
}

 function fruit ()
{
 if (frameCount%80===0 )
  {
    ban=createSprite(400,120);
    ban.y=Math.round(random(260,340))
    ban.velocityX=-5
    ban.lifetime=100
    ban.addImage("bana",bananaImage)
    ban.scale=0.1
  FoodGroup.add(ban)
  }
}
function obs ()
{
 if (frameCount%300===0)
 {
  ob=createSprite(400,380) 
   ob.addImage("o",obstaceImage );
   ob.scale=0.2
   ob.lifetime=100;
   ob.velocityX=-5;
 }
  
}




