var player,ground,bg,player_run,player_jump;
var bground_img;
var obstacle,obstacleGroup,o1,o2,o3,o4;
var gameState;
var coin,coinGroup,coin_image;
var score;
var gameOver_img,restart,restart_img;
var jumpS,scoreS,dieS;
function preload(){
ground_img=loadImage("ground2.png");
player_run=loadAnimation("Running/0.png","Running/1.png","Running/2.png","Running/3.png","Running/4.png","Running/5.png","Running/6.png","Running/7.png","Running/8.png");
o1=loadImage("Obstacles/o1.png");
o2=loadImage("Obstacles/o2.png");
o3=loadImage("Obstacles/o3.png");
coin_image=loadImage("coins.png");
gameOver_img=loadImage("gameover.webp");
restart_img=loadImage("reset.png");
jumpS=loadSound("jump.mp3");
dieS=loadSound("die.mp3");
scoreS=loadSound("score.mp3");
}

function setup() {
  createCanvas(800,400);

  bg=createSprite(400,380);
  bg.addImage(ground_img);
  bg.scale=1.2;
  bg.x=bg.width/2-100;
 // bg.velocityX=-6-score*3/100;
  player=createSprite(50, 360, 20, 50);
  player.addAnimation("running",player_run);

 player.setCollider("rectangle",0,0,40,130)
  player.scale=0.8;
  player.width=100;
  
  ground=createSprite(400, 392, 1600, 20);
  ground.visible=false;

  obstacleGroup=new Group();
  coinGroup=new Group();
  gameState="play";

  score=0;

  restart=createSprite(720,330);
  restart.addImage(restart_img);
  restart.scale=0.4;
  restart.visible=false;
}

function draw() {
  background(255,255,255);  


  if(gameState==="play"){

    bg.velocityX=-6-score*3/100;
    if(bg.x<0){
      bg.x=bg.width/2-100;
    }
    
    if(keyDown("space")&&player.y>=315.2){
      player.velocityY=-14;
      jumpS.play();
    }
    player.velocityY+=0.8;

    spawnObstacle();
    spawnCoins();

    for(var i=0;i<coinGroup.length;i++){
      if(coinGroup.get(i).isTouching(player)){
        score++;
        coinGroup.get(i).destroy();
        scoreS.play()
      }
    }
    if(obstacleGroup.isTouching(player)){
      gameState="end";
      dieS.play();
    }

  }

else if(gameState==="end"){

  bg.velocityX=0;
  bg.x=bg.width/2;
  bg.addImage(gameOver_img);
  bg.y=160
  player.velocityY=0;

  obstacleGroup.setVelocityXEach(0);
 // obstacleGroup.setLifetimeEach(-1);
  coinGroup.setVelocityXEach(0);
 // coinGroup.setLifetimeEach(-1);

  obstacleGroup.destroyEach();
  coinGroup.destroyEach();
  player.visible=false;
  restart.visible=true;

}

player.collide(ground);

console.log(player.y);


if(mousePressedOver(restart)) {
  reset();
}

  drawSprites();

  textSize(30);
  fill("red")
  text("SCORE-"+score,100,50);
}

function reset(){
gameState="play";
score=0;
bg.addImage(ground_img);
bg.y=380
bg.scale=1.2;
bg.x=bg.width/2-150;
player.visible=true;
restart.visible=false;

}
function spawnObstacle(){
  if(frameCount%80===0){
    obstacle=createSprite(800,345,20,50);
    obstacle.velocityX=bg.velocityX;
    obstacle.lifetime=Math.round(800/obstacle.velocityX);
    obstacleGroup.add(obstacle);
    var rand=Math.round(random(1,3));
    switch (rand){
      case 1:obstacle.addImage(o1);
      break;
      case 2:obstacle.addImage(o2);
      break;
      case 3:obstacle.addImage(o3);
      obstacle.scale=0.3
      break;
      default:break;
    }
    obstacle.scale=0.3;
   
    obstacle.setCollider("rectangle",0,0,100,170)
  }
}

function spawnCoins(){
  if(frameCount%60===0){
    coin=createSprite(800,250,20,50);
    coin.addImage(coin_image);
    coin.velocityX=bg.velocityX;
    coin.lifetime=Math.round(800/coin.velocityX);
    coinGroup.add(coin);
    var rand=Math.round(random(150,250));
    coin.y=rand;
    coin.scale=0.2;
  }
}