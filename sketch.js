
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,100,350,20);

	bobObject1 = new Bob(300,300);
	bobObject2 = new Bob(350,300);
	bobObject3 = new Bob(400,300);
	bobObject4 = new Bob(450,300);
	bobObject5 = new Bob(500,300);
	
	rope1 = new Rope(bobObject1.body,roof.body,-75*2, 0)
	rope2 = new Rope(bobObject2.body,roof.body,-50*2, 0)
	rope3 = new Rope(bobObject3.body,roof.body,-25*2, 0)
	rope4 = new Rope(bobObject4.body,roof.body,-0*2, 0)
	rope5 = new Rope(bobObject5.body,roof.body,25*2, 0)

	Engine.run(engine);
  
}

var canMove = true;
var keyPressed = false;
var keyReleased = false;

function draw() {
	rectMode(CENTER);
	background(255);

  
	roof.display();
	bobObject1.display();

	bobObject2.display();

	bobObject3.display();

	bobObject4.display();

	bobObject5.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

	if(canMove)
	{
		if(keyPressed == false)
		{
			keyPressed = keyIsDown(UP_ARROW);
		}

		if(keyPressed && keyReleased == false)
		{
			keyReleased = !keyIsDown(UP_ARROW);
		}

		if (keyReleased) {
			var force = Matter.Vector.create(-15,15);
			Matter.Body.setVelocity(bobObject1.body, force);
			canMove = false;
		}
	}

  	drawSprites();
}



