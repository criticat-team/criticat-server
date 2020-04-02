import { gql } from 'apollo-server';

export default gql`
  type LiveStream {
    id: ID
    gameId: String
    language: String
    startedAt: String
    thumbnailUrl: String
    title: String
    type: String
    userId: String
    userName: String
    viewerCount: Int
    tagIds: [String]
  }

  type LiveStreams {
    items: [LiveStream]
    continuation: String
  }
`;
