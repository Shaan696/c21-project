
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ball;
var ground;
var wall1, wall2;
var world;
var engine;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(400,390,800,20);
  wall1 = new Ground(400,400,20,200);
  wall2 = new Ground(600,400,20,200);
 
 
  var ball_options = {
	  isStatic: false,
	restitution : 0.8,
	friction: 0.1,
	density: 1.2
  }
  
  ball = Bodies.circle(100,100, 20, ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);

  Engine.update(engine);

  ground.show();
  wall1.show();
  wall2.show();
  ellipse(ball.position.x,ball.position.y,20);
}


function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-10});
	}
}