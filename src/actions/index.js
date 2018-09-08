import { getRecipes } from './recipes';
import {
  deletePreference,
  getPreferences,
  fetchPreferences
} from './preferences';
import {
  getFetchFavourites,
  deleteFetchFavourites,
  fetchFavourites,
  checkFavourite
} from './favourites';
import { addHealthLabel, addDietLabel, removeLabel } from './filter';
import { firstPage, nextPage } from './pagination';
import { logoutUser, fetchAuthenticated } from './authenticated';
import { fetchSignup } from './signup';
import { fetchLogin } from './login';
import { changeCalories } from './calories';

export {
  getRecipes,
  checkFavourite,
  firstPage,
  nextPage,
  addHealthLabel,
  addDietLabel,
  removeLabel,
  deletePreference,
  getPreferences,
  fetchPreferences,
  getFetchFavourites,
  deleteFetchFavourites,
  fetchFavourites,
  logoutUser,
  fetchSignup,
  fetchLogin,
  fetchAuthenticated,
  changeCalories
};
