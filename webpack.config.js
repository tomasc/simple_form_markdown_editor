const path = require('path')
const webpack = require('webpack')

const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractSass = new ExtractTextPlugin({ filename: "index.css" })

module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: ['babel-loader', 'coffee-loader']
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: ["css-loader", "sass-loader"],
          fallback: "style-loader"
        })
      }
    ],
  },
  externals: {
    jquery: 'jquery'
  },
  entry: './package/src/index.js',
  output: {
    library: 'simple_form_markdown_editor',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'index.js',
    path: path.resolve(__dirname, 'package/dist')
  },
  plugins: [
    extractSass,
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: {
    extensions: ['.coffee', '.js']
  }
};
