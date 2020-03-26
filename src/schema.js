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

  type Genre {
    id: ID
    name: String
  }

  type ProductionCompany {
    name: String
    id: ID
    logo_path: String
    origin_country: String
  }

  type ProductionCountry {
    iso_3166_1: ID
    name: String
  }

  type SpokenLanguage {
    iso_639_1: ID
    name: String
  }

  type Rating {
    source: String
    value: String
  }

  type Image {
    file_path: String
    aspect_ratio: Float
    height: Int
    width: Int
    iso_639_1: String
    vote_count: Int
    vote_average: Float
  }

  type Images {
    backdrops: [Image]
    posters: [Image]
  }

  type Movie {
    adult: Boolean
    backdrop_path: String
    #belongs_to_collection: String
    genres: [Genre]
    homepage: String
    id: ID
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Float
    poster_path: String
    production_companies: [ProductionCompany]
    production_countries: [ProductionCountry]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [SpokenLanguage]
    status: String
    tagline: String
    title: String
    video: String
    ratings: [Rating]
    images: Images
  }

  type TwitchLiveStreamResponse {
    streams: [TwitchLiveStream]
    _total: Int
  }

  type TwitchLiveStreamPreview {
    small: String
    medium: String
    large: String
    template: String
  }

  type TwitchChannel {
    _id: ID
    mature: Boolean
    status: String
    broadcaster_language: String
    broadcaster_software: String
    display_name: String
    game: String
    language: String
    name: String
    created_at: String
    updated_at: String
    partner: Boolean
    logo: String
    video_banner: String
    profile_banner: String
    profile_banner_background_color: String
    url: String
    views: Int
    followers: Int
    broadcaster_type: String
    description: String
    private_video: Boolean
    privacy_options_enabled: Boolean
  }

  type TwitchLiveStream {
    _id: ID
    game: String
    community_id: String
    community_ids: [String]
    viewers: Int
    video_height: Int
    average_fps: Int
    delay: Int
    created_at: String
    is_playlist: Boolean
    stream_type: String
    preview: TwitchLiveStreamPreview
    channel: TwitchChannel
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    articles(category: String, itemsPerPage: Int, continuation: String): ArticlesStream
    movie(id: ID!, language: String): Movie
    liveStreams(language: String, itemsPerPage: Int, offset: Int): TwitchLiveStreamResponse
  }
`;

export default typeDefs;
