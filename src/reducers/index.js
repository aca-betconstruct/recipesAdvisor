import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import { reducer as reduxFormReducer } from 'redux-form';
import curPage from './pagination';
import { preferences, isPreferencesFetching } from './preferences';
import filter from './filter';

import { user, jwt } from './authenticated';

import {
  allFetchFavourites,
  isFavouriteRecipesFetching
} from './favourites';

export default combineReducers({
  recipes,
  isRecipesFetching,
  allFetchFavourites,
  isFavouriteRecipesFetching,
  curPage,
  preferences,
  user,
  form: reduxFormReducer,
  filter,
  isPreferencesFetching,
  jwt
});
