import { RESTDataSource } from 'apollo-datasource-rest';

const DEFAULT_ITEMS_PER_PAGE = 12;

export default class TwitchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.twitch.tv/kraken/';
  }

  // eslint-disable-next-line class-methods-use-this
  willSendRequest(request) {
    request.headers.set('Client-ID', process.env.TWITCH_APP_ID);
    request.headers.set('Accept', 'application/vnd.twitchtv.v5+json');
  }

  async getLiveStreams(language, itemsPerPage, offset) {
    const params = {
      broadcaster_language: language,
      limit: itemsPerPage || DEFAULT_ITEMS_PER_PAGE,
      offset,
    };
    return this.get('streams', params);
  }
}
