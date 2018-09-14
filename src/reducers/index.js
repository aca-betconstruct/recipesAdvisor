import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import { reducer as reduxFormReducer } from 'redux-form';
import curPage from './pagination';
import { preferences, isPreferencesFetching } from './preferences';
import filter from './filter';
import detail from './detail';
import comments from './comment';
import assignResults from './calories';

import { user, users, jwt, errorlogin } from './authenticated';

import { favourites, isFavouriteRecipesFetching } from './favourites';
import signUpError from './signUp';

export default combineReducers({
  signUpError,
  comments,
  recipes,
  errorlogin,
  isRecipesFetching,
  allFetchFavourites: favourites,
  isFavouriteRecipesFetching,
  curPage,
  preferences,
  user,
  users,
  detail,
  form: reduxFormReducer,
  filter,
  isPreferencesFetching,
  jwt,
  assignResults
});
