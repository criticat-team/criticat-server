import { Document, Schema, Model, model } from 'mongoose';

export interface BookModel extends Document {
  title: string;
  author: string;
}

const booksSchema = new Schema({
  title: String,
  author: String,
});

const Book: Model<BookModel> = model<BookModel>('book', booksSchema);

export default Book;
