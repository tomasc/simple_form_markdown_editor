const path = require('path');
const webpack = require('webpack')

module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: ['babel-loader', 'coffee-loader']
      }
    ],
  },
  externals: {
    jquery: 'jquery'
  },
  entry: './package/src/index.js',
  output: {
    library: '@tomasc/simple_form_markdown_editor',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'index.js',
    path: path.resolve(__dirname, 'package/dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: {
    extensions: ['.coffee', '.js']
  }
};
