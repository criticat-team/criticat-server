export type OmdbMovieRatingSource = 'Internet Movie Database' | 'Rotten Tomatoes' | 'Metacritic';

export type OmdbMovieRating = {
  Source: OmdbMovieRatingSource;
  Value: string;
};

export type OmdbMovie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: OmdbMovieRating[];
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export type BaseOmdbByIdQueryParameters = {
  i: string;
  type?: 'movie' | 'series' | 'episode';
  y?: string;
  plot?: 'short' | 'full';
  r?: 'json' | 'xml';
  callback?: string;
  v?: string;
};
