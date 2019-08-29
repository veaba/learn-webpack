> 官网中文台滞后后了，推荐印记中文 https://webpack.docschina.org/
## 学习 webpack


## loader css
> style-loader  css-loader  --save-dev


## loader file
> file-loader --save-dev

## 设置html
> html-webpack-plugin --save-dev

## 清理out 的文件夹
> clean-webpack-plugin --save-dev

## source map `只能在dev环境下使用`
```js
modulex.exports={
    devtool:'inline-source-map'
}
```
## watch ，不手动npm run webpack，文件变化则自动打包
```js

"watch":"webpack watch"

```
## webpack-dev-server 实时重新加载
> webpack-dev-server --save-dev
启动一个server，ip或者 localhost访问文件有变更自动编译刷新加载。但速度有点慢。。。

## webpack-dev-middleware `但无法在浏览器中自动刷新，只是做了自动watch编译`
> webpack-dev-middleware
一个容器，webpack处理后的文件传递给一个服务器，可以被`webpack-dev-server`在内部使用。

## HMR 热更新/热重载
> 竟然是在内存中生成的dist，目录中看不到，此时hmlt 是又一个插件生产的

## 热更新：node.js API + webpack-dev-server  实现 热重载
```js
/**
 * @desc Node.js API情况下使用  webpack-dev-server
 * 
 */
const webpackDevServer = require('webpack-dev-server');
const webpack= require('webpack');

const config =require('./webpack.config');

const options = {
    contentBase:'./dist',
    hot:true,
    host:"localhost"
};
webpackDevServer.addDevServerEntrypoints(config,options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler,options);
server.listen(5000,'localhost',()=>{
    console.log('dev server listening on port 5000')
})
```

## 自定义模式下 实现热重载：webpack-dev-middleware + webpack-hot-middleware

##  HRM 修改样式表
> style-loader --save-dev 

## module.hot.accept 修补

## tree shaking
> 依赖es2015模块系统中的静态结构特性，例如`import`，`export`，起于es2015模块打包工具 `rollup`

## webpack打包a、b文件为c

a.js文件
```js
function a() {
	console.info('hello a');
}

export default a

```

b.js文件
```js
function b() {
	console.info('hello b');
}

export default b

// 导出是b: Object [Module] { default: [Function: b] }，需要访问a.default()才可以

```


c.js文件

```js
const a =  require('./a');
const b = require('./b');


console.info("a:",a);
console.info("b:",b);

console.info(a.default());


```

webpack.config.js
```js
const path = require('path');
module.exports={
    // entry:'./dist/index.js',
    entry:'./c.js',
    target: "node",
    mode:"development",
    resolve:{
        extensions:['.js']
    },
    output:{
        filename:"build.js",
        // filename:"axios-ts.js",
        path:path.resolve(__dirname,'pro')
    }
};


```
原型node文件
```shell
node build.js
```

发现需要`console.log(a.default())`函数


### 总结：webpack 打包出来的文件无法被node require，引用的文件竟然是一个空对象 {}