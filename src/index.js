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

import { Dimensions } from 'react-native'

const _propList = [
	'width', 'height',
	'top', 'right', 'bottom', 'left',
	'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginVertical', 'marginHorizontal',
	'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingVertical', 'paddingHorizontal',
	'borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius',
	'shadowRadius',
	'fontSize'
]

// 设备 dp 宽度
const _deviceWidthDp = Dimensions.get('window').width

const _px2dp = function (uiElementPx, uiWidthPx = 750) {
	return uiElementPx * _deviceWidthDp / uiWidthPx
}

const _not = function (uiElementPx) {
	return `${uiElementPx}_no2px2dp`
}

const px2dp = function (styles = {}, config = {}) {
	let { uiWidthPx = 750, props = [] } = config

	props = _propList.concat(props)

	for (let className in styles) {
		const classItem = styles[className]
		for (let prop in classItem) {
			if (classItem.hasOwnProperty(prop) && props.includes(prop)) {
				if (typeof classItem[prop] === 'number') {
					classItem[prop] = _px2dp(classItem[prop], uiWidthPx)
				} else if (/\d_no2px2dp$/i.test(classItem[prop])) {
					classItem[prop] = classItem[prop].split('_')[0] - 0
				}
			}
		}
	}

	return styles
}

const _util = {
	flexCenter: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	flexCenterX: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	flexRightX: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	flexCenterY: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},
	flexBottomY: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-end'
	}
}

px2dp._px2dp = _px2dp
px2dp._util = _util
px2dp._not = _not

module.exports = px2dp