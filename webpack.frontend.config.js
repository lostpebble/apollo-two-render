const webpack = require("webpack");

/* * * -
*
*    F R O N T E N D  >>>
*
* * * */

const version = "v01";

process.env.BABEL_ENV = process.env.NODE_ENV !== "production"
  ? "frontend"
  : "frontend-production";

module.exports = {
  entry: {
    [`app-${version}`]: process.env.NODE_ENV !== "production"
      ? ["react-hot-loader/patch", "webpack-hot-middleware/client", "./src/_frontend/entryHot.tsx"]
      : ["./src/_frontend/entryProd.tsx"],
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].bundle.js",
    path: __dirname + "/dist/worker/frontend/",
    publicPath: "/frontend/",
  },

  target: "web",
}
