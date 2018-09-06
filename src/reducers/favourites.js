import { RECEIVE_ALL_FAVORITES, REQUEST_FAVORITES } from '../constants';

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
    default: {
      return state;
    }
  }
};
