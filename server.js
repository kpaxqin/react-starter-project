var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/webpack.dev.config');
var openBrowser = require('react-dev-utils/openBrowser');

var devServer = config.devServer;
var serverUrl = `http://${devServer.host}:${devServer.port}`;

var publicPath = config.output.publicPath;

new WebpackDevServer(webpack(config), {
  publicPath: path.isAbsolute(publicPath) ? publicPath : path.resolve('/', publicPath),
  hot: true,
  historyApiFallback: true
}).listen(devServer.port, devServer.host, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log(`Server started on ${serverUrl}`);

  if (openBrowser(serverUrl)) {
    console.log('Browser tab has been opened!');
  } else {
    console.warn('Failed to open browser tab, please open it by yourself');
  }
});