import {enableGraphQL} from "./graphql/endpoint";
import "isomorphic-fetch";
import "source-map-support/register";
import * as Koa from "koa";
import * as koaBody from "koa-body";
import * as compress from "koa-compress";
import * as chalk from "chalk";

import {baseErrorHandling, serverLogging, serveStaticFiles} from "./middleware/basicMiddleware";
import { MainRouter } from "./routes/MainRouter";

require("source-map-support").install();
//# sourceMappingURL=index.js.map

const hotReloadFrontend = process.env.FRONTEND_ENV === "hot";
const production = process.env.NODE_ENV === "production";

chalk.enabled = false;

const app = new Koa();

app.use(baseErrorHandling());

app.use(async (ctx, next) => {
  // console.log(ctx.path);

  if (ctx.path === "/favicon.ico") {
    ctx.body = "OK";
    ctx.status = 200;
  } else {
    await next();
  }
});

if (hotReloadFrontend) {
  // import * as koaWebpack from "koa-webpack";
  console.log("Doing HOT RELOADING of Frontend");
  const koaWebpack = require("koa-webpack");

  process.env.WEBPACK_ENV = "frontend";
  process.env.BABEL_ENV = "frontend";
  const devConfig = require("../webpack.config");

  const webpackMiddleware = koaWebpack({
    config: devConfig,
    dev: {
      noInfo: true,
      publicPath: devConfig.output.publicPath,
    },
  });

  app.use(webpackMiddleware);
}

app.use(serverLogging());
app.use(enableGraphQL());

if (production) {
  app.use(compress());
}
app.use(serveStaticFiles());
app.use(koaBody());

app.use(MainRouter.routes());

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
