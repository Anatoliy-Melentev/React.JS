const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
	target: 'node',
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.join(__dirname, '../src/server/server.js'),
	output: { path: path.resolve(__dirname, '../dist/server'), filename: 'server.js' },
	resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.sass'] },
	externals: [nodeExternals()],
	module: {
		rules: [{
			test: /\.[tj]sx?$/,
			//use: ['ts-loader'],
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
					plugins: ['@babel/plugin-proposal-object-rest-spread']
				}
			},
		}, {
			test: /\.sass$/i,
			use: ['style-loader', {
				loader: 'css-loader',
				options: {
					modules: {
						mode: 'local',
						localIdentName: '[name]__[local]--[hash:base64:5]',
					},
					//onlyLocals: true,
				}
			}, 'sass-loader'],
		}]
	},
	optimization: { minimize: false }
};