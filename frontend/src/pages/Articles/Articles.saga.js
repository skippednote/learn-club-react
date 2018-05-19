import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { getArticlesSuccess, getArticlesFailure } from './Articles.actions';
const articlesListURL = `http://lcr.lndo.site/jsonapi/node/article?_format=json&fields[node--article]=title,body`;

export function* getArticles(action) {
  try {
    const { data: articles } = yield axios.get(articlesListURL);
    yield put(getArticlesSuccess(articles));
  } catch (error) {
    yield put(getArticlesFailure(error));
  }
}

export default function* saga() {
  yield takeEvery('GET_ARTICLES', getArticles);
}
