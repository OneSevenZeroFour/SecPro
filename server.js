var express = require('express');
var http = require('http');
var path = require('path');
var WebpackDevMiddleWare = require('webpack-dev-middleware');
var WebpackHotMiddleWare = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var webpack = require('webpack');
var morgan = require('morgan')('short');

var compiler = webpack(webpackConfig);

var app = express();

app.use(morgan);

app.use(WebpackDevMiddleWare(compiler,{
	noInfo: true,
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true
	}
}))

app.use(WebpackHotMiddleWare(compiler,{
	log: console.log,
	heartbeat: 10 * 1000,
	path: '/__webpack_hmr'
}))

//app.use(express.static(path.resolve(__dirname,'./')));

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
})


var server = http.createServer(app);
server.listen(process.env.PORT || 3000, function(){
	console.log('server start port %j', server.address());
})

var router = require('./erp/router')(app);


