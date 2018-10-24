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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/js/index.js":
/*!*****************************!*\
  !*** ./app/src/js/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scenes_GameScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/GameScene */ "./app/src/js/scenes/GameScene.js");


window.onload = function () {
  var gameScene = new _scenes_GameScene__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var config = {
    type: Phaser.Auto,
    width: 640,
    height: 360,
    scene: gameScene
  };
  new Phaser.Game(config);
};

/***/ }),

/***/ "./app/src/js/scenes/GameScene.js":
/*!****************************************!*\
  !*** ./app/src/js/scenes/GameScene.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameScene; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var GameScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(GameScene, _Phaser$Scene);

  function GameScene() {
    var _this;

    _classCallCheck(this, GameScene);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GameScene).call(this, 'GameScene'));
    _this.assetsBasePath = '/app/img/assets';
    return _this;
  }

  _createClass(GameScene, [{
    key: "init",
    value: function init() {
      this.playerSpeed = 1.5;
      this.enemySpeed = 2;
      this.enemyMaxY = 280;
      this.enemyMinY = 80;
    }
  }, {
    key: "preload",
    value: function preload() {
      this.loadAssets({
        name: 'background',
        path: 'background.png'
      }, {
        name: 'player',
        path: 'player.png'
      }, {
        name: 'dragon',
        path: 'dragon.png'
      }, {
        name: 'treasure',
        path: 'treasure.png'
      }, {
        name: 'dragon',
        path: 'dragon.png'
      });
    }
    /**
     * Упрощённая функция загрузки изображений для спрайтов
     * */

  }, {
    key: "loadAssets",
    value: function loadAssets() {
      var _this2 = this;

      for (var _len = arguments.length, imgCfg = new Array(_len), _key = 0; _key < _len; _key++) {
        imgCfg[_key] = arguments[_key];
      }

      imgCfg.forEach(function (img) {
        _this2.load.image(img.name, "".concat(_this2.assetsBasePath, "/").concat(img.path));
      });
    }
  }, {
    key: "create",
    value: function create() {
      var bg = this.add.sprite(0, 0, 'background');
      bg.setOrigin(0, 0);
      this.treasure = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height / 2, 'treasure');
      this.treasure.setScale(0.6);
      this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
      this.player.setScale(0.5);
      this.enemies = this.add.group({
        key: 'dragon',
        repeat: 5,
        setXY: {
          x: 110,
          y: 100,
          stepX: 80,
          stepY: 20
        }
      });
      Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.5, -0.5);
      Phaser.Actions.Call(this.enemies.getChildren(), function (enemy) {
        enemy.speed = Math.random() * 2 + 1;
      });
      this.isPlayerAlive = true;
      this.cameras.main.resetFX();
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.isPlayerAlive) {
        return false;
      }

      if (this.input.activePointer.isDown) {
        // console.log('click!');
        if (this.input.activePointer.x < this.player.x) this.player.x -= this.playerSpeed;else this.player.x += this.playerSpeed;
        if (this.input.activePointer.y < this.player.y) this.player.y -= this.playerSpeed;else if (this.input.activePointer.y > this.player.y) this.player.y += this.playerSpeed;
      }

      if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.treasure.getBounds())) {
        this.gameOver();
      }

      var enemies = this.enemies.getChildren();
      var numEnemies = enemies.length;
      var enemiesToDestroy = [];

      for (var i = 0; i < numEnemies; i++) {
        enemies[i].y += enemies[i].speed;

        if (enemies[i].y >= this.enemyMaxY && enemies[i].speed > 0) {
          enemies[i].speed *= -1;
        } else if (enemies[i].y <= this.enemyMinY && enemies[i].speed < 0) {
          enemies[i].speed *= -1;
        }

        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), enemies[i].getBounds())) {
          enemiesToDestroy.push(enemies[i]); // this.gameOver();
          // break;
        }
      }

      enemiesToDestroy.forEach(function (enemy) {
        enemy.destroy();
      });
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      var _this3 = this;

      // flag to set player is dead
      this.isPlayerAlive = false; // shake the camera

      this.cameras.main.shake(500); // fade camera

      this.time.delayedCall(250, function () {
        _this3.cameras.main.fade(250);
      }, []); // restart game

      this.time.delayedCall(500, function () {
        _this3.scene.restart();
      }, []); // this.scene.restart();
    }
  }]);

  return GameScene;
}(Phaser.Scene);



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map