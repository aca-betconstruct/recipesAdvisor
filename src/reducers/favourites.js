import {
  LOGOUT_USER,
  RECEIVE_ALL_FAVOURITES,
  REQUEST_FAVOURITES
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

export const allFetchFavourites = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ALL_FAVOURITES: {
      return action.payload;
    }
    case LOGOUT_USER: {
      return [];
    }
    default: {
      return state;
    }
  }
};
