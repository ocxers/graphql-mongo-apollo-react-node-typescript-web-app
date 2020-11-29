import { ApolloClient, InMemoryCache } from "@apollo/client"
// import { createUploadLink } from "apollo-upload-client";
// import { split } from "apollo-link";
// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";

// const httpLink = createUploadLink({
//   uri: 'http://localhost:4001/graphql', // process.env.REACT_APP_SERVER_URL,
//   credentials: "include"
// });

// // Create a WebSocket link:
// const wsLink = new WebSocketLink({
//   uri: process.env.REACT_APP_SERVER_WS_URL as string,
//   options: {
//     reconnect: true
//   }
// });

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
// const link = split(
//   // split based on operation type
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query) as any;
//     return kind === "OperationDefinition" && operation === "subscription";
//   },
//   // wsLink,
//   httpLink
// );

// export const client = new ApolloClient({
//   link,
//   cache: new InMemoryCache()
// });

export const client = new ApolloClient({
  uri: 'http://localhost:4001/graphql',
  cache: new InMemoryCache()
});