const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;
   
}

function draw() {
  background(0);
  ground (600,380,1200,20);
  ground.display();
}




function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})

}