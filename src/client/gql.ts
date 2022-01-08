import { gql } from '@apollo/client';

export const FZJ_LIST = gql`
  query FZJ_LIST($first: Int, $cursor: String) {
    repository(name: "z", owner: "lencx") {
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
            createdAt
            updatedAt
            author {
              login
              avatarUrl
              url
            }
            category {
              name
              emojiHTML
            }
            labels(first: 100) {
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
    repository(name: "z", owner: "lencx") {
      discussion(number: $number) {
        id
        title
        bodyHTML
        createdAt
        updatedAt
        category {
          name
        }
        labels(first: 100) {
          edges {
            node {
              id
              name
            }
          }
        }
        reactions(first: 100) {
          totalCount
          edges {
            node {
              id
              content
            }
          }
        }
        comments(first: 100) {
          edges {
            node {
              id
              bodyHTML
              author {
                login
                avatarUrl
                url
              }
              replies(first: 100) {
                edges {
                  node {
                    id
                    author {
                      login
                      avatarUrl
                      url
                    }
                    bodyHTML
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const FZJ_TAGS = gql`
  query FZJ_TAGS {
    repository(name: "z", owner: "lencx") {
      discussionCategories(first: 20) {
        edges {
          node {
            id
            name
            emojiHTML
          }
        }
      }
      labels(first: 100) {
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
`;
