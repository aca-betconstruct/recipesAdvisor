import { getRecipes, updateRecipes } from './recipes';
import {
  deletePreference,
  getPreferences,
  postPreference
} from './preferences';
import {
  getFavourites,
  deleteFetchFavourites,
  postFavourite,
  checkFavourite
} from './favourites';
import { addHealthLabel, addDietLabel, removeLabel } from './filter';
import { firstPage, nextPage } from './pagination';
import { changeCalories } from './calories';
import { logoutUser, getAuthenticated, getMe } from './authenticated';
import { postSignUp } from './signup';
import { postLogin } from './login';
import { getDetail } from './detail';
import { postComment, getComments, deleteComment } from './comment';
import { getRecipesForNotification } from './notification';

export {
  getRecipes,
  updateRecipes,
  checkFavourite,
  firstPage,
  nextPage,
  addHealthLabel,
  addDietLabel,
  removeLabel,
  deletePreference,
  getPreferences,
  postPreference,
  getFavourites,
  deleteFetchFavourites,
  postFavourite,
  logoutUser,
  changeCalories,
  postSignUp,
  postLogin,
  deleteComment,
  getAuthenticated,
  getDetail,
  postComment,
  getComments,
  getRecipesForNotification,
  getMe
};
