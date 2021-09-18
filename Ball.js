class Ball{
constructor(x,y){
    var options={
        isStatic : true
    }
this.x=x
this.y=y
this.r=20
this.body = Matter.Bodies.circle(x,y,this.r,options);
this.ballImg = loadImage("cannonball.png")
World.add(world,this.body)
}
shoot(){
    var newAngle = canon.a-28
    newAngle = newAngle*(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle)
    velocity.mult(0.5)
    Body.setStatic(this.body,false);
    Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
}
display(){
    push();
imageMode(CENTER);
image(this.ballImg,this.body.position.x,this.body.position.y,this.r,this.r);
pop();
}
}