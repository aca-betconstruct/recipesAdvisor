import {
  NOTIFICATION_FETCHING_SUCCESS,
  NOTIFICATION_FETCHING_FAILURE,
  NOTIFICATION_FETCHING
} from '../constants';
export const isNotificationFetching = (state = false, action) => {
  switch (action.type) {
    case NOTIFICATION_FETCHING:
      return true;
    case NOTIFICATION_FETCHING_FAILURE:
      return false;
    case NOTIFICATION_FETCHING_SUCCESS:
      return false;
    default:
      return state;
  }
};
export const notification = (state={}, action) => {
  switch (action.type) {
    case NOTIFICATION_FETCHING:
      return {};
    case NOTIFICATION_FETCHING_FAILURE:
      return {};
    case NOTIFICATION_FETCHING_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
