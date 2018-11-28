/*** webpack.config.dev.js ***/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "src/demo/src/index.html"),
  filename: "./index.html"
});
module.exports = {
  entry: path.resolve(__dirname, "src/demo/src/index.js"),
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      use: "babel-loader",
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }
    ]
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    open: true,
    port: 3000,
    watchOptions: {
      poll: true
    }
  }
};