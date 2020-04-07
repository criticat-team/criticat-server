/* eslint-disable @typescript-eslint/camelcase */
import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { TmdbMovie } from './index.d';

export default class TmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
  }

  protected willSendRequest(request: RequestOptions): void {
    request.params.set('api_key', process.env.TMDB_API_KEY || '');
  }

  public async getMovie(id: string): Promise<TmdbMovie | null> {
    try {
      return await this.get(`movie/${id}`, {
        append_to_response: 'images',
        language: process.env.LANGUAGE,
        include_image_language: 'en,null',
      });
    } catch (err) {
      if (err.extensions.response.status === 404) {
        return null;
      }
      throw err;
    }
  }
}
