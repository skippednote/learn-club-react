import type {
  GetPeopleAction,
  GetPeopleSuccessAction,
  GetPeopleFailureAction
} from 'people.types';

export function getPeople(): GetPeopleAction {
  return {
    type: 'GET_PEOPLE',
    loading: true
  };
}

export function getPeopleSuccess(
  people: Array<Person>
): GetPeopleSuccessAction {
  return {
    type: 'GET_PEOPLE_SUCCESS',
    loading: false,
    people
  };
}

export function getPeopleFailure(error: string): GetPeopleFailureAction {
  return {
    type: 'GET_PEOPLE_FAILURE',
    loading: false,
    error
  };
}
