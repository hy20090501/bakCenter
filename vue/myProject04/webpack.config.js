// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
module.exports = {
  entry: {
  	'app': './app.js',
  	'app2': './app2.js'
  },
  output: {
	path: './dist',
	publicPath:'dist/', //webpack-dev-server服务启动的bundle目录
	filename: '[name].js'
  },
  //配置自动刷新,如果打开会使浏览器刷新而不是热替换
  /*devServer: {
	historyApiFallback: true,
	hot: false,
	inline: true,
	grogress: true
  },*/
  module: {
	loaders: [
	  //转化ES6语法
	  {
		test: /\.js$/,
		loader: 'babel',
		exclude: /node_modules/
	  },
	  //解析.vue文件
	  {
		test:/\.vue$/,
		loader:'vue'
	  },
	  //图片转化，小于8K自动转化为base64的编码
	  {
		test: /\.(png|jpg|gif)$/,
		loader:'url-loader?limit=8192'
	  }
	]
  },
  vue:{
	loaders:{
	  js:'babel'//,
	  // less: ExtractTextPlugin.extract('vue-style-loader', 'css!less')
	}
  },
  resolve: {
		// require时省略的扩展名，如：require('app') 不需要app.js
		extensions: ['', '.js', '.vue'],
		// 别名，可以直接使用别名来代表设定的路径以及其他
		alias: {
			filter: path.join(__dirname, './src/filters'),
			components: path.join(__dirname, './src/components'),
			vue : path.join(__dirname,'/node_modules/vue/dist/vue')
		}
	}
}