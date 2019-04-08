/**
 * rn-px2dp
 * 解决 rn 项目布局的屏幕适配性问题
 * 原理：元素所占屏幕宽度的比例是相同的
 * 我们需要做的是降视觉稿宽度(dp)换算成不同屏幕尺寸下对应的宽度(dp)
 * 公式：设计稿元素宽度（px） / 设计稿总宽度（px） = 元素的宽度（dp） / 屏幕的总宽度（dp）
 * @param uiElementPx
 * @returns {number}
 */

import { Dimensions } from 'react-native'

const propList = [
	'width', 'height',
	'top', 'right', 'bottom', 'left',
	'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
	'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
	'borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius',
	'shadowRadius',
	'fontSize'
]

class Px2dp {
	constructor (config = {}) {
		this.uiWidthPx = 750
		this.props = propList
		const { uiWidthPx, props = [] } = config

		if (uiWidthPx) {
			this.uiWidthPx = uiWidthPx
		}

		if (props.length > 0) {
			this.props = this.props.concat(props)
		}
	}

	run (styles = {}) {
		const deviceWidthDp = Dimensions.get('window').width

		for (let className in styles) {
			const classItem = styles[className]
			for (let prop in classItem) {
				if (classItem.hasOwnProperty(prop) && this.props.includes(prop) && typeof classItem[prop] === 'number') {
					classItem[prop] = classItem[prop] * deviceWidthDp / this.uiWidthPx
				}
			}
		}

		return styles
	}
}

export default Px2dp
