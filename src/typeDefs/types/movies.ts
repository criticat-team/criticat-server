import { gql } from 'apollo-server';

export default gql`
  type MovieGenre {
    id: ID
    name: String
  }

  type MovieProductionCompany {
    name: String
    id: ID
    logoPath: String
    originCountry: String
  }

  type MovieProductionCountry {
    iso_3166_1: ID
    name: String
  }

  type MovieSpokenLanguage {
    iso_639_1: ID
    name: String
  }

  type MovieRatings {
    tmdb: String
    imdb: String
    rottenTomatoes: String
    metacritic: String
  }

  type MovieImage {
    filePath: String
    aspectRatio: Float
    height: Int
    width: Int
    iso_639_1: String
    voteCount: Int
    voteAverage: Float
  }

  type MovieImages {
    backdrops: [MovieImage]
    posters: [MovieImage]
  }

  type MovieCollection {
    id: ID
    name: String
    posterPath: String
    backdropPath: String
  }

  type Movie {
    id: ID
    adult: Boolean
    backdropPath: String
    belongsToCollection: MovieCollection
    budget: Int
    genres: [MovieGenre]
    homepage: String
    images: MovieImages
    originalLanguage: String
    originalTitle: String
    overview: String
    popularity: Float
    posterPath: String
    productionCompanies: [MovieProductionCompany]
    productionCountries: [MovieProductionCountry]
    releaseDate: String
    revenue: Int
    spokenLanguages: [MovieSpokenLanguage]
    status: String
    tagline: String
    title: String
    video: Boolean
    ratings: MovieRatings
  }
`;
