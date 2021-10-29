class Chain {
    constructor(bodyA, bodyB) {
        //Formato json
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 20
        }
        //Se crea una cadena para RESTRINGIR los cuerpos
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}