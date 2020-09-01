const Game = require('./game');


function GameView(context) {
    this.game = new Game();
    this.context = context;
}

GameView.prototype.start = function(){
    const that = this;
    //Big arrow would bind this so we wouldnt need to bind
    that.bindKeyHandlers();
    window.setInterval(function(){
        that.game.step();
        that.game.draw(that.context);
    }, 20);
}

GameView.prototype.bindKeyHandlers = function(){
    const that = this;
    key('w', function(){ that.game.ship.power([0,-10])});
    key('a', function(){ that.game.ship.power([-10,0])});
    key('s', function(){ that.game.ship.power([0,10])});
    key('d', function(){ that.game.ship.power([10,0])});
}

module.exports = GameView;

