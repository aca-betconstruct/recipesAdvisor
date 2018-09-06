import {
    ADD_PREFERENCE,
    REMOVE_PREFERENCE,
    RECEIVE_ALL_PREFERENCES,
    REQUEST_PREFERENCES, LOGOUT_USER
} from '../constants';
export const isPreferencesFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_PREFERENCES:
      return true;
    case RECEIVE_ALL_PREFERENCES:
      return false;
    default:
      return false;
  }
};
const initialPreferences=[];
export const preferences = (state = initialPreferences, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PREFERENCES: {
      return action.payload;
    }
    case ADD_PREFERENCE:
      state.push({ ...action.payload });
      return [...state];
    case REMOVE_PREFERENCE:
      return state.filter(v => v.id !== action.payload.id);
      case LOGOUT_USER:
        return initialPreferences;
    default:
      return state;
  }
};
