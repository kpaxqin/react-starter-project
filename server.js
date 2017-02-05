var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/webpack.dev.config');

var devServer = config.devServer;
var serverUrl = devServer.hostname + ':' + devServer.port;

var publicPath = config.output.publicPath;

new WebpackDevServer(webpack(config), {
  publicPath: path.isAbsolute(publicPath) ? publicPath : path.resolve('/', publicPath),
  hot: true,
  historyApiFallback: true
}).listen(devServer.port, devServer.host, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log(`Server started, open http://${serverUrl} in your browser pls`);
});