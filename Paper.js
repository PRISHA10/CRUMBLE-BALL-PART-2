class Paper{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:2.0,
            density:1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.radius = r;
        this.image = loadImage("images/PAPER.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius)
        pop();
        
      }
}