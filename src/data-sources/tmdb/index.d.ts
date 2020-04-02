export type TmdbCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type TmdbGenre = {
  id: number;
  name: string;
};

export type TmdbCompany = {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
};

export type TmdbCountry = {
  iso_3166_1: string;
  name: string;
};

export type TmdbLanguage = {
  iso_639_1: string;
  name: string;
};

export type TmdbMovieImage = {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string;
  vote_average: number;
  vote_count: number;
  width: number;
};

export type TmdbMovieImages = {
  backdrops: TmdbMovieImage[];
  posters: TmdbMovieImage[];
};

export type TmdbMovieStatus =
  | 'Rumored'
  | 'Planned'
  | 'In Production'
  | 'Post Production'
  | 'Released'
  | 'Canceled';

export type TmdbMovie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: TmdbCollection | null;
  budget: number;
  genres: TmdbGenre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  images?: TmdbMovieImages;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: TmdbCompany[];
  production_countries: TmdbCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: TmdbLanguage[];
  status: TmdbMovieStatus;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
