
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dustbin1 = new dustbin(1100,380,20,100) 
	dustbin2 = new dustbin(1000,380,150,20) 
	dustbin3 = new dustbin(931,450,20,100)
	paper1=new paper(180,440,20)

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 470, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  background("black");
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper1.display()
  text(mouseX+","+mouseY,mouseX,mouseY)



  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:64,y:-100})
}
}

