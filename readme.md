# rn 项目屏幕适配解决方案

✨✨ 解决在不同屏幕尺寸下页面展示效果不统一的布局问题

## rn 适配解决方案背景
> 可以参考 [React native 屏幕适配解决方案实战](https://github.com/func-star/blog/issues/30)

## 安装
```
$ npm i --save @monajs/rn-px2dp
```

## 代码演示

```js
import Px2dp from '@monajs/rn-px2dp'

const styles = StyleSheet.create(new Px2dp({
	uiWidthPx: 375,
	props: ['borderWidth']
}).run({
	container: {
		flex: 1,
		fontSize: 20,
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
}))
```

## API
### new Px2dp([config])

| 参数 | 类型 | 默认值 | 描述 |
| --- | --- | --- | :-- |
| [config] | `Object` | | |
| [config.uiWidthPx] | `Number` | `750` | 设计稿总宽度 |
| [config.props] | `Array` | | 需要自定义转换的样式属性 |

### Px2dp.run(styles)
开始执行转换

**Kind**: instance method of [`Px2dp`]

| 参数 | 类型 | 描述 |
| --- | --- | --- | :-- |
| styles | `Object` | 转换前的样式对象 |

## 联系我
> 微信：599321378
