import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import PeopleReducer from '../pages/People/people.reducer';

export default combineReducers({
  PeopleReducer,
  router: routerReducer
});
