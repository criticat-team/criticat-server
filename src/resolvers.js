import { Book } from '@/models';

export default {
  Query: {
    books: () => Book.find({}),
  },
};
