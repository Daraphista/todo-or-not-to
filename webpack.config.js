const path = require("path");

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, "public");
    }
  },
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
};
