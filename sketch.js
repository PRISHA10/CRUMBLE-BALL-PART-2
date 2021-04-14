var  ground,groundsprite
var  circle ,papersprite,dustbinsprite
var PaperImg,binImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
//loadImage('images/PAPER.png');
//loadImage('images/dustbin.png');

}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	leftrect= new Box(460,610,20,100);
	centrerect= new Box(560,650,180,20);
	rightrect= new Box(660,620,20,100);
    circle = new Paper (120,156,37);

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);
  rightrect.display();
  centrerect.display();
  leftrect.display();
  circle.display();
 
}


function keyPressed() {
	if (keyCode===UP_ARROW) {

	   Matter.Body.applyForce(circle.body,circle.body.position,{x:09,y:-12})
	}
		 }
