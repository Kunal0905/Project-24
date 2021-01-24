class Ball{
    constructor(x,y){
        var options ={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
        }
    this.ball = Bodies.circle(x,y,20,options)
    World.add(world,this.ball)


    }
    display() {
        var pos = this.ball.position
        push()
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,20)
        pop()
    }
}