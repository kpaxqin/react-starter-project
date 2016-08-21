var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/webpack.dev.config');

var devserver = config.devserver;
var serverUrl = devserver.hostname + ':' + devserver.port;

var publicPath = config.output.publicPath;

new WebpackDevServer(webpack(config), {
  publicPath: path.isAbsolute(publicPath) ? publicPath : path.resolve('/', publicPath),
  hot: true,
  historyApiFallback: true
}).listen(devserver.port, devserver.hostname, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log(`Server started, open http://${serverUrl} in your browser pls`);
});