const express= require('express')
const webpack =require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

// console.log(compiler)

app.use(webpackDevMiddleware(compiler,{
    publicPath:config.output.publicPath
}))

app.listen(3000,()=>{
    console.log('server in port 3000! go~~~~~~~')
})