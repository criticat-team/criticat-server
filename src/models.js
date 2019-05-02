import mongoose from 'mongoose';

const { Schema } = mongoose;

const booksSchema = new Schema({
  title: String,
  author: String,
});

const Book = mongoose.model('book', booksSchema);

// eslint-disable-next-line import/prefer-default-export
export { Book };
