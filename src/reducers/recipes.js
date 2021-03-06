import {
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS,
  RECIPES_UPDATE_SUCCESS,
  RECIPES_UPDATE_FAILURE,
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
    case RECIPES_FETCHING_SUCCESS || RECIPES_UPDATE_SUCCESS:
      return false;
    case RECIPES_FETCHING_FAILURE || RECIPES_UPDATE_FAILURE:
      return false;
    case LOGOUT_USER:
      return initialStateIsRecipesFetching;
    default:
      return state;
  }
};

const initialStateForRecipes = [];
export const recipes = (state = initialStateForRecipes, action) => {
  let recipe = [],
    favouritesId = [],
    hits = [];
  switch (action.type) {
    case RECIPES_FETCHING_SUCCESS:
      recipe = action.payload.recipe;
      favouritesId = action.payload.favs;
      recipe.forEach(rec => {
        if (rec.hits.length) {
          hits.push({
            ...rec,
            hits: rec.hits.map(item => {
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
            })
          });
        }
      });
      return [...hits];
    case RECIPES_FETCHING_FAILURE:
      return [...state];
    case RECIPES_UPDATE_SUCCESS:
      recipe = action.payload.recipe;
      favouritesId = action.payload.favs;
      hits = recipe.hits.map(item => {
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
    case RECIPES_UPDATE_FAILURE:
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
