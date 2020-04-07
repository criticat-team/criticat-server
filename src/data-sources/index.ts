import InoreaderAPI from './inoreader';
import TmdbAPI from './tmdb';
import OmdbAPI from './omdb';
import TwitchAPI from './twitch';
import BooksDB from './books';
import { DataSources } from 'apollo-server-core/src/graphqlOptions';
import { Book } from '@/models';

export default (): DataSources<object> => ({
  booksDB: new BooksDB(Book),
  inoreaderAPI: new InoreaderAPI(),
  tmdbAPI: new TmdbAPI(),
  omdbAPI: new OmdbAPI(),
  twitchAPI: new TwitchAPI(),
});
