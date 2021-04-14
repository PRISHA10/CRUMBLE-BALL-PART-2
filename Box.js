class Box{
    constructor(x,y,width,height){
       var options={   
          isStatic:true,
          friction:1
       }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    this.image=loadImage('images/Dustbin.png')
    World.add(world,this.body);
    }
    display(){
       var pos=this.body.position
       rectMode(CENTER)
       fill("red")
       rect(pos.x,pos.y,this.width,this.height) 
    }
    }