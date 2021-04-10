class plinko{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.radius = 10;
        this.body = Bodies.circle(x, y,this.radius, options);
        
        
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);


        pop();
      }
}
