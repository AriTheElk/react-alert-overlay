"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  opacity: ", ";\n  ", "\n"], ["\n  opacity: ", ";\n  ", "\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animation = require("../../utils/animation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /**
                                                                                                                                                  *
                                                                                                                                                  * Lifecycle
                                                                                                                                                  *
                                                                                                                                                  */

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.visible === true ? 1 : 0;
}, function (props) {
  return props.animation && (0, _animation.animation)(props.animation, props.animationLength);
});

var Lifecycle = function (_PureComponent) {
  _inherits(Lifecycle, _PureComponent);

  function Lifecycle() {
    _classCallCheck(this, Lifecycle);

    var _this = _possibleConstructorReturn(this, (Lifecycle.__proto__ || Object.getPrototypeOf(Lifecycle)).call(this));

    _this.state = { visible: false, animation: null };
    return _this;
  }

  _createClass(Lifecycle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTimer();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // reset the timer if children are changed
      if (nextProps.children !== this.props.children) {
        this.setTimer();
        this.setState({ visible: false });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this._timer);
    }
  }, {
    key: "setTimer",
    value: function setTimer() {
      var _this2 = this;

      if (this._timer != null) clearTimeout(this._timer);

      var destroyAnimationTimer = function destroyAnimationTimer() {
        return setTimeout(function () {
          return _this2.handleDestroy();
        }, _this2.props.destroyAnimationLength);
      };

      var delayDestroyTimer = function delayDestroyTimer() {
        return console.warn('delay destroy timer'), setTimeout(function () {
          _this2.setState({
            animation: _this2.props.destroyAnimation,
            animationLength: _this2.props.destroyAnimationLength * 0.001
          });
          return destroyAnimationTimer();
        }, _this2.props.destroyAfter);
      };

      var createAnimationTimer = function createAnimationTimer() {
        return console.warn('create animation timer'), setTimeout(function () {
          _this2.handleCreate();
          return delayDestroyTimer();
        }, _this2.props.createAnimationLength);
      };

      var delayCreateTimer = function delayCreateTimer() {
        return console.warn('delay create timer'), setTimeout(function () {
          _this2.setState({
            animation: _this2.props.createAnimation,
            animationLength: _this2.props.createAnimationLength * 0.001
          });
          return createAnimationTimer();
        }, _this2.props.createAfter);
      };

      this._timer = delayCreateTimer();
    }
  }, {
    key: "handleCreate",
    value: function handleCreate() {
      this.setState({ visible: true, animation: null });
      if (this.props.onCreate) this.props.onCreate();
    }
  }, {
    key: "handleDestroy",
    value: function handleDestroy() {
      this.setState({ visible: false, animation: null });
      this._timer = null;
      if (this.props.onDestroy) this.props.onDestroy();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        Wrapper,
        {
          visible: this.state.visible,
          animation: this.state.animation,
          animationLength: this.state.animationLength
        },
        this.props.children
      );
    }
  }]);

  return Lifecycle;
}(_react.PureComponent);

Lifecycle.propTypes = {
  children: _react.PropTypes.node,
  createAfter: _react.PropTypes.number.isRequired,
  destroyAfter: _react.PropTypes.number.isRequired,
  onCreate: _react.PropTypes.func,
  onDestroy: _react.PropTypes.func,
  createAnimation: _react.PropTypes.string.isRequired,
  destroyAnimation: _react.PropTypes.string.isRequired,
  createAnimationLength: _react.PropTypes.number.isRequired,
  destroyAnimationLength: _react.PropTypes.number.isRequired
};

Lifecycle.defaultProps = {
  children: undefined,
  createAfter: 0,
  destroyAfter: 5000,
  createAnimation: _animation.fadeIn,
  destroyAnimation: _animation.fadeOut,
  createAnimationLength: 1000,
  destroyAnimationLength: 1000
};

exports.default = Lifecycle;