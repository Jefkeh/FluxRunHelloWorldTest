var bird;
var pipeTop;
var pipBottom;
var backGroundIM;
var button;

var gap;
var pipe1X;
var pipe2X;
var pipe1Y;
var pipe2Y;
var pipe1Height;
var pipe2Height;
var pipe1Go;
var pipe2Go;
var pipeSpeed;

//vars for bird
var bX;
var bY;
var gravity;

var startGame;

var score;
var inPipe;
var highScore;

function preload(){
  bird = loadImage('Flappy Bird.gif');
  pipeTop = loadImage('Pipes-Bottom.png');
  pipeBottom = loadImage('Pipes-Top.png');
  backGroundIM = loadImage('Background.png');
  button = loadImage('Start Button.png');
}

function setup() {
  createCanvas(400, 400);
  highScore = 0
  setupGame();
}

function draw() {
  
  if(!startGame){
    background(0, 150, 250);
    fill(25, 250, 100);
    image(button, 135, 150, 130,100);
    fill(0, 0, 0)
    if(score == undefined){
      score = 0
    }
    textSize(64)
    text(score, 180,100);
    //rect(150, 150, 100, 100);
    textSize(32);
    //fill(255, 255, 255);
    text("Your Score Was", 77, 50);
    
      if(score > highScore -1){
    highScore = score
      }    
    text("High Score", 123, 340);
    text(highScore, 190, 375)
    
  }
  else{
  background(25, 100, 255);
  fill(250, 100, 100);
  rect(0, 350, 400, 50);
  image(backGroundIM,0,0,400,400);
    
  //determine if bird hit ground
  if(bY > 375){
    startGame = false
    bY = 150;
    setupGame();
    gameSpeed = 0;
    pipe1X = 450;
    pipe2X = 450;
    fill(355, 35, 0);
    textSize(32);
    text("Game Over", 100, 200);
  }
    
  //Determine if bird hits pipe1
  if(bX>pipe1X-50 &&bX < pipe1X+50 &&(bY <pipe1Height ||bY>pipe1Height +gap -50)){
    bY = 376
    fill(255,0,0);
    textSize(32)
    text("GAME OVER",100,200);
  }
  
    //determine if bird hits pipe2
  if(bX>pipe2X-50 &&bX < pipe2X+50 &&(bY <pipe2Height ||bY>pipe2Height +gap -50)){
    bY = 376
    fill(255,0,0);
    textSize(32)
    text("GAME OVER",100,200);
  }


  //Display and move pipes
  //first pipe
  if(pipe1Go){
    pipe1X = pipe1X -pipeSpeed;
    image(pipeTop,pipe1X,pipe1Y,50,pipe1Height);
    //image(picture, starting X, starting Y, W, H)
    image(pipeBottom,pipe1X,pipe1Y+pipe1Height+gap, 50,windowHeight - (pipe1Y + gap));
  }//moves first pipe
  
  if(pipe1X < 100){
    pipe2Go = true;
  }
 
  if(pipe1X < 0){
    //pipe1 end of screen reset the pipe
    pipe1X = 425;
    score = score + 1
    pipe1Go = false;
    pipe1Height = random(50,250)
  }
    
  //second pipe
  if(pipe2Go){
    pipe2X = pipe2X -pipeSpeed;
    image(pipeTop,pipe2X,pipe2Y,50,pipe2Height);
    //image(picture, starting X, starting Y, W, H)
    image(pipeBottom,pipe2X,pipe2Y+pipe2Height+gap, 50,windowHeight - (pipe2Y + gap));
  }//moves first pipe
 
  if(pipe2X < 100){
    pipe1Go = true;
  }
 
  if(pipe2X < 0){
    //pipe2 end of screen reset the pipe
    pipe2X = 425;
    score = score + 1
    pipe2Go = false;
    pipe2Height = random(50,250)
  }
    
  fill(0,0,0);
  textSize(64)
  text(score, 180,100);  
  
    
  if(score < 10){
  pipeSpeed = 3.5
  gravity = 1.5     
  fill(0, 0, 0);
  textSize(32);
  text("Level 1", 150, 130);
  gap = 150
  }  
    
  if(score > 9 && score < 25){
  pipeSpeed = 4.5
  gravity = 1.75 
  fill(0, 0, 0);
  textSize(32);
  text("Level 2", 150, 130);
  }    
    
  if(score > 24 && score < 50){
  pipeSpeed = 4.5
  fill(0, 0, 0);
  textSize(32);
  text("Level 3", 150, 130);
  gap = 140
  }    
  
  if(score > 49 && score < 75){
  pipeSpeed = 5
  fill(0, 0, 0);
  textSize(32);
  text("Level 4", 150, 130);
  gap = 150
  }      
    
  //code for bird
  image(bird, bX, bY, 65, 50);
  bY += gravity
  }
}
  
//  image(bird, bX, bY, 65, 50);
function setupGame() {
//gap = 150;
  gap = 175;
  
  pipe1X = 400;
  pipe1Y = 0;
  pipe1Height = 100;
  pipe1Go = true;
  
  pipe2X = 450;
  pipe2Y = 0;
  pipe2Height = 150;
  pipe2Go = false;
  
  pipeSpeed = 3;
  bX = 25;
  bY = 150;
  gravity = 1.5
  startGame = false
  inPipe = true
}

function keyPressed(){
  if(keyCode === 32){
    bY -= 25
  }
}

function mousePressed(){
  //rect(135, 150, 130,100)
  if(!startGame &&(mouseX >135 && mouseX < 265 &&mouseY > 150 && mouseY < 250)){
    startGame = true;
    score = 0;
  }
}
