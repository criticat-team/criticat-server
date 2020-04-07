import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { OmdbMovie, BaseOmdbByIdQueryParameters } from './index.d';

export default class OmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://www.omdbapi.com/';
  }

  protected willSendRequest(request: RequestOptions): void {
    request.params.set('apikey', process.env.OMDB_API_KEY || '');
  }

  public async getMovieById(id: string): Promise<OmdbMovie> {
    const movie = await this.getMovieByIdRequest({
      i: id,
    });

    return movie;
  }

  private getMovieByIdRequest(params: BaseOmdbByIdQueryParameters): Promise<OmdbMovie> {
    return this.get('', params);
  }
}
