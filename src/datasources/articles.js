import { RESTDataSource } from 'apollo-datasource-rest';
import querystring from 'querystring';

const DEFAULT_ITEMS_PER_PAGE = 12;

export default class ArticlesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.inoreader.com/reader/api/0/';
  }

  // eslint-disable-next-line class-methods-use-this
  willSendRequest(request) {
    request.headers.set('AppId', process.env.INOREADER_APP_ID);
    request.headers.set('AppKey', process.env.INOREADER_APP_KEY);
    request.headers.set('Authorization', `GoogleLogin auth=${process.env.INOREADER_USER_AUTH}`);
  }

  async getSubscriptions() {
    return this.get('subscription/list');
  }

  async getCategory(category, itemsPerPage, continuation) {
    const params = {
      n: itemsPerPage || DEFAULT_ITEMS_PER_PAGE,
      c: continuation,
    };
    return this.stream(`user/${process.env.INOREADER_USER_ID}/label/${category}`, params);
  }

  async stream(streamId, params) {
    const escapedStreamId = querystring.escape(streamId);
    return this.get(`stream/contents/${escapedStreamId}`, params);
  }
}
