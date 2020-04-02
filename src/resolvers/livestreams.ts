import { Resolvers, LiveStream, LiveStreams } from '@/generated/graphql';
import { Context } from '@/index.d';
import { TwitchStream } from '@/data-sources/twitch/index.d';

interface ReducedTwitchLiveItem extends LiveStream {
  $twitchStream?: TwitchStream;
}

const reduceInoreaderItem = (twitchStream: TwitchStream): ReducedTwitchLiveItem => ({
  id: twitchStream.id,
  gameId: twitchStream.game_id,
  language: twitchStream.language,
  startedAt: twitchStream.started_at,
  thumbnailUrl: twitchStream.thumbnail_url,
  title: twitchStream.title,
  type: twitchStream.type,
  userId: twitchStream.user_id,
  userName: twitchStream.user_name,
  viewerCount: twitchStream.viewer_count,
  tagIds: twitchStream.tag_ids,
  $twitchStream: twitchStream,
});

const resolvers: Resolvers<Context> = {
  Query: {
    liveStreams: async (
      _root,
      { itemsPerPage, continuation },
      { dataSources },
    ): Promise<LiveStreams> => {
      const livestreams = await dataSources.twitchAPI.getStreams(itemsPerPage, continuation);
      return {
        items: livestreams.data.map(reduceInoreaderItem),
        continuation: livestreams.pagination.cursor,
      };
    },
  },
};

export default resolvers;
