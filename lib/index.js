'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * rn-px2dp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 解决 rn 项目布局的屏幕适配性问题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 原理：元素所占屏幕宽度的比例是相同的
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 我们需要做的是降视觉稿宽度(dp)换算成不同屏幕尺寸下对应的宽度(dp)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 公式：设计稿元素宽度（px） / 设计稿总宽度（px） = 元素的宽度（dp） / 屏幕的总宽度（dp）
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param uiElementPx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @returns {number}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _reactNative = require('react-native');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var propList = ['width', 'height', 'top', 'right', 'bottom', 'left', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'shadowRadius', 'fontSize'];

var Px2dp = function () {
	function Px2dp() {
		var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, Px2dp);

		this.uiWidthPx = 750;
		this.props = propList;
		var uiWidthPx = config.uiWidthPx,
		    _config$props = config.props,
		    props = _config$props === undefined ? [] : _config$props;


		if (uiWidthPx) {
			this.uiWidthPx = uiWidthPx;
		}

		if (props.length > 0) {
			this.props = this.props.concat(props);
		}
	}

	_createClass(Px2dp, [{
		key: 'run',
		value: function run() {
			var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var deviceWidthDp = _reactNative.Dimensions.get('window').width;

			for (var className in styles) {
				var classItem = styles[className];
				for (var prop in classItem) {
					if (classItem.hasOwnProperty(prop) && this.props.includes(prop) && typeof classItem[prop] === 'number') {
						classItem[prop] = classItem[prop] * deviceWidthDp / this.uiWidthPx;
					}
				}
			}

			return styles;
		}
	}]);

	return Px2dp;
}();

exports.default = Px2dp;