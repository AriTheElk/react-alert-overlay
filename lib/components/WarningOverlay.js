"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Overlay = require("./Overlay");

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Warning = require("../svg/Warning");

var _Warning2 = _interopRequireDefault(_Warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WarningOverlay = function WarningOverlay(props) {
  return _react2.default.createElement(_Overlay2.default, _extends({ icon: _react2.default.createElement(_Warning2.default, null), title: "Warning" }, props));
};

exports.default = WarningOverlay;