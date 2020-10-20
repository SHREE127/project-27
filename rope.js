/*class rope{

    costructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={

            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            stiffness: 0.04,
            lenght: 2

        }

        this.object = Constraint.create(options);
        World.add(world,this.object);
        this.pointB = pointB

    }
   display(){

        push();
        strokeWeight(5);

         var a = this.object.bodyA.position;
         var b = this.object.bodyB.position;
         line(a.x,a.y,
              b.x,b.y)

        pop();
    }
}
*/

class rope {

    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options={

            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
            lenght:0.2
            
        }
    
        this.object = Constraint.create(options);
        World.add(world,this.object);
        //this.pointB = pointB
        
    }

display(){
 
    var a = this.object.bodyA.position;
    var b = this.pointB;
push();
    strokeWeight(5);
    line(a.x,a.y,this.offsetX,this.offsetY); 
pop();
}
}
