import * as React from "react";
import { renderToString } from "react-dom/server";

import App from "../../_frontend/react/App";
import { wrapAppComponent } from "../../_frontend/entryProd";

import { getDataFromTree, ApolloClient, createNetworkInterface } from "react-apollo";
import { createLocalInterface } from "apollo-local-query";
import RootStore from "../../_frontend/mobx/RootStore";
import executableSchema from "../../graphql/executableSchema";
import * as graphql from "graphql";

export async function renderReactStack() {
  console.log("[ renderReactStack method running ]");
  /*
  createNetworkInterface({
      uri: "https://api.graph.cool/simple/v1/cj6dds6fd2t2z0101yktqzgsd",
    }),

    createNetworkInterface({
      uri: "http://localhost:3000/graphql",
    }),
  * */

  //

  const apolloClient = new ApolloClient({
    ssrMode: true,
    networkInterface: createLocalInterface(graphql, executableSchema)
  });

  const stores = new RootStore();

  const app = wrapAppComponent(App, stores, apolloClient);
  await getDataFromTree(app);
  const appHtml = renderToString(app);

  return { reactHtml: appHtml, reactState: {apollo: apolloClient.getInitialState()} };
}
