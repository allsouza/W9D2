const Util = require("./utils");
const MovingObject = require("./moving_object");
const Ship = require('./ship')

// Inherit function needs to be outside the class. 
Util.inherits(MovingObject, Asteroid);

// constant variables that we declare


function Asteroid(pos, game) {
    const CONSTANTS = {COLOR: 'gray', RADIUS: 5, VEL:Util.randomVec(1+(Math.random()*5))};
    MovingObject.call(this, pos, CONSTANTS.VEL, CONSTANTS.RADIUS, CONSTANTS.COLOR, game)
}

// Asteroid.prototype.collideWith = function(otherObject){
//     this.game.remove(this);
//     debugger;
//     if(otherObject === this.game.ship){
//         // debugger;
//         otherObject.relocate();
//     }
//     else{
//         this.game.remove(otherObject);
//     }
// }
module.exports = Asteroid;