import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
   __typename?: 'Article';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  origin?: Maybe<ArticleOrigin>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  summary?: Maybe<ArticleSummary>;
  canonical?: Maybe<Array<Maybe<ArticleCanonical>>>;
  alternate?: Maybe<Array<Maybe<ArticleAlternate>>>;
};

export type ArticleAlternate = {
   __typename?: 'ArticleAlternate';
  href?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ArticleCanonical = {
   __typename?: 'ArticleCanonical';
  href?: Maybe<Scalars['String']>;
};

export type ArticleOrigin = {
   __typename?: 'ArticleOrigin';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<ArticleOriginCategory>>>;
  url?: Maybe<Scalars['String']>;
  htmlUrl?: Maybe<Scalars['String']>;
  iconUrl?: Maybe<Scalars['String']>;
};

export type ArticleOriginCategory = {
   __typename?: 'ArticleOriginCategory';
  id?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type ArticlesStream = {
   __typename?: 'ArticlesStream';
  items?: Maybe<Array<Maybe<Article>>>;
  continuation?: Maybe<Scalars['String']>;
};

export type ArticleSummary = {
   __typename?: 'ArticleSummary';
  direction?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type Book = {
   __typename?: 'Book';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type LiveStream = {
   __typename?: 'LiveStream';
  id?: Maybe<Scalars['ID']>;
  gameId?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
  viewerCount?: Maybe<Scalars['Int']>;
  tagIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type LiveStreams = {
   __typename?: 'LiveStreams';
  items?: Maybe<Array<Maybe<LiveStream>>>;
  continuation?: Maybe<Scalars['String']>;
};

export type Movie = {
   __typename?: 'Movie';
  id?: Maybe<Scalars['ID']>;
  adult?: Maybe<Scalars['Boolean']>;
  backdropPath?: Maybe<Scalars['String']>;
  belongsToCollection?: Maybe<MovieCollection>;
  budget?: Maybe<Scalars['Int']>;
  genres?: Maybe<Array<Maybe<MovieGenre>>>;
  homepage?: Maybe<Scalars['String']>;
  images?: Maybe<MovieImages>;
  originalLanguage?: Maybe<Scalars['String']>;
  originalTitle?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Float']>;
  posterPath?: Maybe<Scalars['String']>;
  productionCompanies?: Maybe<Array<Maybe<MovieProductionCompany>>>;
  productionCountries?: Maybe<Array<Maybe<MovieProductionCountry>>>;
  releaseDate?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Int']>;
  spokenLanguages?: Maybe<Array<Maybe<MovieSpokenLanguage>>>;
  status?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['Boolean']>;
  ratings?: Maybe<MovieRatings>;
};

export type MovieCollection = {
   __typename?: 'MovieCollection';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  posterPath?: Maybe<Scalars['String']>;
  backdropPath?: Maybe<Scalars['String']>;
};

export type MovieGenre = {
   __typename?: 'MovieGenre';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type MovieImage = {
   __typename?: 'MovieImage';
  filePath?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  iso_639_1?: Maybe<Scalars['String']>;
  voteCount?: Maybe<Scalars['Int']>;
  voteAverage?: Maybe<Scalars['Float']>;
};

export type MovieImages = {
   __typename?: 'MovieImages';
  backdrops?: Maybe<Array<Maybe<MovieImage>>>;
  posters?: Maybe<Array<Maybe<MovieImage>>>;
};

export type MovieProductionCompany = {
   __typename?: 'MovieProductionCompany';
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  logoPath?: Maybe<Scalars['String']>;
  originCountry?: Maybe<Scalars['String']>;
};

export type MovieProductionCountry = {
   __typename?: 'MovieProductionCountry';
  iso_3166_1?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type MovieRatings = {
   __typename?: 'MovieRatings';
  tmdb?: Maybe<Scalars['String']>;
  imdb?: Maybe<Scalars['String']>;
  rottenTomatoes?: Maybe<Scalars['String']>;
  metacritic?: Maybe<Scalars['String']>;
};

export type MovieSpokenLanguage = {
   __typename?: 'MovieSpokenLanguage';
  iso_639_1?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  articles?: Maybe<ArticlesStream>;
  movie?: Maybe<Movie>;
  liveStreams?: Maybe<LiveStreams>;
};


export type QueryArticlesArgs = {
  category: Scalars['String'];
  itemsPerPage?: Maybe<Scalars['Int']>;
  continuation?: Maybe<Scalars['String']>;
};


export type QueryMovieArgs = {
  id: Scalars['ID'];
};


export type QueryLiveStreamsArgs = {
  itemsPerPage?: Maybe<Scalars['Int']>;
  continuation?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  Book: ResolverTypeWrapper<Book>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  ArticlesStream: ResolverTypeWrapper<ArticlesStream>,
  Article: ResolverTypeWrapper<Article>,
  ArticleOrigin: ResolverTypeWrapper<ArticleOrigin>,
  ArticleOriginCategory: ResolverTypeWrapper<ArticleOriginCategory>,
  ArticleSummary: ResolverTypeWrapper<ArticleSummary>,
  ArticleCanonical: ResolverTypeWrapper<ArticleCanonical>,
  ArticleAlternate: ResolverTypeWrapper<ArticleAlternate>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Movie: ResolverTypeWrapper<Movie>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  MovieCollection: ResolverTypeWrapper<MovieCollection>,
  MovieGenre: ResolverTypeWrapper<MovieGenre>,
  MovieImages: ResolverTypeWrapper<MovieImages>,
  MovieImage: ResolverTypeWrapper<MovieImage>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  MovieProductionCompany: ResolverTypeWrapper<MovieProductionCompany>,
  MovieProductionCountry: ResolverTypeWrapper<MovieProductionCountry>,
  MovieSpokenLanguage: ResolverTypeWrapper<MovieSpokenLanguage>,
  MovieRatings: ResolverTypeWrapper<MovieRatings>,
  LiveStreams: ResolverTypeWrapper<LiveStreams>,
  LiveStream: ResolverTypeWrapper<LiveStream>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  Book: Book,
  String: Scalars['String'],
  Int: Scalars['Int'],
  ArticlesStream: ArticlesStream,
  Article: Article,
  ArticleOrigin: ArticleOrigin,
  ArticleOriginCategory: ArticleOriginCategory,
  ArticleSummary: ArticleSummary,
  ArticleCanonical: ArticleCanonical,
  ArticleAlternate: ArticleAlternate,
  ID: Scalars['ID'],
  Movie: Movie,
  Boolean: Scalars['Boolean'],
  MovieCollection: MovieCollection,
  MovieGenre: MovieGenre,
  MovieImages: MovieImages,
  MovieImage: MovieImage,
  Float: Scalars['Float'],
  MovieProductionCompany: MovieProductionCompany,
  MovieProductionCountry: MovieProductionCountry,
  MovieSpokenLanguage: MovieSpokenLanguage,
  MovieRatings: MovieRatings,
  LiveStreams: LiveStreams,
  LiveStream: LiveStream,
};

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  published?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  origin?: Resolver<Maybe<ResolversTypes['ArticleOrigin']>, ParentType, ContextType>,
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  summary?: Resolver<Maybe<ResolversTypes['ArticleSummary']>, ParentType, ContextType>,
  canonical?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArticleCanonical']>>>, ParentType, ContextType>,
  alternate?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArticleAlternate']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ArticleAlternateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleAlternate'] = ResolversParentTypes['ArticleAlternate']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ArticleCanonicalResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleCanonical'] = ResolversParentTypes['ArticleCanonical']> = {
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ArticleOriginResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleOrigin'] = ResolversParentTypes['ArticleOrigin']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArticleOriginCategory']>>>, ParentType, ContextType>,
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  htmlUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  iconUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ArticleOriginCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleOriginCategory'] = ResolversParentTypes['ArticleOriginCategory']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ArticlesStreamResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticlesStream'] = ResolversParentTypes['ArticlesStream']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['Article']>>>, ParentType, ContextType>,
  continuation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ArticleSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleSummary'] = ResolversParentTypes['ArticleSummary']> = {
  direction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LiveStreamResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveStream'] = ResolversParentTypes['LiveStream']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  gameId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  startedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  thumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  userName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  viewerCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  tagIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type LiveStreamsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveStreams'] = ResolversParentTypes['LiveStreams']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['LiveStream']>>>, ParentType, ContextType>,
  continuation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  adult?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  backdropPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  belongsToCollection?: Resolver<Maybe<ResolversTypes['MovieCollection']>, ParentType, ContextType>,
  budget?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['MovieGenre']>>>, ParentType, ContextType>,
  homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  images?: Resolver<Maybe<ResolversTypes['MovieImages']>, ParentType, ContextType>,
  originalLanguage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  originalTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  posterPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  productionCompanies?: Resolver<Maybe<Array<Maybe<ResolversTypes['MovieProductionCompany']>>>, ParentType, ContextType>,
  productionCountries?: Resolver<Maybe<Array<Maybe<ResolversTypes['MovieProductionCountry']>>>, ParentType, ContextType>,
  releaseDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  revenue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  spokenLanguages?: Resolver<Maybe<Array<Maybe<ResolversTypes['MovieSpokenLanguage']>>>, ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  video?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  ratings?: Resolver<Maybe<ResolversTypes['MovieRatings']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MovieCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieCollection'] = ResolversParentTypes['MovieCollection']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  posterPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  backdropPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MovieGenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieGenre'] = ResolversParentTypes['MovieGenre']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MovieImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieImage'] = ResolversParentTypes['MovieImage']> = {
  filePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  aspectRatio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  iso_639_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  voteCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  voteAverage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MovieImagesResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieImages'] = ResolversParentTypes['MovieImages']> = {
  backdrops?: Resolver<Maybe<Array<Maybe<ResolversTypes['MovieImage']>>>, ParentType, ContextType>,
  posters?: Resolver<Maybe<Array<Maybe<ResolversTypes['MovieImage']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MovieProductionCompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieProductionCompany'] = ResolversParentTypes['MovieProductionCompany']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  logoPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  originCountry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MovieProductionCountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieProductionCountry'] = ResolversParentTypes['MovieProductionCountry']> = {
  iso_3166_1?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MovieRatingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieRatings'] = ResolversParentTypes['MovieRatings']> = {
  tmdb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  imdb?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rottenTomatoes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  metacritic?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MovieSpokenLanguageResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieSpokenLanguage'] = ResolversParentTypes['MovieSpokenLanguage']> = {
  iso_639_1?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>,
  articles?: Resolver<Maybe<ResolversTypes['ArticlesStream']>, ParentType, ContextType, RequireFields<QueryArticlesArgs, 'category'>>,
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'id'>>,
  liveStreams?: Resolver<Maybe<ResolversTypes['LiveStreams']>, ParentType, ContextType, RequireFields<QueryLiveStreamsArgs, never>>,
};

export type Resolvers<ContextType = any> = {
  Article?: ArticleResolvers<ContextType>,
  ArticleAlternate?: ArticleAlternateResolvers<ContextType>,
  ArticleCanonical?: ArticleCanonicalResolvers<ContextType>,
  ArticleOrigin?: ArticleOriginResolvers<ContextType>,
  ArticleOriginCategory?: ArticleOriginCategoryResolvers<ContextType>,
  ArticlesStream?: ArticlesStreamResolvers<ContextType>,
  ArticleSummary?: ArticleSummaryResolvers<ContextType>,
  Book?: BookResolvers<ContextType>,
  LiveStream?: LiveStreamResolvers<ContextType>,
  LiveStreams?: LiveStreamsResolvers<ContextType>,
  Movie?: MovieResolvers<ContextType>,
  MovieCollection?: MovieCollectionResolvers<ContextType>,
  MovieGenre?: MovieGenreResolvers<ContextType>,
  MovieImage?: MovieImageResolvers<ContextType>,
  MovieImages?: MovieImagesResolvers<ContextType>,
  MovieProductionCompany?: MovieProductionCompanyResolvers<ContextType>,
  MovieProductionCountry?: MovieProductionCountryResolvers<ContextType>,
  MovieRatings?: MovieRatingsResolvers<ContextType>,
  MovieSpokenLanguage?: MovieSpokenLanguageResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
