var MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = [
  {
    test: /\.tsx?$/,
    include: path.resolve(__dirname, 'app'),
    use: [
      {
        loader: 'ts-loader'
      },
    ]
  },
  {
    test: /\.jsx?$/,
    include: path.resolve(__dirname, 'app'),
    loader: "babel-loader",
    options: {
      cacheDirectory: true
    }
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: ["file-loader"]
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {prefix: "font", limit: 5000}
      }
    ]
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          prefix: "font",
          limit: 10000,
          mimetype: "application/octet-stream"
        }
      }
    ]
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/svg+xml"
        }
      }
    ]
  },
  {
    test: /\.gif/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/gif"
        }
      }
    ]
  },
  {
    test: /\.jpg/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/jpg"
        }
      }
    ]
  },
  {
    test: /\.png/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: "url-loader",
        options: {
          limit: 10000,
          mimetype: "image/png",
          name: "[path][name].[ext]"
        }
      }
    ]
  },
  {
    test: /\.html$/,
    use: [{
      loader: 'html-loader',
      options: {
        minimize: false,
        removeComments: false,
        collapseWhitespace: false
      }
    }],
  },
  {
    test: /\.scss$/,
    exclude: path.resolve(__dirname, "node_modules"),
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader'
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: "inline",
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
