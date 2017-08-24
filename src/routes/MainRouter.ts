/**
 * Created by Paul on 2017-07-05.
 */
import * as KoaRouter from "koa-router";
import {PageRouter} from "./page/PageRouter";

export const MainRouter = new KoaRouter();

MainRouter.use(PageRouter.routes());
