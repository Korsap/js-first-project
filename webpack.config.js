const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './frontend/app.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'public')
	},
	watch: true,
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: ['transform-runtime']
					}
				}
			},

			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			}
		]
	},
	plugins: [
		new UglifyJsPlugin({
			sourceMap: true
		})
	],

	devServer: {
		hot: true,
		inline: true,
		contentBase: path.resolve(__dirname, 'public'),
		publicPath: '/'
	}
};