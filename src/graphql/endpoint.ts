import * as compose from "koa-compose";
import * as Router from "koa-router";
import * as koaBody from "koa-body";
import {graphiqlKoa, graphqlKoa} from "apollo-server-koa";
import executableSchema from "./executableSchema";

const graphQlRouter = new Router();

graphQlRouter.post("/graphql", koaBody(), graphqlKoa({ schema: executableSchema }));
graphQlRouter.get("/graphql", graphqlKoa({ schema: executableSchema }));
graphQlRouter.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }));

export function enableGraphQL() {
  console.log("Enabling GraphQL endpoint");

  return compose([graphQlRouter.routes(), graphQlRouter.allowedMethods()]);
}
