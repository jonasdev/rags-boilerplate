import React from "react";
import { client } from "../apollo/client";
import { ApolloProvider } from "react-apollo";

// Implement any providers being used here
function Provider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default Provider;
