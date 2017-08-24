import gql from "graphql-tag";

export const GQL_ALL_LINKS = gql`
  {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`;

export const GQL_CREATE_LINK = gql`
  {
    mutation {
      createLink(url: $url) {
        id
        url
      }
    }
  }
`;
