module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("peritext-rendering-utils");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;
// import {buildCitations} from 'peritext-rendering-utils';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSizeme = __webpack_require__(24);

var _reactSizeme2 = _interopRequireDefault(_reactSizeme);

var _lodash = __webpack_require__(25);

var _reactCustomScrollbars = __webpack_require__(26);

var _rebound = __webpack_require__(27);

var _Nav = __webpack_require__(28);

var _Nav2 = _interopRequireDefault(_Nav);

var _reactCiteproc = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
var inBrowser = isBrowser();

if (!inBrowser) {
  _reactSizeme2.default.noPlaceholders = true;
}

var getOffsetToParent = function getOffsetToParent(element, container) {
  var offset = 0;
  var el = element;
  do {
    offset += el.offsetTop;
    el = el.offsetParent;
  } while (el !== undefined && el !== container);

  return offset;
};

var Layout = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout(props, context) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      gui: {
        indexOpen: false,
        inTop: true
      }
    };

    _this.onScrollUpdate = _this.onScrollUpdate.bind(_this);
    // this.onScrollUpdate = debounce(this.onScrollUpdate.bind(this), 100, 0, {leading: true});
    return _this;
  }

  /**
   * Executes code on instance after the component is mounted
   */


  (0, _createClass3.default)(Layout, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
    // this.globalScrollbar = null;


    /**
     * Handles the scrolling process using the spring system
     * @param {object} spring - the spring system instance
     */


    /**
     * Handle scrolling to a specific title in the page
     * @param {string} id - the id of the item to scroll to
     */


    /**
     * Programmatically modifies the scroll state of the component
     * so that it transitions to a specific point in the page
     * @param {number} top - the position to scroll to
     */

  }]);
  return Layout;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getChildContext = function () {
    var dimensions = (0, _extends3.default)({}, _this2.props.size, {
      width: _this2.props.size.width || inBrowser && window.innerWidth,
      height: _this2.props.size.height || inBrowser && window.innerHeight
    });
    return {
      dimensions: dimensions,
      scrollToElementId: _this2.scrollToElementId,
      scrollToTop: _this2.scrollTo,
      scrollTop: _this2.state.gui.scrollTop,
      scrollTopAbs: _this2.state.gui.scrollTopAbs
    };
  };

  this.componentDidMount = function () {

    // we use a spring system to handle automatic scrolls
    // (e.g. note pointer clicked or click in the table of contents)
    _this2.springSystem = new _rebound.SpringSystem();
    _this2.spring = _this2.springSystem.createSpring();
    _this2.spring.addListener({ onSpringUpdate: _this2.handleSpringUpdate });
  };

  this.handleSpringUpdate = function (spring) {
    var val = spring.getCurrentValue();
    if (val !== undefined && _this2.globalScrollbar) {
      _this2.globalScrollbar.scrollTop(val);
    }
  };

  this.scrollToElementId = function (id) {
    var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (inBrowser && _this2.globalScrollbar) {
      var container = _this2.globalScrollbar.container;
      var element = document.getElementById(id);
      if (element) {
        var offset = getOffsetToParent(element, container);
        offset = center ? offset - _this2.props.size.height / 2 : offset;
        _this2.scrollTo(offset);
      }
    }
  };

  this.scrollTo = function (top) {
    var scrollbars = _this2.globalScrollbar;
    if (!scrollbars) {
      setTimeout(function () {
        if (_this2.globalScrollbar) {
          _this2.scrollTo(top);
        }
      });
      return;
    }
    var scrollTop = scrollbars.getScrollTop();
    var scrollHeight = scrollbars.getScrollHeight();
    var val = _rebound.MathUtil.mapValueInRange(top, 0, scrollHeight, 0, scrollHeight);
    _this2.spring.setCurrentValue(scrollTop).setAtRest();
    _this2.spring.setEndValue(val);
  };

  this.onScrollUpdate = function (scrollPosition) {
    var scrollTop = scrollPosition.top;
    var scrollTopAbs = scrollPosition.scrollTop;
    var stateChanges = {};
    if (scrollTop !== _this2.state.gui.scrollTop) {
      stateChanges = (0, _extends3.default)({}, stateChanges, {
        gui: (0, _extends3.default)({}, _this2.state.gui, {
          inTop: scrollTop === 0 ? true : false,
          scrollTop: scrollTop,
          scrollTopAbs: scrollTopAbs
        })
      });
    }
    if ((0, _keys2.default)(stateChanges).length) {
      _this2.setState(stateChanges);
    }
  };

  this.toggleIndex = function (e) {
    e.stopPropagation();
    e.preventDefault();
    _this2.setState({
      gui: (0, _extends3.default)({}, _this2.state.gui, {
        indexOpen: !_this2.state.gui.indexOpen
      })
    });
  };

  this.render = function () {
    var _props = _this2.props,
        children = _props.children,
        activeId = _props.activeId;
    var toggleIndex = _this2.toggleIndex,
        onScrollUpdate = _this2.onScrollUpdate,
        state = _this2.state,
        context = _this2.context;
    var _state$gui = state.gui,
        indexOpen = _state$gui.indexOpen,
        inTop = _state$gui.inTop;
    var story = context.story,
        rawCitations = context.rawCitations;


    var citationStyle = story.settings.citationStyle.data;
    var citationLocale = story.settings.citationLocale.data;

    var bindGlobalScrollbarRef = function bindGlobalScrollbarRef(scrollbar) {
      _this2.globalScrollbar = scrollbar;
    };

    return _react2.default.createElement(
      _reactCiteproc.ReferencesManager,
      {
        style: citationStyle,
        locale: citationLocale,
        items: rawCitations.citationItems,
        citations: rawCitations.citationData,
        componentClass: 'references-manager' },
      inBrowser ? _react2.default.createElement(
        'section',
        {
          className: 'garlic-layout'
        },
        _react2.default.createElement(
          _reactCustomScrollbars.Scrollbars,
          {
            ref: bindGlobalScrollbarRef,
            autoHide: true,
            onUpdate: onScrollUpdate,
            universal: true },
          _react2.default.createElement(_Nav2.default, {
            indexOpen: indexOpen,
            toggleIndex: toggleIndex,
            inTop: inTop,
            activeId: activeId
          }),
          _react2.default.createElement(
            'section',
            { className: 'contents-wrapper' },
            children
          )
        )
      ) : // config for server-side rendering (no scrollbars)
      _react2.default.createElement(
        'section',
        {
          className: 'garlic-layout'
        },
        _react2.default.createElement(_Nav2.default, {
          indexOpen: indexOpen,
          toggleIndex: toggleIndex,
          inTop: inTop,
          activeId: activeId
        }),
        _react2.default.createElement(
          'section',
          { className: 'contents-wrapper' },
          children
        )
      ),
      _react2.default.createElement(
        'style',
        null,
        story.settings.css && story.settings.css.codex ? story.settings.css.codex : ''
      )
    );
  };
}, _temp);


Layout.contextTypes = {
  story: _propTypes2.default.object,
  rawCitations: _propTypes2.default.object
};

Layout.childContextTypes = {
  dimensions: _propTypes2.default.object,
  scrollToElementId: _propTypes2.default.func,
  scrollToTop: _propTypes2.default.func,
  scrollTop: _propTypes2.default.number,
  scrollTopAbs: _propTypes2.default.number,
  rawCitations: _propTypes2.default.object
};

exports.default = (0, _reactSizeme2.default)({
  monitorHeight: true,
  monitorWidth: true,
  monitorPosition: true
})(Layout);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SectionLink = function SectionLink(_ref, _ref2) {
  var id = _ref.id,
      title = _ref.title,
      _ref$query = _ref.query,
      query = _ref$query === undefined ? {} : _ref$query,
      onButtonClick = _ref.onButtonClick;
  var LinkComponent = _ref2.LinkComponent;
  return _react2.default.createElement(LinkComponent, {
    to: 'section',
    as: 'section',
    onButtonClick: onButtonClick,
    query: (0, _extends3.default)({}, query, {
      id: id
    }),
    title: title
  });
};

exports.default = SectionLink;


SectionLink.contextTypes = {
  LinkComponent: _propTypes2.default.func
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Renderer = __webpack_require__(13);

var _Renderer2 = _interopRequireDefault(_Renderer);

var _SectionLink = __webpack_require__(11);

var _SectionLink2 = _interopRequireDefault(_SectionLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var targetContents = _ref.targetContents,
      contents = _ref.contents,
      sectionTitle = _ref.sectionTitle,
      sectionId = _ref.sectionId,
      contextualizationId = _ref.contextualizationId,
      onButtonClick = _ref.onButtonClick;
  return _react2.default.createElement(
    'div',
    { className: 'ContextMention' },
    _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement(_SectionLink2.default, {
        id: sectionId,
        onButtonClick: onButtonClick,
        title: 'Contexte de la mention (' + sectionTitle + ')',
        query: {
          contextualizationId: contextualizationId
        }
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'exerpt' },
      _react2.default.createElement(_SectionLink2.default, {
        id: sectionId,
        onButtonClick: onButtonClick,
        title: _react2.default.createElement(_Renderer2.default, { raw: contents }),
        query: {
          contextualizationId: contextualizationId
        }
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer' },
      _react2.default.createElement(_SectionLink2.default, {
        id: sectionId,
        onButtonClick: onButtonClick,
        title: 'Aller \xE0 la mention (' + sectionTitle + ')',
        query: {
          contextualizationId: contextualizationId
        }
      })
    )
  );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redraft = __webpack_require__(29);

var _redraft2 = _interopRequireDefault(_redraft);

var _Link = __webpack_require__(30);

var _Link2 = _interopRequireDefault(_Link);

var _BlockAssetWrapper = __webpack_require__(31);

var _BlockAssetWrapper2 = _interopRequireDefault(_BlockAssetWrapper);

var _InlineAssetWrapper = __webpack_require__(32);

var _InlineAssetWrapper2 = _interopRequireDefault(_InlineAssetWrapper);

var _NotePointer = __webpack_require__(33);

var _NotePointer2 = _interopRequireDefault(_NotePointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// just a helper to add a <br /> after each block
var addBreaklines = function addBreaklines(children) {
  return children.map(function (child) {
    return [child, _react2.default.createElement('br', null)];
  });
};

/**
 * Define the renderers
 */
var renderers = {
  /**
   * Those callbacks will be called recursively to render a nested structure
   */
  inline: {
    // The key passed here is just an index based on rendering order inside a block
    BOLD: function BOLD(children, _ref) {
      var key = _ref.key;
      return _react2.default.createElement(
        'strong',
        { key: key },
        children
      );
    },
    ITALIC: function ITALIC(children, _ref2) {
      var key = _ref2.key;
      return _react2.default.createElement(
        'em',
        { key: key },
        children
      );
    },
    UNDERLINE: function UNDERLINE(children, _ref3) {
      var key = _ref3.key;
      return _react2.default.createElement(
        'u',
        { key: key },
        children
      );
    },
    CODE: function CODE(children, _ref4) {
      var key = _ref4.key;
      return _react2.default.createElement(
        'span',
        { key: key },
        children
      );
    }
  },
  /**
   * Blocks receive children and depth
   * Note that children are an array of blocks with same styling,
   */
  blocks: {
    'unstyled': function unstyled(children) {
      return children.map(function (child) {
        return _react2.default.createElement(
          'p',
          null,
          child
        );
      });
    },
    'blockquote': function blockquote(children) {
      return _react2.default.createElement(
        'blockquote',
        null,
        addBreaklines(children)
      );
    },
    'header-one': function headerOne(children, _ref5) {
      var keys = _ref5.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h1',
          { key: index, id: keys[index] },
          child
        );
      });
    },
    'header-two': function headerTwo(children, _ref6) {
      var keys = _ref6.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h2',
          { key: index, id: keys[index] },
          child
        );
      });
    },
    'header-three': function headerThree(children, _ref7) {
      var keys = _ref7.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h3',
          { key: index, id: keys[index] },
          child
        );
      });
    },
    'header-four': function headerFour(children, _ref8) {
      var keys = _ref8.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h4',
          { key: index, id: keys[index] },
          child
        );
      });
    },
    'header-five': function headerFive(children, _ref9) {
      var keys = _ref9.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h5',
          { key: index, id: keys[index] },
          child
        );
      });
    },
    'header-six': function headerSix(children, _ref10) {
      var keys = _ref10.keys;
      return children.map(function (child, index) {
        return _react2.default.createElement(
          'h6',
          { key: index, id: keys[index] },
          child
        );
      });
    },

    // You can also access the original keys of the blocks
    'code-block': function codeBlock(children, _ref11) {
      var keys = _ref11.keys;
      return _react2.default.createElement(
        'pre',
        { key: keys[0] },
        addBreaklines(children)
      );
    },
    // or depth for nested lists
    'unordered-list-item': function unorderedListItem(children, _ref12) {
      var depth = _ref12.depth,
          keys = _ref12.keys;
      return _react2.default.createElement(
        'ul',
        { key: keys[keys.length - 1], className: 'ul-level-' + depth },
        children.map(function (child, index) {
          return _react2.default.createElement(
            'li',
            { key: index },
            child
          );
        })
      );
    },
    'ordered-list-item': function orderedListItem(children, _ref13) {
      var depth = _ref13.depth,
          keys = _ref13.keys;
      return _react2.default.createElement(
        'ol',
        { key: keys.join('|'), className: 'ol-level-' + depth },
        children.map(function (child, index) {
          return _react2.default.createElement(
            'li',
            { key: keys[index] },
            child
          );
        })
      );
    }
    // If your blocks use meta data it can also be accessed like keys
    // atomic: (children, { keys, data }) => children.map((child, i) => <Atomic key={keys[i]} {...data[i]}>{child}</Atomic>),
  },
  /**
   * Entities receive children and the entity data
   */
  entities: {
    //   // key is the entity key value from raw
    LINK: function LINK(children, data, _ref14) {
      var key = _ref14.key;
      return _react2.default.createElement(
        _Link2.default,
        { key: key, to: data.url },
        children
      );
    },
    BLOCK_ASSET: function BLOCK_ASSET(children, data, _ref15) {
      var key = _ref15.key;

      return _react2.default.createElement(_BlockAssetWrapper2.default, { key: key, data: data });
    },
    INLINE_ASSET: function INLINE_ASSET(children, data, _ref16) {
      var key = _ref16.key;

      return _react2.default.createElement(_InlineAssetWrapper2.default, { data: data, key: key });
    },
    NOTE_POINTER: function NOTE_POINTER(children, data, _ref17) {
      var key = _ref17.key;

      return _react2.default.createElement(_NotePointer2.default, { key: key, children: children, noteId: data.noteId });
    }
  }
};

/**
 * Renderer class for building raw-to-react rendering react component instances
 */

var Renderer = function (_Component) {
  (0, _inherits3.default)(Renderer, _Component);

  /**
   * constructor
   * @param {object} props - properties given to instance at instanciation
   */
  function Renderer(props) {
    (0, _classCallCheck3.default)(this, Renderer);
    return (0, _possibleConstructorReturn3.default)(this, (Renderer.__proto__ || (0, _getPrototypeOf2.default)(Renderer)).call(this, props));
  }

  /**
   * Determines whether to update the component or not
   * @param {object} nextProps - the future properties of the component
   * @return {boolean} shouldUpdate - yes or no
   */


  (0, _createClass3.default)(Renderer, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return true;
      // return this.props.raw !== nextProps.raw;
    }

    /**
     * Displays something when no suitable content state is provided to the renderer
     * @return {ReactElement} default message
     */

  }, {
    key: 'renderWarning',
    value: function renderWarning() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'Nothing to render.'
        )
      );
    }

    /**
     * Renders the component
     * @return {ReactElement} component - the component
     */

  }, {
    key: 'render',
    value: function render() {
      var raw = this.props.raw;

      if (!raw) {
        return this.renderWarning();
      }
      var rendered = (0, _redraft2.default)(raw, renderers);
      // redraft can return a null if there's nothing to render
      if (!rendered) {
        return this.renderWarning();
      }
      return _react2.default.createElement(
        'div',
        null,
        rendered
      );
    }
  }]);
  return Renderer;
}(_react.Component);

/**
 * Component's properties types
 */


Renderer.propTypes = {
  /**
   * Draft-js raw representation of some contents
   * see https://draftjs.org/docs/api-reference-data-conversion.html
   */
  raw: _propTypes2.default.object
};

exports.default = Renderer;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Layout = __webpack_require__(9);

var _Layout2 = _interopRequireDefault(_Layout);

var _SectionLink = __webpack_require__(11);

var _SectionLink2 = _interopRequireDefault(_SectionLink);

var _peritextRenderingUtils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contents = function (_Component) {
  (0, _inherits3.default)(Contents, _Component);

  function Contents(props) {
    (0, _classCallCheck3.default)(this, Contents);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Contents.__proto__ || (0, _getPrototypeOf2.default)(Contents)).call(this, props));

    _this.render = function () {
      var _this$context = _this.context,
          story = _this$context.story,
          LinkComponent = _this$context.LinkComponent;

      var firstSection = story.sections[story.sectionsOrder[0]];
      var firstSectionTitle = firstSection.metadata.title;
      var firstSectionId = firstSection.id;
      return _react2.default.createElement(
        'section',
        { className: 'main-contents-container' },
        _react2.default.createElement(_peritextRenderingUtils.StructuredCOinS, { resource: story }),
        _react2.default.createElement(
          'div',
          { className: "home-header " + (story.metadata.covers && story.metadata.covers.web ? 'hidden' : 'visible') },
          _react2.default.createElement(
            'h1',
            null,
            story.metadata.title
          ),
          story.metadata.subtitle && _react2.default.createElement(
            'h2',
            { className: 'subtitle' },
            story.metadata.subtitle
          ),
          _react2.default.createElement(
            'h2',
            { className: 'authors' },
            story.metadata.authors && story.metadata.authors.length > 0 && story.metadata.authors.map(function (author, index) {
              return _react2.default.createElement(
                'span',
                { key: index },
                author.given,
                ' ',
                author.family
              );
            }).reduce(function (prev, curr) {
              return [prev, ', ', curr];
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'contents-guttered' },
          story.metadata.covers && story.metadata.covers.web && _react2.default.createElement(
            'div',
            { className: 'cover-image' },
            _react2.default.createElement(_SectionLink2.default, {
              id: firstSectionId,
              title: _react2.default.createElement('img', { src: story.metadata.covers.web })
            })
          ),
          story.metadata.description && _react2.default.createElement(
            'blockquote',
            { className: 'story-description' },
            story.metadata.description
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_SectionLink2.default, {
              id: firstSectionId,
              title: 'Commencer la lecture - ' + firstSectionTitle
            })
          )
        )
      );
    };

    return _this;
  }

  return Contents;
}(_react.Component);

Contents.contextTypes = {
  story: _propTypes2.default.object,
  LinkComponent: _propTypes2.default.func
};

exports.default = function () {
  return _react2.default.createElement(
    _Layout2.default,
    { activeId: '' },
    _react2.default.createElement(Contents, null)
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-citeproc");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Layout = __webpack_require__(9);

var _Layout2 = _interopRequireDefault(_Layout);

var _MentionsContainer = __webpack_require__(17);

var _MentionsContainer2 = _interopRequireDefault(_MentionsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contents = function (_Component) {
  (0, _inherits3.default)(Contents, _Component);

  function Contents(props) {
    (0, _classCallCheck3.default)(this, Contents);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Contents.__proto__ || (0, _getPrototypeOf2.default)(Contents)).call(this, props));

    _this.toggleOpenedItemId = function (openedItemId) {
      var to = _this.state.openedItemId === openedItemId ? undefined : openedItemId;
      if (to) {
        setTimeout(function () {
          _this.context.scrollToElementId(openedItemId);
        }, 500);
      }
      _this.setState({
        openedItemId: to
      });
    };

    _this.render = function () {
      var toggleOpenedItemId = _this.toggleOpenedItemId,
          openedItemId = _this.state.openedItemId,
          glossary = _this.props.glossary;


      var formattedGlossary = glossary.map(function (ref) {
        return (0, _extends3.default)({}, ref, {
          id: ref.resource.metadata.id
        });
      });
      return _react2.default.createElement(
        _Layout2.default,
        { activeId: 'lexicon' },
        _react2.default.createElement(
          'section',
          { className: 'main-contents-container' },
          _react2.default.createElement(
            'div',
            { className: 'contents-guttered' },
            glossary && _react2.default.createElement(_MentionsContainer2.default, {
              title: 'Glossaire',
              entries: formattedGlossary,
              toggleOpenedItemId: toggleOpenedItemId,
              openedItemId: openedItemId
            })
          )
        )
      );
    };

    _this.state = {
      openedItemId: undefined
    };
    return _this;
  }

  return Contents;
}(_react.Component);

Contents.contextTypes = {
  scrollToElementId: _propTypes2.default.func
};

exports.default = function (_ref) {
  var glossary = _ref.glossary,
      authorsIndex = _ref.authorsIndex;
  return _react2.default.createElement(
    _Layout2.default,
    { activeId: 'lexicon' },
    _react2.default.createElement(Contents, {
      glossary: glossary,
      authorsIndex: authorsIndex
    })
  );
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ContextMention = __webpack_require__(12);

var _ContextMention2 = _interopRequireDefault(_ContextMention);

var _reactAddonsCssTransitionGroup = __webpack_require__(34);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _peritextRenderingUtils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getEntryName = function getEntryName(entry) {
  return entry.item && entry.item.title || entry.resource && entry.resource.data.name || entry.given && entry.family + ' ' + entry.given || entry.id;
};

exports.default = function (_ref) {
  var title = _ref.title,
      _ref$entries = _ref.entries,
      entries = _ref$entries === undefined ? [] : _ref$entries,
      toggleOpenedItemId = _ref.toggleOpenedItemId,
      openedItemId = _ref.openedItemId,
      entryNameGetter = _ref.entryNameGetter,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;
  return _react2.default.createElement(
    'div',
    { className: "mentions-container " + className },
    _react2.default.createElement(
      'h2',
      null,
      title
    ),
    _react2.default.createElement(
      'ul',
      { className: 'index-list' },
      entries.map(function (entry, index) {
        var entryName = entryNameGetter ? entryNameGetter(entry) : getEntryName(entry);
        var expanded = openedItemId === entry.id;
        var toggleItemExpansion = function toggleItemExpansion() {
          return toggleOpenedItemId(entry.id);
        };

        return _react2.default.createElement(
          'li',
          {
            key: index,
            id: entryName,
            className: 'mentions-list-container ' + (expanded ? 'expanded' : '')
          },
          entry.item && _react2.default.createElement(_peritextRenderingUtils.StructuredCOinS, { cslRecord: entry.item }),
          _react2.default.createElement(
            'h3',
            {
              className: 'index-list-title',
              onClick: toggleItemExpansion
            },
            entryName,
            ' ',
            _react2.default.createElement(
              'button',
              { className: "collapse-btn " + (expanded ? ' active' : '') },
              expanded ? '- Cacher les mentions' : '+ Montrer les mentions'
            )
          ),
          _react2.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            {
              transitionName: 'mentions-animation',
              transitionEnterTimeout: 500,
              transitionLeaveTimeout: 300 },
            expanded && _react2.default.createElement(
              'ul',
              { className: 'mentions-list' },
              entry.mentions.filter(function (mention) {
                return mention.contextContent !== undefined && mention.contextContent.targetContents !== undefined;
              }).map(function (mention, count) {
                var _mention$contextConte = mention.contextContent,
                    targetContents = _mention$contextConte.targetContents,
                    contents = _mention$contextConte.contents,
                    sectionTitle = _mention$contextConte.sectionTitle,
                    sectionId = _mention$contextConte.sectionId,
                    id = mention.id;

                return _react2.default.createElement(
                  'li',
                  { key: count, id: id },
                  _react2.default.createElement(_ContextMention2.default, {
                    targetContents: targetContents,
                    contents: contents,
                    sectionTitle: sectionTitle,
                    sectionId: sectionId,
                    contextualizationId: id
                  })
                );
              })
            )
          )
        );
      })
    )
  );
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _EpubPlayerWrapper = __webpack_require__(35);

var _EpubPlayerWrapper2 = _interopRequireDefault(_EpubPlayerWrapper);

var _Layout = __webpack_require__(9);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactPDF = void 0;


var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
var inBrowser = isBrowser();

if (inBrowser) {
  ReactPDF = __webpack_require__(37);
}

var Dimensio = function (_Component) {
  (0, _inherits3.default)(Dimensio, _Component);

  function Dimensio(props) {
    (0, _classCallCheck3.default)(this, Dimensio);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dimensio.__proto__ || (0, _getPrototypeOf2.default)(Dimensio)).call(this, props));

    _this.onEpubLocationChange = function (epubLocation) {
      _this.setState({
        epubLocation: epubLocation
      });
    };

    _this.onPdfDocumentLoad = function (_ref) {
      var total = _ref.total;

      _this.setState({
        pdfTotal: total
      });
    };

    _this.onPdfPageLoad = function (_ref2) {
      var pageIndex = _ref2.pageIndex,
          pageNumber = _ref2.pageNumber;

      _this.setState({
        pdfPageIndex: pageIndex,
        pdfPageNumber: pageNumber
      });
    };

    _this.onPdfPrev = function () {
      var _this$state = _this.state,
          pdfPageIndex = _this$state.pdfPageIndex,
          pdfPageNumber = _this$state.pdfPageNumber;

      _this.setState({
        pdfPageIndex: pdfPageIndex > 0 ? pdfPageIndex - 1 : pdfPageIndex,
        pdfPageNumber: pdfPageNumber > 0 ? pdfPageNumber - 1 : pdfPageNumber
      });
    };

    _this.onPdfNext = function () {
      var _this$state2 = _this.state,
          pdfPageIndex = _this$state2.pdfPageIndex,
          pdfPageNumber = _this$state2.pdfPageNumber,
          pdfTotal = _this$state2.pdfTotal;

      _this.setState({
        pdfPageIndex: pdfPageIndex < pdfTotal - 1 ? pdfPageIndex + 1 : pdfPageIndex,
        pdfPageNumber: pdfPageNumber < pdfTotal ? pdfPageNumber + 1 : pdfPageNumber
      });
    };

    _this.state = {
      pdfPageNumber: 1,
      pdfTotal: 1,
      pdfPageIndex: 0,
      epubLocation: 0
    };
    return _this;
  }

  (0, _createClass3.default)(Dimensio, [{
    key: 'render',
    value: function render() {
      var state = this.state,
          props = this.props,
          onPdfDocumentLoad = this.onPdfDocumentLoad,
          onPdfPageLoad = this.onPdfPageLoad,
          onPdfPrev = this.onPdfPrev,
          onPdfNext = this.onPdfNext,
          onEpubLocationChange = this.onEpubLocationChange,
          locale = this.context.locale;
      var pdfUrl = props.pdfUrl,
          epubUrl = props.epubUrl,
          storyTitle = props.storyTitle,
          jsonUrl = props.jsonUrl;
      var pdfPageNumber = state.pdfPageNumber,
          pdfTotal = state.pdfTotal,
          pdfPageIndex = state.pdfPageIndex,
          epubLocation = state.epubLocation;


      return _react2.default.createElement(
        _Layout2.default,
        { activeId: 'dimensio' },
        _react2.default.createElement(
          'section',
          { className: 'main-contents-container' },
          inBrowser && _react2.default.createElement(
            'div',
            { className: 'contents-guttered' },
            pdfUrl && _react2.default.createElement(
              'div',
              { className: 'output-group' },
              _react2.default.createElement(
                'h2',
                null,
                locale && locale.pdfFormat || 'Format pdf'
              ),
              _react2.default.createElement(
                'div',
                { className: 'player-container pdf-player-container' },
                _react2.default.createElement(
                  'p',
                  { className: 'pdf-nav' },
                  _react2.default.createElement(
                    'button',
                    { onClick: onPdfPrev },
                    locale && locale.prevPage || 'page précédente'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'span',
                    null,
                    pdfPageNumber,
                    ' ',
                    locale && locale.of || 'de',
                    ' ',
                    pdfTotal
                  ),
                  ' ',
                  _react2.default.createElement(
                    'button',
                    { onClick: onPdfNext },
                    locale && locale.nextPage || 'page suivante'
                  )
                ),
                _react2.default.createElement(ReactPDF, {
                  file: pdfUrl,
                  pageIndex: pdfPageIndex,
                  onDocumentLoad: onPdfDocumentLoad,
                  onPageLoad: this.onPageLoad
                }),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'download-button', href: pdfUrl, download: true },
                    locale && locale.download || 'télécharger'
                  )
                )
              )
            ),
            epubUrl && _react2.default.createElement(
              'div',
              { className: 'output-group' },
              _react2.default.createElement(
                'h2',
                null,
                locale && locale.epubFormat || 'Format epub'
              ),
              _react2.default.createElement(
                'div',
                { className: 'player-container epub-player-container' },
                _react2.default.createElement(_EpubPlayerWrapper2.default, {
                  url: epubUrl,
                  onEpubLocationChange: onEpubLocationChange,
                  storyTitle: storyTitle,
                  epubLocation: epubLocation
                }),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'download-button', href: epubUrl, download: true },
                    locale && locale.download || 'télécharger'
                  )
                )
              )
            ),
            epubUrl && _react2.default.createElement(
              'div',
              { className: 'output-group' },
              _react2.default.createElement(
                'h2',
                null,
                locale && locale.jsonFormat || 'Format json'
              ),
              _react2.default.createElement(
                'div',
                { className: 'player-container' },
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'a',
                    { className: 'download-button', href: jsonUrl, download: true },
                    locale && locale.download || 'télécharger'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Dimensio;
}(_react.Component);

exports.default = Dimensio;


Dimensio.contextTypes = {
  locale: _propTypes2.default.object
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(38);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Layout = __webpack_require__(9);

var _Layout2 = _interopRequireDefault(_Layout);

var _ContextMention = __webpack_require__(12);

var _ContextMention2 = _interopRequireDefault(_ContextMention);

var _MentionsContainer = __webpack_require__(17);

var _MentionsContainer2 = _interopRequireDefault(_MentionsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contents = function (_Component) {
  (0, _inherits3.default)(Contents, _Component);

  function Contents(props, context) {
    (0, _classCallCheck3.default)(this, Contents);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Contents.__proto__ || (0, _getPrototypeOf2.default)(Contents)).call(this, props));

    _this.toggleOpenedItemId = function (id) {
      var to = id === _this.state.openedItemId ? undefined : id;
      if (to) {
        setTimeout(function () {
          _this.context.scrollToElementId(id);
        }, 500);
      }
      _this.setState({
        openedItemId: to
      });
    };

    _this.render = function () {
      var _this$context = _this.context,
          story = _this$context.story,
          scrollToElementId = _this$context.scrollToElementId;
      var toggleOpenedItemId = _this.toggleOpenedItemId;
      var openedItemId = _this.state.openedItemId;
      var _this$props = _this.props,
          _this$props$bibliogra = _this$props.bibliography,
          references = _this$props$bibliogra === undefined ? [] : _this$props$bibliogra,
          authorsIndex = _this$props.authorsIndex;

      var firstSection = story.sections[story.sectionsOrder[0]];
      var firstSectionTitle = firstSection.metadata.title;
      var firstSectionId = firstSection.id;

      var authorNameGetter = function authorNameGetter(entry) {
        return entry.given + ' ' + entry.family;
      };

      var bibNameGetter = function bibNameGetter(entry) {
        return _react2.default.createElement('div', {
          dangerouslySetInnerHTML: {
            __html: entry.title
          }
        });
      };

      var formattedReferences = references.map(function (ref) {
        return (0, _extends3.default)({}, ref, {
          id: ref.citationKey
        });
      });

      return _react2.default.createElement(
        'section',
        { className: 'main-contents-container' },
        _react2.default.createElement(
          'div',
          { className: 'contents-guttered' },
          references && _react2.default.createElement(_MentionsContainer2.default, {
            title: 'Références',
            entries: formattedReferences,
            toggleOpenedItemId: toggleOpenedItemId,
            openedItemId: openedItemId,
            entryNameGetter: bibNameGetter,
            className: 'end-references-container'
          }),
          authorsIndex && _react2.default.createElement(_MentionsContainer2.default, {
            title: 'Index des auteurs',
            entryNameGetter: authorNameGetter,
            entries: authorsIndex,
            toggleOpenedItemId: toggleOpenedItemId,
            openedItemId: openedItemId
          })
        )
      );
    };

    _this.state = {
      openedItemId: undefined
    };
    return _this;
  }

  return Contents;
}(_react.Component);

Contents.contextTypes = {
  story: _propTypes2.default.object,
  scrollToElementId: _propTypes2.default.func
};

exports.default = function (_ref) {
  var bibliography = _ref.bibliography,
      props = (0, _objectWithoutProperties3.default)(_ref, ['bibliography']);
  return _react2.default.createElement(
    _Layout2.default,
    { activeId: 'bibliotheca' },
    _react2.default.createElement(Contents, (0, _extends3.default)({ bibliography: bibliography }, props))
  );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _peritextRenderingUtils = __webpack_require__(8);

var _Layout = __webpack_require__(9);

var _Layout2 = _interopRequireDefault(_Layout);

var _RelatedContexts = __webpack_require__(39);

var _RelatedContexts2 = _interopRequireDefault(_RelatedContexts);

var _NotesContainer = __webpack_require__(40);

var _NotesContainer2 = _interopRequireDefault(_NotesContainer);

var _SectionLink = __webpack_require__(11);

var _SectionLink2 = _interopRequireDefault(_SectionLink);

var _Renderer = __webpack_require__(13);

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
var inBrowser = isBrowser();
var Comments = void 0;
if (inBrowser) {
  Comments = __webpack_require__(42).default;
}

var Contents = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Contents, _Component);

  function Contents(props, context) {
    (0, _classCallCheck3.default)(this, Contents);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Contents.__proto__ || (0, _getPrototypeOf2.default)(Contents)).call(this, props));

    _initialiseProps.call(_this);

    _this.state = {
      gui: {
        openedAssetId: undefined
      },
      fixedPresentationId: undefined,
      fixedPresentationHeight: undefined,
      notes: _this.updateNotes(props, context)
    };

    _this.blockContextualizations = {};

    _this.noteContentPointers = {};

    _this.noteContentBlocks = {};

    _this.bindNoteContentPointer = _this.bindNoteContentPointer.bind(_this);
    _this.bindNoteContentBlock = _this.bindNoteContentBlock.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Contents, [{
    key: 'bindNoteContentPointer',
    value: function bindNoteContentPointer(id, component) {
      this.noteContentPointers[id] = component;
    }
  }, {
    key: 'bindNoteContentBlock',
    value: function bindNoteContentBlock(id, component) {
      this.noteContentBlocks[id] = component;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.query.contextualizationId) {
        this.context.scrollToElementId(this.props.query.contextualizationId);
      }
      if (this.props.query) {
        setTimeout(function () {
          return _this2.context.scrollToElementId(_this2.props.query.contextualizationId);
        }, 2000);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps, nextContext) {
      var _this3 = this;

      if (this.context && nextContext && this.context.scrollTopAbs !== nextContext.scrollTopAbs) {
        this.onScrollUpdate(nextContext.scrollTopAbs);
      }
      // on section change
      if (this.props.sectionId !== nextProps.sectionId) {
        if (this.props.query.contextualizationId === nextProps.query.contextualizationId) {
          this.context.scrollToTop(0);
        }
        this.setState({
          notes: this.updateNotes(nextProps, nextContext),
          fixedPresentationHeight: undefined,
          fixedPresentationId: undefined,
          gui: {
            openedAssetId: undefined
          }
        });
      }
      if (this.props.query !== nextProps.query) {
        if (this.props.query.contextualizationId !== nextProps.query.contextualizationId) {
          setTimeout(function () {
            return _this3.context.scrollToElementId(_this3.props.query.contextualizationId);
          }, 2000);
        }
      }
    }

    /**
     * Handles when a full-screen presentation is exited
     * @param {string} - the direction of the exit (top or bottom)
     */

  }]);
  return Contents;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.getChildContext = function () {
    return {
      onPresentationExit: _this4.onPresentationExit,
      activeContextualizationId: _this4.state.gui.openedAssetId,
      onAssetContextRequest: _this4.onAssetContextRequest,
      fixedPresentationId: _this4.state.fixedPresentationId,
      fixedPresentationHeight: _this4.state.fixedPresentationHeight,
      notes: _this4.context.story.sections[_this4.props.sectionId] && _this4.context.story.sections[_this4.props.sectionId].notes,
      onNoteContentPointerClick: _this4.onNoteContentPointerClick,
      onNoteContentClick: _this4.onNoteContentClick,
      bindBlockContextualization: _this4.bindBlockContextualization,
      bindNoteContentPointer: _this4.bindNoteContentPointer,
      bindNoteContentBlock: _this4.bindNoteContentBlock,
      onExpandableBlockClick: _this4.onExpandableBlockClick
    };
  };

  this.updateNotes = function (props, context) {
    var section = context.story.sections[props.sectionId];
    if (!section) {
      return [];
    }
    var notes = (0, _keys2.default)(section.notes).map(function (id) {
      return section.notes[id];
    }).map(function (note) {
      return (0, _extends3.default)({}, note, {
        finalOrder: note.order
      });
    }).sort(function (a, b) {
      if (a.order > b.order) {
        return 1;
      } else return -1;
    });
    return notes;
  };

  this.onScrollUpdate = function (scrollTopAbs) {
    var contextualizers = _this4.context.contextualizers;

    var expandableBlocks = (0, _keys2.default)(_this4.context.story.contextualizations).map(function (id) {
      return _this4.context.story.contextualizations[id];
    }).filter(function (contextualization) {
      var contextualizer = _this4.context.story.contextualizers[contextualization.contextualizerId];
      var contextualizerModel = contextualizers && contextualizers[contextualizer.type] && contextualizers[contextualizer.type].metadata && contextualizers[contextualizer.type].metadata.model && contextualizers[contextualizer.type].metadata.model.block;
      var expandable = contextualizer.insertionType === 'block' && contextualizerModel && contextualizerModel.expandable;
      return expandable;
      // return (
      //   contextualizer.insertionType === 'block' &&
      //   contextualizer.type === 'data-presentation' ||
      //   contextualizer.type === 'dicto'
      // );
    }).map(function (contextualization) {
      return {
        contextualization: contextualization,
        component: _this4.blockContextualizations[contextualization.id]
      };
    });
    if (!_this4.state.fixedPresentationId) {
      expandableBlocks.some(function (block) {
        var component = block.component;
        if (!component || component.offsetHeight == undefined) {
          return false;
        }
        var height = component.offsetHeight;
        var top = component.offsetTop;
        if (scrollTopAbs >= top && scrollTopAbs <= top + height * .1) {
          _this4.setState({
            fixedPresentationId: block.contextualization.id,
            fixedPresentationHeight: height
          });
          return true;
        }
      });
    }
  };

  this.closeAsideAsset = function () {
    if (_this4.state.gui.openedAssetId) {
      _this4.setState({
        gui: (0, _extends3.default)({}, _this4.state.gui, {
          openedAssetId: undefined
        })
      });
    }
  };

  this.onAssetContextRequest = function (assetId) {
    if (assetId !== _this4.state.gui.openedAssetId) {
      _this4.setState({
        gui: (0, _extends3.default)({}, _this4.state.gui, {
          openedAssetId: assetId
        })
      });
    } else {
      _this4.setState({
        gui: (0, _extends3.default)({}, _this4.state.gui, {
          openedAssetId: undefined
        })
      });
    }
  };

  this.onNoteContentPointerClick = function (noteId) {
    _this4.context.scrollToElementId(noteId);
  };

  this.onNoteContentClick = function (noteId) {
    _this4.context.scrollToElementId('note-content-pointer-' + noteId);
  };

  this.onExpandableBlockClick = function (contextualizationId) {
    _this4.context.scrollToElementId(contextualizationId, false);
  };

  this.onPresentationExit = function (direction) {
    _this4.setState({
      fixedPresentationId: undefined,
      fixedPresentationHeight: undefined
    });
    var top = _this4.context.scrollTopAbs;
    // user is scrolling in direction of the top of the screen
    if (direction === 'top') {
      var h = _this4.state.fixedPresentationHeight || _this4.context.dimensions.height;
      _this4.context.scrollToTop(top - h * 0.7);
    }
    // user is scrolling in direction of the bottom of the screen
    else {
        var _h = _this4.state.fixedPresentationHeight || _this4.context.dimensions.height;
        _this4.context.scrollToTop(top + _h * 0.6);
      }
  };

  this.bindBlockContextualization = function (assetId, element) {
    _this4.blockContextualizations[assetId] = element;
  };

  this.render = function () {
    var onScrollUpdate = _this4.onScrollUpdate,
        closeAsideAsset = _this4.closeAsideAsset,
        _state = _this4.state,
        openedAssetId = _state.gui.openedAssetId,
        notes = _state.notes,
        _props = _this4.props,
        size = _props.size,
        url = _props.url,
        sectionId = _props.sectionId,
        citations = _props.citations,
        _context = _this4.context,
        story = _context.story,
        dimensions = _context.dimensions,
        locale = _context.locale;


    if (!story) {
      return null;
    }

    var dynamicNotesPosition = story.settings.options.dynamicNotesPosition;
    var section = story.sections[sectionId];
    if (!section) {
      return null;
    }
    var options = story.settings && story.settings.options || {};
    var sectionOrder = story.sectionsOrder.indexOf(sectionId);
    var previousSectionId = sectionOrder > 0 && story.sectionsOrder[sectionOrder - 1];
    var nextSectionId = sectionOrder < story.sectionsOrder.length - 1 && story.sectionsOrder[sectionOrder + 1];
    var previousSection = story.sections[previousSectionId];
    var nextSection = story.sections[nextSectionId];
    var storyMetadata = story.metadata;
    var storyTitle = storyMetadata.title,
        storyAuthors = storyMetadata.authors;

    var sectionMetadata = section.metadata;
    var sectionTitle = sectionMetadata.title,
        sectionAuthors = sectionMetadata.authors;

    var contents = section.contents;
    return _react2.default.createElement(
      'section',
      { className: 'main-contents-container section-player' },
      _react2.default.createElement(_peritextRenderingUtils.StructuredCOinS, { resource: section }),
      _react2.default.createElement(
        'h1',
        { className: 'section-title' },
        sectionTitle || locale && locale.untitledSection || 'Section sans titre'
      ),
      section.metadata.subtitle && _react2.default.createElement(
        'h2',
        { className: 'subtitle' },
        section.metadata.subtitle
      ),
      sectionAuthors.length > 0 && _react2.default.createElement(
        'h2',
        { className: 'authors' },
        sectionAuthors && sectionAuthors.length > 0 && sectionAuthors.map(function (author, index) {
          return _react2.default.createElement(
            'span',
            { key: index },
            author.given,
            ' ',
            author.family
          );
        }).reduce(function (prev, curr) {
          return [prev, ', ', curr];
        })
      ),
      _react2.default.createElement(_Renderer2.default, { raw: contents }),
      inBrowser && options.disqus && _react2.default.createElement(Comments, {
        shortname: 'peritext',
        identifier: section.metadata.id,
        title: sectionTitle || locale && locale.untitledSection || 'Section sans titre',
        url: window.location.href.replace(/https?:\/\//, '')
      }),
      _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'ul',
          null,
          previousSection && _react2.default.createElement(
            'li',
            { className: 'prev' },
            _react2.default.createElement(_SectionLink2.default, {
              id: previousSection.id,
              title: '← ' + previousSection.metadata.title
            })
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'i',
              null,
              storyTitle,
              ' - ',
              sectionTitle
            )
          ),
          nextSection && _react2.default.createElement(
            'li',
            { className: 'next' },
            _react2.default.createElement(_SectionLink2.default, {
              id: nextSection.id,
              title: nextSection.metadata.title + ' →'
            })
          )
        )
      ),
      notes.length > 0 ? _react2.default.createElement(_NotesContainer2.default, { pointers: _this4.noteContentPointers, notes: notes, dynamicNotesPosition: dynamicNotesPosition }) : null,
      _react2.default.createElement(
        'aside',
        {
          className: 'section-aside ' + (openedAssetId ? 'active' : ''),
          style: {
            left: dimensions && dimensions.position ? dimensions.position.right - dimensions.width * .2 * .8 : '84%',
            top: dimensions && dimensions.position && dimensions.position.top ? dimensions.position.top : 0,
            height: dimensions && dimensions.height ? dimensions.height : '100%',
            width: dimensions && dimensions.width ? dimensions.width * .2 * .8 : '16%'
          }
        },
        openedAssetId && _react2.default.createElement(_RelatedContexts2.default, {
          story: story,
          assetId: openedAssetId,
          onDismiss: closeAsideAsset,
          citations: citations
        })
      )
    );
  };
}, _temp);


Contents.childContextTypes = {
  onNoteContentPointerClick: _propTypes2.default.func,
  onNoteContentClick: _propTypes2.default.func,
  onPresentationExit: _propTypes2.default.func,
  onAssetContextRequest: _propTypes2.default.func,
  fixedPresentationId: _propTypes2.default.string,
  fixedPresentationHeight: _propTypes2.default.number,
  activeContextualizationId: _propTypes2.default.string,
  bindBlockContextualization: _propTypes2.default.func,
  bindNoteContentPointer: _propTypes2.default.func,
  bindNoteContentBlock: _propTypes2.default.func,
  notes: _propTypes2.default.object,
  onExpandableBlockClick: _propTypes2.default.func
};

Contents.contextTypes = {
  dimensions: _propTypes2.default.object,
  story: _propTypes2.default.object,
  scrollTopAbs: _propTypes2.default.number,
  scrollToTop: _propTypes2.default.func,
  scrollToElementId: _propTypes2.default.func,
  contextualizers: _propTypes2.default.object,
  locale: _propTypes2.default.object
};

exports.default = function (_ref) {
  var id = _ref.id,
      citations = _ref.citations,
      query = _ref.query;
  return _react2.default.createElement(
    _Layout2.default,
    { activeId: id },
    _react2.default.createElement(Contents, { query: query, sectionId: id, citations: citations })
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
__webpack_require__(22);

var metadata = {
  name: 'web garlic',
  type: 'peritext-web-template',
  id: 'web-garlic',
  options: [{
    type: 'boolean',
    id: 'disqus',
    title: {
      fr: 'Intégrer le service de discussion disqus sur les page',
      en: 'Integrate discussion service disqus on pages'
    }
  }, {
    type: 'select',
    id: 'dynamicNotesPosition',
    title: {
      fr: 'Position des notes',
      en: 'Notes position'
    },
    options: [{
      id: 'foot',
      labels: {
        fr: 'Fin de page',
        en: 'Page end'
      }
    }, {
      id: 'aside',
      labels: {
        fr: 'Marge de page',
        en: 'Page margin'
      }
    }]
  }]
};

exports.default = {
  metadata: metadata,
  PreviewContainer: __webpack_require__(23).default,
  Bibliotheca: __webpack_require__(19).default,
  Dimensio: __webpack_require__(18).default,
  Home: __webpack_require__(14).default,
  Lexicon: __webpack_require__(16).default,
  Section: __webpack_require__(20).default,
  typefaceNames: ['roboto', 'merriweather']
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Home = __webpack_require__(14);

var _Home2 = _interopRequireDefault(_Home);

var _Lexicon = __webpack_require__(16);

var _Lexicon2 = _interopRequireDefault(_Lexicon);

var _Dimensio = __webpack_require__(18);

var _Dimensio2 = _interopRequireDefault(_Dimensio);

var _Bibliotheca = __webpack_require__(19);

var _Bibliotheca2 = _interopRequireDefault(_Bibliotheca);

var _Section = __webpack_require__(20);

var _Section2 = _interopRequireDefault(_Section);

var _PreviewLink = __webpack_require__(44);

var _PreviewLink2 = _interopRequireDefault(_PreviewLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewContainer = function (_Component) {
  (0, _inherits3.default)(PreviewContainer, _Component);

  function PreviewContainer(props) {
    (0, _classCallCheck3.default)(this, PreviewContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PreviewContainer.__proto__ || (0, _getPrototypeOf2.default)(PreviewContainer)).call(this, props));

    _this.getChildContext = function () {
      return {
        story: _this.props.story,
        activeViewId: _this.state.viewId,
        navigateTo: _this.navigateTo,
        LinkComponent: _PreviewLink2.default,
        contextualizers: _this.props.contextualizers,
        rawCitations: _this.props.citations,
        locale: _this.props.locale
      };
    };

    _this.navigateTo = function (viewId, query) {
      _this.setState({ viewId: viewId, query: query });
    };

    _this.renderActiveView = function () {
      switch (_this.state.viewId) {
        case 'lexicon':
          return _react2.default.createElement(_Lexicon2.default, {
            glossary: _this.props.glossary
          });
        case 'bibliotheca':
          return _react2.default.createElement(_Bibliotheca2.default, {
            bibliography: _this.props.bibliography,
            authorsIndex: _this.props.authorsIndex
          });
        case 'dimensio':
          return _react2.default.createElement(_Dimensio2.default, {
            storyTitle: _this.props.story.metadata.title,
            pdfUrl: _this.props.pdfUrl,
            epubUrl: _this.props.epubUrl,
            jsonUrl: _this.props.jsonUrl
          });
        case '':
          return _react2.default.createElement(_Home2.default, null);
        default:
          return _react2.default.createElement(_Section2.default, {
            id: _this.state.viewId,
            citations: _this.props.rawCitations,
            query: _this.state.query
          });
      }
    };

    _this.state = {
      viewId: ''
    };
    return _this;
  }

  (0, _createClass3.default)(PreviewContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          story = _props.story,
          contextualizers = _props.contextualizers,
          locale = _props.locale;
      var renderActiveView = this.renderActiveView;

      return renderActiveView();
    }
  }]);
  return PreviewContainer;
}(_react.Component);

exports.default = PreviewContainer;


PreviewContainer.childContextTypes = {
  activeViewId: _propTypes2.default.string,
  navigateTo: _propTypes2.default.func,
  LinkComponent: _propTypes2.default.func,
  story: _propTypes2.default.object,
  contextualizers: _propTypes2.default.object,
  rawCitations: _propTypes2.default.object,
  locale: _propTypes2.default.object
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-sizeme");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("rebound");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SectionLink = __webpack_require__(11);

var _SectionLink2 = _interopRequireDefault(_SectionLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function Nav(_ref, _ref2) {
  var _ref$indexOpen = _ref.indexOpen,
      indexOpen = _ref$indexOpen === undefined ? true : _ref$indexOpen,
      toggleIndex = _ref.toggleIndex,
      activeId = _ref.activeId,
      _ref$inTop = _ref.inTop,
      inTop = _ref$inTop === undefined ? false : _ref$inTop;
  var story = _ref2.story,
      LinkComponent = _ref2.LinkComponent,
      dimensions = _ref2.dimensions,
      locale = _ref2.locale;

  var hasGlossary = (0, _keys2.default)(story.contextualizers).find(function (id) {
    return story.contextualizers[id].type === 'glossary';
  }) !== undefined;
  var hasResources = (0, _keys2.default)(story.resources).length > 0;
  return _react2.default.createElement(
    'nav',
    {
      className: "nav" + (indexOpen ? ' open' : '') + (inTop ? ' in-top' : ''),
      style: {
        position: 'fixed',
        left: dimensions && dimensions.position ? dimensions.position.left : 0,
        top: dimensions && dimensions.position ? dimensions.position.top : 0,
        height: dimensions && dimensions.height ? dimensions.height : '100%',
        width: dimensions && dimensions.width ? dimensions.width * .27 : '27%'
      } },
    toggleIndex && _react2.default.createElement(
      'div',
      {
        className: 'header ' + (inTop || !toggleIndex ? 'hidden' : 'visible')
      },
      _react2.default.createElement(
        'button',
        {
          className: 'index-toggle ' + (indexOpen ? 'active' : ''),
          onClick: toggleIndex },
        _react2.default.createElement(
          'span',
          { id: 'burger-menu', className: indexOpen ? 'open' : '' },
          _react2.default.createElement('span', null),
          _react2.default.createElement('span', null),
          _react2.default.createElement('span', null),
          _react2.default.createElement('span', null)
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'body' },
      _react2.default.createElement(
        'h2',
        { className: 'nav-title' + (activeId === 'index' ? ' active' : ' ') },
        _react2.default.createElement(LinkComponent, { title: story.metadata.title || locale && locale.untitledStory || 'Récit sans titre', to: '' })
      ),
      _react2.default.createElement(
        'ul',
        {
          className: 'table-of-contents' },
        story.sectionsOrder.map(function (id) {
          var section = story.sections[id];
          var sectionLevel = section.metadata.level;
          var sectionTitle = section.metadata.title;
          return _react2.default.createElement(
            'li',
            {
              className: (activeId === id ? 'active ' : ' ') + 'section-link-level-' + sectionLevel,
              key: id },
            _react2.default.createElement(_SectionLink2.default, {
              id: id,
              title: sectionTitle || locale && locale.untitledSection || 'Section sans titre'
            })
          );
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer' },
      _react2.default.createElement(
        'ul',
        null,
        hasGlossary && _react2.default.createElement(
          'li',
          { className: activeId === 'lexicon' ? 'active' : '' },
          _react2.default.createElement(LinkComponent, { title: locale && locale.glossary || 'Glossaire', to: 'lexicon' })
        ),
        hasResources && _react2.default.createElement(
          'li',
          { className: activeId === 'bibliotheca' ? 'active' : '' },
          _react2.default.createElement(LinkComponent, { title: locale && locale.references || 'Références', to: 'bibliotheca' })
        ),
        _react2.default.createElement(
          'li',
          { className: activeId === 'dimensio' ? 'active' : '' },
          _react2.default.createElement(LinkComponent, { title: locale && locale.otherFormats || 'Autres formats', to: 'dimensio' })
        )
      )
    )
  );
};

Nav.contextTypes = {
  story: _propTypes2.default.object,
  LinkComponent: _propTypes2.default.func,
  dimensions: _propTypes2.default.object,
  locale: _propTypes2.default.object
};

exports.default = Nav;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redraft");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a link as a pure component
 * @param {object} props
 * @param {string} props.to - the url to point to
 * @param {array} props.children - children elements of the component
 * @return {ReactElement} component - the component
 */
/**
 * This module exports a stateless reusable external link component
 * ============
 * @module perinext/components/Link
 */
var Link = function Link(_ref) {
  var to = _ref.to,
      children = _ref.children;
  return _react2.default.createElement(
    'a',
    { href: to, target: 'blank' },
    children
  );
};

/**
 * Component's properties types
 */
Link.propTypes = {
  /**
   * url to point to
   */
  to: _propTypes2.default.string,
  /**
   * children react elements
   */
  children: _propTypes2.default.array
};

exports.default = Link;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _peritextRenderingUtils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockAssetWrapper = function (_Component) {
  (0, _inherits3.default)(BlockAssetWrapper, _Component);

  function BlockAssetWrapper(props) {
    (0, _classCallCheck3.default)(this, BlockAssetWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (BlockAssetWrapper.__proto__ || (0, _getPrototypeOf2.default)(BlockAssetWrapper)).call(this, props));
  }

  (0, _createClass3.default)(BlockAssetWrapper, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      if (this.props.data !== nextProps.data || this.context.story !== nextContext.story || this.context.fixedPresentationId !== nextContext.fixedPresentationId || this.context.dimensions.width !== nextContext.dimensions.width || this.context.dimensions.height !== nextContext.dimensions.height || this.context.activeContextualizationId !== nextContext.activeContextualizationId) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data,
          _context = this.context,
          story = _context.story,
          _context$dimensions = _context.dimensions,
          dimensions = _context$dimensions === undefined ? {} : _context$dimensions,
          fixedPresentationId = _context.fixedPresentationId,
          onPresentationExit = _context.onPresentationExit,
          inNote = _context.inNote,
          contextualizers = _context.contextualizers,
          activeContextualizationId = _context.activeContextualizationId,
          onAssetContextRequest = _context.onAssetContextRequest,
          bindBlockContextualization = _context.bindBlockContextualization,
          onExpandableBlockClick = _context.onExpandableBlockClick;


      var assetId = data.asset.id;
      var contextualization = story && story.contextualizations && story.contextualizations[assetId];
      if (!contextualization) {
        return null;
      }
      var contextualizer = story.contextualizers[contextualization.contextualizerId];
      var resource = story.resources[contextualization.resourceId];
      var contextualizerModule = contextualizers[contextualizer.type];
      var Component = contextualizerModule && contextualizerModule.BlockDynamic;
      var expandable = contextualizerModule && contextualizerModule.metadata && contextualizerModule.metadata.model && contextualizerModule.metadata.model.block && contextualizerModule.metadata.model.block.expandable;
      var onExit = function onExit(direction) {
        if (onPresentationExit && typeof onPresentationExit === 'function') {
          onPresentationExit(direction);
        }
      };
      var onExitTop = function onExitTop() {
        onPresentationExit('top');
      };
      var onExitBottom = function onExitBottom() {
        onPresentationExit('bottom');
      };
      var fixed = fixedPresentationId === assetId;
      var active = assetId === activeContextualizationId;
      var onClick = function onClick() {
        if (typeof onAssetContextRequest === 'function') {
          onAssetContextRequest(assetId);
        }
      };

      var handleWheel = function handleWheel(e) {
        e.stopPropagation();
      };

      var bindRef = function bindRef(component) {
        if (typeof bindBlockContextualization === 'function') {
          bindBlockContextualization(assetId, component);
        }
      };

      var onContainerClick = function onContainerClick(e) {
        if (!fixed && expandable && typeof onExpandableBlockClick === 'function') {
          e.stopPropagation();
          e.preventDefault();
          onExpandableBlockClick(assetId);
        }
      };

      if (contextualization && Component) {
        var hideInWebMode = contextualizer.visibility !== undefined ? !contextualizer.visibility.web : false;
        return hideInWebMode ? null : _react2.default.createElement(
          'figure',
          {
            ref: bindRef,
            onClick: onContainerClick,
            onWheel: handleWheel,
            className: 'BlockAssetWrapper ' + contextualizer.type + (active ? ' active' : '') + (fixed ? ' fixed' : '') + (expandable ? ' expandable' : ''),
            style: {
              minHeight: contextualizer.type === 'data-presentation' || contextualizer.type === 'dicto' ? dimensions.height : '',
              height: contextualizer.type === 'data-presentation' || contextualizer.type === 'dicto' ? dimensions.height : '',
              position: fixed ? 'fixed' : 'relative',
              left: fixed ? dimensions && dimensions.position && dimensions.position.left : undefined,
              top: fixed ? dimensions && dimensions.position && dimensions.position.top : undefined,
              width: fixed ? dimensions && dimensions.width : undefined,
              // height: fixed ? dimensions.height : undefined,
              border: fixed ? '5px solid #f32e36' : undefined
            },
            id: assetId
          },
          _react2.default.createElement(_peritextRenderingUtils.StructuredCOinS, { resource: resource }),
          _react2.default.createElement(Component, {
            resource: resource,
            contextualizer: contextualizer,
            contextualization: contextualization,

            onExit: onExit,

            fixed: fixed,
            allowInteractions: inNote || fixed
          }),
          fixed && _react2.default.createElement(
            'div',
            { className: 'quick-exit-container' },
            _react2.default.createElement(
              'button',
              { className: 'exit-top', onClick: onExitTop },
              '\u25B2'
            ),
            _react2.default.createElement(
              'button',
              { className: 'exit-bottom', onClick: onExitBottom },
              '\u25BC'
            )
          ),
          _react2.default.createElement(
            'figcaption',
            null,
            _react2.default.createElement(
              'h4',
              null,
              contextualization.title || resource.metadata.title
            ),
            _react2.default.createElement(
              'p',
              null,
              contextualization.legend || resource.metadata.description
            ),
            resource.metadata.source && _react2.default.createElement(
              'p',
              null,
              'Source: ',
              _react2.default.createElement(
                'i',
                null,
                resource.metadata.source
              )
            ),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'button',
                { style: { cursor: 'pointer' }, onClick: onClick },
                '\uD83D\uDD00'
              )
            )
          )
        );
      } else {
        return null;
      }
    }
  }]);
  return BlockAssetWrapper;
}(_react.Component);
/**
 * Component's properties types
 */
/**
 * This module exports a stateless reusable block asset wrapper component
 * It handles the connection to context's data and builds proper data to render the asset
 * ============
 */


BlockAssetWrapper.propTypes = {
  /**
   * Corresponds to the data initially embedded in a draft-js entity
   */
  data: _propTypes2.default.shape({
    asset: _propTypes2.default.shape({
      id: _propTypes2.default.string
    })
  })
};
/**
 * Component's context used properties
 */
BlockAssetWrapper.contextTypes = {
  /**
   * The active story data
   */
  story: _propTypes2.default.object,
  /**
   * Dimensions of the wrapping element
   */
  dimensions: _propTypes2.default.object,
  /**
   * Id of the presentation being displayed full screen if any
   */
  fixedPresentationId: _propTypes2.default.string,
  /**
   * Whether the block asset is displayed in a note (and not in main content)
   */
  inNote: _propTypes2.default.bool,

  contextualizers: _propTypes2.default.object,
  /**
   * Triggered when a full-screen asset is exited
   */
  onPresentationExit: _propTypes2.default.func,

  activeContextualizationId: _propTypes2.default.string,

  onAssetContextRequest: _propTypes2.default.func,

  bindBlockContextualization: _propTypes2.default.func,

  onExpandableBlockClick: _propTypes2.default.func
};

exports.default = BlockAssetWrapper;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _peritextRenderingUtils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineAssetWrapper = function InlineAssetWrapper(_ref, _ref2) {
  var data = _ref.data;
  var story = _ref2.story,
      contextualizers = _ref2.contextualizers,
      onAssetContextRequest = _ref2.onAssetContextRequest,
      activeContextualizationId = _ref2.activeContextualizationId;

  var assetId = data.asset && data.asset.id;
  if (!assetId || !story) {
    return null;
  }
  var contextualization = story.contextualizations[assetId];
  if (!contextualization) {
    return null;
  }

  var contextualizer = story.contextualizers[contextualization.contextualizerId];
  var resource = story.resources[contextualization.resourceId];
  var contextualizerModule = contextualizers[contextualizer.type];
  var Component = contextualizerModule && contextualizerModule.InlineDynamic;

  var onClick = function onClick() {
    if (typeof onAssetContextRequest === 'function') {
      onAssetContextRequest(assetId);
    }
  };

  var active = assetId === activeContextualizationId;

  if (contextualizer && Component) {
    return _react2.default.createElement(
      'span',
      {
        className: 'InlineAssetWrapper ' + 'inline-' + contextualizer.type + (active ? ' active' : ''),
        id: assetId
      },
      _react2.default.createElement(_peritextRenderingUtils.StructuredCOinS, { resource: resource }),
      _react2.default.createElement(Component, {
        contextualization: contextualization,
        contextualizer: contextualizer,
        onClick: onClick,
        resource: resource
      })
    );
  }
  return null;
};

/**
 * Component's properties types
 */
InlineAssetWrapper.propTypes = {
  /**
   * Corresponds to the data initially embedded in a draft-js entity
   */
  data: _propTypes2.default.shape({
    asset: _propTypes2.default.shape({
      id: _propTypes2.default.string
    })
  })
};
/**
 * Component's context used properties
 */
InlineAssetWrapper.contextTypes = {
  story: _propTypes2.default.object,
  contextualizers: _propTypes2.default.object,
  onAssetContextRequest: _propTypes2.default.func,
  activeContextualizationId: _propTypes2.default.string
};

exports.default = InlineAssetWrapper;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a not pointer as a pure component
 * @param {object} props
 * @param {array} props.children - children elements of the component
 * @param {array} props.noteId - the id of the note to point to
 * @param {object} context - the context data of the component
 * @return {ReactElement} component - the component
 */
/**
 * This module exports a stateless reusable note pointer component
 * ============
 * @module quinoa-story-player/components/NotePointer
 */
var NotePointer = function (_Component) {
  (0, _inherits3.default)(NotePointer, _Component);

  function NotePointer() {
    (0, _classCallCheck3.default)(this, NotePointer);
    return (0, _possibleConstructorReturn3.default)(this, (NotePointer.__proto__ || (0, _getPrototypeOf2.default)(NotePointer)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotePointer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          _props$noteId = _props.noteId,
          noteId = _props$noteId === undefined ? '' : _props$noteId,
          _context = this.context,
          notes = _context.notes,
          onNoteContentPointerClick = _context.onNoteContentPointerClick,
          bindNoteContentPointer = _context.bindNoteContentPointer;


      var onNoteClick = function onNoteClick() {
        return typeof onNoteContentPointerClick === 'function' && onNoteContentPointerClick(noteId);
      };
      if (notes) {
        var note = notes[noteId];
        if (note) {
          var bindRef = function bindRef(el) {
            bindNoteContentPointer(noteId, el);
          };
          return _react2.default.createElement(
            'sup',
            { ref: bindRef, onClick: onNoteClick, className: 'note-content-pointer', id: 'note-content-pointer-' + noteId },
            note.order,
            children
          );
        }
        return null;
      }
      return null;
    }
  }]);
  return NotePointer;
}(_react.Component);

/**
 * Component's properties types
 */


NotePointer.propTypes = {
  /**
   * Children react components
   */
  children: _propTypes2.default.array,
  /**
   * id of the note to render
   */
  noteId: _propTypes2.default.string
};

/**
 * Component's context used properties
 */
NotePointer.contextTypes = {
  /**
   * Map of available notes to look into
   */
  notes: _propTypes2.default.object,
  /**
   * Triggers a callback upstream when the pointer is clicked
   */
  onNoteContentPointerClick: _propTypes2.default.func,

  bindNoteContentPointer: _propTypes2.default.func
};

exports.default = NotePointer;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactReader = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EpubPlayerWrapper = function (_Component) {
  (0, _inherits3.default)(EpubPlayerWrapper, _Component);

  function EpubPlayerWrapper(props) {
    (0, _classCallCheck3.default)(this, EpubPlayerWrapper);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EpubPlayerWrapper.__proto__ || (0, _getPrototypeOf2.default)(EpubPlayerWrapper)).call(this, props));

    _this.onRenditionSelection = function (cfiRange, contents) {
      // console.log('Selection was created', cfiRange, contents)
      contents.mark(cfiRange, {}, function (e) {
        // console.log('You clicked the selection')
      });
      contents.highlight(cfiRange);
      contents.window.getSelection().removeAllRanges();
    };

    _this.getRendition = function (rendition) {
      rendition.on('selected', _this.onRenditionSelection);
      rendition.themes.default({
        '::selection': {
          'background': 'rgba(255,255,0, 0.3)'
        },
        '.epubjs-hl': {
          'fill': 'yellow', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply'
        },
        'p': {
          'padding': '0 20px 0 0',
          'text-align': 'left',
          'position': 'relative'
        },
        '[ref="epubjs-mk"]::before': {
          'content': '""',
          'background': 'url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHg9JzBweCcgeT0nMHB4JyB2aWV3Qm94PScwIDAgNzUgNzUnPjxnIGZpbGw9JyNCREJEQkQnIGlkPSdidWJibGUnPjxwYXRoIGNsYXNzPSdzdDAnIGQ9J00zNy41LDkuNEMxOS42LDkuNCw1LDIwLjUsNSwzNC4zYzAsNS45LDIuNywxMS4zLDcuMSwxNS42TDkuNiw2NS42bDE5LTcuM2MyLjgsMC42LDUuOCwwLjksOC45LDAuOSBDNTUuNSw1OS4yLDcwLDQ4LjEsNzAsMzQuM0M3MCwyMC41LDU1LjQsOS40LDM3LjUsOS40eicvPjwvZz48L3N2Zz4=") no-repeat',
          'display': 'block',
          'right': '0',
          'position': 'absolute',
          'width': '20px',
          'height': '20px',
          'margin': '0',
          'cursor': 'pointer'
        }
      });
    };

    _this.render = function () {
      var _this$props = _this.props,
          url = _this$props.url,
          onEpubLocationChange = _this$props.onEpubLocationChange,
          storyTitle = _this$props.storyTitle,
          epubLocation = _this$props.epubLocation;
      var getRendition = _this.getRendition;

      return _react2.default.createElement(
        'div',
        { className: 'epub-player-wrapper', style: {
            position: 'relative', width: '100%', height: '50em'
          } },
        _react2.default.createElement(
          'div',
          {
            className: 'epub-player-container'
          },
          _react2.default.createElement(_reactReader.ReactReader, {
            url: url,
            title: storyTitle,
            location: epubLocation,
            locationChanged: onEpubLocationChange,
            getRendition: getRendition
          })
        )
      );
    };

    return _this;
  }

  (0, _createClass3.default)(EpubPlayerWrapper, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.url !== nextProps.url;
    }
  }]);
  return EpubPlayerWrapper;
}(_react.Component);

exports.default = EpubPlayerWrapper;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("react-reader");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-pdf");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCiteproc = __webpack_require__(15);

var _peritextRenderingUtils = __webpack_require__(8);

var _ContextMention = __webpack_require__(12);

var _ContextMention2 = _interopRequireDefault(_ContextMention);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeAssetTitle = function makeAssetTitle(resource, story, citations) {
  var type = resource.metadata.type;
  switch (type) {
    case 'glossary':
      return resource.data.name ? resource.data.name : resource.data.firstName + ' ' + resource.data.lastName;
    case 'bib':
      var citation = (0, _reactCiteproc.makeBibliography)(citations.citationItems, story.settings.citationStyle.data, story.settings.citationLocale.data, {
        select: [{
          field: 'id',
          value: resource.data[0].id
        }]
      })[1];
      return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: citation } });
    default:
      console.log('cannot make asset title for resource type ', type);
      return resource.metadata.title;
  }
};

var RelatedContexts = function RelatedContexts(_ref, _ref2) {
  var story = _ref.story,
      assetId = _ref.assetId,
      onDismiss = _ref.onDismiss;
  var rawCitations = _ref2.rawCitations,
      contextualizers = _ref2.contextualizers;

  var contextualization = story.contextualizations[assetId];

  var resourceId = contextualization.resourceId;
  var related = (0, _keys2.default)(story.contextualizations).filter(function (contextualizationId) {
    return contextualizationId !== assetId && story.contextualizations[contextualizationId].resourceId === resourceId;
  }).map(function (contextualizationId) {
    return (0, _extends3.default)({}, story.contextualizations[contextualizationId], (0, _peritextRenderingUtils.buildContextContent)(story, contextualizationId));
  });
  var resource = story.resources[contextualization.resourceId];
  var assetTitle = makeAssetTitle(resource, story, rawCitations);
  var Citation = resource.metadata.type !== 'bib' && resource.metadata.type !== 'glossary' && contextualizers.bib && contextualizers.bib.BlockDynamic;
  return _react2.default.createElement(
    'div',
    { className: 'RelatedContexts' },
    _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement(
        'h2',
        null,
        assetTitle,
        ' ',
        _react2.default.createElement(
          'button',
          { className: 'close-context-btn', onClick: onDismiss },
          'X'
        ),
        ' '
      ),
      Citation && _react2.default.createElement(Citation, { resource: resource })
    ),
    related.length ? _react2.default.createElement(
      'h3',
      null,
      'Cette ressource est aussi contextualis\xE9e dans :'
    ) : null,
    related.length ? _react2.default.createElement(
      'ul',
      { className: 'body' },
      related.filter(function (contextualization) {
        return contextualization.targetContents !== undefined;
      }).map(function (contextualization) {
        return _react2.default.createElement(
          'li',
          { key: contextualization.id },
          _react2.default.createElement(_ContextMention2.default, {
            onButtonClick: onDismiss,
            targetContents: contextualization.targetContents,
            contents: contextualization.contents,
            sectionTitle: contextualization.sectionTitle,
            sectionId: contextualization.sectionId,
            contextualizationId: contextualization.id
          })
        );
      })
    ) : _react2.default.createElement(
      'div',
      { className: 'body' },
      'Pas d\'autres contextualizations'
    )
  );
};

RelatedContexts.contextTypes = {
  rawCitations: _propTypes2.default.object,
  contextualizers: _propTypes2.default.object
};

exports.default = RelatedContexts;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NoteItem = __webpack_require__(41);

var _NoteItem2 = _interopRequireDefault(_NoteItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieves the absolute offset of an element
 * (this avoids to use an additionnal lib such as jquery to handle the operation)
 * (todo: this should be stored in a separate utils file)
 * @param {DOMElement} el - the element to inspect
 * @return {object} offset - the absolute offset of the element
 */
function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

/**
 * NotesContainer class for building notes container react component instances
 */
/**
 * This module exports a statefull reusable notes container component
 * When notes are displayed as footnotes it displays them as stacked blocks.
 * When notes are displayed as sidenotes it tries to align them with
 * their pointer, and handles the overflows by stacking them.
 * ============
 * @module quinoa-story-player/components/NotesContainer
 */

var NotesContainer = function (_Component) {
  (0, _inherits3.default)(NotesContainer, _Component);

  /**
   * constructor
   * @param {object} props - properties given to instance at instanciation
   */
  function NotesContainer(props) {
    (0, _classCallCheck3.default)(this, NotesContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NotesContainer.__proto__ || (0, _getPrototypeOf2.default)(NotesContainer)).call(this, props));

    _this.updatePositions = function () {
      // we store the elements to position in the right order
      var components = _this.props.notes.sort(function (a, b) {
        if (a.finalOrder > b.finalOrder) {
          return 1;
        }
        return -1;
      }).map(function (note) {
        // const component = document.getElementById('note-content-pointer-' + note.id);
        var component = _this.props.pointers[note.id];
        if (!component) {
          return;
        }

        // const position = component.getBoundingClientRect();
        // console.log('note position', document.body.getBoundingClientRect());
        // const position = getOffset(component);
        var top = component.offsetTop + component.parentNode.parentNode.offsetTop;
        return {
          order: note.finalOrder,
          noteId: note.id,
          component: component,
          offsetTop: top
        };
      }).filter(function (item) {
        return item !== undefined;
      });

      var notesStyles = {};
      var y = 0;
      var prevHeight = 0;

      // we try to position the elements in front of their pointer
      // stack them if they would overlapp with a previous note
      // (todo: this could be improved)
      for (var index = 0; index < components.length; index++) {
        var component = components[index];
        var wantedHeight = component.offsetTop;
        if (wantedHeight > y + prevHeight) {
          y = wantedHeight;
        } else {
          y = y + prevHeight + 10;
        }
        // update prevHeight with current component
        var noteItem = _this.notes[component.noteId];
        if (!noteItem.component || noteItem.component.offsetHeight === undefined) {
          continue;
        }
        prevHeight = noteItem.component.offsetHeight;
        // update note styles
        notesStyles[component.noteId] = {
          top: y,
          position: 'absolute',
          left: 0
        };
      }
      _this.setState({ notesStyles: notesStyles });
    };

    _this.notes = {};
    /**
     * Initial state
     */
    _this.state = {
      /**
       * notesStyles will store a map of styles for each note
       * (keys will be notes ids, values styling objects)
       */
      notesStyles: {}
    };
    return _this;
  }

  /**
   * Executes code after the component was mounted
   */


  (0, _createClass3.default)(NotesContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // if notes are displayed side by side with content
      // we have to compute their position after contents were
      // rendered a first time
      if (this.props.dynamicNotesPosition === 'aside') {
        setTimeout(function () {
          _this2.updatePositions();
        });
        setTimeout(this.updatePositions, 5000);
      }
    }

    /**
     * Executes code when component receives new properties
     * @param {object} nextProps - the future properties of the component
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.dynamicNotesPosition !== nextProps.dynamicNotesPosition && nextProps.dynamicNotesPosition === 'aside' || this.props.notes !== nextProps.notes) {
        this.updatePositions();
        // we launch it a second time to wait the height
        // of notes has adjusted to their new container
        // (todo: improve that)
        setTimeout(this.updatePositions);
        setTimeout(this.updatePositions, 5000);
      }
    }

    /**
     * Updates the position of each note according to the notes position option
     * and positions of note pointers if in sideNotes mode
     */

  }, {
    key: 'render',

    /**
     * Renders the component
     * @return {ReactElement} component - the component
     */
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          notes = _props.notes,
          dynamicNotesPosition = _props.dynamicNotesPosition;
      var notesStyles = this.state.notesStyles;
      var bindNoteContentBlock = this.context.bindNoteContentBlock;


      return _react2.default.createElement(
        'div',
        { className: 'notes-container notes-container-position-' + dynamicNotesPosition },
        dynamicNotesPosition !== 'aside' && _react2.default.createElement(
          'h3',
          null,
          'Notes'
        ),
        _react2.default.createElement(
          'ol',
          { className: 'notes-list' },
          notes.sort(function (a, b) {
            if (a.finalOrder > b.finalOrder) {
              return 1;
            }
            return -1;
          }).map(function (note) {
            var bindRef = function bindRef(noteEl) {
              _this3.notes[note.id] = noteEl;
              bindNoteContentBlock(note.id, noteEl);
            };
            return _react2.default.createElement(_NoteItem2.default, {
              key: note.finalOrder,
              note: note,
              ref: bindRef,
              style: _this3.props.dynamicNotesPosition === 'aside' ? notesStyles[note.id] : {} });
          })
        )
      );
    }
  }]);
  return NotesContainer;
}(_react.Component);

/**
 * Component's properties types
 */


NotesContainer.propTypes = {
  notes: _propTypes2.default.array,
  dynamicNotesPosition: _propTypes2.default.oneOf(['aside', 'foot'])
};

NotesContainer.contextTypes = {
  bindNoteContentBlock: _propTypes2.default.func
};

exports.default = NotesContainer;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Renderer = __webpack_require__(13);

var _Renderer2 = _interopRequireDefault(_Renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * NoteItem class for building NoteItem react component instances
 */
var NoteItem = function (_Component) {
  (0, _inherits3.default)(NoteItem, _Component);

  /**
   * constructor
   * @param {object} props - properties given to instance at instanciation
   */
  function NoteItem(props) {
    (0, _classCallCheck3.default)(this, NoteItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NoteItem.__proto__ || (0, _getPrototypeOf2.default)(NoteItem)).call(this, props));

    _this.getChildContext = function () {
      return {
        inNote: true
      };
    };

    return _this;
  }
  /**
   * Updates data in the context when the state or props change
   */


  (0, _createClass3.default)(NoteItem, [{
    key: 'render',

    /**
     * Renders the component
     * @return {ReactElement} component - the component
     */
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          note = _props.note,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style;
      var onNoteContentClick = this.context.onNoteContentClick;


      var bindRef = function bindRef(component) {
        _this2.component = component;
      };
      var onClick = function onClick(e) {
        e.stopPropagation();
        onNoteContentClick(note.id);
      };
      return _react2.default.createElement(
        'li',
        {
          style: style,
          className: 'note-item',
          ref: bindRef,
          id: note.id },
        _react2.default.createElement(
          'span',
          { onClick: onClick, className: 'note-block-pointer', id: 'note-block-pointer-' + note.id },
          note.finalOrder
        ),
        _react2.default.createElement(_Renderer2.default, { raw: note.editorState })
      );
    }
  }]);
  return NoteItem;
}(_react.Component);

/**
 * Component's properties types
 */
/* eslint react/forbid-prop-types:0 */
/**
 * This module exports a statefull reusable note player component
 * ============
 * @module quinoa-story-player/components/NoteItem
 */

NoteItem.propTypes = {
  note: _propTypes2.default.object,
  style: _propTypes2.default.object
};

NoteItem.contextTypes = {
  onNoteContentClick: _propTypes2.default.func
  /**
   * Component's context properties provided to children
   */
};NoteItem.childContextTypes = {
  /**
   * Specifies that context is a note for all
   * assets displayed in this note
   */
  inNote: _propTypes2.default.bool
};

exports.default = NoteItem;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(4);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(5);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
var inBrowser = isBrowser();
var ReactDisqusComments = void 0;
if (inBrowser) {
  ReactDisqusComments = __webpack_require__(43).default;
} else {
  ReactDisqusComments = _react2.default.createElement('div', null);
}

/**
 * ReactDisqusWrapper class for building disqus wrapper react component instances
 */

var ReactDisqusWrapper = function (_Component) {
  (0, _inherits3.default)(ReactDisqusWrapper, _Component);

  function ReactDisqusWrapper() {
    (0, _classCallCheck3.default)(this, ReactDisqusWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (ReactDisqusWrapper.__proto__ || (0, _getPrototypeOf2.default)(ReactDisqusWrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReactDisqusWrapper, [{
    key: 'shouldComponentUpdate',


    /**
     * Defines whether component should be updated
     * @param {object} nextProps - the props to come
     * @return {boolean} shouldUpdate - whether to update
     */
    value: function shouldComponentUpdate(nextProps) {
      return this.props.identifier !== nextProps.identifier || this.props.shortname !== nextProps.shortname || this.props.title !== nextProps.title || this.props.url !== nextProps.url;
    }

    /**
     * Renders the component
     * @return {ReactElement} component - the component
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          shortname = _props.shortname,
          identifier = _props.identifier,
          title = _props.title,
          url = _props.url,
          onNewComment = _props.onNewComment;


      var handleNewComment = function handleNewComment(comment) {
        // we add a little security in case no onNewComment callback is provided
        if (onNewComment && typeof onNewComment === 'function') {
          onNewComment(comment);
        }
      };

      return _react2.default.createElement(ReactDisqusComments, {
        shortname: shortname,
        identifier: identifier,
        title: title,
        url: url,
        onNewComment: handleNewComment
      });
    }
  }]);
  return ReactDisqusWrapper;
}(_react.Component);

/**
 * Component's properties types
 */


ReactDisqusWrapper.propTypes = {
  /**
   * These properties are the one needed by react-disqus-thread
   * see : https://github.com/mzabriskie/react-disqus-thread
   */
  shortname: _propTypes2.default.string,
  identifier: _propTypes2.default.string,
  title: _propTypes2.default.string,
  url: _propTypes2.default.string,
  onNewComment: _propTypes2.default.func
};

exports.default = ReactDisqusWrapper;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-disqus");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewLink = function PreviewLink(_ref, _ref2) {
  var to = _ref.to,
      as = _ref.as,
      _ref$query = _ref.query,
      query = _ref$query === undefined ? {} : _ref$query,
      title = _ref.title,
      onButtonClick = _ref.onButtonClick;
  var navigateTo = _ref2.navigateTo,
      activeViewId = _ref2.activeViewId;
  return _react2.default.createElement(
    'button',
    {
      onClick: function onClick(e) {
        if (typeof onButtonClick === 'function') {
          onButtonClick();
        }
        navigateTo(query.id || to, query);
      },
      className: "link " + (activeViewId === to ? 'active' : '') },
    title
  );
};

PreviewLink.contextTypes = {
  navigateTo: _propTypes2.default.func,
  activeViewId: _propTypes2.default.string
};

exports.default = PreviewLink;

/***/ })
/******/ ])["default"];