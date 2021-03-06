class Polygon {
    constructor(x,y,radius) {
        this.image = loadImage("polygon.png");
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(x,y,radius,options)
        this.radius = radius
        World.add(world, this.body);
    }
    display() {
        var pos =this.body.position;
        fill("white");
        push();
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
        pop();
    }
}