const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: path.join(__dirname, "src", "index"),
	watch: false,
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "./",
		filename: "bundle.js",
		chunkFilename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /.jsx?$/,
				include: [path.resolve(__dirname, "src")],
				exclude: [path.resolve(__dirname, "node_modules")],
				loader: "babel-loader",
				query: {
					presets: [
						[
							"@babel/env",
							{
								targets: {
									browsers: "last 2 chrome versions",
								},
							},
						],
					],
				},
			},
		],
	},
	resolve: {
		extensions: [".json", ".js", ".jsx"],
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, "/dist/"),
		inline: true,
		host: "localhost",
		port: 8080,
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html",
			inject: true,
		}),
	],
	presets: [["@babel/preset-env", { modules: true }], "@babel/preset-react"],
};
