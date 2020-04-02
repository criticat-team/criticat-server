import { InoreaderItem, InoreaderItemOrigin } from '@/data-sources/inoreader/index.d';
import { Article, ArticleOrigin, Maybe, Resolvers, ArticlesStream } from '@/generated/graphql';
import { Context } from '@/index.d';
import cheerio from 'cheerio';
import { AllHtmlEntities } from 'html-entities';
const entities = new AllHtmlEntities();

interface ReducedInoreaderItem extends Article {
  origin?: Maybe<ReducedInoreaderItemOrigin>;
  $inoreaderItem?: InoreaderItem;
}

interface ReducedInoreaderItemOrigin extends ArticleOrigin {
  $inoreaderItemOrigin?: InoreaderItemOrigin;
}

const reduceInoreaderItem = (inoreaderItem: InoreaderItem): ReducedInoreaderItem => ({
  id: inoreaderItem.id,
  categories: inoreaderItem.categories,
  published: inoreaderItem.published,
  author: inoreaderItem.author,
  origin: {
    title: inoreaderItem.origin.title,
    htmlUrl: inoreaderItem.origin.htmlUrl,
    $inoreaderItemOrigin: inoreaderItem.origin,
  },
  $inoreaderItem: inoreaderItem,
});

const resolvers: Resolvers<Context> = {
  Query: {
    articles: async (
      _root,
      { category, itemsPerPage, continuation },
      { dataSources },
    ): Promise<ArticlesStream> => {
      const stream = await dataSources.inoreaderAPI.getItemsByCategory(
        category,
        itemsPerPage,
        continuation,
      );
      return {
        items: stream.items.map(reduceInoreaderItem),
        continuation: stream.continuation,
      };
    },
  },
  ArticleOrigin: {
    iconUrl: async (
      articleOrigin: ReducedInoreaderItemOrigin,
      _args,
      { dataSources },
    ): Promise<string | null> => {
      if (articleOrigin.$inoreaderItemOrigin == null) {
        return null;
      }
      const subscription = await dataSources.inoreaderAPI.getSubscriptionByStreamId(
        articleOrigin.$inoreaderItemOrigin.streamId,
      );

      return subscription ? subscription.iconUrl : null;
    },
  },
  Article: {
    image: (article: ReducedInoreaderItem): string | null =>
      article.$inoreaderItem
        ? cheerio.load(article.$inoreaderItem.summary.content)('img').attr('src') || null
        : null,
    url: (article: ReducedInoreaderItem): string | null =>
      article.$inoreaderItem ? article.$inoreaderItem.canonical[0].href : null,
    title: (article: ReducedInoreaderItem): string | null =>
      article.$inoreaderItem ? entities.decode(article.$inoreaderItem.title) : null,
    content: (article: ReducedInoreaderItem): string | null =>
      article.$inoreaderItem
        ? cheerio.load(article.$inoreaderItem.summary.content).root().text().trim()
        : null,
    categories: (article: ReducedInoreaderItem): string[] | null => {
      if (!article.$inoreaderItem) {
        return null;
      }
      const labelCategoryRegex = new RegExp(
        `user/${process.env.INOREADER_USER_ID}/label/(?<category>.*)`,
      );
      return article.$inoreaderItem.categories.reduce((result: string[], category: string) => {
        const match = category.match(labelCategoryRegex);
        if (match != null && match.groups != null && typeof match.groups.category === 'string') {
          result.push(match.groups.category);
        }
        return result;
      }, []);
    },
  },
};

export default resolvers;
