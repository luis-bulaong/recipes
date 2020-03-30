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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/config/routes.js":
/*!************************************!*\
  !*** ./resources/config/routes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Route; });\n/* harmony import */ var _controllers_recipesController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/recipesController */ \"./resources/controllers/recipesController.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Route = /*#__PURE__*/function () {\n  function Route(app, express) {\n    _classCallCheck(this, Route);\n\n    this.app = app;\n    this.recipesController = new _controllers_recipesController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.init();\n  }\n\n  _createClass(Route, [{\n    key: \"init\",\n    value: function init() {\n      this.listen();\n    }\n  }, {\n    key: \"listen\",\n    value: function listen() {\n      var _this = this;\n\n      this.app.get('/', function (request, result) {\n        _this.recipesController.index(request, result);\n      });\n      this.app.get('/view/:id', function (request, result) {\n        _this.recipesController.index(request, result);\n      });\n      this.app.get('/add', function (request, result) {\n        _this.recipesController.index(request, result);\n      });\n    }\n  }]);\n\n  return Route;\n}();\n\n\n\n//# sourceURL=webpack:///./resources/config/routes.js?");

/***/ }),

/***/ "./resources/config/server.js":
/*!************************************!*\
  !*** ./resources/config/server.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  host: \"127.0.0.1\",\n  port: 3000\n});\n\n//# sourceURL=webpack:///./resources/config/server.js?");

/***/ }),

/***/ "./resources/controllers/recipesController.js":
/*!****************************************************!*\
  !*** ./resources/controllers/recipesController.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RecipesController; });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar RecipesController = /*#__PURE__*/function () {\n  function RecipesController() {\n    _classCallCheck(this, RecipesController);\n  }\n\n  _createClass(RecipesController, [{\n    key: \"index\",\n    value: function index(request, result) {\n      result.sendFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(\"\".concat(__dirname, \"/views/index.html\")));\n    }\n  }]);\n\n  return RecipesController;\n}();\n\n\n\n//# sourceURL=webpack:///./resources/controllers/recipesController.js?");

/***/ }),

/***/ "./resources/index.js":
/*!****************************!*\
  !*** ./resources/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/server */ \"./resources/services/server.js\");\n\n_services_server__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n\n//# sourceURL=webpack:///./resources/index.js?");

/***/ }),

/***/ "./resources/services/server.js":
/*!**************************************!*\
  !*** ./resources/services/server.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/server */ \"./resources/config/server.js\");\n/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/routes */ \"./resources/config/routes.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\nvar Server = /*#__PURE__*/function () {\n  function Server() {\n    _classCallCheck(this, Server);\n\n    this.app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n    this.route = new _config_routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.app);\n  }\n\n  _createClass(Server, [{\n    key: \"init\",\n    value: function init() {\n      this.app.use('/public', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](\"\".concat(__dirname, \"/public\")));\n      this.app.listen(_config_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, _config_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"].host);\n      process.stdout.write(\"Server up.\\n\\n\");\n      process.stdout.write(\"List of recipes\\n\");\n      process.stdout.write(\"http://\".concat(_config_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"].host, \":\").concat(_config_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, \"\\n\"));\n    }\n  }]);\n\n  return Server;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new Server());\n\n//# sourceURL=webpack:///./resources/services/server.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });