import { gql } from 'apollo-server';

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  type ArticlesStream {
    items: [Article]
    continuation: String
  }

  type Article {
    id: String
    title: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    articles(category: String): ArticlesStream
  }
`;

export default typeDefs;
