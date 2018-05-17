import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import people from '../pages/People/people.reducer';

export default combineReducers({
  people,
  router: routerReducer
});
