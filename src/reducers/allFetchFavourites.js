import {
  RECEIVE_ALL_FAVORITES,
  REQUEST_FAVORITES,
  CHECK_FAVOURITE,
  DELETE_FAVOURITE
} from '../constants';

export const isFavouriteRecipesFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_FAVORITES:
      return true;
    case RECEIVE_ALL_FAVORITES:
      return false;
    default:
      return false;
  }
};

export const allFetchFavourites = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_FAVORITES: {
      return action.payload;
    }
    case CHECK_FAVOURITE:
      return state.map(item => {
        if (item.recepte.uri === action.payload.id) {
          return {
            ...item,
            recepte: {
              ...item.recepte,
              isFavourite: !item.recepte.isFavourite
            }
          };
        } else return item;
      });
    case DELETE_FAVOURITE:
      return state.filter(item => item.favoriteId !== action.payload.id);
    default: {
      return state;
    }
  }
};
