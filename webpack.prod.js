 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const CleanWebpackPlugin = require('clean-webpack-plugin')
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
     mode: "production",
     plugins: [
         // 清除dist
         new CleanWebpackPlugin(['dist']),
         new UglifyJSPlugin()
     ]
 });