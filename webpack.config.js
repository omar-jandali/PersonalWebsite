const path = require("path");
require('dotenv').config();
const webpack = require('webpack')
require("fs")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./client/src/"),
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ["react", "env"]
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[hash:base64]'
            }
          }
        ]
      }
    ], 
  },
  node: {
    fs: 'empty'
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.HOSTNAME': JSON.stringify(process.env.HOST),
      'process.env.PORT': JSON.stringify(process.env.PORT),
    })
  ]
};