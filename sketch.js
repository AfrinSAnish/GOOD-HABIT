var paper1,ground,side1,side2,side3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

    paper1= new Paper(100,500,25);
	ground= new Ground(600,570,1200,5);
	side1=new Box(285,520,20,100);
	side2=new Box(395,560,200,20);
	side3=new Box(490,520,20,100);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  ground.display()
  paper1.display();
  side1.display()
  side2.display()
  side3.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:17,y:-17});
  
	}
}



