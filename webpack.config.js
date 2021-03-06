const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		shards: './src/js/app.js'
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist/js'),
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
};
