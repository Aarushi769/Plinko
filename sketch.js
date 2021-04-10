const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1;

var particles = [];

var divisions = [];

var plinkos = [];

var divisionHeight = 300;


function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

  
    ground1 = new ground(400,790,800,20)
    
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new division(k, height - divisionHeight/2, 10, divisionHeight));
   }

   for(var j= 75; j<=width; j= j+50){
     plinkos.push(new plinko(j,75));
   }

   for(var j= 50; j<=width-10; j= j+50){
    plinkos.push(new plinko(j,175));
  }

  for(var j= 75; j<= width; j= j+50 ){
    plinkos.push(new plinko(j,275));
  }

  for(var j=50; j<= width -10; j= j+50){
    plinkos.push(new plinko(j,375));
  }

  

}



function draw(){
    background("yellow");
    Engine.update(engine);
    //strokeWeight(4);
    
    ground1.display();


    for (var k = 0; k < divisions.length; k++) {

      divisions[k].display();

    }

    for (var j = 0; j <= plinkos.length; j++) {

      plinkos[j].display();
    }

    if(frameCount % 60 === 0){
      particles.push(new particle(random(width/2-30, width/2+30),random(height/2-30, height/2+30) ))
    }

    for (var i = 0; i <= particles.length; i++) {

      particles[i].display();
    }
  
}

