import { ApolloClient, createNetworkInterface } from "react-apollo";

declare namespace window {
  const __APOLLO_STATE__: any;
}

const apolloState = window.__APOLLO_STATE__;

const networkInterface = createNetworkInterface({
  uri: "https://api.graph.cool/simple/v1/cj6dds6fd2t2z0101yktqzgsd",
});

const client = new ApolloClient({
  networkInterface,
  initialState: apolloState,
  ssrForceFetchDelay: 100,
});

export default client;
