const webpack = require('webpack')
const path = require('path')
module.exports = {
	target: 'web',
	context: path.resolve(__dirname, 'src'),	
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://0.0.0.0:8080',
		'webpack/hot/only-dev-server',
		'./index'
	],
	output: {
        path: path.join(__dirname, 'build'),
        filename: 'client.js',
		publicPath: '/'
    },
	devtool: 'inline-source-map',
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		hot: true,	
		contentBase: [
			path.resolve(__dirname, 'src')
		],
		publicPath: '/',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		},
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?url=false"
      }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				"BUILD_TARGET": JSON.stringify("client")
			}
		})
	],
	watchOptions: {
		poll: 1000
	}
}