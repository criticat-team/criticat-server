import { ApolloServer, ServerInfo } from 'apollo-server';
import mongoose from 'mongoose';
import resolvers from '@/resolvers';
import typeDefs from '@/typeDefs';
import dataSources from '@/data-sources';
import dotenv from 'dotenv';

dotenv.config();

// Set up mongodb
const mongooseUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.MONGODB_SERVER}/${process.env.DB_NAME}`;
mongoose.connect;
mongoose.connect(mongooseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, () => ({}));
mongoose.connection.once('open', () => console.log(`Connected to mongo at ${mongooseUrl}`));

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  tracing: process.env.NODE_ENV !== 'production',
  cors: false,
});

// Start our server if we're not in a test env.
// if we're in a test env, we'll manually start it in a test
if (process.env.NODE_ENV !== 'test') {
  server.listen({ port: process.env.PORT || 4000 }).then(({ url }: ServerInfo) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}
