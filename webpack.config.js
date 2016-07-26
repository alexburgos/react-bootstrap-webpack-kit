var path = require('path'),
    webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(__dirname, './src/js/main.js')
  ],
  cache: true,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass?outputStyle=compressed']
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
  },
  postcss: function () {
    return [require('autoprefixer'), require('precss')];
  },
  devServer: {
    hot: true,
    contentBase: './',
  }
};
