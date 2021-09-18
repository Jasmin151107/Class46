class Canon{
    constructor(x,y,w,h,a){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = a;
        this.canonBase = loadImage("cannonBase.png");
        this.canonImg = loadImage("canon.png");
    }
display(){
    if(keyIsDown(RIGHT_ARROW)&&this.a<70){
     this.a+=1
    
    }
    if(keyIsDown(LEFT_ARROW)&&this.a>-15){
        this.a=this.a-1
        console.log(this.a)
    }
    push()
    translate(this.x,this.y)
    rotate(this.a)
    imageMode(CENTER)
    image(this.canonImg,0,0,this.w,this.h)
    pop()
    image(this.canonBase,70,20,200,200)
}
}