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
import { logoutUser, getAuthenticated } from './authenticated';
import { postSignUp } from './signup';
import { postLogin } from './login';
import {getDetail} from './detail'

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
  postSignUp,
  postLogin,
  getAuthenticated,
  getDetail
};
