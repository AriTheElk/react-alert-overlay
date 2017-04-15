"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /*
                                                                                                                                                                                                                              * Checkmark SVG From https://codepen.io/haniotis/pen/KwvYLO?editors=0100#0
                                                                                                                                                                                                                              */

var Info = function Info(_ref) {
  var size = _ref.size,
      width = _ref.width,
      height = _ref.height,
      props = _objectWithoutProperties(_ref, ["size", "width", "height"]);

  return _react2.default.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", width: width || size, height: height || size, viewBox: "0 0 52 52" }, props),
    _react2.default.createElement("circle", { className: "circle", cx: "26", cy: "26", r: "25" }),
    _react2.default.createElement("line", { className: "line", x1: "26", y1: "15", x2: "26", y2: "30" }),
    _react2.default.createElement("line", { className: "dot", x1: "26", y1: "33", x2: "26", y2: "36" })
  );
};

Info.propTypes = {
  size: _react.PropTypes.number,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number
};

Info.defaultProps = {
  size: 30,
  width: null,
  height: null
};

exports.default = Info;