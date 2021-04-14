class Snow{
    constructor(x,y,radius){
        var options={
            friction:0.3,
            density:0.1,
            restitution:0.2
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
    }
    display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.radius, this.radius);
        pop();

    }
}