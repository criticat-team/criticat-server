import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import querystring from 'querystring';
import {
  InoreaderStreamResponse,
  InoreaderSubscription,
  InoreaderSubscriptionsResponse,
} from './index.d';

const DEFAULT_ITEMS_PER_PAGE = 12;

export default class InoreaderAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.inoreader.com/reader/api/0/';
  }

  protected willSendRequest(request: RequestOptions): void {
    request.headers.set('AppId', process.env.INOREADER_APP_ID || '');
    request.headers.set('AppKey', process.env.INOREADER_APP_KEY || '');
    request.headers.set('Authorization', `GoogleLogin auth=${process.env.INOREADER_USER_AUTH}`);
  }

  public async getSubscriptions(): Promise<InoreaderSubscription[]> {
    const subscriptionsResponse: InoreaderSubscriptionsResponse = await this.get(
      'subscription/list',
    );
    return subscriptionsResponse.subscriptions;
  }

  public async getSubscriptionByStreamId(
    streamId: string,
  ): Promise<InoreaderSubscription | undefined> {
    const subscriptions = await this.getSubscriptions();
    return subscriptions.find((subscription) => subscription.id === streamId);
  }

  public async getItemsByCategory(
    category: string,
    itemsPerPage: number | null | undefined,
    continuation: string | null | undefined,
  ): Promise<InoreaderStreamResponse> {
    const streamPath = this.getStreamPath(
      `user/${process.env.INOREADER_USER_ID}/label/${category}`,
    );
    const streamParams = {
      n: (itemsPerPage || DEFAULT_ITEMS_PER_PAGE).toString(),
      ...(continuation ? { c: continuation } : {}),
    };
    const stream = await this.get(streamPath, streamParams);

    return stream;
  }

  private getStreamPath(streamId: string): string {
    const escapedStreamId = querystring.escape(streamId);
    return `stream/contents/${escapedStreamId}`;
  }
}
