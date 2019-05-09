import { RESTDataSource } from 'apollo-datasource-rest';
import querystring from 'querystring';

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

  async getCategory(category) {
    return this.stream(`user/${process.env.INOREADER_USER_ID}/label/${category}`, {});
  }

  async stream(streamId, params) {
    const escapedStreamId = querystring.escape(streamId);
    return this.get(`stream/contents/${escapedStreamId}`, params);
  }
}
