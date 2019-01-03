(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("@tomasc/simple_form_markdown_editor", ["jquery"], factory);
	else if(typeof exports === 'object')
		exports["@tomasc/simple_form_markdown_editor"] = factory(require("jquery"));
	else
		root["@tomasc/simple_form_markdown_editor"] = factory(root["jquery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugin;

exports.default = Plugin = function () {
  _createClass(Plugin, null, [{
    key: "register",
    value: function register() {
      var defaults, klass, name, options, ref, ref1, selector;
      klass = this;
      defaults = (ref = this.defaults) != null ? ref : {};
      name = defaults.name || (defaults.name = /function ([^(]*)/.exec(klass + "")[1]);
      options = Array.prototype.slice.call(arguments).slice(1);
      selector = (ref1 = arguments[0]) != null ? ref1 : klass.selector;
      return this.init_plugin(klass, name);
    }
  }, {
    key: "init_plugin",
    value: function init_plugin(klass, name) {
      if ($.fn[name] !== void 0) {
        return;
      }
      return $.fn[name] = function (options) {
        var args, dataKey, returns;
        args = arguments;
        dataKey = "plugin_" + name;
        if (options === undefined || (typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {
          return this.each(function () {
            var instance;
            this.pluginInstances || (this.pluginInstances = {});
            if (!this.pluginInstances[dataKey]) {
              instance = new klass(this, options);
              return this.pluginInstances[dataKey] = instance;
            }
          });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
          returns = void 0;
          this.each(function () {
            var instance;
            this.pluginInstances || (this.pluginInstances = {});
            instance = this.pluginInstances[dataKey];
            if (instance instanceof klass && typeof instance[options] === 'function') {
              returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
            }
            if (options === 'destroy') {
              return this.pluginInstances[dataKey] = null;
            }
          });
          if (returns !== undefined) {
            return returns;
          } else {
            return this;
          }
        }
      };
    }
  }]);

  function Plugin(element, options) {
    _classCallCheck(this, Plugin);

    this.element = element;
    this.options = $.extend({}, this.constructor.defaults, options);
    this.$element = $(this.element);
    this.init();
  }

  return Plugin;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_assets_stylesheets_simple_form_markdown_editor_simple_form_markdown_editor_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_assets_stylesheets_simple_form_markdown_editor_simple_form_markdown_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_assets_stylesheets_simple_form_markdown_editor_simple_form_markdown_editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_assets_stylesheets_simple_form_markdown_editor_buttons_button_group_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_assets_stylesheets_simple_form_markdown_editor_buttons_button_group_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_assets_stylesheets_simple_form_markdown_editor_buttons_button_group_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_assets_stylesheets_simple_form_markdown_editor_buttons_button_wrapper_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_assets_stylesheets_simple_form_markdown_editor_buttons_button_wrapper_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_assets_stylesheets_simple_form_markdown_editor_buttons_button_wrapper_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_assets_stylesheets_simple_form_markdown_editor_buttons_button_scss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_assets_stylesheets_simple_form_markdown_editor_buttons_button_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__lib_assets_stylesheets_simple_form_markdown_editor_buttons_button_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_assets_stylesheets_simple_form_markdown_editor_buttons_buttons_scss__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_assets_stylesheets_simple_form_markdown_editor_buttons_buttons_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__lib_assets_stylesheets_simple_form_markdown_editor_buttons_buttons_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_assets_stylesheets_simple_form_markdown_editor_editor_editor_scss__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_assets_stylesheets_simple_form_markdown_editor_editor_editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__lib_assets_stylesheets_simple_form_markdown_editor_editor_editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_assets_stylesheets_simple_form_markdown_editor_header_header_scss__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_assets_stylesheets_simple_form_markdown_editor_header_header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__lib_assets_stylesheets_simple_form_markdown_editor_header_header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_assets_stylesheets_simple_form_markdown_editor_help_help_section_scss__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_assets_stylesheets_simple_form_markdown_editor_help_help_section_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__lib_assets_stylesheets_simple_form_markdown_editor_help_help_section_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sections_scss__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sections_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sections_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_section_item_scss__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_section_item_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_section_item_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_section_items_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_section_items_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_section_items_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_section_scss__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_section_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_section_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_sections_scss__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_sections_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__lib_assets_stylesheets_simple_form_markdown_editor_help_help_sub_sections_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_assets_stylesheets_simple_form_markdown_editor_help_help_text_scss__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib_assets_stylesheets_simple_form_markdown_editor_help_help_text_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__lib_assets_stylesheets_simple_form_markdown_editor_help_help_text_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lib_assets_stylesheets_simple_form_markdown_editor_help_help_texts_scss__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lib_assets_stylesheets_simple_form_markdown_editor_help_help_texts_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__lib_assets_stylesheets_simple_form_markdown_editor_help_help_texts_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lib_assets_stylesheets_simple_form_markdown_editor_help_help_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__lib_assets_stylesheets_simple_form_markdown_editor_help_help_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__lib_assets_stylesheets_simple_form_markdown_editor_help_help_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lib_assets_stylesheets_simple_form_markdown_editor_preview_preview_scss__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__lib_assets_stylesheets_simple_form_markdown_editor_preview_preview_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__lib_assets_stylesheets_simple_form_markdown_editor_preview_preview_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lib_assets_stylesheets_simple_form_markdown_editor_tabs_tab_scss__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lib_assets_stylesheets_simple_form_markdown_editor_tabs_tab_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__lib_assets_stylesheets_simple_form_markdown_editor_tabs_tab_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lib_assets_stylesheets_simple_form_markdown_editor_tabs_tabs_scss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__lib_assets_stylesheets_simple_form_markdown_editor_tabs_tabs_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__lib_assets_stylesheets_simple_form_markdown_editor_tabs_tabs_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__simple_form_markdown_editor_simple_form_markdown_editor__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__simple_form_markdown_editor_simple_form_markdown_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__simple_form_markdown_editor_simple_form_markdown_editor__);





















/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_19__simple_form_markdown_editor_simple_form_markdown_editor___default.a);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(0);

var _plugin2 = _interopRequireDefault(_plugin);

var _buttons = __webpack_require__(23);

var _buttons2 = _interopRequireDefault(_buttons);

var _editor = __webpack_require__(24);

var _editor2 = _interopRequireDefault(_editor);

var _help = __webpack_require__(25);

var _help2 = _interopRequireDefault(_help);

var _preview = __webpack_require__(26);

var _preview2 = _interopRequireDefault(_preview);

var _tabs = __webpack_require__(27);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleFormMarkdownEditor;

exports.default = SimpleFormMarkdownEditor = function () {
  var SimpleFormMarkdownEditor = function (_Plugin) {
    _inherits(SimpleFormMarkdownEditor, _Plugin);

    function SimpleFormMarkdownEditor() {
      _classCallCheck(this, SimpleFormMarkdownEditor);

      return _possibleConstructorReturn(this, (SimpleFormMarkdownEditor.__proto__ || Object.getPrototypeOf(SimpleFormMarkdownEditor)).apply(this, arguments));
    }

    _createClass(SimpleFormMarkdownEditor, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        this.Buttons = new _buttons2.default(this.get_buttons()[0]);
        this.Editor = new _editor2.default(this.get_editor()[0]);
        this.Help = new _help2.default(this.get_help()[0]);
        this.Preview = new _preview2.default(this.get_preview()[0]);
        this.Tabs = new _tabs2.default(this.get_tabs()[0]);
        this.$element.on('show_editor.SimpleFormMarkdownEditor', function (e) {
          e.stopPropagation();
          return _this2.$element.addClass(_this2.options.is_editor_class);
        });
        this.$element.on('show_preview.SimpleFormMarkdownEditor', function (e) {
          e.stopPropagation();
          return _this2.$element.removeClass(_this2.options.is_editor_class);
        });
        this.$element.on('show_preview.SimpleFormMarkdownEditor', function (e) {
          var options, val;
          e.stopPropagation();
          options = _this2.get_options();
          val = _this2.Editor.get_val();
          return $.ajax({
            type: 'POST',
            url: _this2.get_preview_path(),
            data: {
              _method: 'PUT',
              text: val,
              options: options
            },
            success: function success(html) {
              return _this2.get_preview().trigger({
                type: 'show_preview',
                html: html
              });
            }
          });
        });
        this.$element.on('toggle_help.SimpleFormMarkdownEditor', function (e) {
          e.stopPropagation();
          return _this2.$element.toggleClass(_this2.options.is_help_class);
        });
        return this.$element.on('execute_command.SimpleFormMarkdownEditor', function (e) {
          var command, definition;
          e.stopPropagation();
          command = e.command;
          definition = _this2.options.definitions[command];
          return _this2.get_editor().trigger({
            type: 'execute_command_definition',
            command: command,
            definition: definition
          });
        });
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        if (this.Buttons) {
          this.Buttons.destroy();
        }
        if (this.Editor) {
          this.Editor.destroy();
        }
        if (this.Help) {
          this.Help.destroy();
        }
        if (this.Preview) {
          this.Preview.destroy();
        }
        if (this.Tabs) {
          this.Tabs.destroy();
        }
        return this.$element.off('.SimpleFormMarkdownEditor');
      }
    }, {
      key: 'get_buttons',
      value: function get_buttons() {
        return this.$element.find('.simple_form_markdown_editor__buttons');
      }
    }, {
      key: 'get_editor',
      value: function get_editor() {
        return this.$element.find('.simple_form_markdown_editor__editor');
      }
    }, {
      key: 'get_help',
      value: function get_help() {
        return this.$element.find('.simple_form_markdown_editor__help');
      }
    }, {
      key: 'get_preview',
      value: function get_preview() {
        return this.$element.find('.simple_form_markdown_editor__preview');
      }
    }, {
      key: 'get_tabs',
      value: function get_tabs() {
        return this.$element.find('.simple_form_markdown_editor__tabs');
      }
    }, {
      key: 'get_options',
      value: function get_options() {
        return this.$element.data('options');
      }
    }, {
      key: 'get_preview_path',
      value: function get_preview_path() {
        return this.$element.data('preview-path');
      }
    }]);

    return SimpleFormMarkdownEditor;
  }(_plugin2.default);

  ;

  SimpleFormMarkdownEditor.defaults = {
    debug: false,
    name: 'simple_form_markdown_editor',
    definitions: {
      strong: '**%{str}**',
      em: '*%{str}*',
      code: '`%{str}`',
      hr: '%{str}***',
      ul: '* %{str}',
      ol: '1. %{str}',
      blockquote: '> %{str}',
      h1: '# %{str}',
      h2: '## %{str}',
      h3: '### %{str}',
      h4: '#### %{str}',
      h5: '##### %{str}',
      h6: '###### %{str}',
      a: '[%{str}](|)',
      img: '![%{str}](|)'
    },
    is_editor_class: 'simple_form_markdown_editor__is_editor',
    is_help_class: 'simple_form_markdown_editor__is_help'
  };

  return SimpleFormMarkdownEditor;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(0);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons;

exports.default = Buttons = function () {
  var Buttons = function (_Plugin) {
    _inherits(Buttons, _Plugin);

    function Buttons() {
      _classCallCheck(this, Buttons);

      return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
    }

    _createClass(Buttons, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        this.$element.on('click.SimpleFormMarkdownEditor__Buttons', '.simple_form_markdown_editor__button[value="help"]', function (e) {
          return _this2.$element.trigger('toggle_help');
        });
        return this.$element.on('click.SimpleFormMarkdownEditor__Buttons', '.simple_form_markdown_editor__button:not([value="help"])', function (e) {
          var $button, command;
          $button = $(e.target);
          command = $button.attr('value');
          return _this2.$element.trigger({
            type: 'execute_command',
            command: command
          });
        });
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        return this.$element.off('.SimpleFormMarkdownEditor__Buttons');
      }
    }]);

    return Buttons;
  }(_plugin2.default);

  ;

  Buttons.defaults = {
    debug: false,
    name: 'simple_form_markdown_editor__buttons'
  };

  return Buttons;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(0);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Editor;

exports.default = Editor = function () {
  var Editor = function (_Plugin) {
    _inherits(Editor, _Plugin);

    function Editor() {
      _classCallCheck(this, Editor);

      return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));
    }

    _createClass(Editor, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        return this.$element.on('execute_command_definition.SimpleFormMarkdownEditor__Editor', function (e) {
          var command, definition;
          e.stopPropagation();
          command = e.command;
          definition = e.definition;
          return _this2.execute_command_definition(command, definition);
        });
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        return this.$element.off('.SimpleFormMarkdownEditor__Editor');
      }
    }, {
      key: 'get_textarea',
      value: function get_textarea() {
        return this.$element.find('textarea');
      }
    }, {
      key: 'get_val',
      value: function get_val() {
        return this.get_textarea().val();
      }
    }, {
      key: 'get_selection',
      value: function get_selection() {
        var $e;
        $e = this.get_textarea();
        return {
          start: $e[0].selectionStart,
          end: $e[0].selectionEnd,
          length: $e[0].selectionEnd - $e[0].selectionStart,
          text: $e.val().substring($e[0].selectionStart, $e[0].selectionEnd)
        };
      }
    }, {
      key: 'execute_command_definition',
      value: function execute_command_definition(command, definition) {
        var caret_pos, end, replacement, selection, start;
        selection = this.get_selection();
        replacement = definition.replace('%{str}', selection.text);
        caret_pos = replacement.indexOf('|');
        start = selection.start;
        end = selection.start + replacement.length;
        if (caret_pos > -1) {
          replacement = replacement.replace(/\|/g, '');
          start = selection.start + caret_pos;
          end = selection.start + caret_pos;
        }
        this.replace_selection(replacement);
        return this.set_selection(start, end);
      }
    }, {
      key: 'set_selection',
      value: function set_selection(start, end) {
        var $e;
        $e = this.get_textarea();
        $e.focus();
        $e[0].selectionStart = start;
        return $e[0].selectionEnd = end;
      }
    }, {
      key: 'replace_selection',
      value: function replace_selection(string) {
        var $e, end, start, val;
        $e = this.get_textarea();
        start = $e[0].selectionStart;
        end = $e[0].selectionEnd;
        val = $e.val();
        return $e.val(val.substring(0, start) + string + val.substring(end, val.length));
      }
    }]);

    return Editor;
  }(_plugin2.default);

  ;

  Editor.defaults = {
    name: 'simple_form_markdown_editor__editor',
    debug: false
  };

  return Editor;
}();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(0);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Help;

exports.default = Help = function () {
  var Help = function (_Plugin) {
    _inherits(Help, _Plugin);

    function Help() {
      _classCallCheck(this, Help);

      return _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).apply(this, arguments));
    }

    _createClass(Help, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        var $initial_section;
        $initial_section = this.get_sections().first();
        this.set_section($initial_section);
        this.$element.on('click.SimpleFormMarkdownEditor__Help', '.simple_form_markdown_editor__help__section', function (e) {
          e.preventDefault();
          return _this2.set_section($(e.currentTarget));
        });
        return this.$element.on('click.SimpleFormMarkdownEditor__Help', '.simple_form_markdown_editor__help__sub_section__item', function (e) {
          e.preventDefault();
          return _this2.set_sub_section_item($(e.currentTarget));
        });
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        return this.$element.off('.SimpleFormMarkdownEditor__Help');
      }
    }, {
      key: 'get_help_text',
      value: function get_help_text(sub_section_name) {
        return this.get_help_texts().filter('[data-sub-section=\'' + sub_section_name + '\']');
      }
    }, {
      key: 'get_help_texts',
      value: function get_help_texts() {
        return this.$element.find('.simple_form_markdown_editor__help__text');
      }
    }, {
      key: 'get_sections',
      value: function get_sections() {
        return this.$element.find('.simple_form_markdown_editor__help__section');
      }
    }, {
      key: 'get_sub_section',
      value: function get_sub_section(section_name) {
        return this.get_sub_sections().filter('[data-section=\'' + section_name + '\']');
      }
    }, {
      key: 'get_sub_section_items',
      value: function get_sub_section_items() {
        return this.$element.find('.simple_form_markdown_editor__help__sub_section__item');
      }
    }, {
      key: 'get_sub_sections',
      value: function get_sub_sections() {
        return this.$element.find('.simple_form_markdown_editor__help__sub_section');
      }
    }, {
      key: 'set_section',
      value: function set_section($section) {
        var $sub_section, section_name;
        $section.siblings().removeClass(this.options.section_is_active_class);
        $section.addClass(this.options.section_is_active_class);
        section_name = $section.data('section');
        $sub_section = this.get_sub_section(section_name);
        return this.set_sub_section($sub_section);
      }
    }, {
      key: 'set_sub_section',
      value: function set_sub_section($sub_section) {
        var $sub_section_item;
        $sub_section.siblings().removeClass(this.options.sub_section_is_active_class);
        $sub_section.addClass(this.options.sub_section_is_active_class);
        $sub_section_item = $sub_section.find('.simple_form_markdown_editor__help__sub_section__item').first();
        return this.set_sub_section_item($sub_section_item);
      }
    }, {
      key: 'set_sub_section_item',
      value: function set_sub_section_item($sub_section_item) {
        var $help_text, sub_section_name;
        $sub_section_item.siblings().removeClass(this.options.sub_section_item_is_active_class);
        $sub_section_item.addClass(this.options.sub_section_item_is_active_class);
        sub_section_name = $sub_section_item.data('sub-section');
        $help_text = this.get_help_text(sub_section_name);
        return this.set_help_text($help_text);
      }
    }, {
      key: 'set_help_text',
      value: function set_help_text($help_text) {
        $help_text.siblings().removeClass(this.options.help_text_is_active_class);
        return $help_text.addClass(this.options.help_text_is_active_class);
      }
    }]);

    return Help;
  }(_plugin2.default);

  ;

  Help.defaults = {
    name: 'simple_form_markdown_editor__help',
    debug: false,
    section_is_active_class: 'simple_form_markdown_editor__help__section__is_active',
    sub_section_is_active_class: 'simple_form_markdown_editor__help__sub_section__is_active',
    sub_section_item_is_active_class: 'simple_form_markdown_editor__help__sub_section__item__is_active',
    help_text_is_active_class: 'simple_form_markdown_editor__help__text__is_active'
  };

  return Help;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(0);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview;

exports.default = Preview = function () {
  var Preview = function (_Plugin) {
    _inherits(Preview, _Plugin);

    function Preview() {
      _classCallCheck(this, Preview);

      return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
    }

    _createClass(Preview, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        return this.$element.on('show_preview.SimpleFormMarkdownEditor__Preview', function (e) {
          var content;
          e.stopPropagation();
          content = e.html || "<p>" + _this2.get_nothing_to_preview_text() + "</p>";
          return _this2.$element.html(content);
        });
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        return this.$element.off('.SimpleFormMarkdownEditor__Preview');
      }
    }, {
      key: 'get_nothing_to_preview_text',
      value: function get_nothing_to_preview_text() {
        return this.$element.data('nothing-to-preview-text') || 'Nothing to preview.';
      }
    }]);

    return Preview;
  }(_plugin2.default);

  ;

  Preview.defaults = {
    name: 'simple_form_markdown_editor__preview',
    debug: false
  };

  return Preview;
}();

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(0);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs;

exports.default = Tabs = function () {
  var Tabs = function (_Plugin) {
    _inherits(Tabs, _Plugin);

    function Tabs() {
      _classCallCheck(this, Tabs);

      return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
    }

    _createClass(Tabs, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        this.set_active_tab(this.get_edit_tab());
        this.$element.on('click.SimpleFormMarkdownEditor__Tabs', '.simple_form_markdown_editor__tab', function (e) {
          return _this2.set_active_tab($(e.currentTarget));
        });
        this.$element.on('click.SimpleFormMarkdownEditor__Tabs', '.simple_form_markdown_editor__tab__edit', function (e) {
          return _this2.$element.trigger('show_editor');
        });
        return this.$element.on('click.SimpleFormMarkdownEditor__Tabs', '.simple_form_markdown_editor__tab__preview', function (e) {
          return _this2.$element.trigger('show_preview');
        });
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        return this.$element.off('.SimpleFormMarkdownEditor__Tabs');
      }
    }, {
      key: 'get_edit_tab',
      value: function get_edit_tab() {
        return this.$element.find('.simple_form_markdown_editor__tab__edit');
      }
    }, {
      key: 'get_preview_tab',
      value: function get_preview_tab() {
        return this.$element.find('.simple_form_markdown_editor__tab__preview');
      }
    }, {
      key: 'get_tabs',
      value: function get_tabs() {
        return this.$element.find('.simple_form_markdown_editor__tab');
      }
    }, {
      key: 'set_active_tab',
      value: function set_active_tab($tab) {
        this.get_tabs().removeClass(this.options.is_active_class);
        return $tab.addClass(this.options.is_active_class);
      }
    }]);

    return Tabs;
  }(_plugin2.default);

  ;

  Tabs.defaults = {
    name: 'simple_form_markdown_editor__tabs',
    debug: false,
    is_active_class: 'simple_form_markdown_editor__tab__is_active'
  };

  return Tabs;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
/******/ ]);
});