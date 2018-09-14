import { combineReducers } from 'redux';
import { isRecipesFetching, recipes } from './recipes';
import { reducer as reduxFormReducer } from 'redux-form';
import curPage from './pagination';
import { preferences, isPreferencesFetching } from './preferences';
import filter from './filter';
import detail from './detail';
import comments from './comment';
import assignResults from './calories';
import { user, jwt, errorlogin } from './authenticated';
import { favourites, isFavouriteRecipesFetching } from './favourites';
import signUpError from './signUp';
import { isNotificationFetching, notification } from './notification';

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
  detail,
  form: reduxFormReducer,
  filter,
  isPreferencesFetching,
  jwt,
  assignResults,
  notification,
  isNotificationFetching
});
