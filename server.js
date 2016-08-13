var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

var devserver = config.devserver;
var serverUrl = devserver.hostname + ':' + devserver.port;

new WebpackDevServer(webpack(config), {
  proxy: {
    '*': {
      target: '/assets/index.html',
      secure: false
    }
  },
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(devserver.port, devserver.hostname, function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://' + serverUrl);
});