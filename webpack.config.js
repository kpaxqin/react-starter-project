/**
 * Created by jwqin on 11/15/15.
 */
var path = require('path');
var webpack = require('webpack');
var config = require('config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.join(__dirname, '_dist/'),
    filename: 'bundle-[hash].js',
    publicPath: '/assets/',
    chunkFilename: "[name]-[hash].js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname
    }, {
      test: /\.scss$/,
      loader: "style!css!sass?includePaths[]=" + path.resolve(__dirname, "./node_modules/"),
      include: __dirname
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff2?$|\.ttf|\.eot$/,
      loader: "file"
    }]
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.config': JSON.stringify(config)
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.tpl.html',
      inject: false
    })
  ]
};
