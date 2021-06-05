import { ApolloClient, InMemoryCache } from '@apollo/client';

const TOKEN = 'Z2hwX3d6cVptU2liWUVaQTB3VVNxUktaU05BYmFXUGxHUjJQZ2oyTw==';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repository: {
          keyArgs: [],
          merge(_existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

export default new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: { Authorization: `token ${atob(TOKEN)}` },
  cache,
});
