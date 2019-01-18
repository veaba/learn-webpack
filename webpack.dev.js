const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
module.exports = merge(common, {
    mode: "development",
    // 开发模式下使用source map可找到报错源文件
    devtool: 'inline-source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 指定公共 bundle 的名称。
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
});