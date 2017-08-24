import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./react/App";
import { Provider as MobXProvider } from "mobx-react";
import { ApolloProvider } from "react-apollo";

declare const module: any;
declare const require: any;
declare const process: any;

export const wrapAppComponent = (Component, stores, apolloClient) => {
  return (
    <MobXProvider {...stores}>
      <ApolloProvider client={apolloClient}>
        <Component />
      </ApolloProvider>
    </MobXProvider>
  );
};

if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
  const apolloClient = require("./apollo/setup-apollo").default;
  const RootStore = require("./mobx/RootStore").default;

  ReactDOM.hydrate(
    wrapAppComponent(App, new RootStore(), apolloClient),
    document.getElementById("root")
  );
}
