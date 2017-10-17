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

app.use(WebpackDevMiddleWare(compiler, {
	noInfo: true,
	publicPath: webpackConfig.output.publicPath,
	stats: {
		colors: true
	}
}))

app.use(WebpackHotMiddleWare(compiler))

app.use(express.static(path.resolve(__dirname, './')));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
})


//服务器代理
app.get('/agency', function (req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	var data = req.query;
	var url = data.url;
	http.get(url, function (re) {
		var data = "";
		re.setEncoding('utf8');
		re.on("data", function (chunk) {
			data += chunk
		})
		re.on("end", function () {
			res.send(data)
		})
	});
})

app.get('/getWeathers', function (req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	var data = req.query.city;
	//data = encodeURI(data)
	http.get(`http://www.sojson.com/open/api/weather/json.shtml?city=%E5%B9%BF%E5%B7%9E%E5%B8%82`, function (result) {
		var data = "";
		result.setEncoding('utf-8');
		result.on("data", function (chunk) {
			data += chunk;
		})
		result.on("end", function () {
			//console.log(data)
			res.send(JSON.stringify(data))
		})
	});
})



var server = http.createServer(app);

server.listen(8080, function () {
	console.log('server start port %j', server.address());
})


// 连接数据库
var router = require('./erp/router')(app);