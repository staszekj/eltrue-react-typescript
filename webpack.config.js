"use strict";
const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.loaders');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WEB_PORT = 8888
const WEB_HOST = 'localhost'
const API_HOST = 'http://localhost:8000'


module.exports = {
    mode: 'development',
    entry: {
        'app': ['./app/app.js']
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
            "type": path.resolve(__dirname, './type/'),
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
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            file: './index.html',
            template: 'app/index.template.html'
        }),
    ]
};
