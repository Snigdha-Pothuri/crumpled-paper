class paper {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body =Bodies.circle(50,100,30);
        //this.body.radiusX = radiusX;
        //this.body.radiusY = radiusY;


        this.body = height;
        World.add(world,this.body);
      }
      display(){
        push();
       // translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS) 
        ellipse(0,0,30,30)
        pop();
      }
}