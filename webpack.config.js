const webpack = require('webpack');
const path = require('path');

const publicPath = 'http://localhost:3000/';
const middleClient = 'webpack-hot-middleware/client?reload=true&path=/__webpack_hmr&timeout=20000';

module.exports = {
	entry: [
		path.resolve(__dirname, './src/main.js'),
		middleClient
	],
	devtool: '#eval-source-map',
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [{
				test: /\.vue$/,
				use: [{
					loader: 'vue-loader',
					options:{
						//loader: 'scss-loader'
					}
				}],
			},
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader'
				}],
				exclude: /node_modules/
			},
			{
				test: /\.(jpeg|png|gif|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: '8192'
					}
				}]
			},
			{
				test: /\.css$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						modules: true
					}
				}, {
					loader: 'postcss-loader'
				}]
			}, {
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader',
					options: {
						modules: true
					}
				}, {
					loader: 'sass-loader'
				}]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	
	module.exports.output.path = path.resolve(__dirname, './dist');

	module.exports.entry = path.resolve(__dirname, './src/main.js');
	
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		})
	])
}