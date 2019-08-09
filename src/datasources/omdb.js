import { RESTDataSource } from 'apollo-datasource-rest';

export default class OmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://www.omdbapi.com/';
  }

  // eslint-disable-next-line class-methods-use-this
  willSendRequest(request) {
    request.params.set('apikey', process.env.OMDB_API_KEY);
  }

  async getMovie(id) {
    return this.get('', {
      i: id,
    });
  }
}
