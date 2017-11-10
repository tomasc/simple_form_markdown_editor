(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define("@tomasc/simple_form_markdown_editor", ["jquery"], factory);
	else if(typeof exports === 'object')
		exports["@tomasc/simple_form_markdown_editor"] = factory(require("jquery"));
	else
		root["@tomasc/simple_form_markdown_editor"] = factory(root["jquery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2)
__webpack_require__(3)
__webpack_require__(4)
__webpack_require__(5)
__webpack_require__(6)

__webpack_require__(7)


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://github.com/jquery-boilerplate/jquery-boilerplate/
(function ($, window, document) {
  var Plugin, defaults, pluginName;
  pluginName = 'simple_form_markdown_editor__buttons';
  defaults = {
    debug: false
  };
  Plugin = function () {
    function Plugin(element, options) {
      _classCallCheck(this, Plugin);

      this.element = element;
      this.settings = $.extend({}, defaults, options);
      this.$element = $(this.element);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }

    _createClass(Plugin, [{
      key: 'init',
      value: function init() {
        var _this = this;

        this.$element.on('click', '.simple_form_markdown_editor__button[value="help"]', function (e) {
          return _this.$element.trigger('toggle_help');
        });
        return this.$element.on('click', '.simple_form_markdown_editor__button:not([value="help"])', function (e) {
          var $button, command;
          $button = $(e.target);
          command = $button.attr('value');
          return _this.$element.trigger({
            type: 'execute_command',
            command: command
          });
        });
      }
    }]);

    return Plugin;
  }();
  // ---------------------------------------------------------------------
  return $.fn[pluginName] = function (options) {
    var args, returns;
    args = arguments;
    if (options === undefined || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object") {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
      returns = void 0;
      this.each(function () {
        var instance;
        instance = $.data(this, "plugin_" + pluginName);
        if (instance instanceof Plugin && typeof instance[options] === "function") {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
        if (options === "destroy") {
          return $.data(this, "plugin_" + pluginName, null);
        }
      });
      if (returns !== undefined) {
        return returns;
      } else {
        return this;
      }
    }
  };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://github.com/jquery-boilerplate/jquery-boilerplate/
(function ($, window, document) {
  var Plugin, defaults, pluginName;
  pluginName = 'simple_form_markdown_editor__editor';
  defaults = {
    debug: false
  };
  Plugin = function () {
    function Plugin(element, options) {
      _classCallCheck(this, Plugin);

      this.element = element;
      this.settings = $.extend({}, defaults, options);
      this.$element = $(this.element);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }

    _createClass(Plugin, [{
      key: 'init',
      value: function init() {
        var _this = this;

        return this.$element.on('execute_command_definition', function (e) {
          var command, definition;
          e.stopPropagation();
          command = e.command;
          definition = e.definition;
          return _this.execute_command_definition(command, definition);
        });
      }

      // ---------------------------------------------------------------------

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

      // ---------------------------------------------------------------------

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

    return Plugin;
  }();
  // ---------------------------------------------------------------------
  return $.fn[pluginName] = function (options) {
    var args, returns;
    args = arguments;
    if (options === undefined || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object") {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
      returns = void 0;
      this.each(function () {
        var instance;
        instance = $.data(this, "plugin_" + pluginName);
        if (instance instanceof Plugin && typeof instance[options] === "function") {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
        if (options === "destroy") {
          return $.data(this, "plugin_" + pluginName, null);
        }
      });
      if (returns !== undefined) {
        return returns;
      } else {
        return this;
      }
    }
  };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://github.com/jquery-boilerplate/jquery-boilerplate/
(function ($, window, document) {
  var Plugin, defaults, pluginName;
  pluginName = 'simple_form_markdown_editor__help';
  defaults = {
    debug: false,
    section_is_active_class: 'simple_form_markdown_editor__help__section__is_active',
    sub_section_is_active_class: 'simple_form_markdown_editor__help__sub_section__is_active',
    sub_section_item_is_active_class: 'simple_form_markdown_editor__help__sub_section__item__is_active',
    help_text_is_active_class: 'simple_form_markdown_editor__help__text__is_active'
  };
  Plugin = function () {
    function Plugin(element, options) {
      _classCallCheck(this, Plugin);

      this.element = element;
      this.settings = $.extend({}, defaults, options);
      this.$element = $(this.element);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }

    _createClass(Plugin, [{
      key: 'init',
      value: function init() {
        var _this = this;

        var $initial_section;
        $initial_section = this.get_sections().first();
        this.set_section($initial_section);
        this.$element.on('click', '.simple_form_markdown_editor__help__section', function (e) {
          e.preventDefault();
          return _this.set_section($(e.currentTarget));
        });
        return this.$element.on('click', '.simple_form_markdown_editor__help__sub_section__item', function (e) {
          e.preventDefault();
          return _this.set_sub_section_item($(e.currentTarget));
        });
      }

      // ---------------------------------------------------------------------

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

      // ---------------------------------------------------------------------

    }, {
      key: 'set_section',
      value: function set_section($section) {
        var $sub_section, section_name;
        $section.siblings().removeClass(this.settings.section_is_active_class);
        $section.addClass(this.settings.section_is_active_class);
        section_name = $section.data('section');
        $sub_section = this.get_sub_section(section_name);
        return this.set_sub_section($sub_section);
      }
    }, {
      key: 'set_sub_section',
      value: function set_sub_section($sub_section) {
        var $sub_section_item;
        $sub_section.siblings().removeClass(this.settings.sub_section_is_active_class);
        $sub_section.addClass(this.settings.sub_section_is_active_class);
        $sub_section_item = $sub_section.find('.simple_form_markdown_editor__help__sub_section__item').first();
        return this.set_sub_section_item($sub_section_item);
      }
    }, {
      key: 'set_sub_section_item',
      value: function set_sub_section_item($sub_section_item) {
        var $help_text, sub_section_name;
        $sub_section_item.siblings().removeClass(this.settings.sub_section_item_is_active_class);
        $sub_section_item.addClass(this.settings.sub_section_item_is_active_class);
        sub_section_name = $sub_section_item.data('sub-section');
        $help_text = this.get_help_text(sub_section_name);
        return this.set_help_text($help_text);
      }
    }, {
      key: 'set_help_text',
      value: function set_help_text($help_text) {
        $help_text.siblings().removeClass(this.settings.help_text_is_active_class);
        return $help_text.addClass(this.settings.help_text_is_active_class);
      }
    }]);

    return Plugin;
  }();
  // ---------------------------------------------------------------------
  return $.fn[pluginName] = function (options) {
    var args, returns;
    args = arguments;
    if (options === undefined || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object") {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
      returns = void 0;
      this.each(function () {
        var instance;
        instance = $.data(this, "plugin_" + pluginName);
        if (instance instanceof Plugin && typeof instance[options] === "function") {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
        if (options === "destroy") {
          return $.data(this, "plugin_" + pluginName, null);
        }
      });
      if (returns !== undefined) {
        return returns;
      } else {
        return this;
      }
    }
  };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://github.com/jquery-boilerplate/jquery-boilerplate/
(function ($, window, document) {
  var Plugin, defaults, pluginName;
  pluginName = 'simple_form_markdown_editor__preview';
  defaults = {
    debug: false
  };
  Plugin = function () {
    function Plugin(element, options) {
      _classCallCheck(this, Plugin);

      this.element = element;
      this.settings = $.extend({}, defaults, options);
      this.$element = $(this.element);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }

    _createClass(Plugin, [{
      key: 'init',
      value: function init() {
        var _this = this;

        return this.$element.on('show_preview', function (e) {
          var content;
          e.stopPropagation();
          content = e.html || "<p>" + _this.get_nothing_to_preview_text() + "</p>";
          return _this.$element.html(content);
        });
      }
    }, {
      key: 'get_nothing_to_preview_text',
      value: function get_nothing_to_preview_text() {
        return this.$element.data('nothing-to-preview-text') || 'Nothing to preview.';
      }
    }]);

    return Plugin;
  }();
  // ---------------------------------------------------------------------
  return $.fn[pluginName] = function (options) {
    var args, returns;
    args = arguments;
    if (options === undefined || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object") {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
      returns = void 0;
      this.each(function () {
        var instance;
        instance = $.data(this, "plugin_" + pluginName);
        if (instance instanceof Plugin && typeof instance[options] === "function") {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
        if (options === "destroy") {
          return $.data(this, "plugin_" + pluginName, null);
        }
      });
      if (returns !== undefined) {
        return returns;
      } else {
        return this;
      }
    }
  };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// https://github.com/jquery-boilerplate/jquery-boilerplate/
(function ($, window, document) {
  var Plugin, defaults, pluginName;
  pluginName = 'simple_form_markdown_editor__tabs';
  defaults = {
    debug: false,
    is_active_class: 'simple_form_markdown_editor__tab__is_active'
  };
  Plugin = function () {
    function Plugin(element, options) {
      _classCallCheck(this, Plugin);

      this.element = element;
      this.settings = $.extend({}, defaults, options);
      this.$element = $(this.element);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }

    _createClass(Plugin, [{
      key: 'init',
      value: function init() {
        var _this = this;

        this.set_active_tab(this.get_edit_tab());
        this.$element.on('click', '.simple_form_markdown_editor__tab', function (e) {
          return _this.set_active_tab($(e.currentTarget));
        });
        this.$element.on('click', '.simple_form_markdown_editor__tab__edit', function (e) {
          return _this.$element.trigger('show_editor');
        });
        return this.$element.on('click', '.simple_form_markdown_editor__tab__preview', function (e) {
          return _this.$element.trigger('show_preview');
        });
      }

      // ---------------------------------------------------------------------

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

      // ---------------------------------------------------------------------

    }, {
      key: 'set_active_tab',
      value: function set_active_tab($tab) {
        this.get_tabs().removeClass(this.settings.is_active_class);
        return $tab.addClass(this.settings.is_active_class);
      }
    }]);

    return Plugin;
  }();
  // ---------------------------------------------------------------------
  return $.fn[pluginName] = function (options) {
    var args, returns;
    args = arguments;
    if (options === undefined || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object") {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
      returns = void 0;
      this.each(function () {
        var instance;
        instance = $.data(this, "plugin_" + pluginName);
        if (instance instanceof Plugin && typeof instance[options] === "function") {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
        if (options === "destroy") {
          return $.data(this, "plugin_" + pluginName, null);
        }
      });
      if (returns !== undefined) {
        return returns;
      } else {
        return this;
      }
    }
  };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($, window, document) {
  var Plugin, defaults, pluginName;
  pluginName = 'simple_form_markdown_editor';
  defaults = {
    debug: false,
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
  Plugin = function () {
    function Plugin(element, options) {
      _classCallCheck(this, Plugin);

      this.element = element;
      this.settings = $.extend({}, defaults, options);
      this.$element = $(this.element);
      this._defaults = defaults;
      this._name = pluginName;
      this.init();
    }

    _createClass(Plugin, [{
      key: 'init',
      value: function init() {
        var _this = this;

        this.get_buttons().simple_form_markdown_editor__buttons();
        this.get_editor().simple_form_markdown_editor__editor();
        this.get_help().simple_form_markdown_editor__help();
        this.get_preview().simple_form_markdown_editor__preview();
        this.get_tabs().simple_form_markdown_editor__tabs();
        this.$element.on('show_editor', function (e) {
          e.stopPropagation();
          return _this.$element.addClass(_this.settings.is_editor_class);
        });
        this.$element.on('show_preview', function (e) {
          e.stopPropagation();
          return _this.$element.removeClass(_this.settings.is_editor_class);
        });
        this.$element.on('show_preview', function (e) {
          var options, val;
          e.stopPropagation();
          options = _this.get_options();
          val = _this.get_editor().simple_form_markdown_editor__editor('get_val');
          return $.ajax({
            type: 'POST',
            url: _this.get_preview_path(),
            data: {
              _method: 'PUT',
              text: val,
              options: options
            },
            success: function success(html) {
              return _this.get_preview().trigger({
                type: 'show_preview',
                html: html
              });
            }
          });
        });
        this.$element.on('toggle_help', function (e) {
          e.stopPropagation();
          return _this.$element.toggleClass(_this.settings.is_help_class);
        });
        return this.$element.on('execute_command', function (e) {
          var command, definition;
          e.stopPropagation();
          command = e.command;
          definition = _this.settings.definitions[command];
          return _this.get_editor().trigger({
            type: 'execute_command_definition',
            command: command,
            definition: definition
          });
        });
      }

      // ---------------------------------------------------------------------

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

    return Plugin;
  }();
  // ---------------------------------------------------------------------
  return $.fn[pluginName] = function (options) {
    var args, returns;
    args = arguments;
    if (options === undefined || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === "object") {
      return this.each(function () {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
      returns = void 0;
      this.each(function () {
        var instance;
        instance = $.data(this, "plugin_" + pluginName);
        if (instance instanceof Plugin && typeof instance[options] === "function") {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
        if (options === "destroy") {
          return $.data(this, "plugin_" + pluginName, null);
        }
      });
      if (returns !== undefined) {
        return returns;
      } else {
        return this;
      }
    }
  };
})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })
/******/ ]);
});