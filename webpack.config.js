/* eslint-disable*/

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:5000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1'
                ]
            },
            { test: /\.(eot|png|ttf|svg|woff|woff2)$/, loader: 'url-loader'}
        ]
    },
    resolve: {
        modules: [
            path.join(process.cwd(), 'src'),
            'node_modules'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};