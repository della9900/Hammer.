const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,box1,box2,box3,box4;
var log1,log2,log3,rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
box1 = new Box(400,500,50,50);
box2 = new Box(800,500,50,50);
box3 = new Box(400,300,50,50);
box4 = new Box(800,300,50,50);
log1 = new Log(400,400,100,PI/2);
log2 = new Log(800,400,100,PI/2);
log3 = new Box(600,200,400,20);
rubber = new Rubber(550,0,50,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);






box1.display();
    plane.display();
    hammer.display();
    box2.display();
    box3.display();
    box4.display();
log1.display();
log2.display();
 log3.display();   
 rubber.display();
}