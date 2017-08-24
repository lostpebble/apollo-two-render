import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import { Provider as MobXProvider } from "mobx-react";
import { ApolloProvider } from "react-apollo";

import apolloClient from "./apollo/setup-apollo";

let RootStore = require("./mobx/RootStore").default;
let App = require("./react/App").default;

let rootStore = new RootStore();

const reactNode = document.getElementById("root");

/*if (!process.env.DEV_HYDRATE_REACT) {
  reactNode.innerHTML = "";
  console.warn("Warning : Not hydrating React for easier development. Turn on to make sure server -> client is hydrating cleanly using DEV_HYDRATE_REACT=true environment variable.");
}*/

const renderHot = () => {
  ReactDOM.hydrate(
    <AppContainer>
      <MobXProvider {...rootStore}>
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </MobXProvider>
    </AppContainer>,
    reactNode
  );
};

renderHot();

declare const module: any;
declare const require: any;

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./react/App", () => {
    console.log("Hot reload incoming");

    App = require("./react/App").default;
    renderHot();
  });

  module.hot.accept("./mobx/RootStore", () => {
    console.log(`Hot reload for Root Store detected`);

    const oldRootStores = rootStore.getStoresAsPlainJS();

    RootStore = require("./mobx/RootStore").default;
    rootStore = new RootStore();
    rootStore.hydrateOldState(oldRootStores);
    App = require("./react/App").default;
    renderHot();
  });
}
