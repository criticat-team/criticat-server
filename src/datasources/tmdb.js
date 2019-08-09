import { RESTDataSource } from 'apollo-datasource-rest';

export default class TmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  // eslint-disable-next-line class-methods-use-this
  willSendRequest(request) {
    request.params.set('api_key', process.env.TMDB_API_KEY);
  }

  async getMovie(id, language) {
    return this.get(`movie/${id}`, {
      append_to_response: 'images',
      language,
      include_image_language: 'en,null',
    });
  }
}
