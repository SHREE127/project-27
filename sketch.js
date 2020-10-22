const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup(){
    createCanvas(1000,650);
    engine = Engine.create();
    world = engine.world;

    roof = new Ground(400,100);
    //ground = new Ground(400,400)
 
    bob1 = new ball(280);
    bob2 = new ball(340);
    bob3 = new ball(400);
    bob4 = new ball(460);
    bob5 = new ball(520);

    rope1 = new rope(bob1.body,roof.body,280,100);
    rope2 = new rope(bob2.body,roof.body,340,100);
    rope3 = new rope(bob3.body,roof.body,400,100);
    rope4 = new rope(bob4.body,roof.body,460,100);
    rope5 = new rope(bob5.body,roof.body,520,100);
    
}

function draw(){
    background("pink");
    Engine.update(engine);

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();

    roof.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
       
   //    Matter.Body.setStatic(bob1,false)
	   Matter.Body.applyForce(bob1.body, bob1.body.position, {x:  -100, y: -20})
	   
	 }
   }
