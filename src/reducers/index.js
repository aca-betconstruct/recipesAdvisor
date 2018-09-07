import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import { reducer as reduxFormReducer } from 'redux-form';
import curPage from './pagination';
import { preferences, isPreferencesFetching } from './preferences';
import filter from './filter';
import ditael from './detail';
import comments from './comment';

import { user, jwt } from './authenticated';

import { favourites, isFavouriteRecipesFetching } from './favourites';

export default combineReducers({
  comments,
  recipes,
  isRecipesFetching,
  allFetchFavourites: favourites,
  isFavouriteRecipesFetching,
  curPage,
  preferences,
  user,
  ditael,
  form: reduxFormReducer,
  filter,
  isPreferencesFetching,
  jwt
});
