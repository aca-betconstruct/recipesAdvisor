import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import { reducer as reduxFormReducer } from 'redux-form';
import curPage from './pagination';
import { preferences, isPreferencesFetching } from './preferences';
import filter from './filter';
import ditael from './ditael';
import comments from './comment';

import auth from './authenticated';

import {
  allFetchFavourites,
  isFavouriteRecipesFetching
} from './allFetchFavourites';

export default combineReducers({
  comments,
  recipes,
  isRecipesFetching,
  allFetchFavourites,
  isFavouriteRecipesFetching,
  curPage,
  preferences,
  ditael,
  auth,
  form: reduxFormReducer,
  filter,
  isPreferencesFetching
});
