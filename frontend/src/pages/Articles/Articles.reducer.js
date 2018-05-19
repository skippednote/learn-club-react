// @flow
import type { State, Action } from './Articles.types';

const ArticlesReducer = (
  state: State = { articles: [], error: null, loading: false },
  action: Action
): State => {
  switch (action.type) {
    case 'GET_ARTICLES':
      return {
        ...state,
        loading: action.loading
      };
    case 'GET_ARTICLES_SUCCESS':
      return {
        ...state,
        loading: action.loading,
        articles: action.articles
      };
    case 'GET_ARTICLES_FAILURE':
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
    default:
      return state;
  }
};

export default ArticlesReducer;
