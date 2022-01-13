const path= require('path');
const HtmlWebpackPlugin= require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports= {
    entry: {
        app: "./src/index.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        // publicPath: "/",
        clean: true
    },
    module:{
        rules:[
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[hash][ext][query]'
                  }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[hash][ext][query]'
                  }
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Welcome home",
            template: "index.html"
        }),
        new MiniCssExtractPlugin()
    ]
}