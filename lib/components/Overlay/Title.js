"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  color: white;\n  display: flex;\n  flex: .25;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin: 10px 0;\n  span {\n    flex: 1;\n  }\n"], ["\n  align-items: center;\n  color: white;\n  display: flex;\n  flex: .25;\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  margin: 10px 0;\n  span {\n    flex: 1;\n  }\n"]);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  *
                                                                                                                                                  * Title
                                                                                                                                                  *
                                                                                                                                                  */

var Title = _styledComponents2.default.h2(_templateObject, function (props) {
  return props.fontFamily;
}, function (props) {
  return props.fontSize;
}, function (props) {
  return props.fontWeight;
});

Title.defaultProps = {
  fontFamily: "sans-serif",
  fontSize: "24px",
  fontWeight: "300"
};

exports.default = Title;