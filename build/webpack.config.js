"use strict";

var path = require("path");

var autoprefixer = require("autoprefixer");

var ExtractCSS = require("extract-text-webpack-plugin");

var CopyPlugin = require("copy-webpack-plugin");

var MODE = process.env.WEBPACK_ENV;
var ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
var OUTPUT_DIR = path.join(__dirname, "static");
var config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: "file-loader"
      }]
    }, {
      test: /\.(js)$/,
      use: [{
        loader: "babel-loader"
      }]
    }, {
      test: /\.(scss)$/,
      use: ExtractCSS.extract([{
        loader: "css-loader"
      }, {
        loader: "postcss-loader",
        options: {
          plugins: function plugins() {
            return [autoprefixer({
              overrideBrowserslist: "cover 99.5%"
            })];
          }
        }
      }, {
        loader: "sass-loader"
      }])
    }]
  },
  output: {
    filename: "main.js",
    path: OUTPUT_DIR
  },
  plugins: [new ExtractCSS("styles.css"), // new CopyPlugin([{ from: "src/assets/img", to: "img" }]),
  new CopyPlugin({
    patterns: [{
      from: "assets/img",
      to: "img"
    }]
  })]
};
module.exports = config;