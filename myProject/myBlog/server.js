var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  hot: true,
  stats: {
    colors: true
  }
}).listen(3000, '192.168.8.143', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
