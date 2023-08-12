const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      {
        test: /\.(js)$/, //group of js file,
        use: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()], // myBundle.js automatically injected into the index.html which is inside the dist folder
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};

// TODO: Loader is something which done before the final compilation
// Todo: Plugin
