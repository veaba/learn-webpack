const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    mode: "production",
    // 入口
    entry: {
        app: './src/index.js',
        // print: "./src/print.js",
        anothor: "./src/anthor-module.js"
        // app:"./src/index.js",
    },
    // 修补
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    // 插件
    plugins: [

        // html设置
        new HtmlWebpackPlugin({
            // 更改title
            title: 'let go webpack!',
        }),
        // 查看修补的依赖
        new webpack.NamedModulesPlugin(),
        // 热替换插件
        new webpack.HotModuleReplacementPlugin(),
    ],
    // 输出
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    }
}