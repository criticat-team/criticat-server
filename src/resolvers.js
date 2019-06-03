import { Book } from '@/models';
import cheerio from 'cheerio';
import { AllHtmlEntities } from 'html-entities';

const entities = new AllHtmlEntities();

export default {
  Query: {
    books: () => Book.find({}),
    articles: async (root, { category, itemsPerPage, continuation }, { dataSources }) => {
      return dataSources.articlesAPI.getCategory(category, itemsPerPage, continuation);
    },
  },
  Article: {
    image: article =>
      cheerio
        .load(article.summary.content)('img')
        .attr('src'),
    url: article => article.canonical[0].href,
    title: article => entities.decode(article.title),
    content: article => cheerio.load(article.summary.content).text(),
  },
};
