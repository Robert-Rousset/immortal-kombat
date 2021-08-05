import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allUsers {
    users {
      _id
      email
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $profileId) {
      _id
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      email
    }
  }
`;
