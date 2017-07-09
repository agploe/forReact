const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : path.resolve(__dirname, "./src/index.js"),
    output : {
        path : path.resolve(__dirname, "./dist"),
        filename : "bundle.js"
    },

    module : {
        rules : [{

            test : /\.js(x)?/,
            use : "babel-loader",
            exclude : /node_modules/
        }]
    },
    plugins : [
        new HtmlWebPackPlugin({template : path.resolve(__dirname, "./src/index.html")})
    ]

};