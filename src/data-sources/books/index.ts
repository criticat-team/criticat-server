import { MongoDataSource } from 'apollo-datasource-mongodb';
import { BookModel } from '@/models/Book';
import { Context } from '@/index.d';

export default class BooksDB extends MongoDataSource<BookModel, Context> {
  public async getAll(): Promise<BookModel[]> {
    return await this.model.find({});
  }
}
