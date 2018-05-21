import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { getPeopleSuccess, getPeopleFailure } from './People.actions';

export function* getPeople(action) {
  try {
    const { data: people } = yield axios.get('/people.json');
    yield put(getPeopleSuccess(people));
  } catch (error) {
    yield put(getPeopleFailure(error));
  }
}

export default function* saga() {
  yield takeEvery('GET_PEOPLE', getPeople);
}
