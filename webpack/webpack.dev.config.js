/**
 * Created by jwqin on 11/15/15.
 */
var webpack = require('webpack');
var _ = require('lodash');

var baseConfig = require('./webpack.config.js');

var hostname = '0.0.0.0',
  port = '3000';

module.exports = _.merge({}, baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  devserver: {
    hostname,
    port
  },
  entry: [
    `webpack-dev-server/client?http://${hostname}:${port}`, // WebpackDevServer host and port
    'webpack/hot/only-dev-server'// "only" prevents reload on syntax errors
  ].concat(baseConfig.entry),
  plugins: [new webpack.HotModuleReplacementPlugin()].concat(baseConfig.plugins)
});
