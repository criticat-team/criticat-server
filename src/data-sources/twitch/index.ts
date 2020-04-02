/* eslint-disable @typescript-eslint/camelcase */
import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';
import { TwitchGetStreamsResponse, TwitchGetStreamsQueryParameters } from './index.d';

const DEFAULT_ITEMS_PER_PAGE = 12;

export default class TwitchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.twitch.tv/helix/';
  }

  protected willSendRequest(request: RequestOptions): void {
    request.headers.set('Client-ID', process.env.TWITCH_APP_ID || '');
  }

  public async getStreams(
    itemsPerPage?: number | null,
    continuation?: string | null,
  ): Promise<TwitchGetStreamsResponse> {
    const params: TwitchGetStreamsQueryParameters = {
      language: process.env.LANGUAGE,
      first: itemsPerPage || DEFAULT_ITEMS_PER_PAGE,
    };
    if (continuation) params.after = continuation;
    const streams = await this.get('streams', params);
    return streams;
  }
}
