
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1360, 652);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,640,width,20);
	dustbinObj=new Dustbin(1250,620);
	paper= new Paper(200,630,PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 // paper.debug
  background(230);
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  paper.display();

}
function keyPressed() {
	if(keyCode === UP_ARROW){
		var options ={
			x:200,
		   y:-180,
		}
		Matter.Body.applyForce(paper.body,paper.body.position,options)
	}
}  
