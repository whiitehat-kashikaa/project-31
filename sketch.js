const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops = 100;
var drops = [];
var lightening = 100;
var blaze = [];

function preload(){
    
}

function setup(){
   createCanvas(700, 800);

   engine = Engine.create();
   world = engine.world;


}



function draw(){
    background(35, 57, 93);
    Engine.update(engine);

    for(i = 5 ; i < maxDrops ; i++){
        drops.push(maxDrops = new Droplet(random(0, 700), random(0, 700), 10, 10));
    }

    for(i = 5 ; i < lightening ; i++){
        blaze.push(lightening = new Thunder( random(150, 650) , random(10, 200)));
    }

    maxDrops.display();
    lightening.display();
}   