// @flow
export type Article = {
  data: {
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
  },
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
  article: Article | null,
  error: string | null,
  loading: boolean
};

export type Props = {
  article: Article,
  error: string | null,
  loading: boolean,
  dispatch: any,
  match: {
    params: {
      id: string
    }
  }
};

export type GetArticleAction = {
  type: 'GET_ARTICLE',
  loading: boolean,
  id: string
};

export type GetArticleSuccessAction = {
  type: 'GET_ARTICLE_SUCCESS',
  loading: boolean,
  article: Article
};

export type GetArticleFailureAction = {
  type: 'GET_ARTICLE_FAILURE',
  loading: boolean,
  error: string
};

export type Action =
  | GetArticleAction
  | GetArticleSuccessAction
  | GetArticleFailureAction;

export type Dispatch = (action: Action) => void;
