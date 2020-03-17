import { RestLink } from "apollo-link-rest";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";

const restLink = new RestLink({
  uri: "https://jsonplaceholder.typicode.com/"
});

export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});
