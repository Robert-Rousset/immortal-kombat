import { gql } from "@apollo/client";

export const QUERY_HIGHSCORES = gql`
  query getScores {
    scores {
      _id
      name
      score
    }
  }
`;
