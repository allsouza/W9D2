/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\n\n// Inherit function needs to be outside the class. \nUtil.inherits(MovingObject, Asteroid);\n\n// constant variables that we declare\n\n\nfunction Asteroid(pos, game) {\n    const CONSTANTS = {COLOR: 'gray', RADIUS: 5, VEL:Util.randomVec(1+(Math.random()*5))};\n    MovingObject.call(this, pos, CONSTANTS.VEL, CONSTANTS.RADIUS, CONSTANTS.COLOR, game)\n}\n\n// Asteroid.prototype.collideWith = function(otherObject){\n//     this.game.remove(this);\n//     debugger;\n//     if(otherObject === this.game.ship){\n//         // debugger;\n//         otherObject.relocate();\n//     }\n//     else{\n//         this.game.remove(otherObject);\n//     }\n// }\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nfunction Game() {\n    this.CONSTANTS = {\n        DIM_X: 600,\n        DIM_Y: 700,\n        NUM_ASTEROIDS: 5000\n    }\n    this.asteroids = this.addAsteroids();\n    this.ship = new Ship([this.CONSTANTS.DIM_X/2, this.CONSTANTS.DIM_Y-300], this);\n}\n\nGame.prototype.addAsteroids =function(){\n    const result = [];\n   \n    for(let i=0; i<this.CONSTANTS.NUM_ASTEROIDS; i++){\n    \n        result.push(new Asteroid(this.randomPosition(),this));\n    }\n    return result;\n}\n\nGame.prototype.randomPosition = function() {\n    return [Math.random()*this.CONSTANTS.DIM_X, 10];\n}\n\nGame.prototype.draw = function(context){\n    context.clearRect(0,0, this.CONSTANTS.DIM_X, this.CONSTANTS.DIM_Y);\n    this.allObjects().forEach( function(object) {\n        // debugger;\n        object.draw(context);\n    });\n}\n\nGame.prototype.moveObjects = function(){\n    this.allObjects().forEach( function(objects) {\n        objects.move();\n    });\n}\n\nGame.prototype.wrap = function(position){\n    if (position > this.CONSTANTS.DIM_X){\n        position = 0;\n    }\n    if (position < 0){\n        position = 600;\n    }\n    return position;\n}\n\n//Needed a nested loop to check all the objs against one another, before we were just checking neighbors\nGame.prototype.checkCollisions = function(){\n    const objs = this.allObjects();\n    for(let i = 0; i < objs.length; i++){\n        for(let j=i+1; j<objs.length; j++){\n            if(objs[i].isCollidedWith(objs[j])) {\n                objs[i].collideWith(objs[j]);\n            }\n        }\n    }\n}\n\nGame.prototype.step = function(){\n    this.moveObjects();\n    this.checkCollisions();\n\n}\n\nGame.prototype.remove = function(asteroid){\n    let index = this.asteroids.indexOf(asteroid);\n    this.asteroids.splice(index, 1);\n}\n\nGame.prototype.allObjects = function() {\n    return [...this.asteroids, this.ship];\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nfunction GameView(context) {\n    this.game = new Game();\n    this.context = context;\n}\n\nGameView.prototype.start = function(){\n    const that = this;\n    //Big arrow would bind this so we wouldnt need to bind\n    that.bindKeyHandlers();\n    window.setInterval(function(){\n        that.game.step();\n        that.game.draw(that.context);\n    }, 20);\n}\n\nGameView.prototype.bindKeyHandlers = function(){\n    const that = this;\n    key('w', function(){ that.game.ship.power([0,-10])});\n    key('a', function(){ that.game.ship.power([-10,0])});\n    key('s', function(){ that.game.ship.power([0,10])});\n    key('d', function(){ that.game.ship.power([10,0])});\n}\n\nmodule.exports = GameView;\n\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\n\ndocument.addEventListener('DOMContentLoaded', function(){\n    const canvas = document.getElementById('game-canvas');\n    canvas.width = 600;\n    canvas.height = 700;\n    const context = canvas.getContext('2d');\n\n    \n    const gameview = new GameView(context);\n    // const game = new Game;\n    gameview.start();\n    // const asteroid = new Asteroid([300,300]);\n    // asteroid.draw(context);\n    // game.draw(context);\n    // const ship = new Ship([300,300], game)\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(position, velocity, radius, color, game){\n    this.position = position;\n    this.velocity = velocity;\n    this.radius = radius;\n    this.color = color;\n    this.game = game;\n}\n\nMovingObject.prototype.draw = function(context){\n    context.beginPath();\n    context.arc(this.position[0], this.position[1], this.radius, 0, 2*Math.PI);\n    context.strokeStyle = this.color;\n    context.stroke();\n    context.fillStyle = this.color;\n    context.fill();\n}\n\nMovingObject.prototype.move = function(){\n    this.position[0] += this.velocity[0];\n    this.position[1] += this.velocity[1];\n    this.position[0] = this.game.wrap(this.position[0]);\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject){\n    const x_1 = this.position[0];\n    const y_1 = this.position[1];\n    const x_2 = otherObject.position[0];\n    const y_2 = otherObject.position[1];\n    const dist = Math.sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2);\n    if (dist < (this.radius + otherObject.radius)){\n        return true;\n    }\n    return false;\n}\n\nMovingObject.prototype.collideWith = function(otherObject){\n    debugger;\n    if(otherObject === this.game.ship){\n        // debugger;\n        this.game.remove(this);\n        otherObject.relocate();\n    }\n    else if(this === this.game.ship){\n        this.relocate()\n        this.game.remove(otherObject);\n    }\n    else{\n        this.game.remove(otherObject);\n        this.game.remove(this);\n    }\n   \n}\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nUtil.inherits(MovingObject, Ship);\n\nfunction Ship(position, game){\n    this.game = game;\n    this.velocity = [0,0];\n    this.CONSTANTS = {\n        COLOR: \"red\",\n        RADIUS: 150,\n    }\n    MovingObject.call(this, position, this.velocity, this.CONSTANTS.RADIUS, this.CONSTANTS.COLOR, game)\n}\n\nShip.prototype.relocate = function() {\n    this.position = [this.game.CONSTANTS.DIM_X/2, this.game.CONSTANTS.DIM_Y-200];\n    this.velocity = [0,0];\n}\n\nShip.prototype.power = function(impulse){\n    this.velocity[0] = impulse[0];\n    this.velocity[1] = impulse[1];\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    // This is a value pair that happens to be a so it does not need a variable because it is a variable inside the hash.\n    inherits: function(ParentClass, ChildClass){\n        function Surrogate (){}\n        Surrogate.prototype = ParentClass.prototype;\n        ChildClass.prototype = Surrogate.prototype;\n        ChildClass.prototype.constructor = ChildClass;\n    },\n    randomVec: function(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    scale: function(vec, m){\n        return [vec[0] * m, Math.abs(vec[1]*m)];\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });