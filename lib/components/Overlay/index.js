"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _animatedLifecycle = require("animated-lifecycle");

var _animatedLifecycle2 = _interopRequireDefault(_animatedLifecycle);

var _Wrapper = require("./Wrapper");

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _Title = require("./Title");

var _Title2 = _interopRequireDefault(_Title);

var _Success = require("../../svg/Success");

var _Success2 = _interopRequireDefault(_Success);

var _animation = require("../../utils/animation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                             *
                                                                                                                                                                                                                             * Notification
                                                                                                                                                                                                                             *
                                                                                                                                                                                                                             */

function Notification(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      duration = _ref.duration,
      onComplete = _ref.onComplete,
      props = _objectWithoutProperties(_ref, ["title", "icon", "duration", "onComplete"]);

  return _react2.default.createElement(
    _animatedLifecycle2.default,
    {
      createAfter: 0,
      destroyAfter: duration * 1000,
      createAnimation: _animation.fadeIn,
      createAnimationLength: 350,
      destroyAnimation: _animation.fadeOut,
      destroyAnimationLength: 350,
      onDestroy: onComplete
    },
    _react2.default.createElement(
      _Wrapper2.default,
      props,
      icon,
      _react2.default.createElement(
        _Title2.default,
        null,
        _react2.default.createElement(
          "span",
          null,
          title
        )
      )
    )
  );
}

Notification.propTypes = {
  title: _react.PropTypes.string,
  icon: _react.PropTypes.element,
  duration: _react.PropTypes.number,
  onComplete: _react.PropTypes.func
};

Notification.defaultProps = {
  title: "Success",
  icon: _react2.default.createElement(_Success2.default, { size: 50 }),
  duration: 2,
  onComplete: function onComplete() {}
};

exports.default = Notification;