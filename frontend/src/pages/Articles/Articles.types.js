// @flow
export type Article = {
  data: Array<{
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
  }>,
  relationships: {
    field_image: {
      data?: {
        id: string,
        meta: {
          alt: string
        }
      }
    },
    field_tags: {
      data?: Array<{
        type: string,
        id: string
      }>
    }
  },
  included: Array<{
    type: string,
    id: string,
    attributes: {
      name?: string,
      uri?: {
        url: string
      }
    }
  }>
};

export type State = {
  articles: Article | null,
  error: string | null,
  loading: boolean
};

export type Props = {
  articles: Article | null,
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
  articles: Article
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
