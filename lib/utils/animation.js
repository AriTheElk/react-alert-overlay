"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeOutDown = exports.fadeInDown = exports.fadeOutUp = exports.fadeInUp = exports.fadeOut = exports.fadeIn = exports.ease = exports.stroke = exports.fill = exports.animation = undefined;

var _templateObject = _taggedTemplateLiteral(["\n    animation: ", " ", "s ", ";\n    animation-fill-mode: forwards;\n  "], ["\n    animation: ", " ", "s ", ";\n    animation-fill-mode: forwards;\n  "]),
    _templateObject2 = _taggedTemplateLiteral(["\n  100% {\n    stroke-width: 50;\n  }\n"], ["\n  100% {\n    stroke-width: 50;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["\n  100% {\n    stroke-dashoffset: 0;\n  }\n"], ["\n  100% {\n    stroke-dashoffset: 0;\n  }\n"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]),
    _templateObject5 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]),
    _templateObject6 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n    position: relative;\n    top: 10px;\n  }\n  100% {\n    opacity: 1;\n    position: relative;\n    top: 0;\n  }\n"], ["\n  0% {\n    opacity: 0;\n    position: relative;\n    top: 10px;\n  }\n  100% {\n    opacity: 1;\n    position: relative;\n    top: 0;\n  }\n"]),
    _templateObject7 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n    position: relative;\n    top: 0px;\n  }\n  100% {\n    opacity: 0;\n    position: relative;\n    top: -10px;\n  }\n"], ["\n  0% {\n    opacity: 1;\n    position: relative;\n    top: 0px;\n  }\n  100% {\n    opacity: 0;\n    position: relative;\n    top: -10px;\n  }\n"]),
    _templateObject8 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 0;\n    position: relative;\n    bottom: 10px;\n  }\n  100% {\n    opacity: 1;\n    position: relative;\n    bottom: 0;\n  }\n"], ["\n  0% {\n    opacity: 0;\n    position: relative;\n    bottom: 10px;\n  }\n  100% {\n    opacity: 1;\n    position: relative;\n    bottom: 0;\n  }\n"]),
    _templateObject9 = _taggedTemplateLiteral(["\n  0% {\n    opacity: 1;\n    position: relative;\n    bottom: 0;\n  }\n  100% {\n    opacity: 0;\n    position: relative;\n    bottom: -10px;\n  }\n"], ["\n  0% {\n    opacity: 1;\n    position: relative;\n    bottom: 0;\n  }\n  100% {\n    opacity: 0;\n    position: relative;\n    bottom: -10px;\n  }\n"]);

var _styledComponents = require("styled-components");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var animation = exports.animation = function animation(name) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var loops = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return (0, _styledComponents.css)(_templateObject, name, duration, loops);
};

var fill = exports.fill = (0, _styledComponents.keyframes)(_templateObject2);

var stroke = exports.stroke = (0, _styledComponents.keyframes)(_templateObject3);

var ease = exports.ease = "cubic-bezier(.85, .01, .45, 1)";

var fadeIn = exports.fadeIn = (0, _styledComponents.keyframes)(_templateObject4);

var fadeOut = exports.fadeOut = (0, _styledComponents.keyframes)(_templateObject5);

var fadeInUp = exports.fadeInUp = (0, _styledComponents.keyframes)(_templateObject6);

var fadeOutUp = exports.fadeOutUp = (0, _styledComponents.keyframes)(_templateObject7);

var fadeInDown = exports.fadeInDown = (0, _styledComponents.keyframes)(_templateObject8);

var fadeOutDown = exports.fadeOutDown = (0, _styledComponents.keyframes)(_templateObject9);