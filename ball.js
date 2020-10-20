
class ball {
  constructor(x) {
    var options = {
      'isStatic' : false,
      'restitution' : 1,
      'fricton': 1,
      'density': 1.2
    }
    this.body = Bodies.circle(x,350,15,options);
    this.width = 30;
    this.height = 30;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    fill("red")
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.width,this.height);
  }
  }
