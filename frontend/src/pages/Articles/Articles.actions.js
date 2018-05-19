// @flow
import type {
  Article,
  GetArticlesAction,
  GetArticlesSuccessAction,
  GetArticlesFailureAction
} from './Articles.types';

export function getArticlesRequest(): GetArticlesAction {
  return {
    type: 'GET_ARTICLES',
    loading: true
  };
}

export function getArticlesSuccess(
  articles: Article
): GetArticlesSuccessAction {
  return {
    type: 'GET_ARTICLES_SUCCESS',
    loading: false,
    articles
  };
}

export function getArticlesFailure(error: string): GetArticlesFailureAction {
  return {
    type: 'GET_ARTICLES_FAILURE',
    loading: false,
    error
  };
}
