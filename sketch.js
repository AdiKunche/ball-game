
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, rightground , leftground
var engine,world
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ball = Bodies.circle(260,100,20,{isStatic:false,restitution:0.3,friction:0,density:1.2})
	World.add(world,ball)
	ground = new Ground (width/2,670,width,20)
	leftground = new Ground (1100,600,20,120)
	rightground = new Ground (1350,600, 20,120)
	//Create the Bodies Here.
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.display()
  leftground.display()
  rightground.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


