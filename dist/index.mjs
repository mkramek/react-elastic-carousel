'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var ResizeObserver = require('resize-observer-polyfill');
var Only = require('react-only-when');
var reactSwipeable = require('react-swipeable');
var styled = require('styled-components');
var cx = require('classnames');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var noop = function noop() {};
var numberToArray = function numberToArray(n) {
  return _toConsumableArray(Array(n).keys());
};
var cssPrefix = function cssPrefix() {
  var prefix = "rec";
  var space = " ";
  var result = "".concat(prefix); // initial it with global prefix;

  // in case of an array we add the class prefix per item;
  for (var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++) {
    classNames[_key] = arguments[_key];
  }
  var chainedClasses = classNames.reduce(function (acc, current) {
    if (current) {
      acc += "".concat(space).concat(prefix, "-").concat(current); // we must keep spaces between class names
    }
    return acc;
  }, "");
  result += chainedClasses;
  return result;
};
var pipe = function pipe() {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function (x) {
    return fns.reduce(function (v, f) {
      return f(v);
    }, x);
  };
};

var _templateObject$7;
var Button = styled.button.attrs(function (_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "button" : _ref$type;
  return {
    type: type
  };
})(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  transition: all 0.3s ease;\n  font-size: 1.6em;\n  background-color: rgba(103, 58, 183, 0.1);\n  color: ", ";\n  box-shadow: 0 0 2px 0px #333;\n  border-radius: 50%;\n  border: none;\n  padding: 0;\n  width: 50px;\n  height: 50px;\n  min-width: 50px;\n  line-height: 50px;\n  align-self: center;\n  cursor: pointer;\n  outline: none;\n  &:hover:enabled,\n  &:focus:enabled {\n    color: #fff;\n    background-color: rgba(103, 58, 183, 1);\n    box-shadow: 0 0 2px 0 #333;\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n"])), function (props) {
  return props.disabled ? "#999" : "#333";
});

var consts = {
  PREV: "PREV",
  NEXT: "NEXT",
  START: "flex-start",
  CENTER: "center",
  END: "flex-end"
};

var _templateObject$6;
var ItemWrapper = styled.div.attrs(function (_ref) {
  var style = _ref.style;
  return {
    style: style,
    className: cssPrefix("item-wrapper")
  };
})(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  overflow: hidden;\n  user-select: none;\n  justify-content: ", ";\n"])), function (_ref2) {
  var itemPosition = _ref2.itemPosition;
  return itemPosition;
});
ItemWrapper.defaultProps = {
  style: {},
  itemPosition: consts.CENTER
};
ItemWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
  itemPosition: PropTypes.oneOf([consts.START, consts.CENTER, consts.END])
};

var _templateObject$5;
var SliderContainer = styled.div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  margin: 0 10px;\n"])));

var _templateObject$4;
var calcLeft = function calcLeft(_ref) {
  var isRTL = _ref.isRTL,
    verticalMode = _ref.verticalMode,
    isSwiping = _ref.isSwiping,
    swipedSliderPosition = _ref.swipedSliderPosition,
    sliderPosition = _ref.sliderPosition;
  if (verticalMode || isRTL) {
    return "auto";
  } else {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  }
};
var calcRight = function calcRight(_ref2) {
  var isRTL = _ref2.isRTL,
    verticalMode = _ref2.verticalMode,
    isSwiping = _ref2.isSwiping,
    swipedSliderPosition = _ref2.swipedSliderPosition,
    sliderPosition = _ref2.sliderPosition;
  if (!verticalMode && isRTL) {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  } else {
    return "auto";
  }
};
var calcTop = function calcTop(_ref3) {
  var verticalMode = _ref3.verticalMode,
    isSwiping = _ref3.isSwiping,
    swipedSliderPosition = _ref3.swipedSliderPosition,
    sliderPosition = _ref3.sliderPosition;
  if (!verticalMode) {
    return "auto";
  } else {
    return "".concat(isSwiping ? swipedSliderPosition : sliderPosition, "px");
  }
};
var calcTransition = function calcTransition(_ref4) {
  var isSwiping = _ref4.isSwiping,
    transitionMs = _ref4.transitionMs,
    easing = _ref4.easing,
    tiltEasing = _ref4.tiltEasing;
  var duration = isSwiping ? 0 : transitionMs;
  var effectiveEasing = isSwiping ? tiltEasing : easing;
  return "all ".concat(duration, "ms ").concat(effectiveEasing);
};

// We use attributes (style) to bypass multiple creation of classes (dynamic styling)
var Slider = styled.div.attrs(function (props) {
  return {
    style: {
      transition: calcTransition(props),
      left: calcLeft(props),
      right: calcRight(props),
      top: calcTop(props)
    }
  };
})(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  flex-direction: ", ";\n  ", ";\n  ", ";\n"])), function (_ref5) {
  var verticalMode = _ref5.verticalMode;
  return verticalMode ? "column" : "row";
}, function (_ref6) {
  var verticalMode = _ref6.verticalMode;
  return verticalMode ? "min-height: 100%;" : "";
}, function (_ref7) {
  var verticalMode = _ref7.verticalMode,
    outerSpacing = _ref7.outerSpacing;
  return verticalMode ? "" : "margin: 0 ".concat(outerSpacing, "px;");
});

var _templateObject$3;
var StyledCarousel = styled.div.attrs(function (props) {
  return {
    style: {
      height: props.size.height
    }
  };
})(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n"])));

var _templateObject$2;
var CarouselWrapper = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  direction: ", ";\n"])), function (_ref) {
  var isRTL = _ref.isRTL;
  return isRTL ? "rtl" : "ltr";
});

var ItemWrapperContainer = /*#__PURE__*/function (_React$Component) {
  function ItemWrapperContainer() {
    var _this;
    _classCallCheck(this, ItemWrapperContainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ItemWrapperContainer, [].concat(args));
    _defineProperty(_this, "onClick", function () {
      var _this$props = _this.props,
        onClick = _this$props.onClick,
        id = _this$props.id;
      onClick(id);
    });
    return _this;
  }
  _inherits(ItemWrapperContainer, _React$Component);
  return _createClass(ItemWrapperContainer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ItemWrapper, _extends({}, this.props, {
        onClick: this.onClick
      }));
    }
  }]);
}(React.Component);
ItemWrapperContainer.defaultProps = {
  onClick: noop
};
ItemWrapperContainer.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};

var Track = function Track(_ref) {
  var children = _ref.children,
    childWidth = _ref.childWidth,
    autoTabIndexVisibleItems = _ref.autoTabIndexVisibleItems,
    enableSwipe = _ref.enableSwipe,
    enableMouseSwipe = _ref.enableMouseSwipe,
    preventDefaultTouchmoveEvent = _ref.preventDefaultTouchmoveEvent,
    itemsToShow = _ref.itemsToShow,
    itemsToScroll = _ref.itemsToScroll,
    currentItem = _ref.currentItem,
    itemPosition = _ref.itemPosition,
    itemPadding = _ref.itemPadding,
    onSwiped = _ref.onSwiped,
    onSwiping = _ref.onSwiping,
    verticalMode = _ref.verticalMode,
    onItemClick = _ref.onItemClick;
  var width = "".concat(childWidth, "px");
  var paddingStyle = "".concat(itemPadding.join("px "), "px");
  var minVisibleItem = currentItem;
  var maxVisibleItem = currentItem + itemsToShow;
  var prevItem = minVisibleItem - itemsToScroll;
  var nextItem = maxVisibleItem + itemsToScroll;
  var originalChildren = React.Children.map(children, function (child, idx) {
    var isVisible = idx >= minVisibleItem && idx < maxVisibleItem;
    var isPrevItem = !isVisible && idx >= prevItem && idx < currentItem;
    var isNextItem = !isVisible && idx < nextItem && idx > currentItem;
    var itemClass = "carousel-item";
    var childToRender = autoTabIndexVisibleItems ? /*#__PURE__*/React.cloneElement(child, {
      tabIndex: isVisible ? 0 : -1
    }) : child;
    return /*#__PURE__*/React.createElement("div", {
      className: cssPrefix(itemClass, "".concat(itemClass, "-").concat(idx), "".concat(itemClass, "-").concat(isVisible ? "visible" : "hidden"), isPrevItem && "".concat(itemClass, "-prev"), isNextItem && "".concat(itemClass, "-next"))
    }, /*#__PURE__*/React.createElement(ItemWrapperContainer, {
      id: idx,
      itemPosition: itemPosition,
      style: {
        width: width,
        padding: paddingStyle
      },
      key: idx,
      onClick: onItemClick
    }, childToRender));
  });
  var toRender = enableSwipe ? /*#__PURE__*/React.createElement(reactSwipeable.Swipeable, {
    style: {
      display: "flex",
      flexDirection: verticalMode ? "column" : "row"
    },
    stopPropagation: true,
    preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent,
    trackMouse: enableMouseSwipe,
    onSwiped: onSwiped,
    onSwiping: onSwiping,
    className: cssPrefix("swipable")
  }, originalChildren) : originalChildren;
  return toRender;
};
Track.propTypes = {
  children: PropTypes.array.isRequired,
  itemsToShow: PropTypes.number.isRequired,
  noAutoTabbedItems: PropTypes.bool,
  currentItem: PropTypes.number.isRequired,
  itemPosition: PropTypes.string,
  itemPadding: PropTypes.array,
  childWidth: PropTypes.number,
  verticalMode: PropTypes.bool,
  enableSwipe: PropTypes.bool,
  enableMouseSwipe: PropTypes.bool,
  preventDefaultTouchmoveEvent: PropTypes.bool,
  onSwiped: PropTypes.func,
  onSwiping: PropTypes.func,
  onItemClick: PropTypes.func
};

var _excluded$1 = ["direction", "onClick", "icons", "style"];
var directionIcons = {
  left: "❮",
  right: "❯",
  up: "❮",
  down: "❯"
};
var arrowClassname = cssPrefix("arrow");
var rotateStyle = function rotateStyle(direction) {
  var rotate = {};
  if (direction === Arrow.up || direction === Arrow.down) {
    rotate.transform = "rotate(90deg)";
  }
  return rotate;
};
var Arrow = function Arrow(_ref) {
  var direction = _ref.direction,
    onClick = _ref.onClick,
    icons = _ref.icons,
    style = _ref.style,
    rest = _objectWithoutProperties(_ref, _excluded$1);
  var arrows = _objectSpread2(_objectSpread2({}, directionIcons), icons);
  var styleObj = _objectSpread2(_objectSpread2({}, rotateStyle(direction)), style);
  return /*#__PURE__*/React.createElement(Button, _extends({
    tabIndex: 0,
    onClick: onClick,
    className: cx(arrowClassname, "".concat(arrowClassname, "-").concat(direction)),
    style: styleObj
  }, rest), arrows[direction]);
};
Arrow.left = "left";
Arrow.right = "right";
Arrow.up = "up";
Arrow.down = "down";
Arrow.propTypes = {
  direction: PropTypes.oneOf(["left", "right", "up", "down"]).isRequired,
  icons: PropTypes.object,
  style: PropTypes.object,
  onClick: PropTypes.func
};

var NEXT_ITEM = "NEXT_ITEM";
var PREV_ITEM = "PREV_ITEM";

var activeIndexReducer = function activeIndexReducer(state, action) {
  var limit = action.limit,
    itemsToScroll = action.itemsToScroll,
    type = action.type;
  switch (type) {
    case NEXT_ITEM:
      {
        var optimisticNextItem = state + itemsToScroll;
        var nextItem = limit >= optimisticNextItem ? optimisticNextItem : limit;
        return nextItem;
      }
    case PREV_ITEM:
      {
        var optimisticPrevItem = state - itemsToScroll;
        var prevItem = optimisticPrevItem >= limit ? optimisticPrevItem : limit;
        return prevItem;
      }
    default:
      return state;
  }
};

var nextItemAction = function nextItemAction(limit, itemsToScroll) {
  return {
    type: NEXT_ITEM,
    limit: limit,
    itemsToScroll: itemsToScroll
  };
};
var prevItemAction = function prevItemAction(limit, itemsToScroll) {
  return {
    type: PREV_ITEM,
    limit: limit,
    itemsToScroll: itemsToScroll
  };
};

var _templateObject$1;
var boxShadow = "0 0 1px 2px rgba(0, 0, 0, 0.5)";
var activeBoxShadow = "0 0 1px 3px rgba(103,58,183,1)";
var hoveredBoxShadow = "0 0 1px 3px rgba(103,58,183,.5)";
var Dot = styled.button.attrs(function (_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "button" : _ref$type;
  return {
    type: type
  };
})(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  padding: 0;\n  transition: all 250ms ease;\n  border: none;\n  margin: 5px;\n  background-color: ", ";\n  font-size: 1.3em;\n  content: \"\";\n  height: 10px;\n  width: 10px;\n  box-shadow: ", ";\n  border-radius: 50%;\n  outline: none;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    box-shadow: ", ";\n  }\n"])), function (_ref2) {
  var active = _ref2.active;
  return active ? "rgba(103,58,183,.5)" : "transparent";
}, function (_ref3) {
  var active = _ref3.active;
  return active ? activeBoxShadow : boxShadow;
}, function (_ref4) {
  var active = _ref4.active;
  return active ? activeBoxShadow : hoveredBoxShadow;
});
var DotContainer = /*#__PURE__*/function (_React$Component) {
  function DotContainer() {
    var _this;
    _classCallCheck(this, DotContainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DotContainer, [].concat(args));
    _defineProperty(_this, "onClick", function () {
      var _this$props = _this.props,
        onClick = _this$props.onClick,
        id = _this$props.id;
      onClick(id);
    });
    return _this;
  }
  _inherits(DotContainer, _React$Component);
  return _createClass(DotContainer, [{
    key: "render",
    value: function render() {
      var active = this.props.active;
      return /*#__PURE__*/React.createElement(Dot, {
        tabIndex: active ? -1 : 0,
        onClick: this.onClick,
        active: active,
        className: "".concat(cssPrefix("dot"), " ").concat(active ? cssPrefix("dot_active") : "")
      });
    }
  }]);
}(React.Component);
DotContainer.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  active: PropTypes.bool,
  onClick: PropTypes.func
};

var _templateObject;
var Indicators = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 15px;\n"])));
var Pagination = /*#__PURE__*/function (_React$Component) {
  function Pagination() {
    _classCallCheck(this, Pagination);
    return _callSuper(this, Pagination, arguments);
  }
  _inherits(Pagination, _React$Component);
  return _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        numOfPages = _this$props.numOfPages,
        activePage = _this$props.activePage,
        onClick = _this$props.onClick;
      var pages = numberToArray(numOfPages);
      return /*#__PURE__*/React.createElement(Indicators, {
        className: cssPrefix("pagination")
      }, pages.map(function (item, i) {
        return /*#__PURE__*/React.createElement(DotContainer, {
          key: i,
          id: i,
          active: i === activePage,
          onClick: onClick
        });
      }));
    }
  }]);
}(React.Component);
Pagination.defaultProps = {
  onClick: noop
};
Pagination.propTypes = {
  numOfPages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

var _excluded = ["breakPoints"];
var Carousel = /*#__PURE__*/function (_React$Component) {
  function Carousel() {
    var _this;
    _classCallCheck(this, Carousel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Carousel, [].concat(args));
    _defineProperty(_this, "isComponentMounted", false);
    _defineProperty(_this, "state", {
      rootHeight: 0,
      childHeight: 0,
      sliderPosition: 0,
      swipedSliderPosition: 0,
      isSwiping: false,
      transitioning: false,
      transitionMs: _this.props.transitionMs,
      activeIndex: _this.props.initialActiveIndex || _this.props.initialFirstItem,
      // support deprecated  initialFirstItem
      pages: [],
      activePage: 0,
      sliderContainerWidth: 0
    });
    _defineProperty(_this, "setRef", function (name) {
      return function (ref) {
        return _this[name] = ref;
      };
    });
    _defineProperty(_this, "initResizeObserver", function () {
      _this.ro = new ResizeObserver(function (entries, observer) {
        var _iterator = _createForOfIteratorHelper(entries),
          _step;
        try {
          var _loop = function _loop() {
            var entry = _step.value;
            if (entry.target === _this.sliderContainer) {
              // we are using rAF because it fixes the infinite refresh with gatsby (ssr?).
              // TBH, I'm not sure i fully understand why.
              // see https://github.com/sag1v/react-elastic-carousel/issues/107
              window.requestAnimationFrame(function () {
                _this.onContainerResize(entry);
              });
            }
            if (entry.target === _this.slider) {
              // we are using rAF because it fixes the infinite refresh with gatsby (ssr?).
              // TBH, I'm not sure i fully understand why
              // see https://github.com/sag1v/react-elastic-carousel/issues/107
              window.requestAnimationFrame(function () {
                _this.onSliderResize(entry);
              });
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      _this.ro.observe(_this.sliderContainer);
      _this.ro.observe(_this.slider);
    });
    _defineProperty(_this, "unSubscribeObserver", function () {
      return _this.ro.disconnect();
    });
    _defineProperty(_this, "setAutoPlay", function () {
      var _this$getDerivedProps = _this.getDerivedPropsFromBreakPoint(),
        autoPlaySpeed = _this$getDerivedProps.autoPlaySpeed;
      _this.autoPlayIntervalId = setInterval(function () {
        if (_this.isComponentMounted) {
          var transitioning = _this.state.transitioning;
          if (!transitioning) {
            _this.slideNext();
          }
        }
      }, autoPlaySpeed);
    });
    _defineProperty(_this, "removeAutoPlay", function () {
      if (_this.autoPlayIntervalId) {
        clearInterval(_this.autoPlayIntervalId);
        _this.autoPlayIntervalId = null;
      }
    });
    _defineProperty(_this, "setPages", function () {
      var numOfPages = _this.getNumOfPages();
      var pages = numberToArray(numOfPages);
      _this.setState({
        pages: pages
      });
    });
    _defineProperty(_this, "onSliderTransitionEnd", function (fn) {
      _this.slider.addEventListener("transitionend", fn);
    });
    _defineProperty(_this, "removeSliderTransitionHook", function (fn) {
      _this.slider.removeEventListener("transitionend", fn);
    });
    _defineProperty(_this, "getDerivedPropsFromBreakPoint", function () {
      var _this$props = _this.props,
        breakPoints = _this$props.breakPoints,
        restOfProps = _objectWithoutProperties(_this$props, _excluded);
      var sliderContainerWidth = _this.state.sliderContainerWidth;

      // default breakpoint from individual props
      var currentBreakPoint;
      // if breakpoints were added as props override the individual props
      if (breakPoints && breakPoints.length > 0) {
        currentBreakPoint = breakPoints.slice() // no mutations
        .reverse() // so we can find last match
        .find(function (bp) {
          return bp.width <= sliderContainerWidth;
        });
        if (!currentBreakPoint) {
          /* in case we don't have a lower width than sliderContainerWidth
           * this mostly happens in initilization when sliderContainerWidth is 0
           */
          currentBreakPoint = breakPoints[0];
        }
      }
      // merge direct props with current breakpoint Props
      return _objectSpread2(_objectSpread2({}, restOfProps), currentBreakPoint);
    });
    _defineProperty(_this, "updateSliderPosition", function () {
      _this.setState(function (state) {
        var _this$getDerivedProps2 = _this.getDerivedPropsFromBreakPoint(),
          children = _this$getDerivedProps2.children,
          verticalMode = _this$getDerivedProps2.verticalMode,
          itemsToShow = _this$getDerivedProps2.itemsToShow,
          transitionMs = _this$getDerivedProps2.transitionMs;
        var childHeight = state.childHeight,
          activeIndex = state.activeIndex;
        var childWidth = _this.calculateChildWidth();
        var totalItems = React.Children.toArray(children).length;
        var hiddenSlots = totalItems - itemsToShow;
        var moveBy = activeIndex * -1;
        var emptySlots = itemsToShow - (totalItems - activeIndex);
        if (emptySlots > 0 && hiddenSlots > 0) {
          moveBy = emptySlots + activeIndex * -1;
        }
        var sliderPosition = (verticalMode ? childHeight : childWidth) * moveBy;
        var newActiveIndex = emptySlots > 0 ? activeIndex - emptySlots : activeIndex;
        // go back from 0ms to whatever set by the user
        // We were at 0ms because we wanted to disable animation on resize
        // see https://github.com/sag1v/react-elastic-carousel/issues/94
        window.requestAnimationFrame(function () {
          if (_this.isComponentMounted) {
            _this.setState({
              transitionMs: transitionMs
            });
          }
        });
        return {
          sliderPosition: sliderPosition,
          activeIndex: newActiveIndex < 0 ? 0 : newActiveIndex
        };
      });
    });
    _defineProperty(_this, "onSliderResize", function (sliderNode) {
      if (!_this.isComponentMounted) {
        return;
      }
      var _this$getDerivedProps3 = _this.getDerivedPropsFromBreakPoint(),
        verticalMode = _this$getDerivedProps3.verticalMode,
        children = _this$getDerivedProps3.children,
        itemsToShow = _this$getDerivedProps3.itemsToShow;
      var sliderHeight = sliderNode.contentRect.height;
      var nextState = {};
      var childrenLength = React.Children.toArray(children).length;
      if (verticalMode) {
        var childHeight = sliderHeight / childrenLength;
        // We use Math.min because we don't want to make the child smaller
        // if the number of children is smaller than itemsToShow.
        // (Because we do not want "empty slots")
        nextState.rootHeight = childHeight * Math.min(childrenLength, itemsToShow);
        nextState.childHeight = childHeight;
      } else {
        nextState.rootHeight = sliderHeight;
      }
      _this.setState(nextState);
    });
    _defineProperty(_this, "calculateChildWidth", function () {
      var sliderContainerWidth = _this.state.sliderContainerWidth;
      var _this$getDerivedProps4 = _this.getDerivedPropsFromBreakPoint(),
        verticalMode = _this$getDerivedProps4.verticalMode,
        itemsToShow = _this$getDerivedProps4.itemsToShow,
        showEmptySlots = _this$getDerivedProps4.showEmptySlots,
        children = _this$getDerivedProps4.children;

      /* based on slider container's width, get num of items to show
       * and calculate child's width (and update it in state)
       */
      var childrenLength = React.Children.toArray(children).length || 1;
      var childWidth = 0;
      if (verticalMode) {
        childWidth = sliderContainerWidth;
      } else {
        // When "showEmptySlots" is false
        // We use Math.min because we don't want to make the child smaller
        // if the number of children is smaller than itemsToShow.
        // (Because we do not want "empty slots")
        childWidth = sliderContainerWidth / (showEmptySlots ? itemsToShow : Math.min(childrenLength, itemsToShow));
      }
      return childWidth;
    });
    _defineProperty(_this, "onContainerResize", function (sliderContainerNode) {
      var newSliderContainerWidth = sliderContainerNode.contentRect.width;
      // update slider container width
      // disable animation on resize see https://github.com/sag1v/react-elastic-carousel/issues/94
      var _this$getDerivedProps5 = _this.getDerivedPropsFromBreakPoint(),
        outerSpacing = _this$getDerivedProps5.outerSpacing,
        initialVerticalMode = _this$getDerivedProps5.verticalMode;
      var containerWidth = newSliderContainerWidth - (initialVerticalMode ? 0 : outerSpacing * 2);
      if (!_this.isComponentMounted || _this.state.sliderContainerWidth === newSliderContainerWidth) {
        // prevent infinite loop
        return;
      }
      _this.setState({
        sliderContainerWidth: containerWidth,
        transitionMs: 0
      }, function () {
        // we must get these props inside setState (get future props because its async)
        var _this$getDerivedProps6 = _this.getDerivedPropsFromBreakPoint(),
          onResize = _this$getDerivedProps6.onResize,
          itemsToShow = _this$getDerivedProps6.itemsToShow,
          children = _this$getDerivedProps6.children;
        var childrenLength = React.Children.toArray(children).length || 1;
        _this.setState(function (currentState) {
          // We might need to change the selected index when the size of the container changes
          // we are making sure the selected index is not out of boundaries and respecting itemsToShow
          // This usually happens with breakpoints. see https://github.com/sag1v/react-elastic-carousel/issues/122
          var activeIndex = currentState.activeIndex;
          // we take the lowest, in case itemsToShow is greater than childrenLength
          var maxItemsToShow = Math.min(childrenLength, itemsToShow);
          var endLimit = childrenLength - maxItemsToShow;
          if (activeIndex > endLimit) {
            activeIndex = endLimit;
          }
          return {
            activeIndex: activeIndex
          };
        }, function () {
          /* Based on all of the above new data:
           * update slider position
           * get the new current breakpoint
           * pass the current breakpoint to the consumer's callback
           */
          _this.updateSliderPosition();
          var currentBreakPoint = _this.getDerivedPropsFromBreakPoint();
          onResize(currentBreakPoint);
        });
      });
    });
    _defineProperty(_this, "tiltMovement", function (position) {
      var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;
      _this.setState(function (state) {
        return {
          isSwiping: true,
          swipedSliderPosition: position - distance
        };
      });
      setTimeout(function () {
        _this.setState({
          isSwiping: false,
          swipedSliderPosition: 0
        });
      }, duration);
    });
    _defineProperty(_this, "convertChildToCbObj", function (index) {
      var _this$getDerivedProps7 = _this.getDerivedPropsFromBreakPoint(),
        children = _this$getDerivedProps7.children;
      // support decimal itemsToShow
      var roundedIdx = Math.round(index);
      var child = React.Children.toArray(children)[roundedIdx];
      return {
        item: child.props,
        index: roundedIdx
      };
    });
    _defineProperty(_this, "getNextItemIndex", function (currentIndex, getPrev) {
      var _this$getDerivedProps8 = _this.getDerivedPropsFromBreakPoint(),
        children = _this$getDerivedProps8.children,
        itemsToShow = _this$getDerivedProps8.itemsToShow,
        itemsToScroll = _this$getDerivedProps8.itemsToScroll;
      var childrenLength = React.Children.toArray(children).length || 1;
      var notEnoughItemsToShow = itemsToShow > childrenLength;
      var limit = getPrev ? 0 : childrenLength - itemsToShow;
      if (notEnoughItemsToShow) {
        limit = 0; // basically don't move
      }
      var nextAction = getPrev ? prevItemAction(0, itemsToScroll) : nextItemAction(limit, itemsToScroll);
      var nextItem = activeIndexReducer(currentIndex, nextAction);
      return nextItem;
    });
    _defineProperty(_this, "getNextItemObj", function (getPrev) {
      var _this$getDerivedProps9 = _this.getDerivedPropsFromBreakPoint(),
        children = _this$getDerivedProps9.children;
      var activeIndex = _this.state.activeIndex;
      var nextItemIndex = _this.getNextItemIndex(activeIndex, getPrev);
      // support decimal itemsToShow
      var roundedIdx = Math.round(nextItemIndex);
      var asElement = React.Children.toArray(children)[roundedIdx];
      var asObj = {
        item: asElement.props,
        index: roundedIdx
      };
      return asObj;
    });
    _defineProperty(_this, "resetSwipe", function () {
      _this.setState({
        swipedSliderPosition: 0,
        transitioning: false,
        isSwiping: false
      });
    });
    _defineProperty(_this, "onSwiping", function (data) {
      var deltaX = data.deltaX,
        absX = data.absX,
        deltaY = data.deltaY,
        absY = data.absY,
        dir = data.dir;
      _this.setState(function (state) {
        var childHeight = state.childHeight,
          activeIndex = state.activeIndex,
          sliderPosition = state.sliderPosition;
        var _this$getDerivedProps10 = _this.getDerivedPropsFromBreakPoint(),
          itemsToShow = _this$getDerivedProps10.itemsToShow,
          verticalMode = _this$getDerivedProps10.verticalMode,
          children = _this$getDerivedProps10.children,
          isRTL = _this$getDerivedProps10.isRTL;
        var childWidth = _this.calculateChildWidth();

        // determine how far can user swipe
        var childrenLength = React.Children.toArray(children).length || 1;
        var goingNext = !verticalMode && dir === "Left" && !isRTL || !verticalMode && dir === "Right" && isRTL || verticalMode && dir === "Up";
        var goingBack = !verticalMode && dir === "Right" && !isRTL || !verticalMode && dir === "Left" && isRTL || verticalMode && dir === "Down";
        var horizontalSwipe = dir === "Left" || dir === "Right";
        var verticalSwipe = dir === "Up" || dir === "Down";
        var horizontalMode = !verticalMode;
        var distanceSwipe = 0;
        var horizontalEdgeStoppage = childWidth / 2;
        var verticalEdgeStoppage = childHeight / 2;
        if (verticalMode) {
          if (verticalSwipe) {
            var trackSize = childrenLength * childHeight;
            if (goingNext) {
              distanceSwipe = trackSize - childHeight * activeIndex - itemsToShow * childHeight + verticalEdgeStoppage;
            } else if (goingBack) {
              distanceSwipe = childHeight * activeIndex + verticalEdgeStoppage;
            }
          }
        } else {
          if (horizontalSwipe) {
            var _trackSize = childrenLength * childWidth;
            if (goingNext) {
              distanceSwipe = _trackSize - childWidth * activeIndex - itemsToShow * childWidth + horizontalEdgeStoppage;
            } else if (goingBack) {
              distanceSwipe = childWidth * activeIndex + horizontalEdgeStoppage;
            }
          }
        }
        var shouldHorizontalSkipUpdate = horizontalMode && verticalSwipe || horizontalMode && horizontalSwipe && absX > distanceSwipe;
        var shouldVerticalSkipUpdate = verticalMode && horizontalSwipe || verticalMode && verticalSwipe && absY > distanceSwipe;
        if (shouldHorizontalSkipUpdate || shouldVerticalSkipUpdate) {
          // bail out of state update
          return;
        }
        var swipedSliderPosition;
        if (horizontalSwipe) {
          if (isRTL) {
            swipedSliderPosition = sliderPosition + deltaX;
          } else {
            swipedSliderPosition = sliderPosition - deltaX;
          }
        } else {
          swipedSliderPosition = sliderPosition - deltaY;
        }
        return {
          swipedSliderPosition: swipedSliderPosition,
          isSwiping: true,
          transitioning: true
        };
      });
    });
    _defineProperty(_this, "onSwiped", function (data) {
      // we need to handle all scenarios:
      // 1. Horizontal mode - swipe left or right
      // 2. Horizontal mode with RTL - swipe left or right
      // 3. vertical mode - swipe up or down

      var absX = data.absX,
        absY = data.absY,
        dir = data.dir;
      var _this$state = _this.state,
        childHeight = _this$state.childHeight,
        activeIndex = _this$state.activeIndex;
      var _this$getDerivedProps11 = _this.getDerivedPropsFromBreakPoint(),
        verticalMode = _this$getDerivedProps11.verticalMode,
        isRTL = _this$getDerivedProps11.isRTL,
        itemsToScroll = _this$getDerivedProps11.itemsToScroll;
      var childWidth = _this.calculateChildWidth();
      var func = _this.resetSwipe;
      var minSwipeDistanceHorizontal = childWidth / 5;
      var minSwipeDistanceVertical = childHeight / 5;
      var swipedLeft = dir === "Left";
      var swipedRight = dir === "Right";
      var swipedUp = dir === "Up";
      var swipedDown = dir === "Down";
      var verticalGoSwipe = verticalMode && (swipedUp || swipedDown) && absY > minSwipeDistanceVertical;
      var horizontalGoSwipe = !verticalMode && (swipedRight || swipedLeft) && absX > minSwipeDistanceHorizontal;
      var goodToGo = false;
      if (verticalGoSwipe || horizontalGoSwipe) {
        goodToGo = true;
      }
      if (goodToGo) {
        // we should go to a different item
        // determine what method we need to invoke

        if (verticalMode) {
          // get number of slides from user's swiping
          var numberOfSlidesViaSwipe = Math.ceil((absY - minSwipeDistanceVertical) / childHeight);
          // if user swipes more than itemsToScroll then we want to bypass itemsToScroll for a smoother scroll
          var numberOfSlidesTogo = Math.max(itemsToScroll, numberOfSlidesViaSwipe);
          var backSlidesToGo = activeIndex - numberOfSlidesTogo;
          var forwardSlideTtoGo = activeIndex + numberOfSlidesTogo;

          // up or down
          if (swipedDown) {
            // func = this.onPrevStart;
            func = function func() {
              return _this.goTo(backSlidesToGo);
            };
          }
          if (swipedUp) {
            // func = this.onNextStart;
            func = function func() {
              return _this.goTo(forwardSlideTtoGo);
            };
          }
        } else {
          // get number of slides from user's swiping
          var _numberOfSlidesViaSwipe = Math.ceil((absX - minSwipeDistanceHorizontal) / childWidth);
          // if user swipes more than itemsToScroll then we want to bypass itemsToScroll for a smoother scroll
          var _numberOfSlidesTogo = Math.max(itemsToScroll, _numberOfSlidesViaSwipe);
          var _backSlidesToGo = activeIndex - _numberOfSlidesTogo;
          var _forwardSlideTtoGo = activeIndex + _numberOfSlidesTogo;

          // horizontal mode
          if (isRTL) {
            // flip sides
            if (swipedLeft) {
              // func = this.onPrevStart;
              func = function func() {
                return _this.goTo(_backSlidesToGo);
              };
            }
            if (swipedRight) {
              // func = this.onNextStart;
              func = function func() {
                return _this.goTo(_forwardSlideTtoGo);
              };
            }
          } else {
            // normal behavior
            if (swipedLeft) {
              // func = this.onNextStart;
              func = function func() {
                return _this.goTo(_forwardSlideTtoGo);
              };
            }
            if (swipedRight) {
              // func = this.onPrevStart;
              func = function func() {
                return _this.goTo(_backSlidesToGo);
              };
            }
          }
        }
      }
      // we are not "tilting" on edges, so we need to reset isSwiping and transitioning.
      // otherwise we wont slide back to edge
      _this.setState({
        isSwiping: false,
        transitioning: false
      });
      func({
        skipTilt: true
      });
    });
    _defineProperty(_this, "onNextStart", function (options) {
      var _this$getDerivedProps12 = _this.getDerivedPropsFromBreakPoint(),
        onNextStart = _this$getDerivedProps12.onNextStart;
      var activeIndex = _this.state.activeIndex;
      var nextItemObj = _this.getNextItemObj();
      var prevItemObj = _this.convertChildToCbObj(activeIndex);
      onNextStart(prevItemObj, nextItemObj);
      _this.slideNext(options);
    });
    _defineProperty(_this, "onPrevStart", function (options) {
      var _this$getDerivedProps13 = _this.getDerivedPropsFromBreakPoint(),
        onPrevStart = _this$getDerivedProps13.onPrevStart;
      var activeIndex = _this.state.activeIndex;
      var nextItemObj = _this.getNextItemObj(true);
      var prevItemObj = _this.convertChildToCbObj(activeIndex);
      onPrevStart(prevItemObj, nextItemObj);
      _this.slidePrev(options);
    });
    _defineProperty(_this, "slideNext", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var skipTilt = options.skipTilt;
      var _this$getDerivedProps14 = _this.getDerivedPropsFromBreakPoint(),
        enableTilt = _this$getDerivedProps14.enableTilt;
      var _this$state2 = _this.state,
        activeIndex = _this$state2.activeIndex,
        sliderPosition = _this$state2.sliderPosition;
      var nextItem = _this.getNextItemIndex(activeIndex, false);
      if (activeIndex !== nextItem) {
        _this.goTo(nextItem);
      } else if (enableTilt && !skipTilt) {
        _this.tiltMovement(sliderPosition, 20, 150);
      }
    });
    _defineProperty(_this, "slidePrev", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var skipTilt = options.skipTilt;
      var activeIndex = _this.state.activeIndex;
      var _this$getDerivedProps15 = _this.getDerivedPropsFromBreakPoint(),
        enableTilt = _this$getDerivedProps15.enableTilt;
      var prevItem = _this.getNextItemIndex(activeIndex, true);
      if (activeIndex !== prevItem) {
        _this.goTo(prevItem);
      } else if (enableTilt && !skipTilt) {
        _this.tiltMovement(0, -20, 150);
      }
    });
    _defineProperty(_this, "onNextEnd", function () {
      var _this$getDerivedProps16 = _this.getDerivedPropsFromBreakPoint(),
        onNextEnd = _this$getDerivedProps16.onNextEnd,
        onChange = _this$getDerivedProps16.onChange;
      var _this$state3 = _this.state,
        activeIndex = _this$state3.activeIndex,
        activePage = _this$state3.activePage;
      var nextItemObj = _this.convertChildToCbObj(activeIndex);
      _this.removeSliderTransitionHook(_this.onNextEnd);
      _this.setState({
        transitioning: false
      });
      onChange && onChange(nextItemObj, activePage);
      onNextEnd(nextItemObj, activePage);
    });
    _defineProperty(_this, "onPrevEnd", function () {
      var _this$getDerivedProps17 = _this.getDerivedPropsFromBreakPoint(),
        onPrevEnd = _this$getDerivedProps17.onPrevEnd,
        onChange = _this$getDerivedProps17.onChange;
      var _this$state4 = _this.state,
        activeIndex = _this$state4.activeIndex,
        activePage = _this$state4.activePage;
      var nextItemObj = _this.convertChildToCbObj(activeIndex);
      _this.removeSliderTransitionHook(_this.onPrevEnd);
      _this.setState({
        transitioning: false
      });
      onChange && onChange(nextItemObj, activePage);
      onPrevEnd(nextItemObj, activePage);
    });
    _defineProperty(_this, "generatePositionUpdater", function (direction, nextItemId, verticalMode, rest) {
      return function (state) {
        var sliderPosition = state.sliderPosition,
          childHeight = state.childHeight,
          activeIndex = state.activeIndex;
        var childWidth = _this.calculateChildWidth();
        var newSliderPosition = 0;
        var childSize = verticalMode ? childHeight : childWidth;
        if (direction === consts.NEXT) {
          newSliderPosition = sliderPosition - childSize * (nextItemId - activeIndex);
        } else {
          newSliderPosition = sliderPosition + childSize * (activeIndex - nextItemId);
        }
        return _objectSpread2({
          sliderPosition: newSliderPosition,
          activeIndex: nextItemId,
          swipedSliderPosition: 0,
          isSwiping: false
        }, rest);
      };
    });
    _defineProperty(_this, "goTo", function (nextItemId) {
      var _this$getDerivedProps18 = _this.getDerivedPropsFromBreakPoint(),
        children = _this$getDerivedProps18.children,
        verticalMode = _this$getDerivedProps18.verticalMode,
        itemsToShow = _this$getDerivedProps18.itemsToShow;
      var activeIndex = _this.state.activeIndex;
      var childrenLength = React.Children.toArray(children).length;
      var safeNextItemId = Math.max(0, nextItemId); // don't allow negative numbers
      var isPrev = activeIndex > safeNextItemId;
      var nextAvailableItem = _this.getNextItemIndex(activeIndex, isPrev);
      var noChange = nextAvailableItem === activeIndex;
      var outOfBoundary = safeNextItemId + itemsToShow >= childrenLength;
      if (noChange) {
        return;
      }
      if (outOfBoundary) {
        // Either go to last index (respect itemsToShow) or 0 index if we can't fill the slider
        safeNextItemId = Math.max(0, childrenLength - itemsToShow);
      }
      var direction = consts.NEXT;
      var positionEndCb = _this.onNextEnd;
      if (isPrev) {
        direction = consts.PREV;
        positionEndCb = _this.onPrevEnd;
      }
      var stateUpdater = _this.generatePositionUpdater(direction, safeNextItemId, verticalMode, {
        transitioning: true
      });
      _this.setState(stateUpdater, function () {
        // callback
        pipe(_this.updateActivePage(), _this.onSliderTransitionEnd(positionEndCb));
      });
    });
    _defineProperty(_this, "getNumOfPages", function () {
      var _this$getDerivedProps19 = _this.getDerivedPropsFromBreakPoint(),
        children = _this$getDerivedProps19.children,
        itemsToShow = _this$getDerivedProps19.itemsToShow;
      var childrenLength = React.Children.toArray(children).length;
      var safeItemsToShow = Math.max(itemsToShow, 1);
      var numOfPages = Math.ceil(childrenLength / safeItemsToShow);
      return numOfPages || 1;
    });
    _defineProperty(_this, "updateActivePage", function () {
      _this.setState(function (state) {
        var _this$getDerivedProps20 = _this.getDerivedPropsFromBreakPoint(),
          itemsToShow = _this$getDerivedProps20.itemsToShow,
          children = _this$getDerivedProps20.children;
        var activeIndex = state.activeIndex,
          activePage = state.activePage;
        var numOfPages = _this.getNumOfPages();
        var childrenLength = React.Children.toArray(children).length;
        var inRangeItemsToShow = Math.min(childrenLength, itemsToShow);
        // watch out from 0 (so we wont divide by zero)
        var safeItemsToShow = Math.max(inRangeItemsToShow, 1);
        var newActivePage = Math.ceil(activeIndex / safeItemsToShow);
        var inRangeActivePageIndex = Math.min(numOfPages - 1, newActivePage);
        if (activePage !== inRangeActivePageIndex) {
          return {
            activePage: inRangeActivePageIndex
          };
        }
      });
    });
    _defineProperty(_this, "onIndicatorClick", function (indicatorId) {
      var _this$getDerivedProps21 = _this.getDerivedPropsFromBreakPoint(),
        itemsToShow = _this$getDerivedProps21.itemsToShow;
      var gotoIndex = indicatorId * itemsToShow;
      _this.setState({
        activePage: indicatorId
      });
      _this.goTo(gotoIndex);
    });
    return _this;
  }
  _inherits(Carousel, _React$Component);
  return _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isComponentMounted = true;
      this.initResizeObserver();
      this.updateActivePage();
      this.setPages();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
        enableAutoPlay = _this$props2.enableAutoPlay,
        children = _this$props2.children,
        itemsToShow = _this$props2.itemsToShow,
        itemsToScroll = _this$props2.itemsToScroll,
        breakPoints = _this$props2.breakPoints;
      var _this$state5 = this.state,
        activeIndex = _this$state5.activeIndex,
        sliderContainerWidth = _this$state5.sliderContainerWidth;
      var nextItem = this.getNextItemIndex(activeIndex, false);
      var currentChildrenLength = React.Children.toArray(children).length;
      var prevChildrenLength = React.Children.toArray(prevProps.children).length;
      // update pages (for pagination)
      if (prevChildrenLength !== currentChildrenLength || prevProps.itemsToShow !== itemsToShow || prevProps.itemsToScroll !== itemsToScroll || prevProps.breakPoints !== breakPoints || sliderContainerWidth !== prevState.sliderContainerWidth) {
        // we mimic a container resize to recalculate item width when itemsToShow are updated
        this.onContainerResize({
          contentRect: {
            width: sliderContainerWidth
          }
        });
        this.setPages();
        this.updateActivePage();
      }

      // autoplay update
      if (activeIndex === nextItem) {
        this.removeAutoPlay();
      } else if (enableAutoPlay && !this.autoPlayIntervalId) {
        this.setAutoPlay();
      } else if (!enableAutoPlay && this.autoPlayIntervalId) {
        this.removeAutoPlay();
      }
      if (prevChildrenLength !== currentChildrenLength) {
        var _this$getDerivedProps22 = this.getDerivedPropsFromBreakPoint(),
          calculatedItemsToShow = _this$getDerivedProps22.itemsToShow;
        // number of items is reduced (we don't care if number of items is increased)
        // we need to check if our current index is not out of boundaries
        // we need to include itemsToShow so we can fill up the slots
        var lastIndex = currentChildrenLength - 1;
        var isOutOfRange = activeIndex + calculatedItemsToShow > lastIndex;
        if (isOutOfRange) {
          // we are out of boundaries, go "back" to last item of the list (respect itemsToShow)
          this.goTo(Math.max(0, currentChildrenLength - calculatedItemsToShow));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isComponentMounted = false;
      this.removeAutoPlay();
      this.unSubscribeObserver();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state6 = this.state,
        activePage = _this$state6.activePage,
        isSwiping = _this$state6.isSwiping,
        sliderPosition = _this$state6.sliderPosition,
        swipedSliderPosition = _this$state6.swipedSliderPosition,
        rootHeight = _this$state6.rootHeight,
        pages = _this$state6.pages,
        activeIndex = _this$state6.activeIndex,
        transitionMs = _this$state6.transitionMs;
      var _this$getDerivedProps23 = this.getDerivedPropsFromBreakPoint(),
        className = _this$getDerivedProps23.className,
        style = _this$getDerivedProps23.style,
        itemsToShow = _this$getDerivedProps23.itemsToShow,
        itemsToScroll = _this$getDerivedProps23.itemsToScroll,
        verticalMode = _this$getDerivedProps23.verticalMode,
        isRTL = _this$getDerivedProps23.isRTL,
        easing = _this$getDerivedProps23.easing,
        tiltEasing = _this$getDerivedProps23.tiltEasing,
        children = _this$getDerivedProps23.children,
        focusOnSelect = _this$getDerivedProps23.focusOnSelect,
        autoTabIndexVisibleItems = _this$getDerivedProps23.autoTabIndexVisibleItems,
        itemPosition = _this$getDerivedProps23.itemPosition,
        itemPadding = _this$getDerivedProps23.itemPadding,
        outerSpacing = _this$getDerivedProps23.outerSpacing,
        enableSwipe = _this$getDerivedProps23.enableSwipe,
        enableMouseSwipe = _this$getDerivedProps23.enableMouseSwipe,
        pagination = _this$getDerivedProps23.pagination,
        showArrows = _this$getDerivedProps23.showArrows,
        disableArrowsOnEnd = _this$getDerivedProps23.disableArrowsOnEnd,
        preventDefaultTouchmoveEvent = _this$getDerivedProps23.preventDefaultTouchmoveEvent,
        renderArrow = _this$getDerivedProps23.renderArrow,
        renderPagination = _this$getDerivedProps23.renderPagination;
      var childWidth = this.calculateChildWidth();
      var numOfPages = this.getNumOfPages();

      /** Determine if arrows should be disabled */
      var canSlidePrev = activeIndex !== this.getNextItemIndex(activeIndex, true);
      var canSlideNext = activeIndex !== this.getNextItemIndex(activeIndex, false);
      var disabledPrevArrow = !canSlidePrev && disableArrowsOnEnd;
      var disabledNextArrow = !canSlideNext && disableArrowsOnEnd;
      return /*#__PURE__*/React.createElement(CarouselWrapper, {
        isRTL: isRTL,
        className: "".concat(cssPrefix("carousel-wrapper"), " ").concat(className),
        style: style
      }, /*#__PURE__*/React.createElement(StyledCarousel, {
        className: cssPrefix("carousel"),
        size: {
          height: rootHeight
        }
      }, /*#__PURE__*/React.createElement(Only, {
        when: showArrows
      }, renderArrow ? renderArrow({
        type: consts.PREV,
        onClick: this.onPrevStart,
        isEdge: !canSlidePrev
      }) : /*#__PURE__*/React.createElement(Arrow, {
        onClick: this.onPrevStart,
        direction: verticalMode ? Arrow.up : Arrow.left,
        disabled: disabledPrevArrow
      })), /*#__PURE__*/React.createElement(SliderContainer, {
        className: cssPrefix("slider-container"),
        ref: this.setRef("sliderContainer")
      }, /*#__PURE__*/React.createElement(Slider, {
        verticalMode: verticalMode,
        isRTL: isRTL,
        easing: easing,
        sliderPosition: sliderPosition,
        swipedSliderPosition: swipedSliderPosition,
        isSwiping: isSwiping,
        transitionMs: transitionMs,
        tiltEasing: tiltEasing,
        className: cssPrefix("slider"),
        ref: this.setRef("slider"),
        outerSpacing: outerSpacing
      }, /*#__PURE__*/React.createElement(Track, {
        verticalMode: verticalMode,
        children: React.Children.toArray(children),
        childWidth: childWidth,
        currentItem: activeIndex,
        autoTabIndexVisibleItems: autoTabIndexVisibleItems,
        itemsToShow: itemsToShow,
        itemsToScroll: itemsToScroll,
        itemPosition: itemPosition,
        itemPadding: itemPadding,
        enableSwipe: enableSwipe,
        enableMouseSwipe: enableMouseSwipe,
        preventDefaultTouchmoveEvent: preventDefaultTouchmoveEvent,
        onSwiped: this.onSwiped,
        onSwiping: this.onSwiping,
        onItemClick: focusOnSelect ? this.goTo : undefined
      }))), /*#__PURE__*/React.createElement(Only, {
        when: showArrows
      }, renderArrow ? renderArrow({
        type: consts.NEXT,
        onClick: this.onNextStart,
        isEdge: !canSlideNext
      }) : /*#__PURE__*/React.createElement(Arrow, {
        onClick: this.onNextStart,
        direction: verticalMode ? Arrow.down : Arrow.right,
        disabled: disabledNextArrow
      }))), /*#__PURE__*/React.createElement(Only, {
        when: pagination
      }, renderPagination ? renderPagination({
        pages: pages,
        activePage: activePage,
        onClick: this.onIndicatorClick
      }) : /*#__PURE__*/React.createElement(Pagination, {
        numOfPages: numOfPages,
        activePage: activePage,
        onClick: this.onIndicatorClick
      })));
    }
  }]);
}(React.Component);
Carousel.defaultProps = {
  className: "",
  style: {},
  verticalMode: false,
  isRTL: false,
  initialFirstItem: 0,
  initialActiveIndex: 0,
  showArrows: true,
  showEmptySlots: false,
  disableArrowsOnEnd: true,
  pagination: true,
  easing: "ease",
  tiltEasing: "ease",
  transitionMs: 500,
  enableTilt: true,
  enableSwipe: true,
  enableMouseSwipe: true,
  preventDefaultTouchmoveEvent: false,
  focusOnSelect: false,
  autoTabIndexVisibleItems: true,
  itemsToShow: 1,
  itemsToScroll: 1,
  itemPosition: consts.CENTER,
  itemPadding: [0, 0, 0, 0],
  outerSpacing: 0,
  enableAutoPlay: false,
  autoPlaySpeed: 2000,
  // callbacks
  onChange: noop,
  onNextEnd: noop,
  onPrevEnd: noop,
  onNextStart: noop,
  onPrevStart: noop,
  onResize: noop
};
Carousel.propTypes = {
  /** Items to render */
  children: PropTypes.node.isRequired,
  /** The css class for the root element */
  className: PropTypes.string,
  /** The style object for the root element */
  style: PropTypes.object,
  /** Display the Carousel in a vertical layout */
  verticalMode: PropTypes.bool,
  /** Flip right to left */
  isRTL: PropTypes.bool,
  /** Show dots for paging */
  pagination: PropTypes.bool,
  /** Animation speed */
  transitionMs: PropTypes.number,
  /** transition easing pattern */
  easing: PropTypes.string,
  /** transition easing pattern for the tilt */
  tiltEasing: PropTypes.string,
  /** The "bump" animation when reaching the last item */
  enableTilt: PropTypes.bool,
  /** Number of visible items  */
  itemsToShow: PropTypes.number,
  /** Number of items to scroll */
  itemsToScroll: PropTypes.number,
  /** Collection of objects with a width, itemsToShow and itemsToScroll  */
  breakPoints: PropTypes.arrayOf(PropTypes.shape({
    width: PropTypes.number.isRequired,
    itemsToShow: PropTypes.number,
    itemsToScroll: PropTypes.number
  })),
  /** The initial active index when the component mounts */
  initialActiveIndex: PropTypes.number,
  /** **DEPRECATED - use initialActiveIndex instead** The first items when the component mounts */
  initialFirstItem: PropTypes.number,
  /** Show the arrow buttons */
  showArrows: PropTypes.bool,
  /** Show empty slots when children.length < itemsToShow (not compatible with verticalMode yet !) */
  showEmptySlots: PropTypes.bool,
  /** Disables the arrow button when there are no more items */
  disableArrowsOnEnd: PropTypes.bool,
  /** Go to item on click */
  focusOnSelect: PropTypes.bool,
  /** Automatically inject `tabIndex:0` to visible items */
  autoTabIndexVisibleItems: PropTypes.bool,
  /** A render prop for the arrow component
   * - ({type, onClick}) => <div onClick={onClick}>{type === 'prev' ? '<-' : '->'}</div>
   */
  renderArrow: PropTypes.func,
  /** A render prop for the pagination component
   * - ({ pages, activePage, onClick }) =>  <YourComponent/>
   */
  renderPagination: PropTypes.func,
  /** Position the element relative to it's wrapper (use the consts object) - consts.START | consts.CENTER | consts.END */
  itemPosition: PropTypes.oneOf([consts.START, consts.CENTER, consts.END]),
  /** A padding for each element  */
  itemPadding: PropTypes.array,
  /** A margin at the beginning and at the end of the carousel (not compatible with verticalMode yet !) */
  outerSpacing: PropTypes.number,
  // swipe
  /** Enable or disable swipe */
  enableSwipe: PropTypes.bool,
  /** Enable or disable mouse swipe */
  enableMouseSwipe: PropTypes.bool,
  /** Prevent page scroll on touchmove.
   * Use this to stop the browser from scrolling while a user swipes.
   * More details: https://github.com/FormidableLabs/react-swipeable#preventdefaulttouchmoveevent-details
   */
  preventDefaultTouchmoveEvent: PropTypes.bool,
  // auto play
  /** Enable or disable auto play */
  enableAutoPlay: PropTypes.bool,
  /** Set auto play speed (ms) */
  autoPlaySpeed: PropTypes.number,
  // callbacks
  /** A callback for the change of an item
   * - onChange(currentItemObject, currentPageIndex) => {} */
  onChange: PropTypes.func,
  /** A callback for the beginning of the next transition
   * - onNextStart(prevItemObject, nextItemObject) => {} */
  onNextStart: PropTypes.func,
  /** A callback for the beginning of the prev transition
   * - onPrevStart(prevItemObject, nextItemObject) => {} */
  onPrevStart: PropTypes.func,
  /** A callback for the end of the next transition
   * - onNextEnd(nextItemObject, currentPageIndex) => {} */
  onNextEnd: PropTypes.func,
  /** A callback for the end of the prev transition
   * - onPrevEnd(nextItemObject, currentPageIndex) => {} */
  onPrevEnd: PropTypes.func,
  /** A callback for the "slider-container" resize
   * - onResize(currentBreakPoint) => {} */
  onResize: PropTypes.func
};

exports.consts = consts;
exports.default = Carousel;
//# sourceMappingURL=index.mjs.map
