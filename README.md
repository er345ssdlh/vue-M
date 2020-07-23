<!--
 * @Author: lzy
 * @Date: 2020-07-01 17:14:33
 * @FilePath: \my-init-M\README.md
-->
# vue-mobile-template

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### 构建测试环境
```
yarn build:qa
```

### 构建生产环境
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 环境变量
```
NODE_ENV // 构建环境
VUE_APP_TARGET // 构建目标
VUE_APP_PATH_NAME // path name (项目部署目录)
```

### 关于请求
```
接口统一放在api文件目录 _showLoading 参数设置是否显示loading
如果接口携带公共参数，到request.js 的setData设置
接口的baseURL各种环境配置 到config/index文件下配置，会优先访问接口携带的ip地址
如果设置开发环境的baseurl为本地，请到vue.config.js下的devServer设置本地服务代理
```

### vconsole调试
```
测试环境下会显示。vue.config.js文件下的 vConsolePlugin 可以修改
```

### 路由缓存
```
已经下载vue-navigation 前进刷新后退不会刷新
```

### flex布局
> 提示

当我们写这些跟flex相关的类名时，总应该把m-flex-row或者m-flex-col写在class多个类名的左边，因为m-flex-row,m-flex-col是一个集合类，如果你不想要其中的某个属性，可以通过右边的类名覆盖它。

1.总超级

.m-flex-row,.m-flex-col

2.子元素

.m-flex-row--top,.m-flex-row--left,.m-flex-row--wrap,.m-flex-row--center

.m-flex-col--start


### 文字省略
m-line-1,m-line-2,m-line-3,m-line-4,m-line-5五个类名在文字超出内容盒子时，分别只显示一行、两行、三行、四行、五行+省略号。

```html
<div class="m-line-1">
    是日也，天朗气清，惠风和畅，仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也
</div>
```

## 内外边距
项目中定义了一套内外边距的类名，调用简单，类似m-padding-x、m-margin-left-x等，这里的x取值规则如下：

0-60之间的偶数

类名的取值有如下：

* m-padding-x
* m-padding-left-x
* m-padding-top-x
* m-padding-right-x
* m-padding-bottom-x


* m-margin-x
* m-margin-left-x
* m-margin-top-x
* m-margin-right-x
* m-margin-bottom-x
