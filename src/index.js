const GameView = require('./game_view');
const Game = require('./game');
const Asteroid = require('./asteroid')
const Ship = require('./ship')

document.addEventListener('DOMContentLoaded', function(){
    const canvas = document.getElementById('game-canvas');
    canvas.width = 600;
    canvas.height = 700;
    const context = canvas.getContext('2d');

    
    const gameview = new GameView(context);
    // const game = new Game;
    gameview.start();
    // const asteroid = new Asteroid([300,300]);
    // asteroid.draw(context);
    // game.draw(context);
    // const ship = new Ship([300,300], game)
});