import { Book } from '@/models';

export default {
  Query: {
    books: () => Book.find({}),
    articles: async (root, { category }, { dataSources }) => {
      return dataSources.articlesAPI.getCategory(category);
    },
  },
};
