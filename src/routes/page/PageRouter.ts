import * as KoaRouter from "koa-router";
import { Context } from "koa";
import {renderReactStack} from "./ServerRenderReact";
import {createGzip} from "zlib";

let markoTemplate;
require("marko/node-require");

if (process.env.NODE_ENV !== "production") {
  markoTemplate = require("../../views/base.marko");
} else {
  markoTemplate = require("./base.marko");
}

const PageRouter = new KoaRouter();

function pageResponse(ctx: Context, options: { html?: string; json?: any, styles?: string; state?: any; } = {}) {
  const {
    html = `<div>No HTML Provided in Page Response</div>`,
    json = {},
    state = {},
    styles = "",
  } = options;

  ctx.type = "text/html";
  ctx.body = markoTemplate.stream({
    html,
    json,
    styles,
    state: JSON.stringify(state),
    ver: "v01",
    title: "Apollo Two Render",
    description: "Apollo Two Render Example",
  });

  ctx.vary('Accept-Encoding');

  if (ctx.acceptsEncodings('gzip')) {
    ctx.set('Content-Encoding', 'gzip');
    ctx.body = ctx.body.pipe(createGzip());
  }

  ctx.status = 200;
}

PageRouter.get("*", async (ctx: Context) => {
  const { reactHtml, reactState } = await renderReactStack();

  pageResponse(ctx, { html: reactHtml, state: reactState });
});

export { PageRouter };
