'use strict';

var _reactNative = require('react-native');

var _propList = ['width', 'height', 'top', 'right', 'bottom', 'left', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius', 'shadowRadius', 'fontSize'];

// 设备 dp 宽度
/**
 * rn-px2dp
 * 解决 rn 项目布局的屏幕适配性问题
 * 原理：元素所占屏幕宽度的比例是相同的
 * 我们需要做的是降视觉稿宽度(dp)换算成不同屏幕尺寸下对应的宽度(dp)
 * 公式：设计稿元素宽度（px） / 设计稿总宽度（px） = 元素的宽度（dp） / 屏幕的总宽度（dp）
 * @param styles
 * @param config
 * @returns {styles}
 */

var _deviceWidthDp = _reactNative.Dimensions.get('window').width;

var _px2dp = function _px2dp(uiElementPx) {
	var uiWidthPx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 750;

	return uiElementPx * _deviceWidthDp / uiWidthPx;
};

var px2dp = function px2dp() {
	var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var _config$uiWidthPx = config.uiWidthPx,
	    uiWidthPx = _config$uiWidthPx === undefined ? 750 : _config$uiWidthPx,
	    _config$props = config.props,
	    props = _config$props === undefined ? [] : _config$props;


	props = _propList.concat(props);

	for (var className in styles) {
		var classItem = styles[className];
		for (var prop in classItem) {
			if (classItem.hasOwnProperty(prop) && props.includes(prop) && typeof classItem[prop] === 'number') {
				classItem[prop] = _px2dp(classItem[prop], uiWidthPx);
			}
		}
	}

	return styles;
};

px2dp._px2dp = _px2dp;

module.exports = px2dp;