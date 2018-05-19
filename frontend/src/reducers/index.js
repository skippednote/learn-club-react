import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import people from '../pages/People/People.reducer';
import articles from '../pages/Articles/Articles.reducer';
import article from '../pages/Article/Article.reducer';

export default combineReducers({
  people,
  article,
  articles,
  router
});
