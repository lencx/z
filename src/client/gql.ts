import { gql } from '@apollo/client';

export const FZJ_LIST = gql`
  query FZJ_LIST($first: Int, $cursor: String) {
    repository(name: "fzj", owner: "lencx") {
      discussions(first: $first, after: $cursor) {
        totalCount
        pageInfo {
          # startCursor
          # hasPreviousPage
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            title
            number
            bodyHTML
            author {
              login
              avatarUrl
              url
            }
            category {
              name
              emoji
            }
          }
        }
      }
    }
  }
`;
