import InoreaderAPI from './data-sources/inoreader';
import BooksDB from './data-sources/books';
import TmdbAPI from './data-sources/tmdb';
import OmdbAPI from './data-sources/omdb';
import TwitchAPI from './data-sources/twitch';

export type Context = {
  dataSources: {
    booksDB: BooksDB;
    inoreaderAPI: InoreaderAPI;
    tmdbAPI: TmdbAPI;
    omdbAPI: OmdbAPI;
    twitchAPI: TwitchAPI;
  };
};
