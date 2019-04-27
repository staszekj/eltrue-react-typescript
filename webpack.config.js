"use strict";
const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WEB_PORT = 8888
const WEB_HOST = 'localhost'
const API_HOST = 'http://localhost:8000'


module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    entry: {
        'app': ['./app/app.tsx']
    },
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules
    },
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            cacheGroups: {
                'vendors': {test: /[\\/]node_modules[\\/]/, name: "vendors"}
            }
        }
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            "app": path.resolve(__dirname, './app/'),
            "test": path.resolve(__dirname, './test/'),
        }
    },
    devServer: {
        historyApiFallback: true,
        host: WEB_HOST,
        port: WEB_PORT,
        proxy: {
            ['/api']: API_HOST,
            changeOrigin: true,
            secure: false
        },
        open: true
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            file: './index.html',
            template: 'app/index.template.html'
        }),
    ]
};
