import { RESTDataSource } from 'apollo-datasource-rest';

export default class TmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  // eslint-disable-next-line class-methods-use-this
  willSendRequest(request) {
    request.params.set('api_key', process.env.TMDB_API_KEY);
    request.params.set('language', process.env.TMDB_LANGUAGE);
  }

  async getMovie(id) {
    return this.get(`movie/${id}`);
  }
}
