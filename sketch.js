
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stone,groundObject, launcherObject;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
var mango8;
var mango9;
var mango10;
var mango11;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,130,30);
	mango3=new mango(1200,160,30);
	mango4=new mango(1050,190,30);
	mango5=new mango(1000,210,30);
	mango6=new mango(1200,240,30);
	mango7=new mango(1090,270,30);
	mango8=new mango(997,140,30);
	mango9=new mango(1130,200,30);
	mango10=new mango(1210,140,30);
	mango11=new mango(993,90,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone = new Rock (200,200, 10);
	slingshot = new SlingShot(stone.body,{x:225,y:405});
	
	
	Engine.run(engine);

}

function draw() {

  background(230);
  textSize(25);
  fill("black");
  stroke("black");
  strokeWeight(1.5);
  text("Press Space to get a second Chance to Play!!",10, 50);

  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  stone.display();
slingshot.display();
 

  groundObject.display();
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY} );  
  }
  
  function mouseReleased(){
	  slingshot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
    }
}