
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof,string1,string2,string3,string4,string5;


function preload(){

}

function setup() {

	createCanvas(2000,2001);
	
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(300,500,25);
  bob2 = new Bob(350,500,25);
  bob3 = new Bob(400,500,25);
  bob4 = new Bob(450,500,25);
  bob5 = new Bob(500,500,25);
  string1 = new Rope(bob1.body,{x:300,y:100});
  string2 = new Rope(bob2.body,{x:350,y:100});
  string3 = new Rope(bob3.body,{x:400,y:100});
  string4 = new Rope(bob4.body,{x:450,y:100});
  string5 = new Rope(bob5.body,{x:500,y:100});
  roof = new Roof(400,100,400,10);



	Engine.run(engine);
  
}


function draw() {
	background(rgb(255,204,229));
  rectMode(CENTER);
  Engine.update(engine);
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
   string1.display();
   string2.display();
   string3.display();
   string4.display();
   string5.display();
   roof.display();


  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:250});
  }
}