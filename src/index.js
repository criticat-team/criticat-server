import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import resolvers from '@/resolvers';
import typeDefs from '@/schema';

const config = dotenv.config().parsed;

const mongooseUrl = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@${
  config.MONGODB_SERVER
}/${config.DB_NAME}`;

mongoose.Promise = global.Promise;

mongoose.connect(mongooseUrl, { useNewUrlParser: true, retryWrites: true });
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${mongooseUrl}`));

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== 'test') {
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}
