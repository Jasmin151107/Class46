const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg; 
var tower,towerImg
var canon;
var balls = [] 

function preload() {
 backgroundImg = loadImage("background.gif")
 towerImg = loadImage("tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  angleMode(DEGREES)
  world = engine.world;
  var groundOptions = {isStatic : true 

  }

  ground= Matter.Bodies.rectangle(600,600,1200,10,groundOptions)
  World.add(world,ground); 

  var towerOptions = {isStatic : true 

  }
  tower=Matter.Bodies.rectangle(160,350,160,310,towerOptions)
  World.add(world,tower);

  canon = new Canon(180,110,130,100,20)
 

}

function draw() {
  background(backgroundImg);
 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,10);
   rectMode(CENTER)
   push()
   imageMode(CENTER);
   image(towerImg,tower.position.x,tower.position.y,160,310);
   pop()
   
   
   for(var i=0;i<balls.length;i++){
     showCanonBalls(balls[i],i)
   }
   canon.display();
}
function keyPressed(){
  if(keyCode===DOWN_ARROW){
    canonBall = new Ball(canon.x+10,canon.y);
    balls.push(canonBall)
  }
}
function showCanonBalls(ball,i){
  if(ball){
    ball.display()
  }
}
function keyReleased(){
  if(keyCode===DOWN_ARROW){
    balls[balls.length-1].shoot();
  }
}