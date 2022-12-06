var sunX;
var an1X;
var guyX;
var night;
var testXY;

  sunX = 50;
  an1X = 250;
  guyX = 90;
  blueBG = 52
  redBG = 170
  greenBG = 235
  night = false;
  testXY = 0;

function setup() {
  createCanvas(700, 400);

}

function draw() {
  background(blueBG,redBG,greenBG); //background(52,170,235);
 
//tree
  fill(153, 77, 0);
  rect(450, 100, 50, 300);
 
//leaves
  fill(0, 200, 0);
  rect(325, 240, 300, 50, 25);
  rect(355, 190, 240, 40, 25);
  rect(390, 150, 175, 30, 25);
  rect(420, 120, 110, 20, 25);
  rect(440, 90, 70, 20, 25);

 
//person
  fill(255,37,37);
 
  strokeWeight(10);
  stroke(10);
  line(guyX + 10, 225, guyX + 60, 250);
  line(guyX + 10, 225, guyX - 40, 250);
  line(guyX + 10, 290, guyX + 35, 350);
  line(guyX + 10, 290, guyX - 15, 350);
 
  noStroke();
 
  rect(guyX, 200, 20, 100, 20); //rect(90, 200, 20, 100, 20);
 
  fill(227,233,207);
  ellipse(guyX + 10, 200, 50);
 
//animal
  fill(0, 0, 0);
  ellipse(an1X, 310, 80, 100); // ellipse(250, 310, 80, 100);
  ellipse(an1X, 250, 50);
  fill(255, 255, 255);
  ellipse(an1X, 315, 60, 75);
  fill(255,161,0);
  triangle(an1X, 270, an1X + 10, 250, an1X - 10, 250);
  fill(255, 255, 255);
    //left eye
  ellipse(an1X - 10, 240, 15);
    //right eye
  ellipse(an1X + 10, 240, 15);
  fill(0, 0, 0);
    //right eye
  ellipse(an1X + 10, 240, 5);
    //left eye
  ellipse(an1X - 10, 240, 5);

 

//sun
  fill(233,228,3);
  ellipse(sunX, 50, 75);  
 
  //movment code
  sunX += 5;//sunX++, sunX += 1, sunX = sunX + 1;
  guyX += 1
  print(night)
 
  if(night == true){
  blueBG = 0
  redBG = 0
  greenBG = 0
  }
  else{
  an1X += 3
  blueBG = 52
  redBG = 170
  greenBG = 235
  }
 
  if(sunX >700){
    testXY += 1;
    print(testXY)
  }
 
  if(night == false && sunX >700 && testXY/2 != 1){
    testXY = 1
    night = true
  }
 
  if(night == true && sunX >700 && testXY/2 == testXY/testXY){
    testXY = 0
    night = false
  }
 
 
  if(sunX >700){
    sunX = 0
  }
 
  if(an1X >700){
    an1X = 0
  }
 
  if(guyX >700){
    guyX = 0
  }
   
 
//ground  
  fill(255, 255, 255);
  rect(0, 350, 700, 400);

}
