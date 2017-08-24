const _ = require("lodash");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");

function concatArraysMerge(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

const { WEBPACK_ENV, NODE_ENV } = process.env;

let target = "node";

if (WEBPACK_ENV === "frontend") {
  target = "browser";
}

/* * * -
 *
 *  B A S E    C O N F I G >>>
 */
const baseConfig = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".marko", ".css"],
  },

  devtool: "source-map",

  module: {
    rules: [
      { test: /\.json$/, loader: "json-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader", exclude: [/node_modules/] },
      { test: /\.css/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpe?g|gif)$/, use: ["file-loader"] }
    ],
  },

  plugins: [new CheckerPlugin()],
};

/* * * -
 *
 *  S E R V E R    S P E C I F I C   C O N F I G >>>
 */
if (target === "node") {
  baseConfig.module.rules.push({
    test: /\.tsx?$/,
    loader: "awesome-typescript-loader",
  });
} else {
  /* * * -
   *
   *  B R O W S E R    S P E C I F I C   C O N F I G >>>
   */
}

/* * * -
 *
 *  P R O D U C T I O N    S P E C I F I C    C O N F I G >>>
 */
if (NODE_ENV === "production") {
  baseConfig.plugins.push(
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    })
  );

  if (target === "browser") {
    baseConfig.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true,
        },
        compress: {
          warnings: false,
          screw_ie8: true,
        },
        comments: false,
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
      })
    );

    baseConfig.module.rules.push({
      test: /\.tsx?$/,
      loaders: ["awesome-typescript-loader"],
    });
  } else {
    baseConfig.plugins.push(
      new CopyWebpackPlugin([
        { from: "src/views/base.marko" },
      ])
    );
  }

  /* * * -
   *
   *  D E V E L O P M E N T    S P E C I F I C    C O N F I G >>>
   */
} else {
  if (target === "browser") {
    baseConfig.devtool = "eval";

    console.log("Using browser specific stuff");

    baseConfig.module.rules.push({
      test: /\.tsx?$/,
      loaders: [
        "react-hot-loader/webpack",
        "awesome-typescript-loader?configFileName=tsconfig.frontend-dev.json",
      ],
    });

    baseConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
    baseConfig.plugins.push(new webpack.NamedModulesPlugin());
  }
}

/* * * -
 *
 *  M E R G E    B A S E    T O    C O N F I G S >>>
 */
const frontendConfig = () =>
  _.mergeWith(require("./webpack.frontend.config"), baseConfig, concatArraysMerge);

/* * * -
 *
 *  E X P O R T    C O N F I G >>>
 */
switch (process.env.WEBPACK_ENV) {
  case "frontend":
    module.exports = frontendConfig();
    break;
  default:
    throw new Error("WEBPACK_ENV environment variable must be set");
}

const { BABEL_ENV } = process.env;
console.log("Used Environment Variables", { BABEL_ENV, NODE_ENV, WEBPACK_ENV });
