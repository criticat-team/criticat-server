import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import resolvers from '@/resolvers';
import typeDefs from '@/schema';
import InoreaderAPI from '@/datasources/inoreader';
import TmdbAPI from '@/datasources/tmdb';
import OmdbAPI from '@/datasources/omdb';
import dotenv from 'dotenv';
import TwitchAPI from '@/datasources/twitch';

dotenv.config();

// prettier-ignore
const mongooseUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.MONGODB_SERVER}/${process.env.DB_NAME}`;

mongoose.Promise = global.Promise;

mongoose.connect(mongooseUrl, { useNewUrlParser: true, retryWrites: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${mongooseUrl}`));

// set up any dataSources our resolvers need
const dataSources = () => ({
  inoreaderAPI: new InoreaderAPI(),
  tmdbAPI: new TmdbAPI(),
  omdbAPI: new OmdbAPI(),
  twitchAPI: new TwitchAPI(),
});

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== 'test') {
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}
