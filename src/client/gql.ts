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
            # bodyHTML
            author {
              login
              avatarUrl
              url
            }
            category {
              name
              emoji
            }
            labels(first: 10) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const FZJ_ITEM = gql`
  query FZJ_ITEM($number: Int!) {
    repository(name: "fzj", owner: "lencx") {
      discussion(number: $number) {
        id
        title
        bodyHTML
        comments(first: 10) {
          edges {
            node {
              id
              bodyHTML
              author {
                login
                avatarUrl
                url
              }
            }
          }
        }
      }
    }
  }
`;
