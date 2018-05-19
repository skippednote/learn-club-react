// @flow
export type Article = {
  type: string,
  id: string,
  attributes: {
    title: string,
    body: {
      value: string,
      format: string,
      processed: string,
      summary: string
    }
  }
};

export type State = {
  articles: Array<Article>,
  error: string | null,
  loading: boolean
};

export type Props = {
  articles: Array<Article>,
  error: string | null,
  loading: boolean,
  dispatch: any
};

export type GetArticlesAction = {
  type: 'GET_ARTICLES',
  loading: boolean
};

export type GetArticlesSuccessAction = {
  type: 'GET_ARTICLES_SUCCESS',
  loading: boolean,
  articles: Array<Article>
};

export type GetArticlesFailureAction = {
  type: 'GET_ARTICLES_FAILURE',
  loading: boolean,
  error: string
};

export type Action =
  | GetArticlesAction
  | GetArticlesSuccessAction
  | GetArticlesFailureAction;

export type Dispatch = (action: Action) => void;
