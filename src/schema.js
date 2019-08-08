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

  type Category {
    id: String
    label: String
  }

  type ArticleOrigin {
    id: String
    title: String
    categories: [Category]
    sortId: String
    firstitemmsec: Int
    url: String
    htmlUrl: String
    iconUrl: String
  }

  type Article {
    id: String
    title: String
    published: Int
    image: String
    url: String
    author: String
    avatar: String
    content: String
    origin: ArticleOrigin
    categories: [String]
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    articles(category: String, itemsPerPage: Int, continuation: String): ArticlesStream
  }
`;

export default typeDefs;
