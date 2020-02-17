import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

/**
 * Create a new apollo client and export as default
 link that points to a server
 
 */
const link = new HttpLink({ uri: "http://localhost:4000/graphql" });
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
});

// const query = gql`
// {
//   petsList{
//     id
//     name
//   }
// }
// `;

//client.query({query}).then(result => console.log(result));

export default client;
