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
  background4 = loadImage("snow4.webp")
  background5 = loadImage("snow5.webp")
}

function setup() {
  createCanvas(1350,600);
  engine = Engine.create();
  world = engine.world;
  character1 =  createSprite(x,500,20,20)
  
}

function draw() {
  background(background1); 
  Engine.update(engine); 

  character1.x = World.mouseX

  
  if(frameCount % 60 === 0){
    snow_flakes.push(new Snowflake(random(width/2 - 50 , width/2 + 50),-10,this.width,this.height))
  }
   
  
  
 
 drawSprites();
 
  

 
}
