import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import normalize from 'json-api-normalizer';
import { getArticleSuccess, getArticleFailure } from './Article.actions';
const articlesListURL = id =>
  `http://lcr.lndo.site/jsonapi/node/article/${id}?_format=json&fields%5Bnode--article%5D=title,body,field_tags,field_image&include=field_tags,field_image&fields%5Btaxonomy_term--tags%5D=name&fields%5Bfile--file%5D=uri`;

export function* getArticle(action) {
  try {
    const { data: article } = yield axios.get(articlesListURL(action.id));
    const normalizedArticle = normalize(article);
    yield put(getArticleSuccess(normalizedArticle));
  } catch (error) {
    yield put(getArticleFailure(error));
  }
}

export default function* saga() {
  yield takeEvery('GET_ARTICLE', getArticle);
}
