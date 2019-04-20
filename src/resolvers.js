const { Book } = require('./models');

module.exports = {
  Query: {
    books: () => Book.find({}),
  },
};
