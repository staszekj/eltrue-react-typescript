var MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const commonLoaders = require('./webpack.common.loaders');

module.exports = [
    ...commonLoaders,
    {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    sourceMap: true
                }
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    importLoaders: 1
                }
            },
            {
                loader: "postcss-loader",
                options: {
                    sourceMap: true,
                }
            },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                    outputStyle: "expanded"
                }
            }
        ]
    }

];
