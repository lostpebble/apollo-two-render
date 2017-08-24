import * as logger from "koa-logger";
import * as mount from "koa-mount";
import * as serve from "koa-static";

export function baseErrorHandling() {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      console.error(`BASE ERROR HANDLING: ${err.name} : ${err.message}`);
      ctx.body = { name: err.name, message: err.message, stack: err.stack };
      ctx.status = err.status || 500;
    }
  };
}

export function serverLogging() {
  return logger();
}

const oneHour = 1000 * 60 * 60;
const oneDay = oneHour * 24;

export function serveStaticFiles() {
  return mount("/frontend", serve("./frontend"), { maxage: oneHour });
}
