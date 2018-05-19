import { all } from 'redux-saga/effects';
import PeopleSaga from '../pages/People/People.saga';
import ArticlesSaga from '../pages/Articles/Articles.saga';
import ArticleSaga from '../pages/Article/Article.saga';

export default function* rootSaga() {
  yield all([PeopleSaga(), ArticlesSaga(), ArticleSaga()]);
}
