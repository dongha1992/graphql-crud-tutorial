import { gql } from '@apollo/client';

export const LOAD_MOVIES = gql`
  query {
    getMovies {
      id
      title
      minutes
    }
  }
`;
