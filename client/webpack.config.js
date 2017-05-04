var path = require('path');

var config = {
  entry: path.join( __dirname + "/src/main.js"),
  output: {
    path: path.join( __dirname + "/build/"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  node: {
  fs: "empty"
}
}

module.exports = config;
