const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: {
    'public/index': './resources/views/app.js'
  },
  output: {
    path: path.join(__dirname),
    publicPath: '/',
    filename: '[name].js'
  },
  externals: [],
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      }
    ]
  },
  plugins: []
}