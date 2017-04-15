"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  background: ", ";\n  border-radius: ", "px;\n  display: flex;\n  flex-direction: column;\n  height: ", "px;\n  justify-content: center;\n  left: 50%;\n  margin-left: -", "px;\n  margin-top: -", "px;\n  position: absolute;\n  top: 50%;\n  width: ", "px;\n  z-index: 100;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-radius: ", "px;\n  display: flex;\n  flex-direction: column;\n  height: ", "px;\n  justify-content: center;\n  left: 50%;\n  margin-left: -", "px;\n  margin-top: -", "px;\n  position: absolute;\n  top: 50%;\n  width: ", "px;\n  z-index: 100;\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  *
                                                                                                                                                  * Wrapper
                                                                                                                                                  *
                                                                                                                                                  */

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.background;
}, function (props) {
  return props.radius;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size / 2;
}, function (props) {
  return props.size / 2;
}, function (props) {
  return props.size;
});

Wrapper.defaultProps = {
  size: 150,
  radius: 12,
  duration: 1,
  background: "#293742"
};

exports.default = Wrapper;