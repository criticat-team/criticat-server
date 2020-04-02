import { gql } from 'apollo-server';

export default gql`
  type ArticlesStream {
    items: [Article]
    continuation: String
  }

  type ArticleOriginCategory {
    id: String
    label: String
  }

  type ArticleOrigin {
    id: String
    title: String
    categories: [ArticleOriginCategory]
    url: String
    htmlUrl: String
    iconUrl: String
  }

  type ArticleSummary {
    direction: String
    content: String
  }

  type ArticleCanonical {
    href: String
  }

  type ArticleAlternate {
    href: String
    type: String
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
    summary: ArticleSummary
    canonical: [ArticleCanonical]
    alternate: [ArticleAlternate]
  }
`;
