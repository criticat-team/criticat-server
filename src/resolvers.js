import { Book } from '@/models';
import cheerio from 'cheerio';
import { AllHtmlEntities } from 'html-entities';

const entities = new AllHtmlEntities();

export default {
  Query: {
    books: () => Book.find({}),
    articles: async (root, { category, itemsPerPage, continuation }, { dataSources }) =>
      category
        ? dataSources.articlesAPI.getCategory(itemsPerPage, continuation, category)
        : dataSources.articlesAPI.getAll(itemsPerPage, continuation),
  },
  Article: {
    image: article =>
      cheerio
        .load(article.summary.content)('img')
        .attr('src'),
    url: article => article.canonical[0].href,
    title: article => entities.decode(article.title),
    content: article =>
      cheerio
        .load(article.summary.content)
        .text()
        .trim(),
    origin: async (article, args, { dataSources }) => {
      const { subscriptions } = await dataSources.articlesAPI.getSubscriptions();
      return subscriptions.find(subscription => subscription.id === article.origin.streamId);
    },
    categories: article => {
      const labelCategoryRegex = new RegExp(`user/${process.env.INOREADER_USER_ID}/label/(.*)`);
      return article.categories.reduce((categories, category) => {
        const match = category.match(labelCategoryRegex);
        if (match) {
          categories.push(match[1]);
        }
        return categories;
      }, []);
    },
  },
};
