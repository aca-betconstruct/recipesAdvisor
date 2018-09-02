import { getRecipes } from './recipes';
import {
  deletePreference,
  getPreferences,
  fetchPreferences
} from './preferences';
import {
  getFetchFavourites,
  deleteFetchFavourites,
  fetchFavourites
} from './favourites';
import { addHealthLabel, addDietLabel, removeLabel } from './filter';
import { firstPage, nextPage } from './pagination';

export {
  getRecipes,
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
  fetchFavourites
};
