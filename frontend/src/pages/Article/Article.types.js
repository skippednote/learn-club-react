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

type fileFile = {
  [key: string]: {
    id: string,
    type: string,
    attributes: {
      uri: {
        url: string
      }
    }
  }
};

type taxonomyTermTags = {
  [key: string]: {
    id: string,
    type: string,
    attributes: {
      name: string
    }
  }
};

export type Article = {
  nodeArticle: nodeArticle,
  fileFile?: fileFile,
  taxonomyTermTags?: taxonomyTermTags
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
