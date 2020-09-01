function MovingObject(position, velocity, radius, color, game){
    this.position = position;
    this.velocity = velocity;
    this.radius = radius;
    this.color = color;
    this.game = game;
}

MovingObject.prototype.draw = function(context){
    context.beginPath();
    context.arc(this.position[0], this.position[1], this.radius, 0, 2*Math.PI);
    context.strokeStyle = this.color;
    context.stroke();
    context.fillStyle = this.color;
    context.fill();
}

MovingObject.prototype.move = function(){
    this.position[0] += this.velocity[0];
    this.position[1] += this.velocity[1];
    this.position[0] = this.game.wrap(this.position[0]);
}

MovingObject.prototype.isCollidedWith = function(otherObject){
    const x_1 = this.position[0];
    const y_1 = this.position[1];
    const x_2 = otherObject.position[0];
    const y_2 = otherObject.position[1];
    const dist = Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);
    if (dist < (this.radius + otherObject.radius)){
        return true;
    }
    return false;
}

MovingObject.prototype.collideWith = function(otherObject){
    this.game.remove(this);
    // debugger;
    if(otherObject === this.game.ship){
        // debugger;
        otherObject.relocate();
    }
    else{
        this.game.remove(otherObject);
    }
}

module.exports = MovingObject;

