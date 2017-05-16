const webpack = require('webpack')
const path = require('path')
module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/only-dev-server',
		'./src/index'
	],
	target: 'web',
	module: {
		rules: [
		{
			test: /\.js?$/,
            use: 'babel-loader',
            exclude: path.join(__dirname, 'node_modules')
		}
	]
	},
	output: {
        path: path.join(__dirname, 'build'),
        filename: 'client.js',
		publicPath: 'http://localhost:3001/'
    },
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				"BUILD_TARGET": JSON.stringify("client")
			}
		})
	],
	devServer: {
		host: 'localhost',
		port: 3001,
		historyApiFallback: true,
		hot: true,
		contentBase: [
			path.resolve(__dirname, 'src'),
		],
		publicPath: '/',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		}
	},

}