/**
 * Created by jwqin on 11/15/15.
 */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./nodeConfig');

var rootPath = path.resolve(__dirname, '../');

module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    path: path.join(rootPath, '_dist/'),
    filename: 'bundle-[hash].js',
    publicPath: './',
    chunkFilename: '[name]-[hash].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['react-hot-loader', 'babel-loader'],
      exclude: /node_modules/,
      include: rootPath
    }, {
      test: /\.css?$/,
      use: ['style-loader', 'raw-loader'],
      include: rootPath
    }, {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(rootPath, './node_modules/')],
          },
        },
      ],
      include: rootPath,
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff2?$|\.ttf|\.eot$/,
      use: 'file-loader'
    }]
  },
  resolve: {
    extensions: ['.jsx', '.js']
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
