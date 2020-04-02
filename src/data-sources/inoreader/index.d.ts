export interface InoreaderAlternate {
  href: string;
  type: string;
}

export interface InoreaderCanonical {
  href: string;
}

export interface InoreaderItemOrigin {
  streamId: string;
  htmlUrl: string;
  title: string;
}

export interface InoreaderSummary {
  content: string;
  direction: string;
}

export interface InoreaderItem {
  crawlTimeMsec: string;
  canonical: InoreaderCanonical[];
  annotations: any[];
  alternate: InoreaderAlternate[];
  author: string;
  comments: any[];
  categories: string[];
  commentsNum: number;
  published: number;
  likingUsers: any[];
  id: string;
  origin: InoreaderItemOrigin;
  timestampUsec: string;
  summary: InoreaderSummary;
  title: string;
  updated: number;
}

export interface InoreaderStreamResponse {
  id: string;
  description: string;
  continuation: string;
  direction: string;
  self: InoreaderCanonical;
  updated: number;
  items: InoreaderItem[];
  title: string;
  updatedUsec: string;
}

export type InoreaderSubscriptionsResponse = {
  subscriptions: InoreaderSubscription[];
};

export type InoreaderSubscription = {
  id: string;
  feedType: string;
  title: string;
  categories: any[];
  sortid: string;
  firstitemsec: number;
  url: string;
  htmlUrl: string;
  iconUrl: string;
};
