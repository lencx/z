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
  cache,
  uri: 'https://api.github.com/graphql',
  headers: { Authorization: `token ${TOKEN}` },
});
