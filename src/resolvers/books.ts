import { Resolvers } from '@/generated/graphql';
import { Context } from '@/index.d';
import { BookModel } from '@/models/Book';

const resolvers: Resolvers<Context> = {
  Query: {
    books: async (_root, _args, { dataSources }): Promise<BookModel[]> => {
      return await dataSources.booksDB.getAll();
    },
  },
};

export default resolvers;
