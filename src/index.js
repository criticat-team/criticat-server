const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let config = require('dotenv').config().parsed;

// prettier-ignore
const url = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@${config.MONGODB_SERVER}/${config.DB_NAME}`;

mongoose.connect(url, { useNewUrlParser: true, retryWrites: true });
mongoose.connection.once('open', () =>
  console.log(`Connected to mongo at ${url}`),
);

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
