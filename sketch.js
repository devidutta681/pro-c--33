const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Body = Matter.Body;

var world,engine;
var background1,background2,background3,background4,background5
var snow_flakes = [];
var x, y;

function preload(){
  background1 = loadImage("snow1.jpg")
  background2 = loadImage("snow2.jpg")
  background3 = loadImage("snow3.jpg")
}

function setup() {
  createCanvas(1350,600);
  engine = Engine.create();
  world = engine.world;
  character1 =  createSprite(200,500,20,20)
  
}

function draw() {
  background(background1); 
  Engine.update(engine); 

  if(keyCode === RIGHT_ARROW){
    character1.x = character1.x  + 5
   }
  if(keyCode === LEFT_ARROW){
    character1.x = character1.x - 5
  }
  if(frameCount % 60 === 0){
    snow_flakes.push(new Snowflake(random(width/2-10,width/2+10),10,10))
  }
   
  
  
 
 drawSprites();
 
  

 
}
