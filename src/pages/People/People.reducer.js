// @flow
import type { State, Action } from './People.types';

const PeopleReducer = (
  state: State = { people: [], error: null, loading: false },
  action: Action
): State => {
  switch (action.type) {
    case 'GET_PEOPLE':
      return {
        ...state,
        loading: action.loading
      };
    case 'GET_PEOPLE_SUCCESS':
      return {
        ...state,
        loading: action.loading,
        people: action.people
      };
    case 'GET_PEOPLE_FAILURE':
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
    default:
      return state;
  }
};

export default PeopleReducer;
