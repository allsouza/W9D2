const Util = require("./utils");
const MovingObject = require("./moving_object");

Util.inherits(MovingObject, Ship);

function Ship(position, game){
    this.game = game;
    this.velocity = [0,0];
    this.CONSTANTS = {
        COLOR: "red",
        RADIUS: 150,
    }
    MovingObject.call(this, position, this.velocity, this.CONSTANTS.RADIUS, this.CONSTANTS.COLOR, game)
}

Ship.prototype.relocate = function() {
    this.position = [this.game.CONSTANTS.DIM_X/2, this.game.CONSTANTS.DIM_Y-200];
    this.velocity = [0,0];
}

Ship.prototype.power = function(impulse){
    this.velocity[0] = impulse[0];
    this.velocity[1] = impulse[1];
}

module.exports = Ship;