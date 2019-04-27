"use strict";
const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.loaders.production');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        'app': ['./app/app.tsx']
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[hash].js'
    },
    module: {
        rules
    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            cacheGroups: {
                'vendors': {test: /[\\/]node_modules[\\/]/, name: "vendors"}
            }
        },
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false,
                        annotation: true,
                    }
                }
            })
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            "app": path.resolve(__dirname, './app/'),
            "test": path.resolve(__dirname, './test/'),
        }
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
        new HtmlWebpackPlugin({
            file: './index.html',
            template: 'app/index.template.html'
        }),
        new CompressionPlugin()
    ]
};
