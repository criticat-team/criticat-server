import {
  Resolvers,
  Movie,
  MovieRatings,
  MovieGenre,
  MovieProductionCompany,
  MovieImages,
  MovieImage,
} from '@/generated/graphql';
import { Context } from '@/index.d';
import { TmdbMovie, TmdbGenre, TmdbCompany, TmdbMovieImage } from '@/data-sources/tmdb/index.d';
import { OmdbMovie, OmdbMovieRatingSource } from '@/data-sources/omdb/index.d';

interface ReducedTmdbMovie extends Movie {
  $tmdbMovie?: TmdbMovie;
}

const getRatingBySource = (omdbMovie: OmdbMovie, source: OmdbMovieRatingSource): string | null => {
  const rating = omdbMovie.Ratings.find((rating) => rating.Source === source);
  return rating ? rating.Value : null;
};

const reduceTmdbMovieImage = (tmdbMovieImage: TmdbMovieImage): MovieImage => ({
  aspectRatio: tmdbMovieImage.aspect_ratio,
  filePath: tmdbMovieImage.file_path,
  height: tmdbMovieImage.height,
  // eslint-disable-next-line @typescript-eslint/camelcase
  iso_639_1: tmdbMovieImage.iso_639_1,
  voteAverage: tmdbMovieImage.vote_average,
  voteCount: tmdbMovieImage.vote_count,
  width: tmdbMovieImage.width,
});

const reduceTmdbMovie = (tmdbMovie: TmdbMovie): ReducedTmdbMovie => ({
  id: tmdbMovie.id.toString(),
  adult: tmdbMovie.adult,
  backdropPath: tmdbMovie.backdrop_path,
  belongsToCollection: tmdbMovie.belongs_to_collection
    ? Object.assign(tmdbMovie.belongs_to_collection, {
        id: tmdbMovie.belongs_to_collection.id.toString(),
      })
    : null,
  budget: tmdbMovie.budget,
  genres: tmdbMovie.genres.map(
    (tmdbGenre: TmdbGenre): MovieGenre =>
      Object.assign(tmdbGenre, {
        id: tmdbGenre.id.toString(),
      }),
  ),
  homepage: tmdbMovie.homepage,
  originalLanguage: tmdbMovie.original_language,
  originalTitle: tmdbMovie.original_title,
  overview: tmdbMovie.overview,
  popularity: tmdbMovie.popularity,
  posterPath: tmdbMovie.poster_path,
  productionCompanies: tmdbMovie.production_companies.map(
    (tmdbCompany: TmdbCompany): MovieProductionCompany =>
      Object.assign(tmdbCompany, {
        id: tmdbCompany.id.toString(),
      }),
  ),
  productionCountries: tmdbMovie.production_countries,
  releaseDate: tmdbMovie.release_date,
  revenue: tmdbMovie.revenue,
  spokenLanguages: tmdbMovie.spoken_languages,
  status: tmdbMovie.status,
  tagline: tmdbMovie.tagline,
  title: tmdbMovie.title,
  video: tmdbMovie.video,
  $tmdbMovie: tmdbMovie,
});

const resolvers: Resolvers<Context> = {
  Query: {
    movie: async (_root, { id }, { dataSources }): Promise<ReducedTmdbMovie | null> => {
      const tmdbMovie = await dataSources.tmdbAPI.getMovie(id);
      if (tmdbMovie === null) {
        return null;
      }
      return reduceTmdbMovie(tmdbMovie);
    },
  },
  Movie: {
    ratings: async (
      movie: ReducedTmdbMovie,
      _args,
      { dataSources },
    ): Promise<MovieRatings | null> => {
      if (!movie.$tmdbMovie) {
        return null;
      }

      const ratings: MovieRatings = {};
      ratings.tmdb = movie.$tmdbMovie.vote_average.toString();

      const imdbId = movie.$tmdbMovie.imdb_id;
      if (imdbId === null) {
        return ratings;
      }

      const omdbMovie = await dataSources.omdbAPI.getMovieById(imdbId);
      if (omdbMovie !== null) {
        ratings.imdb = getRatingBySource(omdbMovie, 'Internet Movie Database');
        ratings.rottenTomatoes = getRatingBySource(omdbMovie, 'Rotten Tomatoes');
        ratings.metacritic = getRatingBySource(omdbMovie, 'Metacritic');
      }

      return ratings;
    },
    images: async (movie: ReducedTmdbMovie): Promise<MovieImages | null> => {
      if (movie.$tmdbMovie == null || movie.$tmdbMovie.images == null) {
        return null;
      }
      return {
        backdrops: movie.$tmdbMovie.images.backdrops.map(reduceTmdbMovieImage),
        posters: movie.$tmdbMovie.images.posters.map(reduceTmdbMovieImage),
      };
    },
  },
};

export default resolvers;
