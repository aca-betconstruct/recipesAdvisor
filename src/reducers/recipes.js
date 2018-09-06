import {
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS,
  RECIPES_FETCHING,
  FIRST_PAGE,
  LOGOUT_USER,
  CHECK_FAVOURITE
} from '../constants';

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
    case LOGOUT_USER:
      return initialStateIsRecipesFetching;
    default:
      return state;
  }
};

const initialStateForRecipes = [];
export const recipes = (state = initialStateForRecipes, action) => {
  switch (action.type) {
    case RECIPES_FETCHING_SUCCESS:
      const recipe = action.payload.recipe,
        favouritesId = action.payload.favs;
      const hits = recipe.hits.map(item => {
        if (favouritesId.some(id => id === item.recipe.uri.slice(45))) {
          return {
            ...item,
            recipe: {
              ...item.recipe,
              isFavourite: true
            }
          };
        }
        return {
          ...item,
          recipe: {
            ...item.recipe,
            isFavourite: false
          }
        };
      });
      return [
        ...state,
        {
          ...recipe,
          hits
        }
      ];
    case RECIPES_FETCHING_FAILURE:
      return [...state];
    case FIRST_PAGE:
      return initialStateForRecipes;
    case LOGOUT_USER:
      return initialStateForRecipes;
    case CHECK_FAVOURITE:
      return state.map(item => ({
        ...item,
        hits: item.hits.map(recipe => {
          if (recipe.recipe.uri === action.payload.id) {
            return {
              ...recipe,
              recipe: {
                ...recipe.recipe,
                isFavourite: !recipe.recipe.isFavourite
              }
            };
          } else {
            return {
              ...recipe
            };
          }
        })
      }));
    default:
      return state;
  }
};
