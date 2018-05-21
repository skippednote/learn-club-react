// @flow
import type {
  Article,
  GetArticleAction,
  GetArticleSuccessAction,
  GetArticleFailureAction
} from './Article.types';

export function getArticleRequest(id: string): GetArticleAction {
  return {
    type: 'GET_ARTICLE',
    loading: true,
    id
  };
}

export function getArticleSuccess(article: Article): GetArticleSuccessAction {
  return {
    type: 'GET_ARTICLE_SUCCESS',
    loading: false,
    article
  };
}

export function getArticleFailure(error: string): GetArticleFailureAction {
  return {
    type: 'GET_ARTICLE_FAILURE',
    loading: false,
    error
  };
}
