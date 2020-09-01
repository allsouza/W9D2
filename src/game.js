const Asteroid = require("./asteroid");
const Ship = require("./ship");

function Game() {
    this.CONSTANTS = {
        DIM_X: 600,
        DIM_Y: 700,
        NUM_ASTEROIDS: 5000
    }
    this.asteroids = this.addAsteroids();
    this.ship = new Ship([this.CONSTANTS.DIM_X/2, this.CONSTANTS.DIM_Y-300], this);
}

Game.prototype.addAsteroids =function(){
    const result = [];
   
    for(let i=0; i<this.CONSTANTS.NUM_ASTEROIDS; i++){
    
        result.push(new Asteroid(this.randomPosition(),this));
    }
    return result;
}

Game.prototype.randomPosition = function() {
    return [Math.random()*this.CONSTANTS.DIM_X, 10];
}

Game.prototype.draw = function(context){
    context.clearRect(0,0, this.CONSTANTS.DIM_X, this.CONSTANTS.DIM_Y);
    this.allObjects().forEach( function(object) {
        // debugger;
        object.draw(context);
    });
}

Game.prototype.moveObjects = function(){
    this.allObjects().forEach( function(objects) {
        objects.move();
    });
}

Game.prototype.wrap = function(position){
    if (position > this.CONSTANTS.DIM_X){
        position = 0;
    }
    if (position < 0){
        position = 600;
    }
    return position;
}

//Needed a nested loop to check all the objs against one another, before we were just checking neighbors
Game.prototype.checkCollisions = function(){
    const objs = this.allObjects();
    for(let i = 0; i < objs.length; i++){
        for(let j=i+1; j<objs.length; j++){
            if(objs[i].isCollidedWith(objs[j])) {
                objs[i].collideWith(objs[j]);
            }
        }
    }
}

Game.prototype.step = function(){
    this.moveObjects();
    this.checkCollisions();

}

Game.prototype.remove = function(asteroid){
    let index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
}

Game.prototype.allObjects = function() {
    return [...this.asteroids, this.ship];
}

module.exports = Game;