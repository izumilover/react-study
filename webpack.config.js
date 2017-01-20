/**
 * Created by nextwave20 on 2017-01-13.
 */
var webpack = require("webpack");

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        host : '127.0.0.1',
        port: 4000,
        contentBase: __dirname + '/public/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    /*plugins : [
        new webpack.HotModuleReplacementPlugin();
    ]*/
};