// @flow
import type { State, Action } from './Article.types';

const ArticleReducer = (
  state: State = { article: null, error: null, loading: false },
  action: Action
): State => {
  switch (action.type) {
    case 'GET_ARTICLE':
      return {
        ...state,
        loading: action.loading
      };
    case 'GET_ARTICLE_SUCCESS':
      return {
        ...state,
        loading: action.loading,
        article: action.article
      };
    case 'GET_ARTICLE_FAILURE':
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
    default:
      return state;
  }
};

export default ArticleReducer;
