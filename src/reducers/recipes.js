import {
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS,
  RECIPES_FETCHING,
  FAVOURITE_RECIPE
} from '../constants';
import { checkFavourite } from './favourites';

const initialStateIsRecipesFetching = false;
export const isRecipesFetching = (
  state = initialStateIsRecipesFetching,
  action
) => {
  switch (action.type) {
    case RECIPES_FETCHING:
      return true;
    case RECIPES_FETCHING_SUCCESS:
      return false;
    case RECIPES_FETCHING_FAILURE:
      return false;
    default:
      return state;
  }
};

const initialStateForRecipes = [];
export const recipes = (state = initialStateForRecipes, action) => {
  switch (action.type) {
    case RECIPES_FETCHING_SUCCESS:
      return action.payload.map(item => ({
        ...item,
        hits: item.hits.map(recipe => ({
          ...recipe,
          recipe: {
            ...recipe.recipe,
            isFavourite: false
          }
        }))
      }));
    case RECIPES_FETCHING_FAILURE:
      return initialStateForRecipes;
    case FAVOURITE_RECIPE:
      return checkFavourite(state, action);
    default:
      return state;
  }
};
