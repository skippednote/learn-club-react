import { all } from 'redux-saga/effects';
import PeopleSaga from '../pages/People/people.saga';

export default function* rootSaga() {
  yield all([PeopleSaga()]);
}
