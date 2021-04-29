// mode could be a "production"
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",

    module: {
        rules: [
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            }
            },
        ]
    },

    plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
        template: "./src/index.html"
    })],

    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
    }
}

// contentBase , devServer, devtool mode - webpack
// module, rules - babel