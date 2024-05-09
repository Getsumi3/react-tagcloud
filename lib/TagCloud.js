"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagCloud = TagCloud;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _shuffleArray = _interopRequireDefault(require("shuffle-array"));
var _randomcolor = _interopRequireDefault(require("randomcolor"));
var _seedrandom = _interopRequireDefault(require("seedrandom"));
var _defaultRenderer = require("./defaultRenderer");
var _helpers = require("./helpers");
var _excluded = ["renderer", "shuffle", "className", "colorOptions", "containerComponent"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var handlersPropNames = ['onClick', 'onDoubleClick', 'onMouseMove', 'onMouseOver', 'onMouseOut', 'onContextMenu',
// rn handlers
'onPress', 'onPressIn', 'onPressOut'];
var cloudPropNames = ['tags', 'shuffle', 'renderer', 'maxSize', 'minSize', 'colorOptions', 'disableRandomColor', 'randomSeed', 'randomNumberGenerator', 'containerComponent'];
function getTagHashCode(tag) {
  return tag.key + tag.value + tag.count;
}
function generateColor(tag, _ref) {
  var disableRandomColor = _ref.disableRandomColor,
    colorOptions = _ref.colorOptions,
    randomSeed = _ref.randomSeed;
  if (tag.color) {
    return tag.color;
  }
  if (disableRandomColor) {
    return undefined;
  }
  return (0, _randomcolor["default"])(_objectSpread({
    seed: randomSeed && "".concat(randomSeed, ":").concat(getTagHashCode(tag))
  }, colorOptions));
}
function withTagCloudHandlers(elem, tag, cloudHandlers) {
  var origHandlers = (0, _helpers.pick)(elem.props, handlersPropNames);
  var props = (0, _helpers.keys)(cloudHandlers).reduce(function (acc, handlerName) {
    if (cloudHandlers[handlerName] || origHandlers[handlerName]) {
      acc[handlerName] = function (e) {
        cloudHandlers[handlerName] && cloudHandlers[handlerName](tag, e);
        origHandlers[handlerName] && origHandlers(e);
      };
    }
    return acc;
  }, {});
  return /*#__PURE__*/_react["default"].cloneElement(elem, props);
}
function renderTags(props, data) {
  var minSize = props.minSize,
    maxSize = props.maxSize;
  var counts = data.map(function (_ref2) {
      var tag = _ref2.tag;
      return tag.count;
    }),
    min = Math.min.apply(Math, _toConsumableArray(counts)),
    max = Math.max.apply(Math, _toConsumableArray(counts));
  var cloudHandlers = (0, _helpers.pick)(props, handlersPropNames);
  return data.map(function (_ref3) {
    var tag = _ref3.tag,
      color = _ref3.color;
    var fontSize = (0, _helpers.fontSizeConverter)(tag.count, min, max, minSize, maxSize);
    var elem = props.renderer(tag, fontSize, color);
    return withTagCloudHandlers(elem, tag, cloudHandlers);
  });
}
function randomize(props) {
  var tags = props.tags,
    shuffle = props.shuffle,
    randomSeed = props.randomSeed,
    randomNumberGenerator = props.randomNumberGenerator;
  var rng = randomSeed ? (0, _seedrandom["default"])(randomSeed) : randomNumberGenerator;
  var copy = tags.slice();
  var data = shuffle ? (0, _shuffleArray["default"])(copy, {
    rng: rng
  }) : copy;
  return data.map(function (tag) {
    return {
      tag: tag,
      color: generateColor(tag, props)
    };
  });
}
function TagCloud(_ref4) {
  var _ref4$renderer = _ref4.renderer,
    renderer = _ref4$renderer === void 0 ? _defaultRenderer.defaultRenderer : _ref4$renderer,
    _ref4$shuffle = _ref4.shuffle,
    shuffle = _ref4$shuffle === void 0 ? true : _ref4$shuffle,
    _ref4$className = _ref4.className,
    className = _ref4$className === void 0 ? 'tag-cloud' : _ref4$className,
    _ref4$colorOptions = _ref4.colorOptions,
    colorOptions = _ref4$colorOptions === void 0 ? {} : _ref4$colorOptions,
    _ref4$containerCompon = _ref4.containerComponent,
    containerComponent = _ref4$containerCompon === void 0 ? 'div' : _ref4$containerCompon,
    otherProps = _objectWithoutProperties(_ref4, _excluded);
  var props = _objectSpread({
    renderer: renderer,
    shuffle: shuffle,
    className: className,
    colorOptions: colorOptions,
    containerComponent: containerComponent
  }, otherProps);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var tagsComparison = props.tags.map(getTagHashCode).join(':');
  // randomize (color, shuffle) when tags or certain props change
  (0, _react.useEffect)(function () {
    setData(randomize(props));
  }, [JSON.stringify(props.colorOptions), props.randomSeed, props.shuffle, props.disableRandomColor, tagsComparison]);
  var other = (0, _helpers.omit)(props, [].concat(cloudPropNames, handlersPropNames));
  var Container = props.containerComponent;
  return /*#__PURE__*/_react["default"].createElement(Container, other, renderTags(props, data));
}
TagCloud.propTypes = {
  tags: _propTypes["default"].array.isRequired,
  maxSize: _propTypes["default"].number.isRequired,
  minSize: _propTypes["default"].number.isRequired,
  shuffle: _propTypes["default"].bool,
  colorOptions: _propTypes["default"].object,
  disableRandomColor: _propTypes["default"].bool,
  renderer: _propTypes["default"].func,
  className: _propTypes["default"].string,
  randomSeed: _propTypes["default"].any,
  randomNumberGenerator: _propTypes["default"].func,
  containerComponent: _propTypes["default"].elementType
};