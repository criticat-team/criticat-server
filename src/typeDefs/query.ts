import { gql } from 'apollo-server';

export default gql`
  type Query {
    books: [Book]
    articles(category: String!, itemsPerPage: Int, continuation: String): ArticlesStream
    movie(id: ID!): Movie
    liveStreams(itemsPerPage: Int, continuation: String): LiveStreams
  }
`;
