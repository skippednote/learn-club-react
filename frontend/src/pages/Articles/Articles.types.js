// @flow
type nodeArticle = {
  [key: string]: {
    id: string,
    type: string,
    attributes: {
      title: string,
      body: {
        value: string,
        format: string,
        processed: string,
        summary: string
      }
    },
    relationships: {
      fieldImage: {
        data: {
          id: string,
          type: string
        }
      },
      fieldTags: {
        data: Array<{
          id: string,
          type: string
        }>
      }
    }
  }
};

export type Articles = {
  nodeArticle: nodeArticle
};

export type State = {
  articles: Articles | null,
  error: string | null,
  loading: boolean
};

export type Props = {
  articles: Articles | null,
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
  articles: Articles
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
