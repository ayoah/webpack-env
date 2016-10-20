var _env = require('./commander.js')();
var webpack = require('webpack');
var path = require('path');
var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
    context: __dirname,
    // Include the hot middleware with each entry point
    entry: {
        // Add the client which connects to our middleware
        main: ['./frontend-source/app/main.js', hotMiddlewareScript]
    },
    output: {
        path: __dirname + '/public/javascript',
        publicPath: '/javascript',
        filename: '[name].js'
    },
    devtool: '#source-map',
    module: {
        loaders: [{
            test: /config\.js$/,
            loader: "imports?webpack_evn=>'"+_env+"'"
        }]
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js', '.css'],
        //别名
        alias: {
            config: path.join(__dirname, 'frontend-source/configs/common.config')
        }
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};