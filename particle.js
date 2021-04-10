class particle{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
           'isStatic' : false
        }

        this.radius = 10;
        this.body = Bodies.circle(x, y, this.radius, options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        
        
       
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
       // translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
       
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);


        pop();
      }
}
