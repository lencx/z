import { gql } from '@apollo/client';

export const FZJ_LIST = gql`
  query FZJ_LIST(
    $first: Int
    $last: Int
    $prevCursor: String
    $nextCursor: String
  ) {
    repository(name: "fzj", owner: "lencx") {
      discussions(
        first: $first
        last: $last
        after: $nextCursor
        before: $prevCursor
      ) {
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
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
