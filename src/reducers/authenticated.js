import { RECEIVE_AUTHENTICATED, LOGOUT_USER, RECEIVE_LOGIN } from '../constants';

export const auth = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_AUTHENTICATED: {


      return action.payload;
    }
    case LOGOUT_USER: {
      return null;
    }
    default: {
      return state;
    }
  }
};
export const jwt = (state = '', action) => {
    switch (action.type) {
        case RECEIVE_LOGIN: {
          return action.payload;
        }
        case LOGOUT_USER: {
            return '';
        }
        default: {
            return state;
        }
    }
};
