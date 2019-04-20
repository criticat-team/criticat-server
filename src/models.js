const mongoose = require('mongoose');
const { Schema } = mongoose;

const booksSchema = new Schema({
  title: String,
  author: String,
});

const Book = mongoose.model('book', booksSchema);

module.exports = {
  Book,
};
