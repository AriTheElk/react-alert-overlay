"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Overlay = require("./Overlay");

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Success = require("../svg/Success");

var _Success2 = _interopRequireDefault(_Success);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuccessOverlay = function SuccessOverlay(props) {
  return _react2.default.createElement(_Overlay2.default, _extends({ icon: _react2.default.createElement(_Success2.default, null), title: "Success" }, props));
};

exports.default = SuccessOverlay;