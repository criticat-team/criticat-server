export type TwitchPagination = {
  cursor: string;
};

export type TwitchStreamType = 'live' | '';

export type TwitchStream = {
  game_id: string;
  id: string;
  language: string;
  user_name: string;
  title: string;
  type: TwitchStreamType;
  user_id: string;
  viewer_count: number;
  started_at: string;
  thumbnail_url: string;
  tag_ids: string[];
};

export type TwitchGetStreamsResponse = {
  data: TwitchStream[];
  pagination: TwitchPagination;
};

export type TwitchGetStreamsQueryParameters = {
  after?: string;
  before?: string;
  first?: number;
  game_id?: string;
  language?: string;
  user_id?: string;
  user_login?: string;
};
