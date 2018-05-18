// @flow
export type Person = {
  id: number,
  name: string,
  role: string
};

export type State = {
  people: Array<Person>,
  error: string | null,
  loading: boolean
};

export type Props = {
  people: Array<Person>,
  error: string | null,
  loading: boolean,
  dispatch: any
};

export type GetPeopleAction = {
  type: 'GET_PEOPLE',
  loading: boolean
};

export type GetPeopleSuccessAction = {
  type: 'GET_PEOPLE_SUCCESS',
  loading: boolean,
  people: Array<Person>
};

export type GetPeopleFailureAction = {
  type: 'GET_PEOPLE_FAILURE',
  loading: boolean,
  error: string
};

export type Action =
  | GetPeopleAction
  | GetPeopleSuccessAction
  | GetPeopleFailureAction;

export type Dispatch = (action: Action) => void;
