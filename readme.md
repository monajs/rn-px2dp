# rn 项目屏幕适配解决方案

✨✨ 解决在不同屏幕尺寸下页面展示效果不统一的布局问题

## 背景
> [React native 屏幕适配解决方案实战](https://github.com/func-star/blog/issues/30)

## 安装
```
$ npm i --save @monajs/rn-px2dp
```

## demo1

```js
import Px2dp from '@monajs/rn-px2dp'

const styles = StyleSheet.create(px2dp({
	container: {
        flex: 1,
        fontSize: 20,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
}, {
	uiWidthPx: 375,
	props: ['borderWidth']
}))
```

## demo2

```js
import Px2dp from '@monajs/rn-px2dp'

<Text style={{fontSize: px2dp._px2dp(20, 375)}}>@monajs/rn-px2dp</Text>
```

## API
### px2dp(styles, config)

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | :-- |
| styles | `Object` | | 转换前的样式对象 |
| [config] | `Object` | | |
| [config.uiWidthPx] | `Number` | `750` | 设计稿总宽度 |
| [config.props] | `Array` | | 需要自定义转换的样式属性 |

**props**: 默认会转换以下的样式属性，可以通过设置`props`来进行赋能
```js
const _propList = [
	'width', 'height',
	'top', 'right', 'bottom', 'left',
	'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft',
	'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
	'borderRadius', 'borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius',
	'shadowRadius',
	'fontSize'
]
```

### px2dp._px2dp(uiElementPx, uiWidthPx)

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | :-- |
| uiElementPx | `Number` | | 设计稿元素宽度 |
| uiWidthPx | `Number` | `750` | 设计稿总宽度 |

## 联系我
> 微信：599321378
