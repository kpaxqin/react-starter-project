/**
 * Created by jwqin on 11/15/15.
 */
var webpack = require('webpack');
var _ = require('lodash');

var baseConfig = require('./webpack.config.js');

module.exports = _.merge({}, baseConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ].concat(baseConfig.plugins)
});
