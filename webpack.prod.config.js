/**
 * Created by jwqin on 11/15/15.
 */
var webpack = require('webpack');
var config = require('config');
var _ = require('lodash');

var baseConfig = require('./webpack.config.js');

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = _.merge({}, baseConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ].concat(baseConfig.plugins)
});
