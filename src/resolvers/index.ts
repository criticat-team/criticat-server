import merge from 'lodash/merge';
import { Context } from '@/index.d';
import articles from './articles';
import books from './books';
import livestreams from './livestreams';
import movies from './movies';
import { IResolvers } from 'apollo-server';

const resolvers: IResolvers<Context> = {};

export default merge(resolvers, articles, livestreams, movies, books);
