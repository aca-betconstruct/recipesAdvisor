import {
  LOGOUT_USER,
  RECEIVE_ALL_FAVOURITES,
  REQUEST_FAVOURITES,
  CHECK_FAVOURITE,
  DELETE_FAVOURITE
} from '../constants';

export const isFavouriteRecipesFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_FAVOURITES:
      return true;
    case RECEIVE_ALL_FAVOURITES:
      return false;
    default:
      return false;
  }
};

export const favourites = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_FAVOURITES: {
      return action.payload;
    }
    case LOGOUT_USER: {
      return [];
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
