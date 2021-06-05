import { ApolloClient, InMemoryCache } from '@apollo/client';

const TOKEN = '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';

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
  headers: { Authorization: `token ${TOKEN}` },
  cache,
});
