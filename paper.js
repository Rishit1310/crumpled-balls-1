class paper{
    constructor(x, y, r) {
        var options = {
            'restitution':0,
            'friction':10000000000,
            'density':1.2
        }
        this.x=x
        this.y=y
        this.r = r;

       this.body = Bodies.circle(x,y,r,options)
       World.add(world,this.body)
      }
      display(){
        var paperpos=this.body.position
        push();
        translate(paperpos.x, paperpos.y);
        fill("red")
        ellipseMode(RADIUS);
       ellipse(0,0,this.r,this.r)
        pop();
      }
}