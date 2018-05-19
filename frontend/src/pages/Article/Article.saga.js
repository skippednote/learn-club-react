import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { getArticleSuccess, getArticleFailure } from './Article.actions';
const articlesListURL = id =>
  `http://lcr.lndo.site/jsonapi/node/article/${id}?_format=json&fields[node--article]=title,body`;

export function* getArticle(action) {
  console.log('called');
  try {
    const {
      data: { data: articles }
    } = yield axios.get(articlesListURL(action.id));
    yield put(getArticleSuccess(articles));
  } catch (error) {
    yield put(getArticleFailure(error));
  }
}

export default function* saga() {
  yield takeEvery('GET_ARTICLE', getArticle);
}
