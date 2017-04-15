"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  box-shadow: inset 0px 0px 0px white;\n  display: block;\n  margin: 10% auto;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n  stroke: ", ";\n  width: ", "px;\n  height: ", "px;\n\n  .circle {\n    animation: ", " .5s ", " forwards,\n                ", " .4s ease-in-out .4s forwards;\n    fill: none;\n    stroke-dasharray: 166;\n    stroke-dashoffset: 166;\n    stroke-miterlimit: 10;\n    stroke-width: 1;\n    stroke: white;\n  }\n\n  .line, .dot {\n    animation: ", " .3s ", " .8s forwards;\n    stroke-dasharray: 48;\n    stroke-dashoffset: 48;\n    stroke-width: 3;\n    transform-origin: 50% 50%;\n  }\n  .dot {\n    animation-delay: 1s;\n  }\n"], ["\n  border-radius: 50%;\n  box-shadow: inset 0px 0px 0px white;\n  display: block;\n  margin: 10% auto;\n  stroke-miterlimit: 10;\n  stroke-width: 2;\n  stroke: ", ";\n  width: ", "px;\n  height: ", "px;\n\n  .circle {\n    animation: ", " .5s ", " forwards,\n                ", " .4s ease-in-out .4s forwards;\n    fill: none;\n    stroke-dasharray: 166;\n    stroke-dashoffset: 166;\n    stroke-miterlimit: 10;\n    stroke-width: 1;\n    stroke: white;\n  }\n\n  .line, .dot {\n    animation: ", " .3s ", " .8s forwards;\n    stroke-dasharray: 48;\n    stroke-dashoffset: 48;\n    stroke-width: 3;\n    transform-origin: 50% 50%;\n  }\n  .dot {\n    animation-delay: 1s;\n  }\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animation = require("../utils/animation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /*
                                                                                                                                                   * Checkmark SVG From https://codepen.io/haniotis/pen/KwvYLO?editors=0100#0
                                                                                                                                                   */

var SVG = _styledComponents2.default.svg(_templateObject, function (props) {
  return props.background;
}, function (props) {
  return props.size / 3;
}, function (props) {
  return props.size / 3;
}, _animation.stroke, _animation.ease, _animation.fill, _animation.stroke, _animation.ease);

var Warning = function Warning(_ref) {
  var size = _ref.size,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["size", "width", "height"]);

  return _react2.default.createElement(
    SVG,
    _extends({
      xmlns: "http://www.w3.org/2000/svg",
      width: width || size,
      height: height || size,
      viewBox: "0 0 52 52"
    }, props),
    _react2.default.createElement("circle", { className: "circle", cx: "26", cy: "26", r: "25" }),
    _react2.default.createElement("line", { className: "line", x1: "26", y1: "15", x2: "26", y2: "30" }),
    _react2.default.createElement("line", { className: "dot", x1: "26", y1: "33", x2: "26", y2: "36" })
  );
};

Warning.propTypes = {
  size: _react.PropTypes.number,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number
};

Warning.defaultProps = {
  size: 60,
  width: null,
  height: null,
  background: "#293742"
};

exports.default = Warning;