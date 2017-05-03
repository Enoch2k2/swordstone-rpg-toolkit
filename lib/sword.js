(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("sword", [], factory);
	else if(typeof exports === 'object')
		exports["sword"] = factory();
	else
		root["sword"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game() {
  _classCallCheck(this, Game);

  this.canvas = document.createElement('canvas');
  this.canvas.id = 'canvas';
  this.canvas.style.display = 'block';
  this.canvas.style.margin = 'auto';
  this.tileSize = 35;
};

Game.prototype.size = function (h, w) {
  this.canvas.width = w * this.tileSize;
  this.canvas.height = h * this.tileSize;
};
//
// Game.prototype.create2Dlayers = function(layer){
//   for(var i = 0; i < (this.canvas.height / this.tileSize); i++){
//     layer[i] = [];
//     for(var j = 0; j < (this.canvas.width / this.tileSize); j++){
//       layer[i][j] = 0;
//     }
//   }
// }

Game.prototype.fullScreen = function () {
  this.canvas.width = '100%';
  this.canvas.height = '100%';
};

Game.prototype.render = function () {
  document.body.appendChild(this.canvas);
};

exports.default = new Game();
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function Scene(canvas, tileSize) {
  _classCallCheck(this, Scene);

  this.canvas = canvas;
  this.ctx = canvas.getContext('2d');
  this.height = canvas.height;
  this.width = canvas.width;
  this.layer1 = [];
  this.layer2 = [];
  this.layer3 = [];
  this.backgroundColor = 'black';
  this.tileSize = tileSize;
};

Scene.prototype.create2DLayers = function (layer) {
  for (var i = 0; i < this.height / this.tileSize; i++) {
    layer[i] = [];
    for (var j = 0; j < this.width / this.tileSize; j++) {
      layer[i][j] = 0;
    }
  }
};

Scene.prototype.update = function () {
  this.create2DLayers(this.layer1);
  this.create2DLayers(this.layer2);
  this.create2DLayers(this.layer3);
};

Scene.prototype.render = function () {
  this.ctx.fillStyle = this.backgroundColor;
  this.ctx.fillRect(0, 0, this.width, this.height);
};

exports.default = Scene;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// todo, add base class for window structure - then branch out to possibly different types of windows?
// deconstruct the functionality of window - meaning a space used in the canvas.
// possibly give ability to set background color for the window
var Window = function Window(x, y, w, h) {
  _classCallCheck(this, Window);

  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
};

Window.prototype.backgroundColor = function (r, g, b) {
  var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

  this.color = "rbga(" + r + ", " + g + ", " + b + ", " + a + ")";
};

exports.default = Window;
module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(0);

var _game2 = _interopRequireDefault(_game);

var _scene = __webpack_require__(1);

var _scene2 = _interopRequireDefault(_scene);

var _window = __webpack_require__(2);

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
});
//# sourceMappingURL=sword.js.map